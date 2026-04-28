const MeshBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid bg-[size:64px_64px] opacity-[0.07]" />
      <div className="absolute left-[-10%] top-[-10%] h-[32rem] w-[32rem] animate-pulseSoft rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute right-[-8%] top-[10%] h-[24rem] w-[24rem] animate-drift rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[30%] h-[20rem] w-[20rem] animate-float rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,15,30,0.22)_55%,rgba(10,15,30,0.92)_100%)]" />
    </div>
  );
};

export default MeshBackground;