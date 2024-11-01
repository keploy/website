import React from "react";
import Image from "next/image";
import XImage from "@/public/images/x-twitter.svg";
import Link from "next/link";
import { Tweet } from "../interfaces/tweet.interface"; 
const Tweets: React.FC<Tweet> = ({ avatar, name, id, post, content, date }) => {
  return (
    <Link
      href={post}
      target="_blank"
      className=" w-96 h-64  bg-gray-100 border border-gray-300 p-6 mx-2 rounded-lg shadow hover:shadow-md transition transform hover:scale-105 overflow-hidden  flex flex-col justify-between items-start"
    >
      <div className="flex flex-col  w-full ">
        <div className="flex justify-between items-center ">
          <div className="flex justify-between items-center ">
            <Image
              src={avatar}
              width={48}
              height={48}
              alt="profile_image"
              className="rounded-full h-12 w-12 object-cover"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900">{name}</span>
              <span className="text-gray-500">@{id}</span>
            </div>
          </div>
          <Image src={XImage} width={20} height={20} alt="twitter icon" />
        </div>

        <div className="pt-4 text-gray-700 overflow-hidden text-ellipsis line-clamp-4">
          {content}
        </div>
      </div>

      <div className=" text-xs mt-1 text-gray-700 overflow-hidden text-ellipsis ">
        {date}
      </div>
    </Link>
  );
};

export default Tweets;
