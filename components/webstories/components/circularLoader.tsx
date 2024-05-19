"use client"
import { useEffect, useRef } from 'react';
import styles from "@/app/(default)/webstories/css/CircularLoader.module.css";

const CircularLoader: React.FC = () => {
  const circleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    let progress = 0;
    const totalDuration = 1000; // Total duration for the animation in milliseconds
    const intervalDuration = 10; // Interval duration in milliseconds
    const increment = (intervalDuration / totalDuration) * 100; // Incremental progress per interval

    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        // window.location.href = 'https://github.com/'; // Redirect to your target URL after animation completes
      } else {
        progress += increment;
        const offset = (283 * (100 - progress)) / 100;
        if (circleRef.current) {
          circleRef.current.style.strokeDashoffset = offset.toString();
        }
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.loaderContainer} flex flex-col gap-5 self-center`} >
      <svg className={styles.loader} viewBox="0 0 100 100">
        <circle
          className={styles.backgroundCircle}
          cx="50"
          cy="50"
          r="45"  /* Adjusted radius to fit within the new size */
        />
        <circle
          className={styles.progressCircle}
          cx="50"
          cy="50"
          r="45"  /* Adjusted radius to fit within the new size */
          ref={circleRef}
        />
      </svg>
      <p className={'text-md text-center text-slate-200'}>Up-Next</p>
      <div className={styles.playIcon}>▶</div>
    </div>
  );
};

export default CircularLoader;
