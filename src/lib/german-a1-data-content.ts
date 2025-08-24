import type { ReactNode } from "react";
import { getA1ReviewContent } from './german-a1-data';

export interface Lesson {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  aiHint: string;
  explanation: ReactNode;
  tip: string;
  audioSrc?: string;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

export const a1Lessons: Lesson[] = [
  // Lesson 1: Alphabet & Greetings
  {
    title: "Alphabet & Greetings",
    slug: "alphabet-und-begrussungen",
    excerpt: "Learn the German alphabet, including special characters, and master common greetings and farewells for different situations.",
    image: "https://placehold.co/800x450.png",
    aiHint: "german alphabet classroom",
    explanation: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-xl mb-2">Das Alphabet (The Alphabet)</h4>
          <p className="mb-4">
            The German alphabet is very similar to English. However, mastering the subtle differences in pronunciation is key.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Standard Letters:</strong> A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z</li>
              <li><strong>Tricky Pronunciations:</strong>
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li><strong>J</strong> is pronounced like 'Y' in 'yes' (e.g., Ja - Yes).</li>
                      <li><strong>V</strong> is pronounced like 'F' (e.g., Vogel - bird).</li>
                      <li><strong>W</strong> is pronounced like 'V' in 'van' (e.g., Wasser - water).</li>
                      <li><strong>Z</strong> is pronounced like 'ts' in 'cats' (e.g., Zeit - time).</li>
                  </ul>
              </li>
              <li><strong>Special Characters:</strong>
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li><strong>Umlaute (ä, ö, ü):</strong> These represent a change in vowel sound. Ä is like 'e' in 'bed'. Ö and Ü have no direct English equivalent but are crucial to learn.</li>
                      <li><strong>Eszett (ß):</strong> This letter represents a sharp 'ss' sound and typically follows a long vowel (e.g., Straße - street).</li>
                  </ul>
              </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Die Begrüßungen und Abschiede (Greetings and Farewells)</h4>
          <p className="mb-4">
            Choosing the right greeting depends on the time of day and the formality of the situation.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-2 border">Situation</th>
                  <th className="p-2 border">Greeting (German)</th>
                  <th className="p-2 border">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2 border">Informal (any time)</td><td className="p-2 border">Hallo / Hi</td><td className="p-2 border">Hello / Hi</td></tr>
                <tr><td className="p-2 border">Morning (until ~11am)</td><td className="p-2 border">Guten Morgen</td><td className="p-2 border">Good morning</td></tr>
                <tr><td className="p-2 border">Daytime (~11am - 6pm)</td><td className="p-2 border">Guten Tag</td><td className="p-2 border">Good day</td></tr>
                <tr><td className="p-2 border">Evening (from 6pm)</td><td className="p-2 border">Guten Abend</td><td className="p-2 border">Good evening</td></tr>
                <tr><td className="p-2 border">Informal Farewell</td><td className="p-2 border">Tschüss / Ciao</td><td className="p-2 border">Bye</td></tr>
                <tr><td className="p-2 border">Formal Farewell</td><td className="p-2 border">Auf Wiedersehen</td><td className="p-2 border">Goodbye (lit. 'until we see again')</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
    tip: "In Switzerland, you'll often hear 'Grüezi' for hello. In Southern Germany and Austria, 'Servus' is a common, friendly greeting that can mean both hello and goodbye.",
    audioSrc: "/audio/placeholder-audio.mp3",
    quiz: [
      {
        question: "How is the letter 'W' pronounced in German?",
        options: ["Like 'w' in 'wow'", "Like 'v' in 'van'", "Like 'f' in 'fan'", "Like 'y' in 'yes'"],
        correctAnswer: "Like 'v' in 'van'",
      },
      {
        question: "Which greeting is most appropriate at 2 PM?",
        options: ["Guten Morgen", "Guten Abend", "Guten Tag", "Gute Nacht"],
        correctAnswer: "Guten Tag",
      },
      {
        question: "The letter 'ß' (Eszett) is equivalent to:",
        options: ["s", "z", "ss", "b"],
        correctAnswer: "ss",
      },
       {
        question: "What is the formal way to say 'Goodbye'?",
        options: ["Tschüss", "Hallo", "Auf Wiedersehen", "Ciao"],
        correctAnswer: "Auf Wiedersehen",
      },
      {
        question: "Which of these is an 'Umlaut'?",
        options: ["ß", "W", "Ö", "J"],
        correctAnswer: "Ö",
      },
    ],
  },
  // Lesson 2: Introducing Yourself
  {
    title: "Introducing Yourself",
    slug: "sich-vorstellen",
    excerpt: "Learn essential phrases for introductions: asking for names, origins, and place of residence, distinguishing between formal and informal.",
    image: "https://placehold.co/800x450.png",
    aiHint: "people meeting handshake",
    explanation: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-xl mb-2">Formal vs. Informal 'You'</h4>
          <p>German has two ways to say 'you': <strong>du</strong> (informal, for friends, family, children) and <strong>Sie</strong> (formal, for strangers, authority figures, in business). The verb endings change accordingly.</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Asking About Name</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Formal Question: <strong>Wie heißen Sie?</strong> (What is your name?)</li>
            <li>Informal Question: <strong>Wie heißt du?</strong> (What is your name?)</li>
          </ul>
          <h5 className="font-semibold mt-4 mb-2">Possible Answers:</h5>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Ich heiße [Name].</strong> (My name is [Name].)</li>
            <li><strong>Mein Name ist [Name].</strong> (My name is [Name].)</li>
            <li><strong>Ich bin [Name].</strong> (I am [Name].)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Asking About Origin & Residence</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Question (Origin): <strong>Woher kommen Sie / kommst du?</strong> (Where do you come from?)</li>
            <li>Answer: <strong>Ich komme aus [Country/City].</strong> (I come from [Country/City].)
                <p className="text-sm text-muted-foreground ml-6">Example: Ich komme aus Ägypten.</p>
            </li>
            <li className="mt-2">Question (Residence): <strong>Wo wohnen Sie / wohnst du?</strong> (Where do you live?)</li>
            <li>Answer: <strong>Ich wohne in [City].</strong> (I live in [City].)
                <p className="text-sm text-muted-foreground ml-6">Example: Ich wohne in Berlin.</p>
            </li>
          </ul>
        </div>
      </div>
    ),
    tip: "Always capitalize the formal 'Sie' (and its related forms like 'Ihnen' and 'Ihr'). This is how you distinguish it from 'sie' meaning 'she' or 'they'.",
    quiz: [
      {
        question: "How do you informally ask for someone's name?",
        options: ["Wie heißen Sie?", "Wer sind Sie?", "Wie heißt du?", "Was ist Ihr Name?"],
        correctAnswer: "Wie heißt du?",
      },
      {
        question: "A correct response to 'Woher kommen Sie?' is:",
        options: ["Ich wohne in Kairo.", "Ich komme aus der Türkei.", "Ich bin Ingenieur.", "Ich heiße Omar."],
        correctAnswer: "Ich komme aus der Türkei.",
      },
      {
        question: "'Ich wohne in Hamburg' means...",
        options: ["I am from Hamburg.", "I work in Hamburg.", "I am going to Hamburg.", "I live in Hamburg."],
        correctAnswer: "I live in Hamburg.",
      },
      {
        question: "You are speaking to a police officer. Which pronoun should you use?",
        options: ["du", "er", "ihr", "Sie"],
        correctAnswer: "Sie",
      },
      {
        question: "Which of these is a correct sentence?",
        options: ["Ich wohne aus Deutschland.", "Ich komme in Berlin.", "Mein Name ist Julia.", "Du heißen Peter."],
        correctAnswer: "Mein Name ist Julia.",
      },
    ],
  },
  // Lesson 3: Numbers 0-20
  {
    title: "Numbers 0-20 (Zahlen)",
    slug: "zahlen-0-20",
    excerpt: "Learn to count from zero to twenty, paying attention to the unique words and the patterns that emerge.",
    image: "https://placehold.co/800x450.png",
    aiHint: "numbers blocks",
    explanation: (
      <div className="space-y-6">
        <div>
            <p>Numbers are a basic building block of any language. Let's start with the first 21.</p>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-2 border">Number</th><th className="p-2 border">German Word</th><th className="p-2 border">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2 border">0</td><td className="p-2 border">null</td><td></td></tr>
                <tr><td className="p-2 border">1</td><td className="p-2 border">eins</td><td></td></tr>
                <tr><td className="p-2 border">2</td><td className="p-2 border">zwei</td><td></td></tr>
                <tr><td className="p-2 border">3</td><td className="p-2 border">drei</td><td></td></tr>
                <tr><td className="p-2 border">4</td><td className="p-2 border">vier</td><td></td></tr>
                <tr><td className="p-2 border">5</td><td className="p-2 border">fünf</td><td></td></tr>
                <tr><td className="p-2 border">6</td><td className="p-2 border">sechs</td><td></td></tr>
                <tr><td className="p-2 border">7</td><td className="p-2 border">sieben</td><td></td></tr>
                <tr><td className="p-2 border">8</td><td className="p-2 border">acht</td><td></td></tr>
                <tr><td className="p-2 border">9</td><td className="p-2 border">neun</td><td></td></tr>
                <tr><td className="p-2 border">10</td><td className="p-2 border">zehn</td><td></td></tr>
                <tr><td className="p-2 border">11</td><td className="p-2 border">elf</td><td className="Irregular">Irregular</td></tr>
                <tr><td className="p-2 border">12</td><td className="p-2 border">zwölf</td><td className="Irregular">Irregular</td></tr>
                <tr><td className="p-2 border">13</td><td className="p-2 border">dreizehn</td><td>drei + zehn</td></tr>
                <tr><td className="p-2 border">14</td><td className="p-2 border">vierzehn</td><td>vier + zehn</td></tr>
                <tr><td className="p-2 border">15</td><td className="p-2 border">fünfzehn</td><td>fünf + zehn</td></tr>
                <tr><td className="p-2 border">16</td><td className="p-2 border">sechzehn</td><td className="Note: 's' is dropped from sechs">Note: 's' is dropped from sechs</td></tr>
                <tr><td className="p-2 border">17</td><td className="p-2 border">siebzehn</td><td className="Note: 'en' is dropped from sieben">Note: 'en' is dropped from sieben</td></tr>
                <tr><td className="p-2 border">18</td><td className="p-2 border">achtzehn</td><td>acht + zehn</td></tr>
                <tr><td className="p-2 border">19</td><td className="p-2 border">neunzehn</td><td>neun + zehn</td></tr>
                <tr><td className="p-2 border">20</td><td className="p-2 border">zwanzig</td><td></td></tr>
              </tbody>
            </table>
        </div>
      </div>
    ),
    tip: "Pay close attention to 'sechzehn' (16) and 'siebzehn' (17). Dropping the endings of the base numbers 'sechs' and 'sieben' is a common pattern for pronunciation ease that you'll see again.",
    quiz: [
      {
        question: "What is 'zwölf'?",
        options: ["10", "11", "12", "20"],
        correctAnswer: "12",
      },
      {
        question: "How do you write '16' in German?",
        options: ["sechszehn", "sechzehn", "siebzehn", "sechzig"],
        correctAnswer: "sechzehn",
      },
      {
        question: "Which number follows the pattern [number] + 'zehn'?",
        options: ["elf", "neun", "zwölf", "vierzehn"],
        correctAnswer: "vierzehn",
      },
      {
        question: "What is the German word for 'seven'?",
        options: ["sechs", "siebzehn", "neun", "sieben"],
        correctAnswer: "sieben",
      },
      {
        question: "The number '20' is...",
        options: ["zwei", "zwölf", "zwanzig", "zehn"],
        correctAnswer: "zwanzig",
      },
    ],
  },
    // Lesson 4: Basic Nouns and Gender
  {
    title: "Basic Nouns and Gender",
    slug: "nomen-und-genus",
    excerpt: "Understand the fundamental concept of grammatical gender (der, die, das) and learn some common everyday nouns.",
    image: "https://placehold.co/800x450.png",
    aiHint: "dictionary book",
    explanation: (
      <div className="space-y-6">
        <div>
            <h4 className="font-bold text-xl mb-2">The Three Genders</h4>
            <p>In German, every noun has a grammatical gender: masculine, feminine, or neuter. This gender is indicated by the definite article ('the') preceding the noun. The gender is often not logical (e.g., a girl, 'das Mädchen', is neuter), so it must be memorized for each noun.</p>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-2 border">Gender</th><th className="p-2 border">Article</th><th className="p-2 border">Example (German)</th><th className="p-2 border">Example (English)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2 border">Masculine</td><td className="p-2 border font-bold">der</td><td className="p-2 border">der Tisch</td><td className="p-2 border">the table</td></tr>
                <tr><td className="p-2 border">Feminine</td><td className="p-2 border font-bold">die</td><td className="p-2 border">die Lampe</td><td className="p-2 border">the lamp</td></tr>
                <tr><td className="p-2 border">Neuter</td><td className="p-2 border font-bold">das</td><td className="p-2 border">das Buch</td><td className="p-2 border">the book</td></tr>
              </tbody>
            </table>
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2">Plural Nouns</h4>
            <p>In the plural form, things get simpler: the definite article for ALL plural nouns is <strong>die</strong>, regardless of their original singular gender.</p>
            <p>Example: <strong>die</strong> Tische (the tables), <strong>die</strong> Lampen (the lamps), <strong>die</strong> Bücher (the books).</p>
        </div>
      </div>
    ),
    tip: "There are some patterns! For example, nouns ending in -ung, -heit, -keit, -schaft, -ei are almost always feminine (die). Nouns ending in -chen or -lein are always neuter (das).",
    quiz: [
      {
        question: "What is the definite article for a masculine noun?",
        options: ["die", "das", "der", "den"],
        correctAnswer: "der",
      },
      {
        question: "The noun 'Auto' (car) is neuter. Which article does it take in the singular?",
        options: ["der", "die", "das", "den"],
        correctAnswer: "das",
      },
      {
        question: "What is the definite article for 'Bücher' (books)?",
        options: ["der", "die", "das", "dem"],
        correctAnswer: "die",
      },
      {
        question: "'die Frau' (the woman) is:",
        options: ["Masculine", "Feminine", "Neuter", "Plural"],
        correctAnswer: "Feminine",
      },
      {
        question: "You have three chairs. The singular is 'der Stuhl'. The plural would be...",
        options: ["der Stühle", "das Stühle", "die Stühle", "dem Stühle"],
        correctAnswer: "die Stühle",
      },
    ],
  },
  // Lesson 5: 'To Be' (sein) and 'To Have' (haben)
  {
    title: "Verbs: 'sein' and 'haben'",
    slug: "verben-sein-haben",
    excerpt: "Master the conjugation and usage of the two most important verbs in German: 'sein' (to be) and 'haben' (to have).",
    image: "https://placehold.co/800x450.png",
    aiHint: "verb conjugation chart",
    explanation: (
      <div className="space-y-6">
        <div>
            <p>'Sein' (to be) and 'haben' (to have) are the backbone of German. They are highly irregular and essential for forming basic sentences and more complex tenses later on.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-xl mb-2">sein (to be)</h4>
            <ul className="list-disc list-inside space-y-2">
                <li>ich <strong>bin</strong> (I am)</li>
                <li>du <strong>bist</strong> (you are - informal)</li>
                <li>er/sie/es <strong>ist</strong> (he/she/it is)</li>
                <li>wir <strong>sind</strong> (we are)</li>
                <li>ihr <strong>seid</strong> (you are - plural informal)</li>
                <li>sie/Sie <strong>sind</strong> (they/you are - formal)</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">Usage: identity, state, characteristics.<br/>Example: Ich bin Student. (I am a student.) Er ist müde. (He is tired.)</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2">haben (to have)</h4>
            <ul className="list-disc list-inside space-y-2">
                <li>ich <strong>habe</strong> (I have)</li>
                <li>du <strong>hast</strong> (you have - informal)</li>
                <li>er/sie/es <strong>hat</strong> (he/she/it has)</li>
                <li>wir <strong>haben</strong> (we have)</li>
                <li>ihr <strong>habt</strong> (you have - plural informal)</li>
                <li>sie/Sie <strong>haben</strong> (they/you have - formal)</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">Usage: possession, age, certain expressions.<br/>Example: Ich habe ein Auto. (I have a car.) Sie hat Hunger. (She is hungry - lit. She has hunger.)</p>
          </div>
        </div>
      </div>
    ),
    tip: "German uses 'haben' for many expressions where English uses 'to be'. The most common are 'Hunger haben' (to be hungry), 'Durst haben' (to be thirsty), and 'Recht haben' (to be right).",
    quiz: [
      {
        question: "How do you say 'He is'?",
        options: ["er hat", "er ist", "er sein", "er habe"],
        correctAnswer: "er ist",
      },
      {
        question: "Which form of 'haben' goes with 'du'?",
        options: ["habe", "hast", "hat", "habt"],
        correctAnswer: "hast",
      },
      {
        question: "Complete the sentence: Wir ___ ein Haus. (We have a house.)",
        options: ["sind", "haben", "seid", "habt"],
        correctAnswer: "haben",
      },
      {
        question: "'Ihr seid schnell.' means:",
        options: ["They are fast.", "You (formal) are fast.", "You (plural informal) are fast.", "We are fast."],
        correctAnswer: "You (plural informal) are fast.",
      },
      {
        question: "Which pronoun uses the verb form 'ist'?",
        options: ["ich", "du", "er/sie/es", "wir"],
        correctAnswer: "er/sie/es",
      },
    ],
  },
  // Lesson 6: The Nominative Case
  {
    title: "The Nominative Case",
    slug: "der-nominativ",
    excerpt: "Learn about the nominative case, which is used for the subject of a sentence, and why it's the 'default' case.",
    image: "https://placehold.co/800x450.png",
    aiHint: "grammar subject verb",
    explanation: (
      <div className="space-y-6">
        <div>
            <p>German has four grammatical cases, which determine the form of articles, pronouns, and adjectives based on their function in a sentence. The first and most fundamental case is the <strong>nominative</strong>.</p>
            <h4 className="font-bold text-xl mt-4 mb-2">Function of the Nominative Case</h4>
            <p>The nominative case is used for the <strong>subject</strong> of the sentence. The subject is the person or thing that performs the action or is in a state of being.</p>
            <p>To find the subject, ask the question: <strong>"Wer oder was...?"</strong> (Who or what...?) is doing the action.</p>
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2">Examples</h4>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Der Mann</strong> ist groß. (<strong>The man</strong> is tall.)
                    <ul className="list-circle list-inside ml-6 text-sm text-muted-foreground"><li><em>Question: Wer oder was ist groß? -> Der Mann.</em></li></ul>
                </li>
                <li><strong>Die Frau</strong> liest ein Buch. (<strong>The woman</strong> is reading a book.)
                    <ul className="list-circle list-inside ml-6 text-sm text-muted-foreground"><li><em>Question: Wer oder was liest? -> Die Frau.</em></li></ul>
                </li>
                <li><strong>Das Kind</strong> spielt im Garten. (<strong>The child</strong> is playing in the garden.)
                    <ul className="list-circle list-inside ml-6 text-sm text-muted-foreground"><li><em>Question: Wer oder was spielt? -> Das Kind.</em></li></ul>
                </li>
            </ul>
        </div>
        <div>
            <p>The definite articles we have already learned (<strong>der, die, das</strong>) are the nominative forms. It is the case you find when you look up a noun in the dictionary.</p>
        </div>
      </div>
    ),
    tip: "The nominative case also appears after the verbs 'sein' (to be), 'werden' (to become), and 'bleiben' (to remain). For example: Er ist <strong>ein guter Lehrer</strong>. ('ein guter Lehrer' is nominative).",
    quiz: [
      {
        question: "The nominative case is used to identify the ____.",
        options: ["direct object", "location", "subject", "time"],
        correctAnswer: "subject",
      },
      {
        question: "In the sentence 'Das Auto fährt schnell', what is the subject?",
        options: ["Das Auto", "fährt", "schnell"],
        correctAnswer: "Das Auto",
      },
      {
        question: "Which articles are used for the nominative case?",
        options: ["den, die, das", "dem, der, dem", "der, die, das", "des, der, des"],
        correctAnswer: "der, die, das",
      },
      {
        question: "To find the subject of a sentence, you ask:",
        options: ["Wo? (Where?)", "Wann? (When?)", "Wen oder was? (Whom or what?)", "Wer oder was? (Who or what?)"],
        correctAnswer: "Wer oder was? (Who or what?)",
      },
      {
        question: "Which of these sentences has a feminine subject?",
        options: ["Der Hund bellt.", "Das Kind lacht.", "Die Katze schläft."],
        correctAnswer: "Die Katze schläft.",
      },
    ],
  },
  // Lesson 7: The Accusative Case
  {
    title: "The Accusative Case",
    slug: "der-akkusativ",
    excerpt: "Learn the accusative case, used for the direct object. The most important change to remember: 'der' becomes 'den'.",
    image: "https://placehold.co/800x450.png",
    aiHint: "grammar direct object",
    explanation: (
      <div className="space-y-6">
        <div>
            <h4 className="font-bold text-xl mb-2">Function of the Accusative Case</h4>
            <p>The <strong>accusative case</strong> is used for the <strong>direct object</strong> of a sentence. The direct object is the noun that directly receives the action of the verb.</p>
            <p>To find the direct object, ask the question: <strong>"Wen oder was...?"</strong> (Whom or what...?) does the subject act upon.</p>
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2">Article Changes</h4>
            <p>The good news: only the masculine article changes in the accusative!</p>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50"><th className="p-2 border">Gender</th><th className="p-2 border">Nominative</th><th className="p-2 border font-bold">Accusative</th></tr></thead>
                  <tbody>
                    <tr><td className="p-2 border">Masculine</td><td className="p-2 border">der</td><td className="p-2 border font-bold text-primary">den</td></tr>
                    <tr><td className="p-2 border">Feminine</td><td className="p-2 border">die</td><td className="p-2 border">die</td></tr>
                    <tr><td className="p-2 border">Neuter</td><td className="p-2 border">das</td><td className="p-2 border">das</td></tr>
                    <tr><td className="p-2 border">Plural</td><td className="p-2 border">die</td><td className="p-2 border">die</td></tr>
                  </tbody>
                </table>
            </div>
        </div>
        <div>
            <h4 className="font-bold text-xl mt-4 mb-2">Examples</h4>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Ich sehe <strong>den Mann</strong>. (I see the man.)
                    <ul className="list-circle list-inside ml-6 text-sm text-muted-foreground"><li><em>Question: Wen oder was sehe ich? -> den Mann.</em></li></ul>
                </li>
                <li>Er liest <strong>das Buch</strong>. (He reads the book.)
                    <ul className="list-circle list-inside ml-6 text-sm text-muted-foreground"><li><em>Question: Wen oder was liest er? -> das Buch.</em></li></ul>
                </li>
                <li>Sie kauft <strong>die Lampe</strong>. (She buys the lamp.)
                    <ul className="list-circle list-inside ml-6 text-sm text-muted-foreground"><li><em>Question: Wen oder was kauft sie? -> die Lampe.</em></li></ul>
                </li>
            </ul>
        </div>
      </div>
    ),
    tip: "Certain prepositions ALWAYS take the accusative case, regardless of movement. The most common are 'durch', 'für', 'gegen', 'ohne', 'um'. For example: 'Das Geschenk ist für <strong>den</strong> Vater.' (The gift is for the father.)",
    quiz: [
      {
        question: "The accusative case is used for the ____.",
        options: ["subject", "indirect object", "direct object", "possessive object"],
        correctAnswer: "direct object",
      },
      {
        question: "Which article changes in the accusative?",
        options: ["der", "die", "das", "All of them"],
        correctAnswer: "der",
      },
      {
        question: "Complete the sentence: Ich habe ___ Hund. ('Hund' is masculine)",
        options: ["der", "einen", "ein", "eine"],
        correctAnswer: "einen",
      },
      {
        question: "In the sentence 'Sie trinkt den Saft', what is 'den Saft'?",
        options: ["Subject (Nominative)", "Direct Object (Accusative)", "Indirect Object (Dative)"],
        correctAnswer: "Direct Object (Accusative)",
      },
      {
        question: "Which sentence is correct?",
        options: ["Ich sehe der Film.", "Ich sehe den Film.", "Ich sehe dem Film."],
        correctAnswer: "Ich sehe den Film.",
      },
    ],
  },
  // Lesson 8: Yes/No Questions and W-Questions
  {
    title: "Asking Questions",
    slug: "fragen-stellen",
    excerpt: "Learn the two primary ways to form questions: simple yes/no questions (Ja/Nein-Fragen) and information questions (W-Fragen).",
    image: "https://placehold.co/800x450.png",
    aiHint: "question mark",
    explanation: (
      <div className="space-y-6">
        <div>
            <h4 className="font-bold text-xl mb-2">Ja/Nein-Fragen (Yes/No Questions)</h4>
            <p>This is the simplest question type. To turn a statement into a yes/no question, you invert the subject and the conjugated verb. The verb moves to the first position.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Statement: Du <strong>bist</strong> müde. (You are tired.) → Question: <strong>Bist</strong> du müde? (Are you tired?)</li>
                <li>Statement: Er <strong>hat</strong> ein Auto. (He has a car.) → Question: <strong>Hat</strong> er ein Auto? (Does he have a car?)</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2">W-Fragen (Information Questions)</h4>
            <p>These questions seek information and begin with a question word (most of which start with 'W' in German). The sentence structure is rigid: <strong>W-Word (Position 1)</strong> + <strong>Conjugated Verb (Position 2)</strong> + Subject + ...</p>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50"><th className="p-2 border">W-Word</th><th className="p-2 border">Meaning</th><th className="p-2 border">Example</th></tr></thead>
                  <tbody>
                    <tr><td className="p-2 border">Wer?</td><td className="p-2 border">Who?</td><td className="p-2 border"><strong>Wer</strong> ist das? (Who is that?)</td></tr>
                    <tr><td className="p-2 border">Was?</td><td className="p-2 border">What?</td><td className="p-2 border"><strong>Was</strong> machst du? (What are you doing?)</td></tr>
                    <tr><td className="p-2 border">Wo?</td><td className="p-2 border">Where?</td><td className="p-2 border"><strong>Wo</strong> wohnst du? (Where do you live?)</td></tr>
                    <tr><td className="p-2 border">Wann?</td><td className="p-2 border">When?</td><td className="p-2 border"><strong>Wann</strong> beginnt der Film? (When does the film begin?)</td></tr>
                    <tr><td className="p-2 border">Wie?</td><td className="p-2 border">How?</td><td className="p-2 border"><strong>Wie</strong> geht es Ihnen? (How are you?)</td></tr>
                    <tr><td className="p-2 border">Warum?</td><td className="p-2 border">Why?</td><td className="p-2 border"><strong>Warum</strong> lernst du Deutsch? (Why are you learning German?)</td></tr>
                  </tbody>
                </table>
            </div>
        </div>
      </div>
    ),
    tip: "Remember the verb position rules! In a normal statement, the verb is in position 2. In a Ja/Nein question, it's position 1. In a W-Frage, the W-word is position 1 and the verb is BACK in position 2. This is a core rule of German syntax.",
    quiz: [
      {
        question: "How do you turn 'Er wohnt in Berlin.' into a yes/no question?",
        options: ["Wohnt er in Berlin?", "Er wohnt in Berlin?", "Wo wohnt er?"],
        correctAnswer: "Wohnt er in Berlin?",
      },
      {
        question: "Which W-word means 'When?'",
        options: ["Wer", "Was", "Wo", "Wann"],
        correctAnswer: "Wann",
      },
      {
        question: "In a W-question, the conjugated verb is always in ____.",
        options: ["Position 1", "Position 2", "Position 3", "The end"],
        correctAnswer: "Position 2",
      },
      {
        question: "'Warum bist du hier?' means:",
        options: ["Who are you here?", "How are you here?", "Why are you here?", "Where are you here?"],
        correctAnswer: "Why are you here?",
      },
      {
        question: "The correct question for the answer 'Ich lerne Deutsch.' is:",
        options: ["Wer lernst du?", "Was machst du?", "Wie lernst du?"],
        correctAnswer: "Was machst du?",
      },
    ],
  },
  // Lesson 9: Family Members
  {
    title: "Family Members (Familie)",
    slug: "familienmitglieder",
    excerpt: "Learn the vocabulary for immediate and extended family members, and how to talk about your family.",
    image: "https://placehold.co/800x450.png",
    aiHint: "family tree photo",
    explanation: (
      <div className="space-y-6">
        <div>
            <p>Let's learn the vocabulary to talk about your family (<strong>die Familie</strong>).</p>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-muted/50"><th className="p-2 border">German</th><th className="p-2 border">English</th></tr></thead>
              <tbody>
                <tr><td className="p-2 border"><strong>die Eltern</strong> (plural)</td><td className="p-2 border">the parents</td></tr>
                <tr><td className="p-2 border">der Vater / Vati</td><td className="p-2 border">the father / Dad</td></tr>
                <tr><td className="p-2 border">die Mutter / Mutti</td><td className="p-2 border">the mother / Mom</td></tr>
                <tr><td className="p-2 border"><strong>die Geschwister</strong> (plural)</td><td className="p-2 border">the siblings</td></tr>
                <tr><td className="p-2 border">der Bruder</td><td className="p-2 border">the brother</td></tr>
                <tr><td className="p-2 border">die Schwester</td><td className="p-2 border">the sister</td></tr>
                <tr><td className="p-2 border">der Sohn</td><td className="p-2 border">the son</td></tr>
                <tr><td className="p-2 border">die Tochter</td><td className="p-2 border">the daughter</td></tr>
                <tr><td className="p-2 border"><strong>die Großeltern</strong> (plural)</td><td className="p-2 border">the grandparents</td></tr>
                <tr><td className="p-2 border">der Großvater / Opa</td><td className="p-2 border">the grandfather / Grandpa</td></tr>
                <tr><td className="p-2 border">die Großmutter / Oma</td><td className="p-2 border">the grandmother / Grandma</td></tr>
              </tbody>
            </table>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Talking About Your Family</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Hast du Geschwister?</strong> (Do you have siblings?)</li>
              <li>Ja, ich habe einen Bruder und eine Schwester. (Yes, I have a brother and a sister.)</li>
              <li>Nein, ich bin ein Einzelkind. (No, I am an only child.)</li>
              <li><strong>Das ist mein Vater.</strong> (This is my father.)</li>
          </ul>
        </div>
      </div>
    ),
    tip: "'Opa' and 'Oma' are the most common ways to say grandfather and grandmother in everyday speech, much like 'Grandpa' and 'Grandma'. 'Vati' and 'Mutti' are affectionate terms for Dad and Mom.",
    quiz: [
      {
        question: "What is the German word for 'parents'?",
        options: ["die Geschwister", "die Großeltern", "die Familie", "die Eltern"],
        correctAnswer: "die Eltern",
      },
      {
        question: "The word for 'the sister' is:",
        options: ["der Bruder", "die Tochter", "die Schwester", "der Sohn"],
        correctAnswer: "die Schwester",
      },
      {
        question: "How do you say 'I have a brother'?",
        options: ["Ich habe ein Bruder.", "Ich habe einen Bruder.", "Ich bin ein Bruder.", "Ich habe eine Bruder."],
        correctAnswer: "Ich habe einen Bruder.",
      },
      {
        question: "If you have no siblings, you are a/an ____.",
        options: ["Geschwister", "Bruder", "Einzelkind", "Tochter"],
        correctAnswer: "Einzelkind",
      },
      {
        question: "'Meine Oma ist nett.' means:",
        options: ["My mother is nice.", "My sister is nice.", "My grandmother is nice.", "My aunt is nice."],
        correctAnswer: "My grandmother is nice.",
      },
    ],
  },
  // Lesson 10: Colors
  {
    title: "Colors (Farben)",
    slug: "farben",
    excerpt: "Learn the names of common colors to describe the world around you, and how to use them as adjectives.",
    image: "https://placehold.co/800x450.png",
    aiHint: "color palette splash",
    explanation: (
      <div className="space-y-6">
        <div>
            <p>Colors (<strong>die Farben</strong>) are adjectives. Here are the most common ones.</p>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-muted/50"><th className="p-2 border">German</th><th className="p-2 border">English</th></tr></thead>
              <tbody>
                <tr><td className="p-2 border">rot</td><td className="p-2 border">red</td></tr>
                <tr><td className="p-2 border">blau</td><td className="p-2 border">blue</td></tr>
                <tr><td className="p-2 border">gelb</td><td className="p-2 border">yellow</td></tr>
                <tr><td className="p-2 border">grün</td><td className="p-2 border">green</td></tr>
                <tr><td className="p-2 border">schwarz</td><td className="p-2 border">black</td></tr>
                <tr><td className="p-2 border">weiß</td><td className="p-2 border">white</td></tr>
                <tr><td className="p-2 border">grau</td><td className="p-2 border">gray</td></tr>
                <tr><td className="p-2 border">braun</td><td className="p-2 border">brown</td></tr>
                <tr><td className="p-2 border">orange</td><td className="p-2 border">orange</td></tr>
                <tr><td className="p-2 border">lila / violett</td><td className="p-2 border">purple</td></tr>
              </tbody>
            </table>
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2">Using Colors in Sentences</h4>
            <p>When a color comes after the noun and the verb 'sein' (to be), it has no special ending.</p>
            <ul className="list-disc list-inside pl-4"><li>Das Auto ist <strong>rot</strong>. (The car is red.)</li></ul>
            <p className="mt-2">When it comes before the noun, it needs an adjective ending (which you'll learn more about later).</p>
            <ul className="list-disc list-inside pl-4"><li>Das <strong>rote</strong> Auto. (The red car.)</li></ul>
        </div>
      </div>
    ),
    tip: "To talk about light or dark shades, use 'hell-' and 'dunkel-'. For example: 'hellblau' (light blue), 'dunkelgrün' (dark green).",
    quiz: [
      {
        question: "What color is 'schwarz'?",
        options: ["White", "Blue", "Gray", "Black"],
        correctAnswer: "Black",
      },
      {
        question: "How do you say 'green' in German?",
        options: ["grau", "grün", "gelb", "blau"],
        correctAnswer: "grün",
      },
      {
        question: "'Der Himmel ist blau.' means:",
        options: ["The sun is blue.", "The sky is blue.", "The grass is blue.", "The car is blue."],
        correctAnswer: "The sky is blue.",
      },
      {
        question: "Which word means 'white'?",
        options: ["weiß", "gelb", "grau", "braun"],
        correctAnswer: "weiß",
      },
      {
        question: "To describe a light red car, you would say:",
        options: ["dunkelrotes Auto", "rotes Auto", "hellrotes Auto", "rot Auto"],
        correctAnswer: "hellrotes Auto",
      },
    ],
  },
    // Lesson 11: Food and Drink
  {
    title: "Food and Drink (Essen und Trinken)",
    slug: "essen-und-trinken",
    excerpt: "Learn essential vocabulary for food and drinks, and how to express hunger and thirst.",
    image: "https://placehold.co/800x450.png",
    aiHint: "german food market",
    explanation: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-xl mb-2">Essen (Food)</h4>
            <ul className="list-disc list-inside space-y-1">
                <li><strong>das Brot</strong> - bread</li>
                <li><strong>der Käse</strong> - cheese</li>
                <li><strong>der Apfel</strong> - apple</li>
                <li><strong>die Banane</strong> - banana</li>
                <li><strong>das Fleisch</strong> - meat</li>
                <li><strong>der Fisch</strong> - fish</li>
                <li><strong>der Reis</strong> - rice</li>
                <li><strong>die Kartoffel</strong> - potato</li>
                <li><strong>das Gemüse</strong> - vegetables</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2">Trinken (Drinks)</h4>
            <ul className="list-disc list-inside space-y-1">
                <li><strong>das Wasser</strong> - water</li>
                <li><strong>die Milch</strong> - milk</li>
                <li><strong>der Saft</strong> - juice</li>
                <li><strong>der Kaffee</strong> - coffee</li>
                <li><strong>der Tee</strong> - tea</li>
                <li><strong>das Bier</strong> - beer</li>
                <li><strong>der Wein</strong> - wine</li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Important Phrases</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Ich habe Hunger. (I am hungry. lit: I have hunger.)</li>
              <li>Ich habe Durst. (I am thirsty. lit: I have thirst.)</li>
              <li>Was isst du gern? (What do you like to eat?)</li>
              <li>Ich esse gern Käse. (I like to eat cheese.)</li>
          </ul>
        </div>
      </div>
    ),
    tip: "Meals of the day: das Frühstück (breakfast), das Mittagessen (lunch), das Abendessen (dinner).",
    quiz: [
      {
        question: "What is 'die Kartoffel'?",
        options: ["The carrot", "The potato", "The tomato", "The bread"],
        correctAnswer: "The potato",
      },
      {
        question: "How do you say 'I am thirsty'?",
        options: ["Ich bin Durst.", "Ich habe Durst.", "Ich will trinken.", "Ich trinke Wasser."],
        correctAnswer: "Ich habe Durst.",
      },
      {
        question: "'der Käse' means:",
        options: ["The meat", "The bread", "The cheese", "The fish"],
        correctAnswer: "The cheese",
      },
      {
        question: "Which of these is a drink?",
        options: ["der Reis", "der Wein", "der Apfel", "das Brot"],
        correctAnswer: "der Wein",
      },
      {
        question: "The meal you eat in the morning is called ____.",
        options: ["das Mittagessen", "das Abendessen", "der Hunger", "das Frühstück"],
        correctAnswer: "das Frühstück",
      },
    ],
  },
  // Lesson 12: Hobbies and Free Time
  {
    title: "Hobbies and Free Time",
    slug: "hobbys-und-freizeit",
    excerpt: "Learn to talk about hobbies and what you like to do in your free time using the adverb 'gern'.",
    image: "https://placehold.co/800x450.png",
    aiHint: "people doing hobbies",
    explanation: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-xl mb-2">Common Hobby Verbs</h4>
          <ul className="list-disc list-inside space-y-1">
              <li><strong>lesen</strong> - to read</li>
              <li><strong>schwimmen</strong> - to swim</li>
              <li><strong>kochen</strong> - to cook</li>
              <li><strong>reisen</strong> - to travel</li>
              <li><strong>tanzen</strong> - to dance</li>
              <li><strong>Musik hören</strong> - to listen to music</li>
              <li><strong>Fußball spielen</strong> - to play football</li>
              <li><strong>Freunde treffen</strong> - to meet friends</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Asking and Answering about Hobbies</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Question: <strong>Was sind deine Hobbys?</strong> (What are your hobbies?)</li>
              <li>Answer: <strong>Meine Hobbys sind Lesen und Reisen.</strong> (My hobbies are reading and traveling.)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Using "gern" to Express Likes</h4>
          <p>The easiest way to say you like doing an activity is to add the adverb <strong>gern</strong> (gladly) after the conjugated verb.</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Ich lese. (I read.) → Ich lese <strong>gern</strong>. (I like to read.)</li>
            <li>Wir spielen Fußball. (We play football.) → Wir spielen <strong>gern</strong> Fußball. (We like to play football.)</li>
            <li>Question: Was machst du <strong>gern</strong>? (What do you like to do?)</li>
          </ul>
        </div>
      </div>
    ),
    tip: "You can also make 'gern' stronger by saying 'sehr gern' (really like) or negate it with 'nicht gern' (don't like). For example: 'Ich tanze nicht gern, aber ich schwimme sehr gern.'",
    quiz: [
      {
        question: "What does 'Ich koche gern' mean?",
        options: ["I must cook.", "I can cook.", "I like to cook.", "I cook often."],
        correctAnswer: "I like to cook.",
      },
      {
        question: "How do you say 'to meet friends'?",
        options: ["Freunde haben", "Freunde treffen", "Freunde spielen", "Freunde lesen"],
        correctAnswer: "Freunde treffen",
      },
      {
        question: "A good answer to 'Was machst du gern?' is:",
        options: ["Ich bin aus Italien.", "Ich schwimme gern.", "Ich habe einen Hund.", "Ich bin müde."],
        correctAnswer: "Ich schwimme gern.",
      },
      {
        question: "The word 'tanzen' means:",
        options: ["to read", "to travel", "to swim", "to dance"],
        correctAnswer: "to dance",
      },
      {
        question: "To say 'I really like to travel', you would say:",
        options: ["Ich reise nicht gern.", "Ich reise sehr.", "Ich reise sehr gern.", "Ich sehr gern reise."],
        correctAnswer: "Ich reise sehr gern.",
      },
    ],
  },
  // Lesson 13: Days of the Week
  {
    title: "Days of the Week",
    slug: "wochentage",
    excerpt: "Learn the seven days of the week in German and related time expressions like 'today', 'tomorrow', and 'yesterday'.",
    image: "https://placehold.co/800x450.png",
    aiHint: "calendar page",
    explanation: (
      <div className="space-y-6">
        <div>
            <p>Let's learn the days of the week (<strong>die Wochentage</strong>). All days of the week are masculine (<strong>der</strong>).</p>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-muted/50"><th className="p-2 border">German</th><th className="p-2 border">English</th></tr></thead>
              <tbody>
                <tr><td className="p-2 border">der Montag</td><td className="p-2 border">Monday</td></tr>
                <tr><td className="p-2 border">der Dienstag</td><td className="p-2 border">Tuesday</td></tr>
                <tr><td className="p-2 border">der Mittwoch</td><td className="p-2 border">Wednesday</td></tr>
                <tr><td className="p-2 border">der Donnerstag</td><td className="p-2 border">Thursday</td></tr>
                <tr><td className="p-2 border">der Freitag</td><td className="p-2 border">Friday</td></tr>
                <tr><td className="p-2 border">der Samstag / der Sonnabend</td><td className="p-2 border">Saturday</td></tr>
                <tr><td className="p-2 border">der Sonntag</td><td className="p-2 border">Sunday</td></tr>
              </tbody>
            </table>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Useful Words</h4>
          <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong>heute</strong> - today</li>
              <li><strong>morgen</strong> - tomorrow</li>
              <li><strong>gestern</strong> - yesterday</li>
              <li><strong>das Wochenende</strong> - the weekend</li>
          </ul>
          <p className="mt-2">To say something happens 'on' a certain day, use the preposition <strong>am</strong> (a contraction of an + dem). Example: <strong>Am Montag</strong> gehe ich ins Kino. (On Monday I'm going to the cinema.)</p>
        </div>
      </div>
    ),
    tip: "'Samstag' is used throughout most of Germany, Austria, and Switzerland. 'Sonnabend' (Sunday-eve) is more common in Northern and Eastern Germany. Both are correct and understood everywhere.",
    quiz: [
      {
        question: "What day is 'der Donnerstag'?",
        options: ["Tuesday", "Thursday", "Wednesday", "Friday"],
        correctAnswer: "Thursday",
      },
      {
        question: "How do you say 'on Saturday'?",
        options: ["in Samstag", "auf Samstag", "am Samstag", "der Samstag"],
        correctAnswer: "am Samstag",
      },
      {
        question: "The word for 'yesterday' is:",
        options: ["morgen", "Wochenende", "heute", "gestern"],
        correctAnswer: "gestern",
      },
      {
        question: "Which day comes before 'Sonntag'?",
        options: ["Montag", "Freitag", "Samstag", "Dienstag"],
        correctAnswer: "Samstag",
      },
      {
        question: "All days of the week in German are what gender?",
        options: ["Feminine (die)", "Neuter (das)", "Masculine (der)", "Plural (die)"],
        correctAnswer: "Masculine (der)",
      },
    ],
  },
  // Lesson 14: Months and Seasons
  {
    title: "Months and Seasons",
    slug: "monate-und-jahreszeiten",
    excerpt: "Learn the vocabulary for the twelve months and the four seasons, and how to use them with the correct preposition.",
    image: "https://placehold.co/800x450.png",
    aiHint: "four seasons tree",
    explanation: (
      <div className="space-y-6">
        <div>
            <p>Let's learn the months (<strong>die Monate</strong>) and seasons (<strong>die Jahreszeiten</strong>). Like the days of the week, all months and seasons are masculine (<strong>der</strong>).</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-xl mb-2">Die Jahreszeiten (The Seasons)</h4>
              <ul className="list-disc list-inside space-y-1">
                  <li><strong>der Frühling</strong> - Spring</li>
                  <li><strong>der Sommer</strong> - Summer</li>
                  <li><strong>der Herbst</strong> - Autumn / Fall</li>
                  <li><strong>der Winter</strong> - Winter</li>
              </ul>
            </div>
            <div>
                <h4 className="font-bold text-xl mb-2">Die Monate (The Months)</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>der Januar, der Februar, der März</li>
                    <li>der April, der Mai, der Juni</li>
                    <li>der Juli, der August, der September</li>
                    <li>der Oktober, der November, der Dezember</li>
                </ul>
            </div>
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2">Usage</h4>
            <p>To say something happens 'in' a certain month or season, use the preposition <strong>im</strong> (a contraction of in + dem).</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
                <li><strong>Im Sommer</strong> ist es heiß. (In summer it is hot.)</li>
                <li>Mein Geburtstag ist <strong>im Mai</strong>. (My birthday is in May.)</li>
            </ul>
        </div>
      </div>
    ),
    tip: "To ask 'When is your birthday?', you say: 'Wann hast du Geburtstag?'. The answer structure is 'Ich habe im [Month] Geburtstag.'",
    quiz: [
      {
        question: "What is 'der Herbst'?",
        options: ["Spring", "Summer", "Autumn", "Winter"],
        correctAnswer: "Autumn",
      },
      {
        question: "Which month comes after 'Juni'?",
        options: ["Mai", "Juli", "August", "September"],
        correctAnswer: "Juli",
      },
      {
        question: "How do you say 'in winter'?",
        options: ["in Winter", "am Winter", "im Winter", "auf Winter"],
        correctAnswer: "im Winter",
      },
      {
        question: "The season 'der Frühling' is:",
        options: ["Spring", "Summer", "Autumn", "Winter"],
        correctAnswer: "Spring",
      },
      {
        question: "The correct way to say 'My birthday is in October' is:",
        options: ["Ich habe am Oktober Geburtstag.", "Ich habe im Oktober Geburtstag.", "Mein Geburtstag ist Oktober.", "Ich bin im Oktober Geburtstag."],
        correctAnswer: "Ich habe im Oktober Geburtstag.",
      },
    ],
  },
  // Lesson 15: The Dative Case
  {
    title: "The Dative Case",
    slug: "der-dativ",
    excerpt: "An introduction to the dative case, used for the indirect object, and its article changes.",
    image: "https://placehold.co/800x450.png",
    aiHint: "grammar indirect object",
    explanation: (
      <div className="space-y-6">
        <div>
            <h4 className="font-bold text-xl mb-2">Function of the Dative Case</h4>
            <p>The <strong>dative case</strong> is typically used for the <strong>indirect object</strong>. The indirect object is the recipient of the direct object. It answers the question 'To whom?' or 'For whom?' the action is performed.</p>
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2">Article Changes</h4>
            <p>Unlike the accusative, all articles change in the dative case.</p>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50"><th className="p-2 border">Gender</th><th className="p-2 border">Nominative</th><th className="p-2 border font-bold">Dative</th></tr></thead>
                  <tbody>
                    <tr><td className="p-2 border">Masculine</td><td className="p-2 border">der</td><td className="p-2 border font-bold text-primary">dem</td></tr>
                    <tr><td className="p-2 border">Feminine</td><td className="p-2 border">die</td><td className="p-2 border font-bold text-primary">der</td></tr>
                    <tr><td className="p-2 border">Neuter</td><td className="p-2 border">das</td><td className="p-2 border font-bold text-primary">dem</td></tr>
                    <tr><td className="p-2 border">Plural</td><td className="p-2 border">die</td><td className="p-2 border font-bold text-primary">den (+n on noun)</td></tr>
                  </tbody>
                </table>
            </div>
        </div>
        <div>
            <h4 className="font-bold text-xl mt-4 mb-2">Example Sentence Breakdown</h4>
            <p>Sentence: Ich gebe <strong>dem Mann</strong> <em>das Buch</em>. (I give the book <strong>to the man</strong>.)</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Ich</strong>: Subject (Nominative)</li>
                <li><strong>gebe</strong>: Verb</li>
                <li><strong>dem Mann</strong>: Indirect Object (Dative) - recipient of the book.</li>
                <li><strong>das Buch</strong>: Direct Object (Accusative) - the thing being given.</li>
            </ul>
        </div>
      </div>
    ),
    tip: "Many common verbs always take a dative object, even if there's no direct object. Key examples are: <strong>helfen</strong> (to help), <strong>danken</strong> (to thank), <strong>antworten</strong> (to answer), and <strong>gefallen</strong> (to be pleasing to). Example: Ich danke <strong>dir</strong>. (I thank you.)",
    quiz: [
      {
        question: "The dative case usually identifies the ____.",
        options: ["subject", "indirect object", "direct object", "possessive"],
        correctAnswer: "indirect object",
      },
      {
        question: "Neuter 'das' changes to ____ in the dative.",
        options: ["den", "dem", "des", "der"],
        correctAnswer: "dem",
      },
      {
        question: "Feminine 'die' changes to ____ in the dative.",
        options: ["den", "dem", "der", "des"],
        correctAnswer: "der",
      },
      {
        question: "Complete: Ich helfe ___ Frau. ('helfen' takes dative)",
        options: ["die", "der", "den", "dem"],
        correctAnswer: "der",
      },
      {
        question: "In 'Er schenkt dem Kind einen Ball', who is the indirect object?",
        options: ["Er (He)", "dem Kind (the child)", "einen Ball (a ball)"],
        correctAnswer: "dem Kind (the child)",
      },
    ],
  },
    // Lesson 16: Possessive Articles
  {
    title: "Possessive Articles",
    slug: "possessivartikel",
    excerpt: "Learn how to express ownership with words like 'my', 'your', 'his', 'her', and see how their endings change based on the noun's gender and case.",
    image: "https://placehold.co/800x450.png",
    aiHint: "hand holding key",
    explanation: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-xl mb-2">The Basic Forms</h4>
          <p>Possessive articles show who owns something. The base form depends on the owner.</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
              <li>ich → <strong>mein</strong> (my)</li>
              <li>du → <strong>dein</strong> (your - informal)</li>
              <li>er/es → <strong>sein</strong> (his/its)</li>
              <li>sie → <strong>ihr</strong> (her)</li>
              <li>wir → <strong>unser</strong> (our)</li>
              <li>ihr → <strong>euer</strong> (your - plural informal)</li>
              <li>sie/Sie → <strong>ihr/Ihr</strong> (their/your - formal)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Adding Endings (Nominative Case)</h4>
          <p>The ending you add to the base form depends on the gender and number of the noun being possessed. The pattern is the same as for 'ein'.</p>
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead><tr className="bg-muted/50"><th className="p-2 border">Noun Gender</th><th className="p-2 border">Ending</th><th className="p-2 border">Example</th></tr></thead>
                <tbody>
                  <tr><td className="p-2 border">Masculine (der)</td><td className="p-2 border">- (no ending)</td><td className="p-2 border">Das ist <strong>mein</strong> Stuhl.</td></tr>
                  <tr><td className="p-2 border">Feminine (die)</td><td className="p-2 border">-e</td><td className="p-2 border">Das ist <strong>meine</strong> Lampe.</td></tr>
                  <tr><td className="p-2 border">Neuter (das)</td><td className="p-2 border">- (no ending)</td><td className="p-2 border">Das ist <strong>mein</strong> Buch.</td></tr>
                  <tr><td className="p-2 border">Plural (die)</td><td className="p-2 border">-e</td><td className="p-2 border">Das sind <strong>meine</strong> Bücher.</td></tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    ),
    tip: "Watch out for 'euer' (your plural). When it takes an ending, the 'e' before the 'r' is often dropped: 'euer' + '-e' becomes 'eure', not 'euere'. Example: 'Das ist eure Katze.'",
    quiz: [
      {
        question: "How do you say 'his car' (das Auto)?",
        options: ["sein Auto", "seine Auto", "ihr Auto", "ihre Auto"],
        correctAnswer: "sein Auto",
      },
      {
        question: "How do you say 'our mother' (die Mutter)?",
        options: ["unser Mutter", "unsere Mutter", "unseren Mutter", "unserem Mutter"],
        correctAnswer: "unsere Mutter",
      },
      {
        question: "Complete: Das sind ____ Freunde. (die Freunde - plural)",
        options: ["dein", "deine", "deinen", "deinem"],
        correctAnswer: "deine",
      },
      {
        question: "'Ihr' can mean 'her' or 'their'. What else can 'Ihr' (capitalized) mean?",
        options: ["your (informal)", "your (formal)", "his", "its"],
        correctAnswer: "your (formal)",
      },
      {
        question: "Which sentence is correct for 'my father' (der Vater)?",
        options: ["Das ist mein Vater.", "Das ist meine Vater.", "Das ist meinen Vater."],
        correctAnswer: "Das ist mein Vater.",
      },
    ],
  },
  // Lesson 17: Clothing
  {
    title: "Clothing (Kleidung)",
    slug: "kleidung",
    excerpt: "Build your vocabulary by learning the German words for common items of clothing and how to talk about wearing them.",
    image: "https://placehold.co/800x450.png",
    aiHint: "clothing on rack",
    explanation: (
      <div className="space-y-6">
        <div>
          <p>Let's learn what to call the things we wear (<strong>die Kleidung</strong>).</p>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-muted/50"><th className="p-2 border">German (Singular/Plural)</th><th className="p-2 border">English</th></tr></thead>
              <tbody>
                <tr><td className="p-2 border">die Hose(n)</td><td className="p-2 border">the pants/trousers</td></tr>
                <tr><td className="p-2 border">das Hemd(en)</td><td className="p-2 border">the shirt (button-up)</td></tr>
                <tr><td className="p-2 border">das T-Shirt(s)</td><td className="p-2 border">the T-shirt</td></tr>
                <tr><td className="p-2 border">der Pullover / der Pulli(-)</td><td className="p-2 border">the sweater/pullover</td></tr>
                <tr><td className="p-2 border">die Jacke(n)</td><td className="p-2 border">the jacket</td></tr>
                <tr><td className="p-2 border">der Mantel(¨)</td><td className="p-2 border">the coat</td></tr>
                <tr><td className="p-2 border">die Schuhe (plural)</td><td className="p-2 border">the shoes</td></tr>
                <tr><td className="p-2 border">das Kleid(er)</td><td className="p-2 border">the dress</td></tr>
                <tr><td className="p-2 border">der Rock(¨e)</td><td className="p-2 border">the skirt</td></tr>
              </tbody>
            </table>
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2">Using the verb 'tragen' (to wear)</h4>
            <p>'tragen' is a strong (irregular) verb. Notice the vowel change for 'du' and 'er/sie/es'.</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
                <li>ich trage</li>
                <li>du <strong>trägst</strong></li>
                <li>er/sie/es <strong>trägt</strong></li>
                <li>wir/sie/Sie tragen</li>
                <li>ihr tragt</li>
            </ul>
            <p className="mt-2">Example: Er <strong>trägt</strong> eine blaue Hose und ein weißes T-Shirt. (He is wearing blue pants and a white T-shirt.)</p>
        </div>
      </div>
    ),
    tip: "Unlike in English, 'Hose' (pants) is singular in German. To talk about one pair of pants, you say 'eine Hose'. For multiple pairs, 'zwei Hosen'. 'Schuhe' (shoes), however, is typically used in the plural.",
    quiz: [
      {
        question: "What is 'der Mantel'?",
        options: ["The dress", "The skirt", "The jacket", "The coat"],
        correctAnswer: "The coat",
      },
      {
        question: "How do you conjugate 'tragen' for 'du'?",
        options: ["du tragst", "du trägst", "du tragt", "du tragen"],
        correctAnswer: "du trägst",
      },
      {
        question: "Which item is masculine?",
        options: ["das Kleid", "die Hose", "der Rock", "das Hemd"],
        correctAnswer: "der Rock",
      },
      {
        question: "'der Pulli' is an informal word for:",
        options: ["A T-shirt", "A button-up shirt", "A sweater", "A jacket"],
        correctAnswer: "A sweater",
      },
      {
        question: "Which sentence is correct?",
        options: ["Sie tragt ein Kleid.", "Sie trägst ein Kleid.", "Sie trägt ein Kleid.", "Sie tragen ein Kleid."],
        correctAnswer: "Sie trägt ein Kleid.",
      },
    ],
  },
  // Lesson 18: Telling Time
  {
    title: "Telling Time (Uhrzeit)",
    slug: "uhrzeit",
    excerpt: "Learn how to ask for and tell the time, covering both the formal 24-hour clock and the informal 12-hour system.",
    image: "https://placehold.co/800x450.png",
    aiHint: "clock face",
    explanation: (
      <div className="space-y-6">
        <div>
          <p>To ask for the time, you can say: <strong>Wie spät ist es?</strong> (How late is it?) or <strong>Wie viel Uhr ist es?</strong> (What time is it?)</p>
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2">Formal Time (Official Time)</h4>
            <p>Used in official announcements, news, and schedules. It's based on the 24-hour clock and is very simple: [Hour] + Uhr + [Minutes].</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
                <li>14:30 → Es ist <strong>vierzehn Uhr dreißig</strong>.</li>
                <li>08:15 → Es ist <strong>acht Uhr fünfzehn</strong>.</li>
                <li>20:05 → Es ist <strong>zwanzig Uhr fünf</strong>.</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2">Informal Time (Colloquial Time)</h4>
            <p>Used in everyday conversation. It's based on the 12-hour clock and uses prepositions.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>nach</strong> (past): 10:10 is 'zehn <strong>nach</strong> zehn'.</li>
                <li><strong>vor</strong> (to): 9:50 is 'zehn <strong>vor</strong> zehn'.</li>
                <li><strong>Viertel nach</strong> (quarter past): 7:15 is '<strong>Viertel nach</strong> sieben'.</li>
                <li><strong>Viertel vor</strong> (quarter to): 7:45 is '<strong>Viertel vor</strong> acht'. (Note: it's quarter to the *next* hour)</li>
                <li><strong>halb</strong> (half to): 7:30 is '<strong>halb</strong> acht'. (This means 'halfway to 8 o'clock')</li>
            </ul>
        </div>
      </div>
    ),
    tip: "The 'halb' construction is the trickiest for English speakers. Always remember 'halb' + [THE NEXT HOUR]. So, 'halb drei' (half to three) means 2:30, not 3:30. This is a very common point of confusion.",
    quiz: [
      {
        question: "How do you ask 'What time is it?' formally?",
        options: ["Was ist die Zeit?", "Wie viel kostet es?", "Wie viel Uhr ist es?", "Wann ist es?"],
        correctAnswer: "Wie viel Uhr ist es?",
      },
      {
        question: "What time is 'Viertel vor elf'?",
        options: ["11:15", "11:45", "10:15", "10:45"],
        correctAnswer: "10:45",
      },
      {
        question: "How would you say 4:30 informally?",
        options: ["halb vier", "vier Uhr dreißig", "halb fünf", "dreißig nach vier"],
        correctAnswer: "halb fünf",
      },
      {
        question: "The formal way to say 19:05 is:",
        options: ["neunzehn Uhr fünf", "fünf nach sieben", "sieben Uhr fünf", "fünf vor zwanzig"],
        correctAnswer: "neunzehn Uhr fünf",
      },
      {
        question: "'fünf nach halb acht' means:",
        options: ["7:25", "8:35", "7:35", "8:25"],
        correctAnswer: "7:35",
      },
    ],
  },
  // Lesson 19: Modal Verbs I (können, wollen)
  {
    title: "Modal Verbs I (können, wollen)",
    slug: "modalverben-1",
    excerpt: "Learn your first two modal verbs: 'können' (can, to be able to) and 'wollen' (to want to), and master their sentence structure.",
    image: "https://placehold.co/800x450.png",
    aiHint: "signpost with choices",
    explanation: (
      <div className="space-y-6">
        <div>
            <h4 className="font-bold text-xl mb-2">The Modal Verb Rule</h4>
            <p>Modal verbs express ability, necessity, or desire. They modify another main verb in the sentence. The rule is simple:
            <br/><strong>Subject + [Conjugated Modal Verb] + ... + [Main Verb in Infinitive at the end].</strong></p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-xl mb-2">können (can / to be able to)</h4>
              <p>Expresses ability or possibility.</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>ich <strong>kann</strong>, du <strong>kannst</strong>, er/sie/es <strong>kann</strong></li>
                  <li>wir <strong>können</strong>, ihr <strong>könnt</strong>, sie/Sie <strong>können</strong></li>
              </ul>
              <p className="mt-2">Example: Ich <strong>kann</strong> gut Deutsch <strong>sprechen</strong>. (I can speak German well.)</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2">wollen (to want to)</h4>
              <p>Expresses a strong desire or intention.</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>ich <strong>will</strong>, du <strong>willst</strong>, er/sie/es <strong>will</strong></li>
                  <li>wir <strong>wollen</strong>, ihr <strong>wollt</strong>, sie/Sie <strong>wollen</strong></li>
              </ul>
              <p className="mt-2">Example: Wir <strong>wollen</strong> am Wochenende ins Kino <strong>gehen</strong>. (We want to go to the cinema on the weekend.)</p>
            </div>
        </div>
      </div>
    ),
    tip: "Be careful with 'ich will'. While it means 'I want', it can sound very demanding or childish. A more polite way to express a wish, especially when ordering, is 'Ich möchte...' (I would like...). We'll cover 'möchten' later.",
    quiz: [
      {
        question: "'Du kannst schnell laufen.' means:",
        options: ["You want to run fast.", "You must run fast.", "You can run fast.", "You should run fast."],
        correctAnswer: "You can run fast.",
      },
      {
        question: "How do you conjugate 'wollen' for 'er'?",
        options: ["will", "willst", "wollst", "wollen"],
        correctAnswer: "will",
      },
      {
        question: "Where does the main verb go in a sentence with a modal verb?",
        options: ["Position 2", "Position 1", "After the modal verb", "At the end, in infinitive"],
        correctAnswer: "At the end, in infinitive",
      },
      {
        question: "Choose the correct sentence:",
        options: ["Er will spielen Fußball.", "Er will Fußball spielen.", "Er Fußball will spielen.", "Er spielen will Fußball."],
        correctAnswer: "Er will Fußball spielen.",
      },
      {
        question: "How do you say 'They can cook'?",
        options: ["Sie können kochen.", "Sie kochen können.", "Sie könnt kochen.", "Sie können gekocht."],
        correctAnswer: "Sie können kochen.",
      },
    ],
  },
  // Lesson 20: Modal Verbs II (müssen, sollen)
  {
    title: "Modal Verbs II (müssen, sollen)",
    slug: "modalverben-2",
    excerpt: "Learn 'müssen' (must, to have to) and 'sollen' (should, to be supposed to), and understand the difference in their meaning.",
    image: "https://placehold.co/800x450.png",
    aiHint: "checklist with tasks",
    explanation: (
      <div className="space-y-6">
         <div>
            <p>Let's continue with two more important modal verbs that express obligation and recommendation. The sentence structure remains the same.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-xl mb-2">müssen (must / to have to)</h4>
            <p>Expresses a strong necessity or an unavoidable obligation.</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
                <li>ich <strong>muss</strong>, du <strong>musst</strong>, er/sie/es <strong>muss</strong></li>
                <li>wir <strong>müssen</strong>, ihr <strong>müsst</strong>, sie/Sie <strong>müssen</strong></li>
            </ul>
            <p className="mt-2">Example: Ich <strong>muss</strong> jetzt zur Arbeit <strong>gehen</strong>. (I must go to work now.)</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2">sollen (should / ought to)</h4>
            <p>Expresses a recommendation, a duty, or someone else's will/command.</p>
             <ul className="list-disc list-inside space-y-1 mt-2">
                <li>ich <strong>soll</strong>, du <strong>sollst</strong>, er/sie/es <strong>soll</strong></li>
                <li>wir <strong>sollen</strong>, ihr <strong>sollt</strong>, sie/Sie <strong>sollen</strong></li>
            </ul>
            <p className="mt-2">Example: Der Arzt sagt, ich <strong>soll</strong> mehr Wasser <strong>trinken</strong>. (The doctor says I should drink more water.)</p>
          </div>
        </div>
      </div>
    ),
    tip: "A key difference: 'Ich muss nicht' means 'I don't have to'. But 'Ich soll nicht' means 'I am not supposed to / I shouldn't'. They are not interchangeable!",
    quiz: [
      {
        question: "'Wir müssen lernen.' means:",
        options: ["We should learn.", "We want to learn.", "We can learn.", "We must learn."],
        correctAnswer: "We must learn.",
      },
      {
        question: "How do you conjugate 'müssen' for 'ihr'?",
        options: ["muss", "müsst", "müssen", "musst"],
        correctAnswer: "müsst",
      },
      {
        question: "The verb 'sollen' often implies...",
        options: ["a strong personal desire", "an ability", "a recommendation or duty", "a possibility"],
        correctAnswer: "a recommendation or duty",
      },
      {
        question: "Choose the correct sentence:",
        options: ["Du sollst machen deine Hausaufgaben.", "Du sollst deine Hausaufgaben machen.", "Du deine Hausaufgaben sollst machen."],
        correctAnswer: "Du sollst deine Hausaufgaben machen.",
      },
      {
        question: "Which verb would you use to say 'The doctor told me I should stay in bed'?",
        options: ["können", "wollen", "müssen", "sollen"],
        correctAnswer: "sollen",
      },
    ],
  },
   // Lesson 21: The Imperative
  {
    title: "The Imperative (Commands)",
    slug: "imperativ",
    excerpt: "Learn how to give commands and make requests using the imperative mood for 'du', 'ihr', and 'Sie'.",
    image: "https://placehold.co/800x450.png",
    aiHint: "person pointing finger",
    explanation: (
      <div className="space-y-6">
        <div>
          <p>The imperative mood is used to give commands. There are three main forms, depending on who you are talking to.</p>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-muted/50"><th className="p-2 border">Form</th><th className="p-2 border">How to Form</th><th className="p-2 border">Example Verb: machen (to do)</th><th className="p-2 border">Example Sentence</th></tr></thead>
              <tbody>
                <tr>
                    <td className="p-2 border"><strong>du</strong> (informal, singular)</td>
                    <td className="p-2 border">Take verb stem (du machst → mach)</td>
                    <td className="p-2 border font-bold">Mach!</td>
                    <td className="p-2 border"><strong>Mach</strong> deine Hausaufgaben!</td>
                </tr>
                <tr>
                    <td className="p-2 border"><strong>ihr</strong> (informal, plural)</td>
                    <td className="p-2 border">Use the normal 'ihr' conjugation</td>
                    <td className="p-2 border font-bold">Macht!</td>
                    <td className="p-2 border"><strong>Macht</strong> eure Hausaufgaben!</td>
                </tr>
                <tr>
                    <td className="p-2 border"><strong>Sie</strong> (formal)</td>
                    <td className="p-2 border">Use infinitive + Sie</td>
                    <td className="p-2 border font-bold">Machen Sie!</td>
                    <td className="p-2 border"><strong>Machen Sie</strong> bitte Ihre Hausaufgaben!</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div>
          <h4 className="font-bold text-xl mt-4 mb-2">Irregular Forms</h4>
          <p>Verbs with a vowel change in the 'du' form (e.g., strong verbs) often keep this change in the imperative. Example: 'geben' (to give) -> du gibst -> Imperative: <strong>Gib!</strong></p>
          <p>Verbs like 'sein' are completely irregular: <strong>Sei</strong> leise! (Be quiet! - du), <strong>Seid</strong> leise! (ihr), <strong>Seien Sie</strong> leise! (Sie).</p>
        </div>
      </div>
    ),
    tip: "To make any command more polite, simply add the word 'bitte' (please). It can go at the beginning or the end. 'Bitte, komm her!' or 'Kommen Sie, bitte!'",
    quiz: [
      {
        question: "What is the 'ihr' command for the verb 'kaufen' (ihr kauft)?",
        options: ["Kauf!", "Kauft!", "Kaufen!", "Kaufen ihr!"],
        correctAnswer: "Kauft!",
      },
      {
        question: "Which form is used to give a command to one close friend?",
        options: ["du", "ihr", "Sie", "wir"],
        correctAnswer: "du",
      },
      {
        question: "How do you formally say 'Go!' (gehen)?",
        options: ["Geh!", "Geht!", "Gehen!", "Gehen Sie!"],
        correctAnswer: "Gehen Sie!",
      },
      {
        question: "'Lies das Buch!' is a command for:",
        options: ["one friend (du)", "a group of friends (ihr)", "a formal person (Sie)"],
        correctAnswer: "one friend (du)",
      },
      {
        question: "The imperative form of 'sein' for 'du' is:",
        options: ["Bist!", "Sein!", "Sei!", "Seid!"],
        correctAnswer: "Sei!",
      },
    ],
  },
  // Lesson 22: Shopping
  {
    title: "Shopping (Einkaufen)",
    slug: "einkaufen",
    excerpt: "Learn useful vocabulary and phrases for shopping, from asking for items and prices to completing a purchase.",
    image: "https://placehold.co/800x450.png",
    aiHint: "shopping cart store",
    explanation: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-xl mb-2">Key Questions</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Was kostet das? / Wie viel kostet das?</strong> - What does that cost? / How much does that cost?</li>
              <li><strong>Haben Sie...?</strong> - Do you have...? (e.g., Haben Sie das in Blau? - Do you have that in blue?)</li>
              <li><strong>Kann ich Ihnen helfen?</strong> - Can I help you? (Shopkeeper might ask this)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Expressing What You Want</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Ich suche... (+ Accusative)</strong> - I am looking for... (e.g., Ich suche einen Mantel.)</li>
              <li><strong>Ich möchte... (+ Accusative)</strong> - I would like...</li>
              <li><strong>Ich hätte gern... (+ Accusative)</strong> - I would like... (more polite)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Completing the Purchase</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Ich nehme das.</strong> - I'll take that.</li>
              <li><strong>Das ist zu teuer/billig.</strong> - That is too expensive/cheap.</li>
              <li><strong>Das ist alles, danke.</strong> - That is all, thank you.</li>
              <li><strong>Zusammen oder getrennt?</strong> - Together or separate? (When paying in a group)</li>
          </ul>
        </div>
      </div>
    ),
    tip: "'Ich hätte gern...' is generally considered more polite and common than 'Ich möchte...' when you're a customer. It's the subjunctive mood, which softens the request.",
    quiz: [
      {
        question: "How do you ask 'How much does that cost?'",
        options: ["Wie haben Sie das?", "Was kostet das?", "Wo ist das?", "Wann kaufen Sie?"],
        correctAnswer: "Was kostet das?",
      },
      {
        question: "'Das ist zu billig.' means:",
        options: ["That is a good price.", "That is too expensive.", "That is on sale.", "That is too cheap."],
        correctAnswer: "That is too cheap.",
      },
      {
        question: "The most polite way to say 'I would like a coffee' is:",
        options: ["Ich will einen Kaffee.", "Ich suche einen Kaffee.", "Ich hätte gern einen Kaffee.", "Kaffee kostet."],
        correctAnswer: "Ich hätte gern einen Kaffee.",
      },
      {
        question: "'Ich suche eine Jacke.' means:",
        options: ["I see a jacket.", "I'm looking for a jacket.", "I'm buying a jacket.", "I have a jacket."],
        correctAnswer: "I'm looking for a jacket.",
      },
      {
        question: "A shopkeeper asks 'Kann ich Ihnen helfen?'. You are just looking. You can say:",
        options: ["Ja, bitte.", "Nein, danke.", "Ich schaue nur, danke.", "Ich nehme das."],
        correctAnswer: "Ich schaue nur, danke.",
      },
    ],
  },
  // Lesson 23: In a Restaurant
  {
    title: "In a Restaurant",
    slug: "im-restaurant",
    excerpt: "Learn how to reserve a table, order food and drinks, and ask for the bill in a German restaurant.",
    image: "https://placehold.co/800x450.png",
    aiHint: "restaurant table menu",
    explanation: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-xl mb-2">Getting Seated</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Ich möchte einen Tisch für zwei Personen reservieren.</strong> - I would like to reserve a table for two people.</li>
            <li><strong>Haben Sie noch einen Tisch frei?</strong> - Do you still have a free table?</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Ordering</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Die Speisekarte, bitte.</strong> - The menu, please.</li>
              <li><strong>Was können Sie empfehlen?</strong> - What can you recommend?</li>
              <li><strong>Ich möchte bestellen.</strong> - I would like to order.</li>
              <li><strong>Ich nehme... / Für mich...</strong> - I'll have... / For me...</li>
              <li><strong>Als Vorspeise nehme ich...</strong> - For an appetizer I'll have...</li>
              <li><strong>Als Hauptgericht nehme ich...</strong> - For the main course I'll have...</li>
              <li><strong>Und zum Trinken?</strong> - And to drink?</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">During and After the Meal</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Guten Appetit!</strong> - Enjoy your meal!</li>
              <li><strong>Hat es geschmeckt?</strong> - Did you enjoy the meal?</li>
              <li><strong>Ja, es war sehr lecker!</strong> - Yes, it was very delicious!</li>
              <li><strong>Die Rechnung, bitte. / Zahlen, bitte.</strong> - The bill, please. / To pay, please.</li>
          </ul>
        </div>
      </div>
    ),
    tip: "Tipping (Trinkgeld) is common but not obligatory. A typical tip is to round up the bill or add 5-10%. You can say 'Stimmt so' (keep the change) if the amount is close, or state the total amount you want to pay, e.g., if the bill is 18.50€, you can hand over a 20€ note and say 'Zwanzig, bitte.' (Twenty, please.).",
    quiz: [
      {
        question: "How do you ask for the menu?",
        options: ["Die Rechnung, bitte.", "Ich möchte bestellen, bitte.", "Die Speisekarte, bitte.", "Was gibt es, bitte?"],
        correctAnswer: "Die Speisekarte, bitte.",
      },
      {
        question: "What does 'Die Rechnung, bitte.' mean?",
        options: ["The food, please.", "The menu, please.", "The bill, please.", "Another drink, please."],
        correctAnswer: "The bill, please.",
      },
      {
        question: "'Vorspeise' means:",
        options: ["Dessert", "Appetizer", "Drink", "Main course"],
        correctAnswer: "Appetizer",
      },
      {
        question: "The waiter asks 'Hat es geschmeckt?'. You liked the food. You say:",
        options: ["Nein, danke.", "Ja, es war sehr lecker.", "Ich weiß nicht.", "Die Rechnung, bitte."],
        correctAnswer: "Ja, es war sehr lecker.",
      },
      {
        question: "To reserve a table for 4 people, you say:",
        options: ["Ich möchte vier Tische.", "Ich möchte einen Tisch für vier Personen.", "Ich habe vier Personen.", "Vier Personen, bitte."],
        correctAnswer: "Ich möchte einen Tisch für vier Personen.",
      },
    ],
  },
  // Lesson 24: Prepositions of Place
  {
    title: "Prepositions of Place",
    slug: "lokale-prapositionen",
    excerpt: "Learn two-way prepositions like 'in', 'an', 'auf' and how to use them with the dative case to describe a static location.",
    image: "https://placehold.co/800x450.png",
    aiHint: "map with pins",
    explanation: (
      <div className="space-y-6">
        <div>
          <p>Two-way prepositions (<strong>Wechselpräpositionen</strong>) are prepositions of place that can be followed by either the accusative or dative case. The case you use depends on the context:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Dative Case:</strong> Used for a static location. Answers the question <strong>Wo?</strong> (Where?).</li>
            <li><strong>Accusative Case:</strong> Used for movement or direction towards a location. Answers the question <strong>Wohin?</strong> (Where to?).</li>
          </ul>
          <p>In this A1 lesson, we focus on <strong>location (Dative)</strong>.</p>
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2">Common Prepositions (with Dative for Location)</h4>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50"><th className="p-2 border">Preposition</th><th className="p-2 border">Meaning</th><th className="p-2 border">Example (Wo? + Dative)</th></tr></thead>
                  <tbody>
                    <tr><td className="p-2 border"><strong>in</strong></td><td className="p-2 border">in</td><td className="p-2 border">Das Buch ist <strong>in der</strong> Tasche.</td></tr>
                    <tr><td className="p-2 border"><strong>an</strong></td><td className="p-2 border">at, on (vertical)</td><td className="p-2 border">Das Bild hängt <strong>an der</strong> Wand.</td></tr>
                    <tr><td className="p-2 border"><strong>auf</strong></td><td className="p-2 border">on (horizontal)</td><td className="p-2 border">Das Buch liegt <strong>auf dem</strong> Tisch.</td></tr>
                    <tr><td className="p-2 border"><strong>vor</strong></td><td className="p-2 border">in front of</td><td className="p-2 border">Das Auto steht <strong>vor dem</strong> Haus.</td></tr>
                    <tr><td className="p-2 border"><strong>hinter</strong></td><td className="p-2 border">behind</td><td className="p-2 border">Der Garten ist <strong>hinter dem</strong> Haus.</td></tr>
                    <tr><td className="p-2 border"><strong>über</strong></td><td className="p-2 border">over, above</td><td className="p-2 border">Die Lampe ist <strong>über dem</strong> Tisch.</td></tr>
                    <tr><td className="p-2 border"><strong>unter</strong></td><td className="p-2 border">under, below</td><td className="p-2 border">Der Hund schläft <strong>unter dem</strong> Tisch.</td></tr>
                    <tr><td className="p-2 border"><strong>neben</strong></td><td className="p-2 border">next to</td><td className="p-2 border">Die Apotheke ist <strong>neben der</strong> Bank.</td></tr>
                    <tr><td className="p-2 border"><strong>zwischen</strong></td><td className="p-2 border">between</td><td className="p-2 border">Der Stuhl steht <strong>zwischen dem</strong> Tisch und <strong>dem</strong> Regal.</td></tr>
                  </tbody>
                </table>
            </div>
        </div>
      </div>
    ),
    tip: "Remember the key question: If you can ask 'Wo?' (Where is it located?), use the dative case. If you can ask 'Wohin?' (Where is it going to?), use the accusative. Mastering this difference is a huge step in learning German.",
    quiz: [
      {
        question: "The preposition 'neben' means:",
        options: ["behind", "next to", "in front of", "under"],
        correctAnswer: "next to",
      },
      {
        question: "Which preposition would you use for a book lying on a table?",
        options: ["in", "auf", "an", "unter"],
        correctAnswer: "auf",
      },
      {
        question: "Complete: Das Auto parkt ___ dem Haus. (behind the house)",
        options: ["über", "vor", "hinter", "unter"],
        correctAnswer: "hinter",
      },
      {
        question: "To describe a static location, you ask 'Wo?' and use the ____ case.",
        options: ["Nominative", "Accusative", "Dative", "Genitive"],
        correctAnswer: "Dative",
      },
      {
        question: "Which sentence is correct?",
        options: ["Die Lampe ist über den Tisch.", "Die Lampe ist über der Tisch.", "Die Lampe ist über dem Tisch."],
        correctAnswer: "Die Lampe ist über dem Tisch.",
      },
    ],
  },
  // Lesson 25: The Weather
  {
    title: "The Weather (Das Wetter)",
    slug: "das-wetter",
    excerpt: "Learn how to talk about the weather, a classic topic for small talk, from sunshine to snow.",
    image: "https://placehold.co/800x450.png",
    aiHint: "weather icons sun cloud rain",
    explanation: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-xl mb-2">Asking About the Weather</h4>
          <p>The most common question is: <strong>Wie ist das Wetter heute?</strong> (How is the weather today?)</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Describing the Weather</h4>
          <p>Many descriptions use the structure 'Es ist...' (It is...).</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Es ist sonnig.</strong> - It is sunny. (from die Sonne - the sun)</li>
              <li><strong>Es ist bewölkt.</strong> - It is cloudy. (from die Wolke - the cloud)</li>
              <li><strong>Es ist windig.</strong> - It is windy. (from der Wind - the wind)</li>
              <li><strong>Es ist neblig.</strong> - It is foggy. (from der Nebel - the fog)</li>
              <li><strong>Es ist kalt / kühl / warm / heiß.</strong> - It is cold / cool / warm / hot.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Weather as a Verb</h4>
          <p>Some weather conditions are expressed with a verb.</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Es regnet.</strong> - It is raining. (from der Regen - the rain)</li>
              <li><strong>Es schneit.</strong> - It is snowing. (from der Schnee - the snow)</li>
              <li><strong>Es gewittert.</strong> - It is storming. (from das Gewitter - the thunderstorm)</li>
          </ul>
          <p className="mt-2">You can also say: Die Sonne scheint. (The sun is shining.)</p>
        </div>
      </div>
    ),
    tip: "For 'raining' and 'snowing', German uses verbs directly ('Es regnet' - It rains). This is different from English where we say 'It is raining'. Avoid saying 'Es ist regnig' - it's not standard German.",
    quiz: [
      {
        question: "How do you say 'It is cloudy'?",
        options: ["Es ist sonnig.", "Es ist bewölkt.", "Es ist windig.", "Es ist neblig."],
        correctAnswer: "Es ist bewölkt.",
      },
      {
        question: "'Es schneit.' means:",
        options: ["It is shining.", "It is snowing.", "It is stormy.", "It is sunny."],
        correctAnswer: "It is snowing.",
      },
      {
        question: "What does 'Es ist heiß' mean?",
        options: ["It is cool.", "It is hot.", "It is cold.", "It is warm."],
        correctAnswer: "It is hot.",
      },
      {
        question: "The correct phrase for 'The sun is shining' is:",
        options: ["Es ist sonnig.", "Die Sonne ist gut.", "Die Sonne scheint.", "Es scheint die Sonne."],
        correctAnswer: "Die Sonne scheint.",
      },
      {
        question: "What is the question to ask about the weather?",
        options: ["Was ist das Wetter?", "Wie ist das Wetter?", "Wo ist das Wetter?", "Warum ist das Wetter?"],
        correctAnswer: "Wie ist das Wetter?",
      },
    ],
  },
  // Lesson 26: Separable Verbs
  {
    title: "Separable Verbs (Trennbare Verben)",
    slug: "trennbare-verben",
    excerpt: "Understand separable prefix verbs, a core feature of German where the prefix moves to the end of the sentence.",
    image: "https://placehold.co/800x450.png",
    aiHint: "verb breaking apart",
    explanation: (
      <div className="space-y-6">
        <div>
          <p>Many German verbs consist of a main verb and a separable prefix. In a simple present tense sentence, this prefix detaches and moves to the very end of the clause.</p>
          <p>The structure is: Subject + <strong>[Conjugated Main Verb]</strong> + ... + <strong>[Prefix]</strong>.</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Common Separable Verbs</h4>
           <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50"><th className="p-2 border">Verb (Infinitive)</th><th className="p-2 border">Meaning</th><th className="p-2 border">Example Sentence</th></tr></thead>
                  <tbody>
                    <tr><td className="p-2 border"><strong>an</strong>rufen</td><td className="p-2 border">to call (phone)</td><td className="p-2 border">Ich <strong>rufe</strong> dich später <strong>an</strong>.</td></tr>
                    <tr><td className="p-2 border"><strong>auf</strong>stehen</td><td className="p-2 border">to get up</td><td className="p-2 border">Er <strong>steht</strong> um 7 Uhr <strong>auf</strong>.</td></tr>
                    <tr><td className="p-2 border"><strong>ein</strong>kaufen</td><td className="p-2 border">to shop (for groceries)</td><td className="p-2 border">Wir <strong>kaufen</strong> im Supermarkt <strong>ein</strong>.</td></tr>
                    <tr><td className="p-2 border"><strong>fern</strong>sehen</td><td className="p-2 border">to watch TV</td><td className="p-2 border">Siehst du oft <strong>fern</strong>?</td></tr>
                    <tr><td className="p-2 border"><strong>mit</strong>kommen</td><td className="p-2 border">to come with/along</td><td className="p-2 border"><strong>Kommst</strong> du ins Kino <strong>mit</strong>?</td></tr>
                  </tbody>
                </table>
            </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mt-4 mb-2">With Modal Verbs</h4>
          <p>When you use a separable verb with a modal verb, the prefix does <strong>not</strong> separate. The entire verb goes to the end of the sentence in its infinitive form.</p>
          <p>Example: Ich <strong>möchte</strong> dich später <strong>anrufen</strong>. (I would like to call you later.)</p>
        </div>
      </div>
    ),
    tip: "How do you know if a prefix is separable? Most are, especially common ones like an-, auf-, aus-, ein-, mit-, vor-, zu-. Prefixes like be-, er-, ge-, ver-, zer- are inseparable. You'll learn these with experience.",
    quiz: [
      {
        question: "In 'Ich stehe um 6 Uhr auf', what is the infinitive of the verb?",
        options: ["stehen", "auf", "aufstehen", "stehen auf"],
        correctAnswer: "aufstehen",
      },
      {
        question: "Which sentence is correct for the verb 'mitbringen' (to bring along)?",
        options: ["Ich mitbringe einen Kuchen.", "Ich bringe mit einen Kuchen.", "Ich bringe einen Kuchen mit.", "Einen Kuchen ich mitbringe."],
        correctAnswer: "Ich bringe einen Kuchen mit.",
      },
      {
        question: "The verb 'fernsehen' means 'to watch TV'. How do you say 'She watches TV'?",
        options: ["Sie sieht fern.", "Sie fernsieht.", "Sie sieht fernsehen.", "Fern sie sieht."],
        correctAnswer: "Sie sieht fern.",
      },
      {
        question: "How do you correctly say 'I want to get up'?",
        options: ["Ich will stehe auf.", "Ich will aufstehen.", "Ich aufstehen will.", "Ich will auf stehe."],
        correctAnswer: "Ich will aufstehen.",
      },
      {
        question: "Which of these is a common separable prefix?",
        options: ["be-", "er-", "ver-", "ein-"],
        correctAnswer: "ein-",
      },
    ],
  },
  // Lesson 27: Body Parts
  {
    title: "Body Parts (Körperteile)",
    slug: "koerperteile",
    excerpt: "Learn the vocabulary for the main parts of the body and how to talk about pain.",
    image: "https://placehold.co/800x450.png",
    aiHint: "anatomy drawing human",
    explanation: (
      <div className="space-y-6">
        <div>
          <p>Let's learn the words for our body parts (<strong>die Körperteile</strong>).</p>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-muted/50"><th className="p-2 border">German (Singular/Plural)</th><th className="p-2 border">English</th></tr></thead>
              <tbody>
                <tr><td className="p-2 border">der Kopf / die Köpfe</td><td className="p-2 border">head</td></tr>
                <tr><td className="p-2 border">das Gesicht / die Gesichter</td><td className="p-2 border">face</td></tr>
                <tr><td className="p-2 border">das Auge / die Augen</td><td className="p-2 border">eye / eyes</td></tr>
                <tr><td className="p-2 border">die Nase / die Nasen</td><td className="p-2 border">nose</td></tr>
                <tr><td className="p-2 border">der Mund / die Münder</td><td className="p-2 border">mouth</td></tr>
                <tr><td className="p-2 border">das Ohr / die Ohren</td><td className="p-2 border">ear / ears</td></tr>
                <tr><td className="p-2 border">der Arm / die Arme</td><td className="p-2 border">arm / arms</td></tr>
                <tr><td className="p-2 border">die Hand / die Hände</td><td className="p-2 border">hand / hands</td></tr>
                <tr><td className="p-2 border">das Bein / die Beine</td><td className="p-2 border">leg / legs</td></tr>
                <tr><td className="p-2 border">der Fuß / die Füße</td><td className="p-2 border">foot / feet</td></tr>
                <tr><td className="p-2 border">der Bauch / die Bäuche</td><td className="p-2 border">stomach / belly</td></tr>
                <tr><td className="p-2 border">der Rücken / die Rücken</td><td className="p-2 border">back</td></tr>
              </tbody>
            </table>
        </div>
        <div>
          <h4 className="font-bold text-xl mt-4 mb-2">Talking About Pain</h4>
          <p>To say a body part hurts, you can use the structure: <strong>[Possessive Article] + [Body Part] + tut weh.</strong></p>
          <p>If the body part is plural, use <strong>tun weh</strong>.</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Mein Kopf tut weh. (My head hurts.)</li>
              <li>Meine Füße tun weh. (My feet hurt.)</li>
          </ul>
          <p>You can also talk about having pain: Ich habe Kopfschmerzen (I have a headache) or Ich habe Bauchschmerzen (I have a stomach ache).</p>
        </div>
      </div>
    ),
    tip: "Many body parts that come in pairs are singular in their base form in German (e.g., das Auge, das Ohr), unlike in English. You only use the plural form 'die Augen' if you are explicitly talking about both eyes.",
    quiz: [
      {
        question: "What is 'der Rücken'?",
        options: ["The hand", "The stomach", "The head", "The back"],
        correctAnswer: "The back",
      },
      {
        question: "How do you say 'My eyes hurt'?",
        options: ["Mein Auge tut weh.", "Meine Augen tut weh.", "Mein Auge tun weh.", "Meine Augen tun weh."],
        correctAnswer: "Meine Augen tun weh.",
      },
      {
        question: "The word 'die Hand' means:",
        options: ["the head", "the hand", "the foot", "the nose"],
        correctAnswer: "the hand",
      },
      {
        question: "Which of these is masculine?",
        options: ["die Nase", "das Bein", "der Mund", "das Gesicht"],
        correctAnswer: "der Mund",
      },
      {
        question: "To say 'I have a headache', you say:",
        options: ["Ich habe Kopfweh.", "Ich habe Kopfschmerzen.", "Mein Kopf ist Schmerz.", "Mein Kopf tut Schmerz."],
        correctAnswer: "Ich habe Kopfschmerzen.",
      },
    ],
  },
  // Lesson 28: Transportation
  {
    title: "Transportation (Verkehrsmittel)",
    slug: "verkehrsmittel",
    excerpt: "Learn how to talk about different modes of transportation and the correct verbs and prepositions to use.",
    image: "https://placehold.co/800x450.png",
    aiHint: "city traffic cars bus",
    explanation: (
      <div className="space-y-6">
        <div>
          <p>How do you get around? Let's learn the words for transportation (<strong>die Verkehrsmittel</strong>).</p>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-muted/50"><th className="p-2 border">German</th><th className="p-2 border">English</th></tr></thead>
              <tbody>
                <tr><td className="p-2 border">das Auto</td><td className="p-2 border">car</td></tr>
                <tr><td className="p-2 border">der Bus</td><td className="p-2 border">bus</td></tr>
                <tr><td className="p-2 border">der Zug</td><td className="p-2 border">train</td></tr>
                <tr><td className="p-2 border">die U-Bahn</td><td className="p-2 border">subway/metro</td></tr>
                <tr><td className="p-2 border">die S-Bahn</td><td className="p-2 border">suburban train</td></tr>
                <tr><td className="p-2 border">die Straßenbahn</td><td className="p-2 border">tram</td></tr>
                <tr><td className="p-2 border">das Fahrrad</td><td className="p-2 border">bicycle</td></tr>
                <tr><td className="p-2 border">das Flugzeug</td><td className="p-2 border">airplane</td></tr>
                <tr><td className="p-2 border">zu Fuß</td><td className="p-2 border">on foot</td></tr>
              </tbody>
            </table>
        </div>
        <div>
          <h4 className="font-bold text-xl mt-4 mb-2">Using Verbs and Prepositions</h4>
          <p>To say you travel 'by' a vehicle, use the preposition <strong>mit</strong> (with), which always takes the <strong>dative case</strong>.</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li>For most vehicles, use the verb <strong>fahren</strong> (to drive, go).
                <ul className="list-circle list-inside ml-6"><li>Ich fahre mit <strong>dem</strong> Bus. (I am going by bus.)</li></ul>
              </li>
              <li>For airplanes, use <strong>fliegen</strong> (to fly).
                <ul className="list-circle list-inside ml-6"><li>Wir fliegen mit <strong>dem</strong> Flugzeug.</li></ul>
              </li>
              <li>For walking, use <strong>gehen</strong> (to go) and the phrase <strong>zu Fuß</strong>.
                <ul className="list-circle list-inside ml-6"><li>Ich gehe zu Fuß.</li></ul>
              </li>
          </ul>
        </div>
      </div>
    ),
    tip: "Remember that 'mit' is a dative preposition. This is why you say 'mit dem Bus' (der Bus -> dem Bus), 'mit der U-Bahn' (die U-Bahn -> der U-Bahn), and 'mit dem Fahrrad' (das Fahrrad -> dem Fahrrad).",
    quiz: [
      {
        question: "What is 'der Zug'?",
        options: ["The car", "The bus", "The bicycle", "The train"],
        correctAnswer: "The train",
      },
      {
        question: "Which verb do you use for flying?",
        options: ["fliegen", "gehen", "fahren", "laufen"],
        correctAnswer: "fliegen",
      },
      {
        question: "How do you say 'I am going by tram' (die Straßenbahn)?",
        options: ["Ich fahre mit die Straßenbahn.", "Ich fahre mit den Straßenbahn.", "Ich fahre mit der Straßenbahn."],
        correctAnswer: "Ich fahre mit der Straßenbahn.",
      },
      {
        question: "To say you are walking, you use the phrase:",
        options: ["mit Fuß", "am Fuß", "zu Fuß", "im Fuß"],
        correctAnswer: "zu Fuß",
      },
      {
        question: "The preposition 'mit' always requires which case?",
        options: ["Nominative", "Accusative", "Dative", "Genitive"],
        correctAnswer: "Dative",
      },
    ],
  },
  // Lesson 29: The Perfect Tense
  {
    title: "The Perfect Tense (Perfekt)",
    slug: "perfekt",
    excerpt: "Learn to form the perfect tense, the most common way to talk about the past in spoken German, using 'haben' or 'sein'.",
    image: "https://placehold.co/800x450.png",
    aiHint: "clock turning back",
    explanation: (
      <div className="space-y-6">
        <div>
          <p>The perfect tense (<strong>das Perfekt</strong>) is used to talk about completed actions, especially in conversation. It is a compound tense, formed with a helping verb (<strong>haben</strong> or <strong>sein</strong>) and a <strong>past participle</strong> (Partizip II).</p>
          <p>Structure: Subject + <strong>[Conjugated Helping Verb]</strong> + ... + <strong>[Past Participle at the end]</strong>.</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Forming the Past Participle</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Regular Verbs:</strong> ge- + (verb stem) + -t. (e.g., machen → gemacht; spielen → gespielt; kaufen → gekauft).</li>
              <li><strong>Irregular (Strong) Verbs:</strong> Often ge- + (verb stem, maybe with vowel change) + -en. These must be memorized. (e.g., sehen → gesehen; sprechen → gesprochen; gehen → gegangen).</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Choosing the Helping Verb: haben vs. sein</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>haben:</strong> Used for most verbs, especially transitive verbs (verbs with a direct object).
                <ul className="list-circle list-inside ml-6"><li>Ich <strong>habe</strong> einen Apfel <strong>gegessen</strong>. (I have eaten an apple.)</li></ul>
              </li>
              <li><strong>sein:</strong> Used for verbs that indicate a change of location (e.g., gehen, fahren, fliegen, kommen) or a change of state (e.g., aufwachen - to wake up, sterben - to die). Also for the verb 'bleiben' (to stay).
                <ul className="list-circle list-inside ml-6"><li>Ich <strong>bin</strong> nach Berlin <strong>gefahren</strong>. (I traveled to Berlin.)</li></ul>
              </li>
          </ul>
        </div>
      </div>
    ),
    tip: "When in doubt, 'haben' is the helping verb for about 80% of German verbs. But it's crucial to memorize the common verbs of motion that take 'sein', as this is a fundamental concept.",
    quiz: [
      {
        question: "The perfect tense is formed with a helping verb and a ____.",
        options: ["infinitive", "present participle", "past participle", "prefix"],
        correctAnswer: "past participle",
      },
      {
        question: "Which helping verb would you use for 'schwimmen' (to swim)?",
        options: ["sein", "haben", "werden", "müssen"],
        correctAnswer: "sein",
      },
      {
        question: "How do you say 'I have bought bread' (kaufen)?",
        options: ["Ich habe Brot gekauft.", "Ich bin Brot gekauft.", "Ich habe Brot kaufen.", "Ich bin Brot kaufen."],
        correctAnswer: "Ich habe Brot gekauft.",
      },
      {
        question: "Which verb would use 'haben' as its helping verb?",
        options: ["gehen (to go)", "fliegen (to fly)", "lesen (to read)", "aufstehen (to get up)"],
        correctAnswer: "lesen (to read)",
      },
      {
        question: "Choose the correct past participle for 'sprechen' (to speak).",
        options: ["gesprecht", "gesprach", "gesprochen", "sprechen"],
        correctAnswer: "gesprochen",
      },
    ],
  },
  // Lesson 30: Course Review
  {
    title: "A1 Course Review",
    slug: "a1-kurs-wiederholung",
    excerpt: "Review the key grammar points and vocabulary from the A1 course to solidify your knowledge and prepare for the next level.",
    image: "https://placehold.co/800x450.png",
    aiHint: "graduation cap books",
    explanation: getA1ReviewContent(),
    tip: "Don't be afraid to make mistakes! Every mistake is a learning opportunity. The most important thing is to actively use the language every day, even if it's just for a few minutes.",
    quiz: [
      {
        question: "In the sentence 'Gestern habe ich meinen Freund angerufen', what is 'angerufen'?",
        options: ["A modal verb", "A conjugated verb", "A past participle", "An infinitive"],
        correctAnswer: "A past participle",
      },
      {
        question: "Which case would you use for the person receiving a gift?",
        options: ["Nominative", "Accusative", "Dative", "Genitive"],
        correctAnswer: "Dative",
      },
      {
        question: "The sentence 'Ich will das Buch lesen.' demonstrates the rule for:",
        options: ["Separable verbs", "The perfect tense", "Modal verbs", "The imperative"],
        correctAnswer: "Modal verbs",
      },
      {
        question: "Which article changes to 'dem' in the dative case?",
        options: ["Masculine and Neuter", "Feminine and Plural", "Masculine and Feminine", "Only Masculine"],
        correctAnswer: "Masculine and Neuter",
      },
      {
        question: "What is the best way to continue improving your German?",
        options: ["Only study grammar", "Stop speaking to avoid mistakes", "Use the language actively and consistently", "Memorize the dictionary"],
        correctAnswer: "Use the language actively and consistently",
      },
    ],
  },
];
