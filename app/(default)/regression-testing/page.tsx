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
import { featuresData,faqQuestions } from "@/components/utils/regression-testing";
import BannerBunny from "@/public/images/banner-bunny.png";
import FAQ from "@/components/pillar-page/faq";
import RootLayout, { Metadata } from "@/app/layout";

const heroData = {
  titleTop: "Automate Regression Testing ",
  titleBottom: "with AI",
  subtitleTop: "Transforming User Scenarios into Reliable Test Data Instantly!",
  subtitleBottom:
    "Turn User Interactions into Test Cases and Data Stubs that actually works! 🚀",
  animationSrc: testAndStubsGen,
};

const pageMetadata: Metadata = {
  title: 'Keploy | Automate Regression Testing with Keploy AI Test Generator!',
  description: 'Try Keploy.io automated regression testing software that records API calls to test cases and mocks, designed for efficiency and accuracy! Learn more!',
  keywords: 'regression testing software, regression testing in software testing,automated regression testing',
};

const blocksData = [
  {
    title: "Slow Test Execution",
    description: "Regression testing involves running a large suite of tests, which can be extremely time-consuming, often causing delays in the release cycle and slowing down the overall development process.",
    SvgComponent: MdiLightningBolt,
  },
  {
    title: "Manual Test Maintenance",
    description: "As software evolves, manually updating and maintaining regression test cases becomes labor-intensive and error-prone, increasing the risk of outdated or inaccurate tests.",
    SvgComponent: FluentPuzzleCubePiece20Filled,
  },
  {
    title: "Difficulty in Prioritization",
    description: " Amidst frequent code changes, determining which tests to prioritize for regression testing is challenging, often leading to inefficient testing and potential oversight of critical areas.",
    SvgComponent: CollaborationIcon,
  },
  {
    title: "Resource Intensive",
    description: "Regression testing demands significant computational resources and robust infrastructure, which can be costly to maintain and scale, especially for large and complex applications.",
    SvgComponent: StreamlineBrowserCheck,
  },
  {
    title: "Test Data Management:",
    description: "Managing consistent and relevant test data across different environments and scenarios is complex and prone to errors, impacting the reliability and effectiveness of regression tests.",
    SvgComponent: PsPiggyBankCoins,
  },
  {
    title: "Low Test Coverage",
    description: "Despite extensive efforts, regression testing may still miss critical paths and edge cases, leaving subtle regressions undetected and potentially causing issues in the software.",
    SvgComponent: MaterialSymbolsLightEarlyOnOutline,
  },
];

const ProblemBlocksData = {
  title: "Navigating Regression Testing",
  subtitle: "👋 Challenges 👋",
  btnText: "Join Waitlist",
  blocksData: blocksData,
};
const FeaturesData = {
  title: "With ",
  subtitle:
    "Transforming interactions into realistic, diverse, and customizable stubs for precise testing",
  highlightTitle: "Regression Testing",
  title2: "leverage",
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
