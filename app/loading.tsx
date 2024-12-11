export default function Loading() {
  return (
    <div className="fixed inset-0 z-[1111] flex h-full w-full items-center justify-center overflow-hidden bg-white">
      <div className="relative size-[100px] animate-spin rounded-[50%] border-4 border-solid border-transparent border-l-[#62ab00] border-t-[#62ab00]">
        <span className="absolute bottom-[15px] left-[15px] right-[15px] top-[15px] animate-spin rounded-[50%] border-4 border-solid border-transparent border-l-yellow-400 border-t-yellow-400"></span>
      </div>
    </div>
  );
}
