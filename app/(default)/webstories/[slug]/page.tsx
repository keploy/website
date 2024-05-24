"use client";
import React, { useEffect, useState } from "react";
import WebStories from "@/components/webstories/Webstories";
import { DataFiles } from "../data";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@/components/webstories/components/CloseIcon";

const Index = () => {
  const slug = useParams().slug;
  const [windowWidth, setWindowWidth] = useState(0);
  const storyData = DataFiles.find((item) => item.Slug === slug)?.Story;

  if (!storyData) {
    return <div className="m-auto">Story not found!</div>;
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="fixed w-full h-full top-0 z-50 flex items-center justify-center">
      <div className="absolute w-full h-full top-0 opacity-90 bg-black">
        <Image
          src={storyData[0].imageUrl}
          alt="image"
          layout="fill"
          objectFit="cover"
          className="relative z-10 h-full object-cover w-full blur-2xl opacity-60 md:rounded-xl lg:rounded-xl xl:rounded-xl"
        />
      </div>
      <div className="relative flex flex-col w-full h-full justify-center">
        {windowWidth > 1024 && (
          <Link href={`/webstories`}>
            <button className="text-black font-medium bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out absolute top-4 right-4">
              <CloseIcon />
            </button>
          </Link>
        )}
        {storyData ? (
          <WebStories data={storyData} />
        ) : (
          <div>Content Not Available</div>
        )}
      </div>
    </div>
  );
};

export default Index;
