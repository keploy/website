import React from "react";
import Image from "next/image";
import XImage from "@/public/images/x-twitter.svg";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.3)",
        rotate: 1,
      }}
      className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 rounded-lg m-4 shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out"
    >
      <Link href={post} target="_blank" className="no-underline block">
        <div className="bg-white p-5 rounded-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="rounded-full overflow-hidden border-2 border-yellow-400"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={avatar}
                  width={50}
                  height={50}
                  alt="profile_image"
                  className="rounded-full h-12 w-12 object-cover"
                />
              </motion.div>
              <div className="flex flex-col">
                <motion.div
                  className="font-bold text-lg text-gray-800"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {name}
                </motion.div>
                <div className="text-sm text-gray-500">@{id}</div>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Image src={XImage} width={24} height={24} alt="Twitter icon" />
            </motion.div>
          </div>
          <motion.div
            className="text-gray-700 leading-relaxed bg-gradient-to-l from-blue-100 to-pink-100 p-3 rounded-md shadow-inner"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {content}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Tweets;
