/** Overlay layar retak — easter egg klik logo 5x. */
export function CrackedScreen({ active }: { active: boolean }) {
  return (
    <div className={`cracked-screen-overlay${active ? ' active' : ''}`}>
      <svg width="100%" height="100%" viewBox="0 0 1000 800" preserveAspectRatio="none">
        <path
          d="M 500 400 L 200 100 M 500 400 L 800 150 M 500 400 L 900 700 M 500 400 L 100 650 M 500 400 L 450 50 M 500 400 L 520 780"
          stroke="#FFF"
          strokeWidth="3"
          strokeDasharray="10 5"
          fill="none"
        />
        <circle cx="500" cy="400" r="30" fill="none" stroke="#FFF" strokeWidth="4" />
      </svg>
      <div className="cracked-screen-box">💥 LAYAR RETAK! &quot;SIAPA SURUH KLIK LOGO TERUS-TERUSAN?!&quot;</div>
    </div>
  );
}
