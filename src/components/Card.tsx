import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <section className={`rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-premium backdrop-blur-xl ${className}`}>
      {children}
    </section>
  );
}
