import React from "react";
import Image from "next/image";

import CommunityBunny from "@/public/images/community-bunny-1.png";
import GithubSvg from "@/public/images/social/github.svg";
import TwitterSvg from "@/public/images/social/twitter.svg";
import SlackSvg from "@/public/images/social/slack.svg";
import YoutubeSvg from "@/public/images/social/youtube.svg";
import LinkedinSvg from "@/public/images/social/linkedin.svg";

import Link from "next/link";

interface cardSurrondStyle {
  transform: string;
}

interface CardProps {
  link: string;
  svgIcon: string;
  platformName: string;
  description: string;
  style?: cardSurrondStyle;
  showExtraStyle?: boolean;
}

interface CardData {
  link: string;
  svgIcon: string;
  platformName: string;
  description: string;
}

const createCircleStyles = (
  totalCircles: number,
  index: number,
  containerWidth: number,
): cardSurrondStyle => {
  const angle = 360 - 90;
  const dangle = 360 / totalCircles;
  const currentAngle = angle + dangle * index;
  return {
    transform: `rotate(${currentAngle}deg) translate(${
      containerWidth / 2
    }px) rotate(-${currentAngle}deg)`,
  };
};

function SocialLinkCard({
  link,
  svgIcon,
  platformName,
  description,
  style,
  showExtraStyle,
}: CardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={showExtraStyle ? { ...style } : {}}
      className={`${
        showExtraStyle ? "circle" : "w-3/4 mx-auto mb-5"
      } z-10 bg-white shadow-md rounded-lg border border-accent-500 p-4 hover:shadow-xl flex items-center justify-start group transition duration-300`}
    >
      <div className="w-12 h-12 text-center sm:mr-2">
        <Image src={svgIcon} alt={platformName} />
      </div>
      <div className="mt-2 ml-2">
        <h2 className="text-lg font-semibold sm:text-md w-fit">
          {platformName}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-100"></span>
        </h2>
        <p className="text-gray-600 mt-1F md:text-sm">{description}</p>
      </div>
    </Link>
  );
}

function Community() {
  const cardsData: CardData[] = [
    {
      link: "https://twitter.com/Keployio",
      svgIcon: TwitterSvg,
      platformName: "Twitter",
      description: "Let's talk about regression testing!",
    },
    {
      link: "https://github.com/keploy/keploy",
      svgIcon: GithubSvg,
      platformName: "Github",
      description: "Contribute code to Keploy or report a bug",
    },
    {
      link: "https://join.slack.com/t/keploy/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw",
      svgIcon: SlackSvg,
      platformName: "Slack",
      description: "Connect and chat with other Keploy users",
    },
    {
      link: "https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg",
      svgIcon: YoutubeSvg,
      platformName: "Youtube",
      description: "Learn with Keploy team and community videos",
    },
    {
      link: "https://www.linkedin.com/company/74471957",
      svgIcon: LinkedinSvg,
      platformName: "Linkedin",
      description: "Follow us and connect with other Keploy engineers!",
    },
  ];

  // Define the number of circles you want to render
  const totalCircles = cardsData.length;

  // You can adjust this width as per your requirement or dynamically based on the parent component's state
  const containerWidth = 600;

  const cardsSurround = Array.from({ length: totalCircles }, (_, index) => (
    <SocialLinkCard
      key={index}
      link={cardsData[index].link}
      svgIcon={cardsData[index].svgIcon}
      platformName={cardsData[index].platformName}
      description={cardsData[index].description}
      style={createCircleStyles(totalCircles, index, containerWidth)}
      showExtraStyle={true}
    />
  ));

  const cardsList = Array.from({ length: totalCircles }, (_, index) => (
    <SocialLinkCard
      key={index}
      link={cardsData[index].link}
      svgIcon={cardsData[index].svgIcon}
      platformName={cardsData[index].platformName}
      description={cardsData[index].description}
    />
  ));

  return (
    <section className="relative md:pt-20">
      {/*<div*/}
      {/*    className="opacity-55 absolute -top-[45%] border-2 -right-[5%] w-[50%] h-[80%] rounded-full rotate-12 bg-gradient-to-br from-orange-400/10 to-orange-500/10 blur-[80px]"/>*/}

      <div className="opacity-55 absolute top-[35%] -left-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 blur-[90px]" />

      <div className="absolute top-[35%] -right-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-orange-400/20 to-orange-500/10 blur-[90px]" />

      {/*<div*/}
      {/*    className="absolute bottom-[15%] right-[20%] w-[40%] h-[40%] rounded-full -rotate-12 bg-gradient-to-bl from-orange-400/15 to-pink-400/5 blur-[70px]"/>*/}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 ">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="leading-tight text-center bg-gradient-to-l from-orange-500/95 to-purple-950/95 bg-clip-text text-transparent text-3xl font-semibold md:text-4xl">
              ✨ Join the Keploy community 🧡
              </h2>
          </div>
          <div className="mx-auto w-fit">
            <div className="ciclegraph hidden md:block relative w-[600px] h-[600px] mx-auto mt-24 mb-24">
              {cardsSurround}
              <Image
                src={CommunityBunny}
                alt="Image"
                className="absolute -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2"
              />
            </div>
            <div className="md:hidden">
              <Image
                src={CommunityBunny}
                alt="Image"
                className="w-3/4 mx-auto"
              />
              {cardsList}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
