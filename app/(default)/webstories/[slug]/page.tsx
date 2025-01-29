"use client";
import React from "react";
import WebStories from "@/components/webstories/Webstories";
import { DataFiles } from "../../../../components/utils/data";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import CloseIcon from "@/components/webstories/components/CloseIcon";
import RootLayout from "@/app/layout";
import AOS from "aos";
import { useEffect , useState } from "react";
import "aos/dist/aos.css";

const Index: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const storyData = DataFiles.find((item) => item.Slug === slug)?.Story;

  if (!storyData) {
    return <div className="m-auto">Story not found!</div>;
  }

  const metadata = {
    title: storyData[0]?.Heading || "Webstory",
    description: storyData[0]?.text || "A webstory",
    keywords: "webstories, stories, entertainment, reading",
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleClose = () => {
    router.push("/webstories");
  };

  const handleStoryIndexChange = (index: number) => {
    setCurrentStoryIndex(index);
  };

  return (
    <RootLayout>
      <div className="fixed w-full h-full top-0 z-50 flex items-center justify-center" data-aos="fade-up">
        <div className="absolute w-full h-full top-0 opacity-95 bg-black">
          <Image
            src={
              typeof storyData[0].imageUrl === "string"
                ? storyData[0].imageUrl
                : storyData[0].imageUrl.src
            }
            alt="image"
            layout="fill"
            objectFit="cover"
            className="relative z-10 h-full object-cover w-full blur-2xl opacity-60 md:rounded-xl lg:rounded-xl xl:rounded-xl"
          />
        </div>
        <div className="relative flex flex-col w-full h-full justify-center">
          <button
            onClick={handleClose}
            className="hidden lg:block text-slate-200 border border-solid font-medium bg-secondary-300 p-3 rounded-full shadow-lg absolute top-4 right-4"
          >
            <CloseIcon />
          </button>
          {storyData ? (
            <WebStories
              data={storyData}
              slug={slug}
              onStoryIndexChange={handleStoryIndexChange}
            />
          ) : (
            <div>Content Not Available</div>
          )}
        </div>
      </div>
    </RootLayout>
  );
};

export default Index;
