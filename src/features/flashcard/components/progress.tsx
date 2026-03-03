type ProgressProps = {
  currentIndex: number;
  total: number;
};

export const Progress = ({
  currentIndex,
  total,
}: ProgressProps) => {
  const percentage = ((currentIndex + 1) / total) * 100;

  return (
    <div className="w-[400px] mb-4">
      {/* Text */}
      <div className="flex justify-between text-sm mb-1">
        <span>
          Question {currentIndex + 1} / {total}
        </span>
        <span>{Math.round(percentage)}%</span>
      </div>

      {/* Progress Bar Background */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        {/* Progress Fill */}
        <div
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
