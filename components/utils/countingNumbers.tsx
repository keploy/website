"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const formatStars = (num:number)=>Intl.NumberFormat('en-US', {
  notation: "compact",
  maximumFractionDigits: 1
}).format(num);

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
  const [starsCount, setStarsCount] = useState<number>(5000);
  const [number, setNumber] = useState(start);


  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  let value: number;

  useEffect(() => {
    const fetchStarsCount = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/keploy/keploy"
        );
        if (response.ok) {
          const data = await response.json();
          // Use setStarsCount to update the state
          setStarsCount(data.stargazers_count);
        } else {
          console.error("Failed to fetch stars count", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching stars count:", error);
      }
    };

    fetchStarsCount();
  }, [starsCount]); // Include starsCount as a dependency


  let increment = Math.floor(Math.abs(start - starsCount) / (duration / interval));
  if (increment === 0) {
    increment = 1;
  }
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let timer = setInterval(() => {
        if (reverse) {
          if (number > starsCount) {
            setNumber((num) => {
              let newstarsCount = num - increment;
              if (newstarsCount < starsCount) {
                newstarsCount = starsCount;
                if (timer) clearInterval(timer);
              }
              return newstarsCount;
            });
          } else if (timer) {
            clearInterval(timer);
          }
        } else {
          if (number < starsCount) {
            setNumber((num) => {
              let newstarsCount = num + increment;
              if (newstarsCount > starsCount) {
                newstarsCount = starsCount;
                if (timer) clearInterval(timer);
              }
              return newstarsCount;
            });
          } else if (timer) {
            clearInterval(timer);
          }
        }
      }, interval);
    }
  }, [isInView]);



  return (
    <p className={className} ref={ref}>
      {formatStars(number)}
    </p>
  );
}