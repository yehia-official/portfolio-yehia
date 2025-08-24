
'use server';

/**
 * @fileOverview An AI flow that acts as a German conversation tutor for A1/A2 level learners.
 * 
 * - germanTutor - A function that takes conversation history and a scenario, and returns the AI's response and a correction.
 * - GermanTutorInput - The input type for the germanTutor function.
 * - GermanTutorOutput - The return type for the germanTutor function.
 * - GermanTutorMessage - A type representing a single message in the conversation history.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { generate } from 'genkit/generate';

// Define the schema for a single message part
const MessagePartSchema = z.object({
  text: z.string(),
  correction: z.string().nullable(),
});

// Define the schema for a single message in the history
const GermanTutorMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  parts: z.array(MessagePartSchema),
});
export type GermanTutorMessage = z.infer<typeof GermanTutorMessageSchema>;

// Define the schema for the flow's input
const GermanTutorInputSchema = z.object({
  scenario: z.string().describe('The context for the role-play conversation.'),
  history: z.array(GermanTutorMessageSchema).describe('The conversation history.'),
});
export type GermanTutorInput = z.infer<typeof GermanTutorInputSchema>;

// Define the schema for the flow's output
const GermanTutorOutputSchema = z.object({
    response: z.string().describe("The AI tutor's response in German."),
    correction: z.string().nullable().describe("A brief, friendly correction or suggestion for the user's last message, in English. Null if no correction is needed."),
});
export type GermanTutorOutput = z.infer<typeof GermanTutorOutputSchema>;

// Exported wrapper function to be called from the client
export async function germanTutor(input: GermanTutorInput): Promise<GermanTutorOutput> {
  return germanTutorFlow(input);
}

// Define the prompt for the AI model
const tutorPrompt = ai.definePrompt({
    name: 'germanTutorPrompt',
    input: { schema: GermanTutorInputSchema },
    output: { schema: GermanTutorOutputSchema },
    system: `
        You are a friendly and encouraging German language tutor. 
        Your student is at an A1/A2 level, so you must use simple vocabulary and sentence structures.
        You are currently in a role-playing scenario.
        
        Your instructions:
        1.  Stay in character based on the provided scenario.
        2.  Your main response must be ONLY in German.
        3.  Keep your German responses brief and natural for a conversation.
        4.  Analyze the user's most recent message. If there are grammatical errors or if there's a more natural way to phrase it, provide a short, helpful correction.
        5.  The correction should be in English, polite, and encouraging. Start with "Good, you could also say:" or "Small tip:".
        6.  If the user's message is perfect, the correction field should be null.
        7.  If the user's message is not in German, gently ask them to please write in German.
        8.  If this is the start of the conversation (history is empty), generate the opening line based on the scenario. Your correction should be null in this case.
    `,
    prompt: `
        Scenario: {{{scenario}}}

        Conversation History:
        {{#each history}}
            {{role}}: {{parts.0.text}}
        {{/each}}
    `,
});


// Define the main Genkit flow
const germanTutorFlow = ai.defineFlow(
  {
    name: 'germanTutorFlow',
    inputSchema: GermanTutorInputSchema,
    outputSchema: GermanTutorOutputSchema,
  },
  async (input) => {
    
    // Call the AI model with the defined prompt
    const llmResponse = await generate({
        model: 'googleai/gemini-1.5-flash-preview',
        prompt: {
            system: tutorPrompt.system,
            messages: input.history,
            template: tutorPrompt.prompt,
            templateArgs: {
                scenario: input.scenario,
                history: input.history,
            }
        },
        output: {
            schema: GermanTutorOutputSchema,
        },
    });

    const output = llmResponse.output();
    if (!output) {
      throw new Error('Failed to get a valid response from the AI model.');
    }

    return output;
  }
);
