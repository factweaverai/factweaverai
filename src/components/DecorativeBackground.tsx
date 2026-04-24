"use client";
export default function DecorativeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px] animate-float" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-yellow-400/10 blur-[120px] animate-float-slow" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        {[...Array(8)].map((_, i) => (
          <g key={i}>
            <circle cx={100 + i * 120} cy={100 + (i % 3) * 150} r="2" fill="#F59E0B" className="node-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
            {i < 7 && <line x1={100 + i * 120} y1={100 + (i % 3) * 150} x2={220 + i * 120} y2={100 + ((i+1) % 3) * 150} stroke="#F59E0B" strokeWidth="0.5" opacity="0.3" />}
          </g>
        ))}
      </svg>
    </div>
  );
}