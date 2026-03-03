import type { Flashcard } from "../data/flashcards";

type OpenTDBResult = {
  question: string;
  correct_answer: string;
  difficulty: string;
};

type OpenTDBResponse = {
  response_code: number;
  results: OpenTDBResult[];
};

// Decode HTML entities returned by Open Trivia DB
function decodeHtml(html: string): string {
  if (typeof window === "undefined") return html;
  const el = document.createElement("textarea");
  el.innerHTML = html;
  return el.value;
}

export async function fetchInterviewQuestions(): Promise<Flashcard[]> {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=10&category=18&type=multiple"
  );

  if (!res.ok) throw new Error("API request failed");

  const data: OpenTDBResponse = await res.json();

  if (data.response_code !== 0) throw new Error("No questions returned");

  return data.results.map((item, index) => ({
    id: index + 1,
    question: decodeHtml(item.question),
    answer: decodeHtml(item.correct_answer),
  }));
}
