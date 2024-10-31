"use client"
import React, { useEffect, useState } from "react";
import Tweet from "./tweets";
import Marquee from "./magicui/marquee";
const tweets = [
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1653250498127089665/x5RJbLq5_400x400.jpg",
    name: "きょん/kyong",
    id: "kyongshiii06",
    post: "https://x.com/kyongshiii06/status/1753030333128495470?s=20",
    content:
      "I tried keploy, it was amazing. Just wrap and start docker, and then just hit the API with curl or the client and you'll be able to test more and more. This is the golden test.",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1741543460115812352/8x4aAI9k_400x400.jpg",
    name: "Shivam Sourav Jha",
    id: "ShivamSouravJha",
    post: "https://x.com/ShivamSouravJha/status/1747517726749286713?s=20",
    content:
      "Why do I like keploy so much? Literally I see many tools and so hard to integrate. I mean update VScode , use the sdk , make this change make that change. With Keploy, don't worry buddy just run your application, we will literally do everything for you. You need to 0 efforts.",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/837573171427487744/IGQLsM55_400x400.jpg",
    name: "やまもと@視力2.0",
    id: "yamamoto_febc",
    post: "https://x.com/yamamoto_febc/status/1755802346188390531?s=20",
    content:
      "It is quite easy to create normal tests. On the other hand, abnormal systems may be a little difficult. I think it's okay to use it only for normal systems.",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1422864637532332033/mC1Nx0vj_400x400.jpg",
    name: "matsuu@充電期間",
    id: "matsuu",
    post: "https://x.com/matsuu/status/1747448928575099236?s=20",
    content:
      "Based on the communication trace information that can be obtained using eBPF, it is possible to generate a test and a stub server to be used when executing the test.",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1604797450124144640/6G7KytX8_400x400.jpg",
    name: "あんどーぼんばー",
    id: "AndooBomber",
    post: "https://x.com/AndooBomber/status/1747663021747691808?s=20",
    content:
      "I tried Keploy, good tool.",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1569793803313201154/Lso5fu1j_400x400.jpg",
    name: "Jay Vasant",
    id: "__alter123",
    post: "https://x.com/__alter123/status/1731985031521014236?s=20",
    content:
      "The point being, maintaining unit tests is terribly difficult, and in general requires more efforts than the actual development itself. I've hardly seen any startups even at good scale able to manage unit tests. If you really think it's a requirement you can try tools like Keploy. But I feel even if you honestly think, manual testing should be always feasible",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1213737438830452736/5_5zXtXN_400x400.jpg",
    name: "mugi",
    id: "mugi_uno",
    post: "https://x.com/mugi_uno/status/1745726154924003502?s=20",
    content:
      "I think the problem with mock data is that it is difficult to maintain, so if it makes it easier, I think it would be a good idea. The automated testing tool “Keploy” using eBPF is amazing",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1653250498127089665/x5RJbLq5_400x400.jpg",
    name: "きょん/kyong",
    id: "kyongshiii06",
    post: "https://x.com/kyongshiii06/status/1746532217336250821?s=20",
    content:
      "Keploy can record and replay complex, distributed API flows as mocks and stubs. It's like having a time machine for your tests—saving you tons of time.",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1482259385959464960/1pQMXwj7_400x400.jpg",
    name: "yadon",
    id: "Seipann11",
    post: "https://x.com/Seipann11/status/1755989987039064103?s=20",
    content:
      "Keploy is seriously amazing, a genius tool crushing issues at lightning speed.",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1763255658777120770/7SsuKwlS_400x400.jpg",
    name: "Akash Singh",
    id: "Kind_Of_Akash",
    post: "https://x.com/Kind_Of_Akash/status/1754207010470736165?s=20",
    content:
      "Hey people, I wanted to share about my first month as an open source contributor at Keploy -Picked up 10 issues including bugs, features, documentation and opened 3 issues. -Submitted 8 PR's, out of which 2 have been merged and rest are on review",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1712175220176355329/sLXbk_PZ_400x400.jpg",
    name: "TadasG",
    id: "JustADude404",
    post: "https://x.com/JustADude404/status/1746888711491424681?s=20",
    content:
      "Keploy is a tool which can automatically generate tests based on data from your running app. It simply attaches to your app, reads the data being passed through, and generates tests with real data. Pretty cool, huh?",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1701251291861712897/PiTZ0UO7_400x400.jpg",
    name: "Junichi.Y🐼@休職中",
    id: "ymnk_8752",
    post: "https://x.com/ymnk_8752/status/1745458928698450057?s=20",
    content:
      "It is amazing! I hear about eBPF a lot, but I don't know what it is.",
  },
];

// Dividing tweets into 3 rows
const firstRow = tweets.slice(0, 4);
const secondRow = tweets.slice(4, 8);
const thirdRow = tweets.slice(8, 12);


const TwitterTestimonials = () => {

  return (
    <>
      <div className="relative mt-20 mb-20">
        <div className=" relative mt-2 mb-8 z-10 max-w-5xl mx-auto flex flex-col justify-center">
          <h3 className=" text-center h2 px-10 text-secondary-300">
            We love when users talk about Keploy..
          </h3>

          {/* Tweets Row */}

          <div className=" relative max-w-6xl  flex w-full flex-col items-center justify-center overflow-hidden mt-10 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
            <Marquee pauseOnHover className="[--duration:40s]">
              {firstRow.map((tweet) => (
                <Tweet
                  key={tweet.id}
                  avatar={tweet.avatar}
                  name={tweet.name}
                  id={tweet.id}
                  post={tweet.post}
                  content={tweet.content}
                />
              ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:40s]">
              {secondRow.map((tweet) => (
                <Tweet
                  key={tweet.id}
                  avatar={tweet.avatar}
                  name={tweet.name}
                  id={tweet.id}
                  post={tweet.post}
                  content={tweet.content.length > 100 ? `${tweet.content.slice(0, 100)}...` : tweet.content}

                />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:40s]">
              {thirdRow.map((tweet) => (
                <Tweet
                  key={tweet.id}
                  avatar={tweet.avatar}
                  name={tweet.name}
                  id={tweet.id}
                  post={tweet.post}
                  content={tweet.content.length > 100 ? `${tweet.content.slice(0, 100)}...` : tweet.content}

                />
              ))}

            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>

          </div>

        </div>
      </div>
    </>
  );
};

export default TwitterTestimonials;
