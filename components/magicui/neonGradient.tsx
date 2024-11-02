"use client";

import React, { ReactNode, CSSProperties, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NeonColorsProps {
  firstColor: string;
  secondColor: string;
}

interface NeonButtonProps {
  className?: string;
  children: ReactNode;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: NeonColorsProps;
  [key: string]: any;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [children]);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
          "--button-width": `${dimensions.width}px`,
          "--button-height": `${dimensions.height}px`,
          "--pseudo-element-width": `${dimensions.width + borderSize * 2}px`,
          "--pseudo-element-height": `${dimensions.height + borderSize * 2}px`,
          "--after-blur": `${dimensions.width / 6}px`,
        } as CSSProperties
      }
    >
      <div
        className={cn(
          "absolute -inset-[var(--border-size)] rounded-[var(--border-radius)] z-[-1]",
          "before:absolute before:inset-0 before:rounded-[var(--border-radius)] before:content-['']",
          "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
          "before:animate-background-position-spin",
          "after:absolute after:inset-0 after:rounded-[var(--border-radius)] after:content-['']",
          "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%]",
          "after:blur-[var(--after-blur)] after:opacity-70",
          "after:animate-background-position-spin"
        )}
      />
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

export { NeonButton };
