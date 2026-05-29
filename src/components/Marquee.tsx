export default function Marquee() {
  const items = [
    "CALL US NOW",
    "MEMBERSHIP PRICING STARTS RS.999/- ONLY",
    "JOIN NOW",
    "500+ SATISFIED CLIENTS",
    "24/7 CUSTOMER SUPPORT",
  ];

  return (
    <div className="w-full bg-prime-neon overflow-hidden py-3 border-y border-black">
      <div className="flex items-center whitespace-nowrap animate-marquee w-max">
        {/* Double the list for seamless looping */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="text-black font-bebas text-xl sm:text-2xl tracking-widest uppercase">
              {item}
            </span>
            <span className="ml-12 text-black/40 text-xl font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
