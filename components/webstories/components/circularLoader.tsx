import { useEffect, useRef, useState } from "react";
import styles from "@/app/(default)/webstories/css/CircularLoader.module.css";
import { DataFiles } from "@/components/utils/data";

const CircularLoader = ({ slug }: { slug: string | string[] }) => {
  const circleRef = useRef<SVGCircleElement | null>(null);
  const [nextIndexSlug, setNextIndexSlug] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    const DataFilesNew = [...DataFiles].reverse(); // Explicitly reverse DataFiles
    const index = DataFilesNew.findIndex((story) => story.Slug === slug);
    if (index !== -1) {
      setCurrentIndex(index);
      setNextIndexSlug(
        index === DataFilesNew.length - 1
          ? DataFilesNew[0].Slug
          : DataFilesNew[index + 1]?.Slug
      );
    }
  }, [slug]);

  useEffect(() => {
    let progress = 0;
    const totalDuration = 1000;
    const intervalDuration = 10;
    const increment = (intervalDuration / totalDuration) * 100;

    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        setCompleted(true); // Set completed to true
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

  useEffect(() => {
    if (completed) {
      // Redirect after 1 second
      const redirectTimeout = setTimeout(() => {
        window.location.href = `/webstories/${nextIndexSlug}`;
      }, 1000);

      return () => clearTimeout(redirectTimeout);
    }
  }, [completed, nextIndexSlug]);

  return (
    <div
      className={`${styles.loaderContainer} flex flex-col gap-5 self-center`}
    >
      <svg className={styles.loader} viewBox="0 0 100 100">
        <circle className={styles.backgroundCircle} cx="50" cy="50" r="45" />
        <circle
          className={styles.progressCircle}
          cx="50"
          cy="50"
          r="45"
          ref={circleRef}
        />
      </svg>
      <p
        className={" text-md  mx-auto text-center text-slate-200"}
      >
        Up-Next <br />
        <span>{nextIndexSlug}</span>
      </p>

      <div className={styles.playIcon}>▶</div>
    </div>
  );
};

export default CircularLoader;
