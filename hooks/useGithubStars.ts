import { useEffect, useState } from "react";

export function useGithubStars(initialStars = "5.2K") {
  const [stars, setStars] = useState(initialStars);

  useEffect(() => {
    fetch("https://api.github.com/repos/keploy/keploy")
      .then((response) => response.json())
      .then((data) => {
        const count = data.stargazers_count;
        const formattedCount =
          count >= 1000
            ? `${(count / 1000).toFixed(1).replace(".0", "")}K`
            : count.toString();
        setStars(formattedCount);
      })
      .catch(() => {});
  }, []);

  return stars;
}
