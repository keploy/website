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
import {MdiLightningBolt,FluentPuzzleCubePiece20Filled,
  CollaborationIcon, StreamlineBrowserCheck, PsPiggyBankCoins,
  MaterialSymbolsLightEarlyOnOutline
} from "@/components/utils/common";
import { featuresData,faqQuestions } from "@/components/utils/test-data-generator";
import BannerBunny from "@/public/images/banner-bunny.png";
import FAQ from "@/components/pillar-page/faq";
import RootLayout, { Metadata } from "@/app/layout";

const blocksData = [
  {
    title: "Limited Data Variation",
    description: "Difficulty in ensuring consistent mock data across different tests.",
    SvgComponent: MdiLightningBolt,
  },
  {
    title: "Dependency on Real Data",
    description: "Limited ability to simulate scenarios without real data dependencies.",
    SvgComponent: FluentPuzzleCubePiece20Filled,
  },
  {
    title: "Manual Data Generation",
    description: "A significant amout of time is spent in manually generating mock data.",
    SvgComponent: CollaborationIcon,
  },
  {
    title: "Scalability Concerns",
    description: "Difficulty in scaling mock data generation for large datasets or complex scenarios.",
    SvgComponent: StreamlineBrowserCheck,
  },
  {
    title: "Data Inefficiencies",
    description: "Usually Mock data does not accurately represent real-world scenarios.",
    SvgComponent: PsPiggyBankCoins,
  },
  {
    title: "Maintenance Overhead",
    description: "High maintenance effort due to frequent updates and changes in mock data.",
    SvgComponent: MaterialSymbolsLightEarlyOnOutline,
  },
];

const heroData = {
  titleTop: "Get Quick and Reliable ",
  titleBottom: "Test Data Stubs",
  subtitleTop: "Transforming User Scenarios into Reliable Test Data Instantly!",
  subtitleBottom:
    "Turn User Interactions into Test Cases and Data Stubs that actually works! 🚀",
  animationSrc: testAndStubsGen,
};

const pageMetadata: Metadata = {
  title: 'Keploy | Need Quick Mock Data? Try this reliable test data generator!',
  description: 'Discover how quickly and efficiently you can generate test data by recording API calls with Keploy cutting-edge test data generation tool! Learn more now!',
  keywords: 'dynamic test data, testing, automation, test data generation',
};

const ProblemBlocksData = {
  title: "Mock Data Challenges for Developers",
  subtitle: "👋 Challenges 👋",
  btnText: "Join Waitlist",
  blocksData: blocksData,
};
const FeaturesData = {
  title: "With ",
  title2: "ensure ",
  subtitle:
    "Transforming interactions into realistic, diverse, and customizable stubs for precise testing",
  highlightTitle: "Test Data Generation",
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
    <RootLayout metadata={pageMetadata}>
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
        title2={FeaturesData.title2}
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
      <Testimonial
        content={testimonialData[2].content}
        author={testimonialData[2].author}
        company={testimonialData[2].company}
        image={testimonialData[2].image}
      />
      <FAQ questions={faqQuestions} />
      <Banner
        title={BannerData.title}
        subtitle={BannerData.subtitle}
        paraText={BannerData.paraText}
        btnTextLeft={BannerData.btnTextLeft}
        btnTextRight={BannerData.btnTextRight}
        bannerImage={BannerData.bannerImage}
      />
      <Footer />
    </RootLayout>
  );
}
