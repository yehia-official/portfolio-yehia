"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, XCircle } from 'lucide-react';
import type { Lesson } from '@/lib/german-a1-data';

interface QuizProps {
    questions: Lesson['quiz'];
}

export const Quiz = ({ questions }: QuizProps) => {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [submitted, setSubmitted] = useState(false);
    
    const handleAnswerChange = (questionIndex: number, value: string) => {
        if (submitted) return;
        setAnswers(prev => ({ ...prev, [questionIndex]: value }));
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const handleReset = () => {
        setAnswers({});
        setSubmitted(false);
    }

    const correctAnswersCount = questions.filter((q, i) => answers[i] === q.correctAnswer).length;

    return (
        <Card className="mt-8 bg-secondary/50 border-border/60">
            <CardHeader>
                <CardTitle>Test Your Knowledge!</CardTitle>
                <CardDescription>Choose the correct answer for each question.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {questions.map((q, i) => (
                        <div key={i}>
                            <p className="font-semibold mb-3">{i + 1}. {q.question}</p>
                            <RadioGroup onValueChange={(value) => handleAnswerChange(i, value)} disabled={submitted} value={answers[i]}>
                                {q.options.map((option, j) => (
                                    <Label 
                                        key={j} 
                                        htmlFor={`q${i}-opt${j}`}
                                        className={`flex items-center space-x-3 p-3 rounded-md border transition-colors ${
                                            submitted && q.correctAnswer === option ? 'border-green-500 bg-green-500/10' : ''
                                        } ${
                                            submitted && answers[i] === option && q.correctAnswer !== option ? 'border-destructive bg-destructive/10' : ''
                                        }`}
                                    >
                                        <RadioGroupItem value={option} id={`q${i}-opt${j}`} />
                                        <span>{option}</span>
                                    </Label>
                                ))}
                            </RadioGroup>
                            {submitted && answers[i] !== q.correctAnswer && (
                                <div className="mt-2 text-sm flex items-center text-green-600 dark:text-green-500">
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    <span>
                                        Correct answer: {q.correctAnswer}
                                    </span>
                                
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    {!submitted ? (
                        <Button onClick={handleSubmit} disabled={Object.keys(answers).length !== questions.length}>Submit Answers</Button>
                    ) : (
                        <div className="flex flex-col items-center gap-4">
                            <Alert className={correctAnswersCount / questions.length > 0.5 ? "border-green-500" : "border-destructive"}>
                                <AlertTitle className="font-bold">Final Result</AlertTitle>
                                <AlertDescription>
                                    You answered {correctAnswersCount} out of {questions.length} questions correctly.
                                </AlertDescription>
                            </Alert>
                            <Button onClick={handleReset} variant="outline">Try Again</Button>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
