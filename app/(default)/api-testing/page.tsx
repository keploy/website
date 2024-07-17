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
import { featuresData , faqQuestions} from "@/components/utils/api-testing";
import BannerBunny from "@/public/images/banner-bunny.png";
import FAQ from "@/components/pillar-page/faq";
import RootLayout, { Metadata } from "@/app/layout";

const pageMetadata: Metadata = {
  title: 'Keploy | One-click API test with OpenSource and Free API Testing Tool',
  description: "Discover how Keploy's free API testing tools can drastically transform your e2e api testing process and why developers love it! Get the free tool now!",
  keywords: 'API test, FREE API Testing Tool, API Testing tool',
};

const blocksData = [
  {
    title: "Manual Test Script",
    description: "Creating test scripts for API testing manually is time-consuming and error-prone.",
    SvgComponent: MdiLightningBolt,
  },
  {
    title: "Limited Test Coverage",
    description: "Traditional API testing methods may not cover all possible scenarios, leading to gaps in test coverage.",
    SvgComponent: FluentPuzzleCubePiece20Filled,
  },
  {
    title: "Difficulty in Test Maintenance",
    description: "Maintaining and updating test scripts as APIs evolve can be challenging and resource-intensive.",
    SvgComponent: CollaborationIcon,
  },
  {
    title: "Complex Setup Requirements",
    description: "Setting up environments for API testing can be complex and require specialized knowledge.",
    SvgComponent: StreamlineBrowserCheck,
  },
  {
    title: "Lack of Real-time Feedback",
    description: "Waiting for test results can slow down the development process and delay bug fixes.",
    SvgComponent: PsPiggyBankCoins,
  },
  {
    title: "Pipeline Integration",
    description: "Integrating API tests with CI/CD pipelines can be difficult and requires extensive configuration.",
    SvgComponent: MaterialSymbolsLightEarlyOnOutline,
  },
];

const heroData = {
  titleTop: "API Testing ",
  titleBottom: "with Seamless Experience",
  subtitleTop: "One-click API test with OpenSource and Free API Testing Tool",
  subtitleBottom:
    "Rapidly scale your transform your E2E API Testing process with a platform that works out of the box. 🚀",
  animationSrc: testAndStubsGen,
};
const ProblemBlocksData = {
  title: "Traditional API Testing",
  subtitle: "👋 Challenges 👋",
  btnText: "Join Waitlist",
  blocksData: blocksData,
};
const FeaturesData = {
  title: "With ",
  title2: "ensure",
  subtitle:
    "Transforming interactions into realistic, diverse, and customizable stubs for precise testing",
  highlightTitle: "API Testing",
  featuresData: featuresData,
};
const BannerData = {
  title: " 🚀 Elevate Your Testing with Keploy!",
  subtitle: "Ready to simplify your testing process?",
  paraText:
    "Click to experience Keploy's magic locally or book a demo for an interactive walk-through. Embark on a journey to stress-free testing today!",
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
