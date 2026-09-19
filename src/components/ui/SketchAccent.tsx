import { CSSProperties } from "react";

type AccentProps = { className?: string; style?: CSSProperties };

export function SketchUnderline({ className = "", style }: AccentProps) {
  return (
    <svg viewBox="0 0 220 28" aria-hidden="true" className={className} style={style}>
      <path d="M4 18 C 42 8, 72 25, 112 14 S 180 8, 216 13" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M10 24 C 54 18, 83 29, 126 20 S 181 16, 211 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity=".65" />
    </svg>
  );
}

export function SketchStar({ className = "", style }: AccentProps) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" className={className} style={style}>
      <path d="M40 4 L44 31 L72 18 L50 39 L76 49 L48 49 L58 75 L39 54 L23 76 L28 50 L4 56 L29 41 L8 22 L34 32 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function SketchArrow({ className = "", style }: AccentProps) {
  return (
    <svg viewBox="0 0 100 40" aria-hidden="true" className={className} style={style}>
      <path d="M5 20 C 34 16, 56 18, 86 19" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M70 8 L91 19 L72 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
