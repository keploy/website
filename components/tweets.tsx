import React from "react";
import Image from "next/image";
import XImage from "@/public/images/x-twitter.svg";
import Link from "next/link";
const Tweets = ({
  avatar,
  name,
  id,
  post,
  content,
}: {
  avatar: string;
  name: string;
  id: string;
  post: string;
  content: string;
}) => {
  return (
    <>
      <Link
        className="flex-none  cursor-pointer hover:bg-primary-300 hover:text-gray-100 w-72 sm:w-96 bg-gray-100 border-2 border-secondary-300 p-3 sm:p-6 rounded-md  shadow-md transition"
        href={post}
        target="_blank"
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={avatar}
              width={48}
              height={48}
              alt="profile_image"
              className="rounded-full w-8 h-8 sm:w-12 sm:h-12 aspect-square"
            />
            <div className="flex flex-col justify-center">
              <h2 className="font-bold text-base sm:text-lg">{name}</h2>
              <p className="text-sm sm:text-base">@{id}</p>
            </div>
          </div>
          <Image
            src={XImage}
            width={20}
            height={20}
            alt="twitter icon"
          />
        </div>
        <p className="mt-2 text-sm sm:text-base pt-2 break-words line-clamp-3">{content}</p>
      </Link>
    </>
  );
};

export default Tweets;