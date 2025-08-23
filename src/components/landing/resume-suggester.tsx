"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Wand2 } from "lucide-react";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  resumeSuggestions,
  type ResumeSuggestionsInput,
} from "@/ai/flows/resume-suggestions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  skills: z
    .string()
    .min(10, "Por favor, forneça mais detalhes sobre suas habilidades."),
  experience: z
    .string()
    .min(20, "Por favor, forneça mais detalhes sobre sua experiência."),
});

export default function ResumeSuggester() {
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Limpa o formulario e a reposta ao montar o componente
  useEffect(() => {
    form.reset();
    setSuggestion(null);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: "",
      experience: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestion(null);
    try {
      const result = await resumeSuggestions(values as ResumeSuggestionsInput);
      setSuggestion(result.suggestions);
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Ocorreu um erro.",
        description: "Falha ao gerar sugestões. Por favor, tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="benefits"
      className="bg-secondary flex justify-center px-5 py-12 sm:px-0 lg:py-24"
    >
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Receba Feedback Instantâneo do seu Currículo
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Nossa ferramenta com IA analisa suas habilidades e experiência
              para fornecer sugestões personalizadas, ajudando você a se
              destacar para os empregadores.
            </p>
          </div>
          <Card className="w-full shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <Wand2 className="text-primary h-6 w-6" />
                Assistente de Currículo com IA
              </CardTitle>
              <CardDescription>
                Insira suas habilidades e experiência de trabalho para receber
                conselhos personalizados.
              </CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-4 py-5">
                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Suas Habilidades</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="ex: JavaScript, Gerenciamento de Projetos, Falar em Público..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sua Experiência</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva seus cargos e conquistas anteriores..."
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full font-bold"
                  >
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      "Gerar Sugestões"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </div>
        {suggestion && (
          <Card className="animate-in fade-in-50 mt-8 shadow-lg duration-500">
            <CardHeader>
              <CardTitle className="font-headline">
                Suas Sugestões Personalizadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="font-body text-foreground/90 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: marked(suggestion) }}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
