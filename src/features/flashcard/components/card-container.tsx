import { Card } from "@/components/ui/card";

type Props = {
  question: string;
  answer: string;
  showAnswer: boolean;
};

export const CardContainer = ({ question, answer, showAnswer }: Props) => {
  return (
    <Card className="w-[400px] p-6 mt-4 text-center text-lg">
      <p className="font-semibold">{question}</p>

      {showAnswer && (
        <p className="mt-4 text-green-600 transition-all duration-300">
          {answer}
        </p>
      )}
    </Card>
  );
};
