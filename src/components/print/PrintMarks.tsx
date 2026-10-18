import React from 'react';

// Print-production marks shared across the site: they draw the proof-sheet world
// (crop marks, registration target, CMYK control strip, proofer's pen) in currentColor or process inks.

interface MarkProps {
  className?: string;
}

export const RegistrationMark: React.FC<MarkProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="6.5" />
    <path d="M12 1v22M1 12h22" />
    <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
  </svg>
);

/** Four L-shaped trim marks drawn just outside the parent's corners. Parent must be `relative`. */
export const CropMarks: React.FC<{ offset?: number; length?: number; className?: string }> = ({
  offset = 10,
  length = 18,
  className = 'text-ink/50 dark:text-paper/40',
}) => {
  const corners = [
    { top: true, left: true },
    { top: true, left: false },
    { top: false, left: true },
    { top: false, left: false },
  ];
  return (
    <>
      {corners.map(({ top, left }) => {
        const v: React.CSSProperties = {
          position: 'absolute',
          width: 1,
          height: length,
          [top ? 'top' : 'bottom']: -(offset + length),
          [left ? 'left' : 'right']: 0,
        };
        const h: React.CSSProperties = {
          position: 'absolute',
          height: 1,
          width: length,
          [top ? 'top' : 'bottom']: 0,
          [left ? 'left' : 'right']: -(offset + length),
        };
        return (
          <React.Fragment key={`${top}-${left}`}>
            <span aria-hidden="true" className={`bg-current pointer-events-none ${className}`} style={v} />
            <span aria-hidden="true" className={`bg-current pointer-events-none ${className}`} style={h} />
          </React.Fragment>
        );
      })}
    </>
  );
};

const INKS = ['#3fa7cf', '#c8467f', '#e8c547', '#121212'];
const TINTS = [1, 0.5, 0.25];

/** CMYK control strip: each process ink at 100 / 50 / 25 percent. */
export const CmykStrip: React.FC<{ orientation?: 'vertical' | 'horizontal'; className?: string }> = ({
  orientation = 'horizontal',
  className = '',
}) => (
  <div
    aria-hidden="true"
    className={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row'} ${className}`}
  >
    {INKS.flatMap((ink) =>
      TINTS.map((tint) => (
        <span
          key={`${ink}-${tint}`}
          className="flex-1"
          // Tints are mixed toward paper stock, as a printed tint patch would be
          style={{ backgroundColor: tint === 1 ? ink : `color-mix(in srgb, ${ink} ${tint * 100}%, #fdfbf7)` }}
        />
      ))
    )}
  </div>
);

/** A hand-drawn coral loop that circles whatever sits under it, drawn once on load. */
export const PenCircle: React.FC<MarkProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 160"
    preserveAspectRatio="none"
    className={`pointer-events-none ${className}`}
    aria-hidden="true"
    fill="none"
  >
    <path
      className="pen-stroke"
      style={{ ['--pen-length' as string]: 980 }}
      d="M232 14 C 120 4, 22 22, 12 78 C 4 124, 96 152, 214 148 C 318 145, 392 120, 388 72 C 384 30, 300 10, 196 12 C 168 13, 150 16, 138 20"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

/** A short leader stroke tying a handwritten note to the fact it points at. */
export const PenLeader: React.FC<MarkProps> = ({ className = '' }) => (
  <svg viewBox="0 0 90 60" className={`pointer-events-none ${className}`} aria-hidden="true" fill="none">
    <path
      className="pen-stroke"
      style={{ ['--pen-length' as string]: 160 }}
      d="M4 6 C 30 10, 58 26, 78 50 M 66 48 L 79 52 L 77 38"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
