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
    <div className="flex flex-col min-h-screen justify-center items-center">

      <Progress
        currentIndex={currentIndex}
        total={flashcards.length}
      />

      <CardContainer
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
        showAnswer={showAnswer}
      />

      <Footer
        handleNext={handleNext}
        handlePrev={handlePrev}
        toggleAnswer={toggleAnswer}
        showAnswer={showAnswer}
        currentIndex={currentIndex}
        total={flashcards.length}
      />
    </div>
  )
}