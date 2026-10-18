import React from 'react';
import { CmykStrip } from '../print/PrintMarks';
import { useScrollProgressVar } from '../../lib/motion';

/** Reading progress as a CMYK control strip that prints across the top edge as the page scrolls. */
export const ScrollProofStrip: React.FC = () => {
  const ref = useScrollProgressVar<HTMLDivElement>();
  return (
    <div ref={ref} aria-hidden="true" className="proof-progress fixed top-0 inset-x-0 z-[60] h-[3px] pointer-events-none">
      <CmykStrip className="h-full" />
    </div>
  );
};
