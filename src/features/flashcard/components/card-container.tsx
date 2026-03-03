type Props = {
  question: string;
  answer: string;
  showAnswer: boolean;
  onToggle: () => void;
};

export const CardContainer = ({ question, answer, showAnswer, onToggle }: Props) => {
  return (
    <div
      className="w-full max-w-lg h-64 cursor-pointer select-none"
      style={{ perspective: "1200px" }}
      onClick={onToggle}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: showAnswer ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front — Question */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-md p-8 text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-4">
            Question
          </span>
          <p className="text-lg font-semibold text-gray-800 leading-relaxed">{question}</p>
          <p className="text-xs text-gray-400 mt-6">Click card to reveal answer</p>
        </div>

        {/* Back — Answer */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-blue-600 shadow-md p-8 text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-4">
            Answer
          </span>
          <p className="text-base text-white leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};
