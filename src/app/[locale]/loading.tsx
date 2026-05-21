export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-white/90 backdrop-blur-[1px]">
      <div className="flex flex-col items-center gap-5">
        <div className="hoa-loader" />

        <p className="text-sm font-medium text-neutral-500">
          جاري التحميل...
        </p>
      </div>
    </div>
  );
}