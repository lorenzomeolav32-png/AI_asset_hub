export function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* fine engineering grid, faded toward the edges */}
      <div className="grid-overlay absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />

      {/* primary emerald bloom */}
      <div
        className="absolute -top-48 left-1/2 h-[560px] w-[880px] -translate-x-1/2 rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent-glow), transparent)",
        }}
      />

      {/* cool secondary bloom for depth */}
      <div
        className="absolute left-[-140px] top-1/3 h-[420px] w-[420px] rounded-full opacity-60 blur-[140px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(45,150,255,0.10), transparent)",
        }}
      />

      {/* grain */}
      <div className="noise absolute inset-0 mix-blend-soft-light" />

      {/* vignette that fades content into the page bg */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% -10%, transparent 42%, var(--bg) 80%)",
        }}
      />
    </div>
  );
}
