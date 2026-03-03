import { Button } from "@/components/ui/button";

type Props = {
  handleNext: () => void;
  handlePrev: () => void;
  toggleAnswer: () => void;
  showAnswer: boolean;
  currentIndex: number;
  total: number;
};

export const Footer = ({
  handleNext,
  handlePrev,
  toggleAnswer,
  showAnswer,
  currentIndex,
  total,
}: Props) => {
  return (
    <div className="flex gap-4 mt-4">
      <Button onClick={handlePrev} disabled={currentIndex === 0}>
        Previous
      </Button>

      <Button onClick={toggleAnswer}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </Button>

      <Button onClick={handleNext} disabled={currentIndex === total - 1}>
        Next
      </Button>
    </div>
  );
};
