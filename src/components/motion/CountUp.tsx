import React from 'react';
import { useCountUp, useInView } from '../../lib/motion';

/**
 * A measured figure that counts up once when it scrolls into view.
 * The final figure reserves the width (no layout shift) and is what screen readers hear.
 */
export const CountUp: React.FC<{ value: string; delay?: number; className?: string }> = ({ value, delay = 0, className = '' }) => {
  const { ref, inView } = useInView<HTMLSpanElement>('0px 0px -8% 0px');
  const display = useCountUp(value, inView, { delay });
  return (
    <span ref={ref} className={`inline-grid tabular-nums ${className}`}>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {value}
      </span>
      <span className="col-start-1 row-start-1" aria-hidden="true">
        {display}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
};
