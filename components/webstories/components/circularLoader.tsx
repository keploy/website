"use client"
import { useEffect, useRef } from 'react';
import styles from "@/app/(default)/webstories/css/CircularLoader.module.css";

const CircularLoader: React.FC = () => {
  const circleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    let progress = 0;
    const totalDuration = 1000; 
    const intervalDuration = 10; 
    const increment = (intervalDuration / totalDuration) * 100; 

    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        window.location.href = '/webstories'; 
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
          r="45"  
        />
        <circle
          className={styles.progressCircle}
          cx="50"
          cy="50"
          r="45"  
          ref={circleRef}
        />
      </svg>
      <p className={'text-md text-center text-slate-200'}>Up-Next <br /><span>Slug</span></p>
      <div className={styles.playIcon}>▶</div>
    </div>
  );
};

export default CircularLoader;
