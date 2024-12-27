import React from "react";
import "./community.css";
import Image from "next/image";
import CommunityBunny from "@/public/images/community-bunny.png";
import GithubSvg from "@/public/images/social/github.svg";
import TwitterSvg from "@/public/images/x-twitter.svg";
import SlackSvg from "@/public/images/social/slack.svg";
import YoutubeSvg from "@/public/images/social/youtube.svg";
import LinkedinSvg from "@/public/images/social/linkedin.svg";
import Link from "next/link";

type cardSurrondStyle = {
  transform: string;
};

type CardProps = {
  link: string;
  svgIcon: string;
  platformName: string;
  description: string;
  style?: cardSurrondStyle;
  showExtraStyle?: boolean;
};

type CardData = {
  link: string;
  svgIcon: string;
  platformName: string;
  description: string;
};

const createCircleStyles = (
  totalCircles: number,
  index: number,
  containerWidth: number
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

export default function Community() {
  const cardsData: CardData[] = [
    {
      link: "https://x.com/Keployio",
      svgIcon: TwitterSvg,
      platformName: "X",
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
    <section className="relative py-8 ">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="h2 text-secondary-300">
          🐰 Join the Keploy community ✨
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
          <Image src={CommunityBunny} alt="Image" className="w-3/4 mx-auto" />
          {cardsList}
        </div>
      </div>
    </section>
  );
}
