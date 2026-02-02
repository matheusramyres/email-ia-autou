import clsx from 'clsx';

export const SkeletonEmailResponse = () => {
  return (
    <div
      className={clsx(
        'w-full mt-16  p-8 max-w-150',
        'bg-[#121214] rounded-3xl',
        'border border-white/5 animate-pulse',
      )}
    >
      <div className="h-4 w-20 bg-gray-700 rounded mb-3"></div>

      <div className="h-10 w-40 bg-gray-800 rounded-full mb-6"></div>

      <div className="h-4 w-32 bg-gray-700 rounded mb-4"></div>

      <div className="h-32 w-full bg-gray-800/50 rounded-[20px] mb-8"></div>

      <div className="flex justify-between gap-4 flex-col md:flex-row">
        <div className="h-12 w-full bg-gray-800 rounded-xl"></div>
        <div className="h-12 w-full bg-gray-700 rounded-xl"></div>
      </div>
    </div>
  );
};
