export default function FloatingDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      {/* Large blurred orbs */}
      <div className="floating-orb floating-orb-1 absolute top-[8%] left-[3%] w-44 h-44 rounded-full bg-[#F8E1E7]/25 blur-[80px]" />
      <div className="floating-orb floating-orb-2 absolute top-[25%] right-[5%] w-56 h-56 rounded-full bg-[#C1D5C0]/20 blur-[90px]" />
      <div className="floating-orb floating-orb-3 absolute top-[50%] left-[8%] w-48 h-48 rounded-full bg-[#E8C9D0]/20 blur-[80px]" />
      <div className="floating-orb floating-orb-4 absolute top-[72%] right-[10%] w-40 h-40 rounded-full bg-[#F8E1E7]/18 blur-[70px]" />
      <div className="floating-orb floating-orb-5 absolute top-[40%] left-[45%] w-36 h-36 rounded-full bg-[#C1D5C0]/15 blur-[80px]" />
      <div className="floating-orb floating-orb-1 absolute top-[90%] left-[20%] w-32 h-32 rounded-full bg-[#E8C9D0]/15 blur-[60px]" />

      {/* Small petal-like shapes */}
      <div className="floating-petal floating-petal-1 absolute top-[15%] left-[20%] w-4 h-4 rounded-full bg-[#F8E1E7]/40" />
      <div className="floating-petal floating-petal-2 absolute top-[35%] right-[25%] w-3 h-3 rounded-full bg-[#C1D5C0]/50" />
      <div className="floating-petal floating-petal-3 absolute top-[55%] left-[70%] w-5 h-5 rounded-full bg-[#E8C9D0]/35" />
      <div className="floating-petal floating-petal-4 absolute top-[75%] left-[30%] w-3 h-3 rounded-full bg-[#C1D5C0]/40" />
      <div className="floating-petal floating-petal-5 absolute top-[20%] right-[15%] w-4 h-4 rounded-full bg-[#F8E1E7]/30" />
      <div className="floating-petal floating-petal-1 absolute top-[65%] right-[40%] w-3 h-3 rounded-full bg-[#E8C9D0]/45" />
      <div className="floating-petal floating-petal-3 absolute top-[85%] left-[60%] w-4 h-4 rounded-full bg-[#C1D5C0]/35" />
      <div className="floating-petal floating-petal-2 absolute top-[45%] left-[15%] w-3 h-3 rounded-full bg-[#F8E1E7]/40" />
    </div>
  );
}
