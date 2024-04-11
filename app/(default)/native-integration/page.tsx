"use client";
import Footer from "@/components/ui/footer";
import Hero from "@/components/pillar-page/hero";
import Features from "@/components/pillar-page/feature";
import ProblemBlocks from "@/components/pillar-page/block";
import Banner from "@/components/pillar-page/banner";
import Language from "@/components/language";
import SocialLinks from "@/components/pillar-page/community";
import { Testimonial } from "@/components/testimonial";
import { testimonialData } from "@/components/utils/testimonial";
import testAndStubsGen from "@/public/images/TestGenHighlighted.json";
import { blocksData } from "@/components/utils/native-integration";
import { featuresData } from "@/components/utils/native-integration";
import BannerBunny from "@/public/images/banner-bunny.png";

const heroData = {
  titleTop: "Maximizing Efficiency and ",
  titleBottom: "Seamlessness with Native Integration.!",
  subtitleTop: "Integrate Keploy with dev-setup to generate automated tests and data-mocks in 2 mins!",
  subtitleBottom:
    "Scale your automated test coverage with a zero-code platform that works out of the box🚀",
  animationSrc: testAndStubsGen,
};
const ProblemBlocksData = {
  title: "Smart generation - Enhanced development",
  subtitle: "👋 Say Hi to 👋",
  btnText: "Try Keploy",
  blocksData: blocksData,
};
const FeaturesData = {
  title: "With Keploy's Native Integration",
  subtitle:
    "Transforming interactions into realistic, diverse, and customizable stubs for precise testing",
  highlightTitle: "eliminate",
  featuresData: featuresData,
};
const BannerData = {
  title: " 🚀 Elevate Your Testing with Keploy!",
  subtitle: "Ready to simplify your testing process?",
  paraText:
    "Click to experience Keploy's magic locally or book a demo for an interactive walkthrough. Embark on a journey to stress-free testing today!",
  btnTextLeft: "Book Cloud Demo",
  btnTextRight: "Try Locally",
  bannerImage: BannerBunny,
};
export default function Home() {
  return (
    <>
      <Hero
        titleTop={heroData.titleTop}
        titleBottom={heroData.titleBottom}
        subtitleTop={heroData.subtitleTop}
        subtitleBottom={heroData.subtitleBottom}
        animationSrc={heroData.animationSrc}
      />
      <ProblemBlocks
        title={ProblemBlocksData.title}
        subtitle={ProblemBlocksData.subtitle}
        btnText={ProblemBlocksData.btnText}
        blocksData={ProblemBlocksData.blocksData}
      />
      <Features
        title={FeaturesData.title}
        subtitle={FeaturesData.subtitle}
        highlightTitle={FeaturesData.highlightTitle}
        featuresData={FeaturesData.featuresData}
      />
      <Testimonial
        content={testimonialData[1].content}
        author={testimonialData[1].author}
        company={testimonialData[1].company}
        image={testimonialData[1].image}
      />
      <SocialLinks />
      <Testimonial
        content={testimonialData[0].content}
        author={testimonialData[0].author}
        company={testimonialData[0].company}
        image={testimonialData[0].image}
      />
      <Language />
      <Banner
        title={BannerData.title}
        subtitle={BannerData.subtitle}
        paraText={BannerData.paraText}
        btnTextLeft={BannerData.btnTextLeft}
        btnTextRight={BannerData.btnTextRight}
        bannerImage={BannerData.bannerImage}
      />
      <Footer />
    </>
  );
}
