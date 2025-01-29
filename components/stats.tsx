"use client";

import Counter from "@/components/counter";
import { Star, Download, Users, GitPullRequest } from "lucide-react";
import { JSX } from "react";
import { useVSCodeInstalls } from "@/hooks/useVscodeInstall";


export default function Stats() {
  const install = useVSCodeInstalls();
  const stats = [
    {
      number: 5.3,
      suffix: "K+",
      text: "GitHub Stars",
      icon: Star,
    },
    {
      number: 93,
      suffix: "K+",
      text: "Keploy Extension Installs",
      icon: Download,
    },
    {
      number: 230,
      suffix: "K+",
      text: "Community of Developers",
      icon: Users,
    },
    {
      number: 400,
      suffix: "+",
      text: "Contributors",
      icon: GitPullRequest,
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto mb-44 px-4 sm:px-6 mt-8 ">
      <div className="max-w-sm mx-auto grid gap-12 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:-mx-5 md:gap-0 items-start md:max-w-none">
        {stats.map((stat, index) => (
          <div key={index} className="relative text-center md:px-5 group">
            {/* Icon with gradient */}
            <div className="flex justify-center mb-4">
              <stat.icon className="text-orange-500 w-6 h-6" />
            </div>

            {/* Highlighted number with gradient */}
            <h4 className="text-2xl md:text-3xl font-black tabular-nums mb-2 bg-gradient-to-t from-orange-500 to-red-700 bg-clip-text text-transparent leading-tight">
              <Counter number={stat.number} />
              {stat.suffix}
            </h4>

            {/* Text with gradient */}
            <p className="text-sm font-black bg-gradient-to-l from-orange-500 to-red-700 bg-clip-text text-transparent leading-tight">
              {stat.text}
            </p>

            {/* Subtle vertical divider */}
            {index < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 h-12 w-[1px] bg-zinc-300 transform -translate-y-1/2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
