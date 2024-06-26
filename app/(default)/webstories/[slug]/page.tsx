"use client";
import React, { useEffect, useState } from "react";
import WebStories from "@/components/webstories/Webstories";
import { DataFiles } from "../../../../components/utils/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import CloseIcon from "@/components/webstories/components/CloseIcon";

interface PreloadedImage {
  url: string;
  img: HTMLImageElement;
}

const Index: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isPreloading, setIsPreloading] = useState<boolean>(true);
  const [preloadedImages, setPreloadedImages] = useState<PreloadedImage[]>([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
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

  const preloadImages = async (images: string[]) => {
    const loadedImages = await Promise.all(
      images.map(
        (url) =>
          new Promise<PreloadedImage>((resolve) => {
            const img = new (window as any).Image();
            img.src = url;
            img.onload = () => resolve({ url, img });
          })
      )
    );
    setPreloadedImages(loadedImages);
    setIsPreloading(false);
  };

  const loadCurrentAndNextImage = (index: number) => {
    if (storyData) {
      const imageUrls = [
        storyData[index]?.imageUrl,
        storyData[index + 1]?.imageUrl,
      ].filter(Boolean) as string[];
      preloadImages(imageUrls);
    }
  };

  useEffect(() => {
    loadCurrentAndNextImage(currentStoryIndex);
  }, [currentStoryIndex, storyData]);

  const handleClose = () => {
    window.close();
  };

  const handleStoryIndexChange = (index: number) => {
    setCurrentStoryIndex(index);
  };

  if (isPreloading) {
    return (
      <div className="fixed w-full h-full top-0 z-50 flex items-center justify-center">
        <div className="loaderLoading"></div>
      </div>
    );
  }

  const getImageElement = (url: string) => {
    const preloadedImage = preloadedImages.find((img) => img.url === url);
    return preloadedImage ? preloadedImage.img : null;
  };

  const nextImageIndex = currentStoryIndex + 1;

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
          <button
            onClick={handleClose}
            className="text-slate-200 border border-solid font-medium bg-secondary-300 p-3 rounded-full shadow-lg absolute top-4 right-4"
          >
            <CloseIcon  />
          </button>
        )}
        {storyData ? (
          <WebStories
            data={storyData.map((story) => ({
              ...story,
              imageElement: getImageElement(story.imageUrl),
            }))}
            slug={slug}
            onStoryIndexChange={handleStoryIndexChange}
          />
        ) : (
          <div>Content Not Available</div>
        )}
      </div>
    </div>
  );
};

export default Index;
