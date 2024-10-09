import React from "react";
import "./community.css";
import Image from "next/image";
import CommunityBunny from "@/public/images/community-bunny.png";
import GithubSvg from "@/public/images/social/github.svg";
import TwitterSvg from "@/public/images/social/twitter.svg";
import SlackSvg from "@/public/images/social/slack.svg";
import YoutubeSvg from "@/public/images/social/youtube.svg";
import LinkedinSvg from "@/public/images/social/linkedin.svg";
import { OrbitingCircles } from "./magicui/orbitcircle";
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
  radius: number;
  duration: number;
  delay: number;
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
        showExtraStyle ? "circle" : "w-[280px] mx-auto mb-5"
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
      link: "https://twitter.com/Keployio",
      svgIcon: TwitterSvg,
      platformName: "Twitter",
      description: "Let's talk about regression testing!",
      radius: 300,
      duration: 20,
      delay: 1,
    },
    {
      link: "https://github.com/keploy/keploy",
      svgIcon: GithubSvg,
      platformName: "Github",
      description: "Contribute code to Keploy or report a bug",
      radius: 300,
      duration: 20,
      delay: 5,
    },
    {
      link: "https://join.slack.com/t/keploy/shared_invite/zt-2dno1yetd-Ec3el~tTwHYIHgGI0jPe7A",
      svgIcon: SlackSvg,
      platformName: "Slack",
      description: "Connect and chat with other Keploy users",
      radius: 300,
      duration: 20,
      delay: 9,
    },
    {
      link: "https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg",
      svgIcon: YoutubeSvg,
      platformName: "Youtube",
      description: "Learn with Keploy team and community videos",
      radius: 300,
      duration: 20,
      delay: 13,
    },
    {
      link: "https://www.linkedin.com/company/74471957",
      svgIcon: LinkedinSvg,
      platformName: "Linkedin",
      description: "Follow us and connect with other Keploy engineers!",
      radius: 300,
      duration: 20,
      delay: 17,
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
    <section className="relative py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="h2 text-secondary-300">
          🐰 Join the Keploy community ✨
        </h2>
      </div>

      <div className="mx-auto w-fit">
        <div className="relative hidden md:block m-auto h-[600px] w-[600px] mt-24 mb-24 items-center justify-center bg-background">
          <div>
            <Image src={CommunityBunny} alt="Image" className="absolute pl-5 -translate-x-1/2 translate-y-1/5 left-1/2 bg-background max-w-2xl" />
          </div>
          <div className="flex justify-center items-center">
            {cardsData.map((card, index) => (
              <OrbitingCircles
                key={index}
                className="size-[60px] border-none bg-transparent top-72 z-10"
                duration={card.duration}
                delay={card.delay}
                radius={card.radius}
              >
                <SocialLinkCard
                  link={card.link}
                  svgIcon={card.svgIcon}
                  platformName={card.platformName}
                  description={card.description}
                />
              </OrbitingCircles>
            ))}
          </div>
        </div>
        <div className="md:hidden">
          <Image src={CommunityBunny} alt="Image" className="w-3/4 mx-auto" />
          {cardsList}
        </div>
      </div>
    </section>
  );
}
