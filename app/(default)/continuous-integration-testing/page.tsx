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
import { featuresData,faqQuestions } from "@/components/utils/continuous-testing";
import BannerBunny from "@/public/images/banner-bunny.png";
import FAQ from "@/components/pillar-page/faq";
import RootLayout, { Metadata } from "@/app/layout";

const pageMetadata: Metadata = {
  title: 'Keploy | Speed Up Testing in CI/CD with secret Virtual Environments!',
  description: "Virtualise Services and Dependencies during Continuous Integration Testing. Accelerate your software releases with Keploy's CI testing tool. Know How?",
  keywords: 'CI testing, cicd testing, gitlab, github, jenkins',
};
const heroData = {
  titleTop: "Speed Up Testing ",
  titleBottom: "in CI/CD pipeline",
  subtitleTop: "Eliminate the need for complex setup in CI for testing!",
  subtitleBottom:
    "Make testing in CI hassle-free with Keploy's seamless CI integration!🚀",
  animationSrc: testAndStubsGen,
};

const blocksData = [
  {
    title: "Monitoring and Debugging",
    description: " Identifying and resolving issues from failed tests can be challenging, often consuming significant time and hampering overall productivity by delaying the development cycle.",
    SvgComponent: MdiLightningBolt,
  },
  {
    title: "Limited Scalability",
    description: "As codebases grow and testing demands increase, scaling CI pipelines requires additional resources and infrastructure, making it difficult to maintain efficiency without significant investment.",
    SvgComponent: FluentPuzzleCubePiece20Filled,
  },
  {
    title: "Maintaining Test Stability",
    description: "Frequent code changes and updates can destabilize tests, making it difficult to ensure reliable results and leading to potential inaccuracies in the CI pipeline.",
    SvgComponent: CollaborationIcon,
  },
  {
    title: "Complex Configuration",
    description: "Setting up and configuring CI pipelines, especially for large or complex projects, can be intricate and time-consuming, requiring careful planning and execution.",
    SvgComponent: StreamlineBrowserCheck,
  },
  {
    title: "Testing Bottlenecks",
    description: "When tests take too long to execute, bottlenecks occur, delaying feedback and slowing down the entire development process, impacting overall project timelines.",
    SvgComponent: PsPiggyBankCoins,
  },
  {
    title: "CI Integration",
    description: "Seamlessly integrating various tools, environments, and dependencies within CI pipelines is often challenging and prone to errors, complicating the development workflow and reducing efficiency.",
    SvgComponent: MaterialSymbolsLightEarlyOnOutline,
  },
];

const ProblemBlocksData = {
  title: "Tackling Continuous Testing",
  subtitle: "👋 Challenges 👋",
  btnText: "Join Waitlist",
  blocksData: blocksData,
};
const FeaturesData = {
  title: "Improve ",
  title2: "with ",
  highlightTitle: "Continuous Testing",
  subtitle:
    "Transforming interactions into realistic, diverse, and customizable stubs for precise testing",
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
