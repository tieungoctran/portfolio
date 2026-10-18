import React from 'react';
import { useInView } from '../../lib/motion';

type RevealTag = 'div' | 'li' | 'section' | 'figure' | 'header';

/**
 * "Ink pass" entrance: the block prints left to right like a print head when it first scrolls into view.
 * Content stays visible unless the Layout has marked the page `motion-ready` (JS on, motion allowed).
 */
export const Reveal: React.FC<{
  as?: RevealTag;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ as = 'div', delay = 0, className = '', style, children }) => {
  const { ref, inView } = useInView<HTMLElement>();
  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ ...style, ['--reveal-delay' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};
