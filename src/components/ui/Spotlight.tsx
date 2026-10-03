"use client";

import { useRef, type ReactNode } from "react";

type SpotlightGroupProps = {
  children: ReactNode;
  className?: string;
};

/**
 * 子孫の .spot 要素に、カーソル位置を要素ローカル座標の --mx / --my として渡す。
 * 枠線のハイライト描画自体は globals.css の .spot::before が担う。
 */
export function SpotlightGroup({ children, className = "" }: SpotlightGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      ref.current?.querySelectorAll<HTMLElement>(".spot").forEach((el) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${clientX - r.left}px`);
        el.style.setProperty("--my", `${clientY - r.top}px`);
      });
    });
  };

  return (
    <div ref={ref} data-spotlight onPointerMove={onPointerMove} className={className}>
      {children}
    </div>
  );
}
