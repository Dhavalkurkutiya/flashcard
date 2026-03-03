type ProgressProps = {
  currentIndex: number;
  total: number;
};

export const Progress = ({ currentIndex, total }: ProgressProps) => {
  const percentage = ((currentIndex + 1) / total) * 100;

  return (
    <div className="w-full max-w-lg mb-6">
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span className="font-medium">Card {currentIndex + 1} of {total}</span>
        <span className="font-medium">{Math.round(percentage)}% complete</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
