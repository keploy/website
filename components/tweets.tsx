import React from "react";

import Image from "next/image";
import Link from "next/link";

import XImage from "@/public/images/social/x-twitter.svg"

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
        className="bg-gray-100 block border border-black/10 p-6 rounded-3xl break-inside-avoid lg:hover:shadow-2xl transition m-0 hover:scale-101"
        href={post}
        target="_blank"
      >
        <div className="text-gray-700 mb-7">"{content}"</div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col justify-center">
            <div className="font-bold text-base">{name}</div>
            <div className="text-gray-800 text-sm">@{id}</div>
          </div>
          <div className="relative">

            <Image
              src={avatar}
              width={48}
              height={48}
              alt="profile_image"
              className="rounded-full h-12 aspect-square border border-black/15"
            />
            <Image
              src={XImage}
              width={20}
              height={20}
              alt="twitter icon"
              className="absolute bottom-0 -left-2 bg-white border border-black/20 rounded-full p-0.5"
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Tweets;