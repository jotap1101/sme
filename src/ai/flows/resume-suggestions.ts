"use server";

/**
 * @fileOverview A resume suggestion AI agent.
 *
 * - resumeSuggestions - A function that handles the resume suggestion process.
 * - ResumeSuggestionsInput - The input type for the resumeSuggestions function.
 * - ResumeSuggestionsOutput - The return type for the resumeSuggestions function.
 */

import { z } from "genkit";

import { ai } from "@/ai/genkit";

const ResumeSuggestionsInputSchema = z.object({
  skills: z
    .string()
    .describe("Uma lista de habilidades que o candidato possui."),
  experience: z.string().describe("A experiência de trabalho do candidato."),
});
export type ResumeSuggestionsInput = z.infer<
  typeof ResumeSuggestionsInputSchema
>;

const ResumeSuggestionsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe("Sugestões de currículo personalizadas para o candidato."),
});
export type ResumeSuggestionsOutput = z.infer<
  typeof ResumeSuggestionsOutputSchema
>;

export async function resumeSuggestions(
  input: ResumeSuggestionsInput,
): Promise<ResumeSuggestionsOutput> {
  return resumeSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: "resumeSuggestionsPrompt",
  input: { schema: ResumeSuggestionsInputSchema },
  output: { schema: ResumeSuggestionsOutputSchema },
  prompt: `Você é um especialista em redação de currículos. Com base nas habilidades e experiência do candidato, forneça sugestões de currículo personalizadas. A resposta deve ser em português do Brasil.

Habilidades: {{{skills}}}
Experiência: {{{experience}}}

Sugestões:`,
});

const resumeSuggestionsFlow = ai.defineFlow(
  {
    name: "resumeSuggestionsFlow",
    inputSchema: ResumeSuggestionsInputSchema,
    outputSchema: ResumeSuggestionsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  },
);
