import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";

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
    <div className="flex items-center gap-3 mt-8">
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="rounded-full w-11 h-11"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        onClick={toggleAnswer}
        className="min-w-[152px] rounded-full"
        variant={showAnswer ? "outline" : "default"}
      >
        {showAnswer ? (
          <>
            <EyeOff className="w-4 h-4 mr-2" />
            Hide Answer
          </>
        ) : (
          <>
            <Eye className="w-4 h-4 mr-2" />
            Show Answer
          </>
        )}
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        disabled={currentIndex === total - 1}
        className="rounded-full w-11 h-11"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};
