"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function formatStarsCount(number: number) {
  if (number < 1000) {
    return (number / 1000).toFixed(1) + 'K';
  } else {
    return (number / 1000).toFixed(1) + 'K';
  }
}

export default function CountingNumbers({
  interval = 10,
  increment = 100
}: {
  interval?: number;
  increment?: number;
}) {

  const [starsCount, setStarsCount] = useState<number>(0);
  const [number, setNumber] = useState<number>(0)

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


  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && starsCount != 0) {
      const starsInterval = setInterval(() => {
        if (number < starsCount) {
          setNumber((prev) => {

            let newCount = prev + increment;
            if (newCount > starsCount) {
              newCount = starsCount
              if (starsInterval) clearInterval(starsInterval)
            }

            return newCount;
          })
        } else {

          clearInterval(starsInterval)
        }

      }, interval)

    }
  }, [isInView, starsCount]);

  return (
    <div className="relative text-base flex gap-1 w-9 items-center" ref={ref}>

      {number === 0 ? <>
        <svg className="ms-2 h-5 w-5 animate-spin absolute" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </> :
        formatStarsCount(number)}
    </div>
  );
}