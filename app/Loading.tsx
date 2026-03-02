export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <span className="loading-dot size-3 rounded-full bg-orange-500" />
        <span className="loading-dot size-3 rounded-full bg-orange-500" />
        <span className="loading-dot size-3 rounded-full bg-orange-500" />
      </div>
    </div>
  );
}
