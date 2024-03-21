import { useEffect, useRef, useState } from "react";

// Custom hook for fetching data
function useStarsCount() {
  const [starsCount, setStarsCount] = useState<number>(3000);

  useEffect(() => {
    const fetchStarsCount = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/keploy/keploy"
        );
        if (response.ok) {
          const data = await response.json();
          setStarsCount(data.stargazers_count);
        } else {
          console.error("Failed to fetch stars count", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching stars count:", error);
      }
    };

    fetchStarsCount();
  }, []);

  return starsCount;
}

// Custom hook for counting animation
function useCountAnimation(start: number, target: number, duration: number) {
  const [number, setNumber] = useState(start);
  const increment = Math.floor(Math.abs(start - target) / (duration / 10));

  useEffect(() => {
    const timer = setInterval(() => {
      if (number < target) {
        setNumber((num) => Math.min(num + increment, target));
      } else if (number > target) {
        setNumber((num) => Math.max(num - increment, target));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [number, target, increment]);

  return number;
}

export default function CountingNumbers({
  className,
  reverse = false,
  start = reverse ? 1000 : 0,
  interval = 10,
  duration = 800,
}: {
  className: string;
  reverse?: boolean;
  start?: number;
  interval?: number;
  duration?: number;
}) {
  const [top, setTop] = useState<boolean>(true);
  const starsCount = useStarsCount();
  const number = useCountAnimation(start, starsCount, duration);
  const ref = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };

    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <p className={className} ref={ref}>
      {Intl.NumberFormat().format(number)}
    </p>
  );
}
