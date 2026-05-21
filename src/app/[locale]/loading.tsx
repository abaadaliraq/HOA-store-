export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#050505]">
      <div className="flex flex-col items-center gap-4">
        <img
          src="/loading-stamp.png"
          alt="House of Antiques loading"
          className="hoa-initial-stamp-loader"
        />

        <p className="text-xs font-medium text-white/70">
          جاري فتح بيت التحفيات...
        </p>
      </div>
    </div>
  );
}