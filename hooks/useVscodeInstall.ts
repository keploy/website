import { useEffect, useState } from "react";

export function useVSCodeInstalls(initialInstalls = "100K") {
  const [installs, setInstalls] = useState(initialInstalls);

  useEffect(() => {
    fetch(
      "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json;api-version=7.1-preview.1",
        },
        body: JSON.stringify({
          filters: [
            {
              criteria: [
                {
                  filterType: 7,
                  value: "Keploy.keployio", // Replace with actual extension ID
                },
              ],
            },
          ],
          flags: 914,
        }),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        const count =
          data.results[0]?.extensions[0]?.statistics?.find(
            (stat: { statisticName: string }) =>
              stat.statisticName === "install",
          )?.value || 0;

        const formattedCount = formatInstallCount(count);
        setInstalls(formattedCount);
      })
      .catch(() => {});
  }, []);

  return installs;
}

function formatInstallCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1).replace(".0", "")}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace(".0", "")}K`;
  }
  return count.toString();
}
