"use client"

import { useState, useEffect, useCallback } from "react"
import { RefreshCw } from "lucide-react"
import { flashcards as fallbackCards } from "../data/flashcards"
import { fetchInterviewQuestions } from "../services/fetch-questions"
import { Progress } from "../components/progress"
import { CardContainer } from "../components/card-container"
import { Footer } from "../components/footer"
import { Button } from "@/components/ui/button"
import type { Flashcard } from "../data/flashcards"

export const FlashcardApp = () => {
  const [cards, setCards] = useState<Flashcard[]>(fallbackCards)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadQuestions = useCallback(async () => {
    setLoading(true)
    setError(null)
    setCurrentIndex(0)
    setShowAnswer(false)
    try {
      const questions = await fetchInterviewQuestions()
      setCards(questions)
    } catch {
      setError("Could not load questions. Showing offline cards.")
      setCards(fallbackCards)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadQuestions()
  }, [loadQuestions])

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setShowAnswer(false)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      setShowAnswer(false)
    }
  }

  const toggleAnswer = () => setShowAnswer((prev) => !prev)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full border-b bg-white px-6 py-4 flex items-center justify-between shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-gray-900">⚡ Flash Cards</h1>
          <p className="text-sm text-gray-500">JavaScript Q&amp;A</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={loadQuestions}
          disabled={loading}
          className="rounded-full gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          {loading ? "Loading…" : "New Questions"}
        </Button>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 pb-16">
        {loading ? (
          <div className="w-full max-w-lg space-y-4 animate-pulse">
            <div className="h-4 bg-gray-200 rounded-full w-full" />
            <div className="h-64 bg-gray-200 rounded-2xl w-full" />
            <div className="flex justify-center gap-3 pt-2">
              <div className="h-11 w-11 bg-gray-200 rounded-full" />
              <div className="h-11 w-36 bg-gray-200 rounded-full" />
              <div className="h-11 w-11 bg-gray-200 rounded-full" />
            </div>
          </div>
        ) : (
          <div className="w-full max-w-lg">
            {error && (
              <p className="text-amber-600 text-sm text-center mb-4 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
                ⚠️ {error}
              </p>
            )}

            <Progress currentIndex={currentIndex} total={cards.length} />

            <CardContainer
              question={cards[currentIndex].question}
              answer={cards[currentIndex].answer}
              showAnswer={showAnswer}
              onToggle={toggleAnswer}
            />

            <div className="flex justify-center">
              <Footer
                handleNext={handleNext}
                handlePrev={handlePrev}
                toggleAnswer={toggleAnswer}
                showAnswer={showAnswer}
                currentIndex={currentIndex}
                total={cards.length}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}