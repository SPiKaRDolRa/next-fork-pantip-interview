export default function LoadingSkeleton() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="bg-gray-200 h-[300px] animate-pulse rounded-lg"></div>
        ))}
      </div>
    );
  }
  