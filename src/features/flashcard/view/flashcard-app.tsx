"use client"

import { useState } from "react"
import { flashcards } from "../data/flashcards"
import { Progress } from "../components/progress"
import { CardContainer } from "../components/card-container"
import { Footer } from "../components/footer"

export const FlashcardApp = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
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

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full border-b bg-white px-6 py-4 flex items-center justify-between shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-gray-900">⚡ Flash Cards</h1>
          <p className="text-sm text-gray-500">JavaScript Q&amp;A</p>
        </div>
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {flashcards.length} cards
        </span>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 pb-16">
        <div className="w-full max-w-lg">
          <Progress
            currentIndex={currentIndex}
            total={flashcards.length}
          />

          <CardContainer
            question={flashcards[currentIndex].question}
            answer={flashcards[currentIndex].answer}
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
              total={flashcards.length}
            />
          </div>
        </div>
      </main>
    </div>
  )
}