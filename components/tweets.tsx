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
        className="bg-gray-100 border p-6 rounded-md lg:hover:shadow-md transition m-1 hover:scale-101"
        href={post}
        target="_blank"
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <img
              src={avatar}
              alt="profile_image"
              className="rounded-full h-12"
            />
            <div className="flex flex-col justify-center">
              <div className="font-bold">{name}</div>
              <div className="">@{id}</div>
            </div>
          </div>
          <Image
            src={XImage}
            width={20}
            height={20}
            alt="twitter icon"
          />
        </div>
        <div className="pt-2">{content}</div>
      </Link>
    </>
  );
};

export default Tweets;