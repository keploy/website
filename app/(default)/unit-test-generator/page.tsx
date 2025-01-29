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
import { featuresData,faqQuestions } from "@/components/utils/unit-test-generator";
import BannerBunny from "@/public/images/banner-bunny.png";
import FAQ from "@/components/pillar-page/faq";
import RootLayout from "@/app/layout";

const blocksData = [
  {
    title: "Time-Consuming",
    description: "Manually writing unit tests is a process that can consume significant amounts of a developer's time, leading to delays in the development cycle.",
    SvgComponent: MdiLightningBolt,
  },
  {
    title: "Incomplete Coverage",
    description: "Achieving higher test coverage is challenging, as it requires identifying and writing tests for all possible code paths and edge cases,leaving some part of codebase are untested and potentially prone to bugs.",
    SvgComponent: FluentPuzzleCubePiece20Filled,
  },
  {
    title: "High Maintenance",
    description: "Keeping unit tests up to date with frequent code changes demands ongoing effort. As the code evolves, tests need to be reviewed and updated to ensure they remain relevant and effective, which can be a significant maintenance burden.",
    SvgComponent: CollaborationIcon,
  },
  {
    title: "Complex Scenarios",
    description: "Writing effective unit tests for complex scenarios requires deep understanding and careful consideration of various interactions and edge cases. This makes it difficult to create accurate and meaningful tests, especially in large codebases.",
    SvgComponent: StreamlineBrowserCheck,
  },
  {
    title: "Domain Context",
    description: "Tools like Co-pilot may generate tests that lack specific domain knowledge, leading to irrelevant or ineffective test cases, resulting in tests that do not accurately reflect the real-world use cases and requirements of the application.",
    SvgComponent: PsPiggyBankCoins,
  },
  {
    title: "Integration Issues",
    description: "Integrating LLM-generated tests with existing testing frameworks can be problematic. Compatibility issues, differences in coding standards, and the need for additional configuration creates friction and slow down the adoption of automated solutions.",
    SvgComponent: MaterialSymbolsLightEarlyOnOutline,
  },
];

const heroData = {
  titleTop: "Accurate and Reliable ",
  titleBottom: "AI unit tests",
  subtitleTop: "Generate edge cases and keep only necessary ones",
  subtitleBottom:
    "AI-Powered Unit Tests for Precision and Reliability! 🚀",
  animationSrc: testAndStubsGen,
};

// const pageMetadata: Metadata = {
//   title: 'Keploy | Need Quick Mock Data? Try this reliable test data generator!',
//   description: 'Discover how quickly and efficiently you can generate test data by recording API calls with Keploy cutting-edge test data generation tool! Learn more now!',
//   keywords: 'dynamic test data, testing, automation, test data generation',
// };

const ProblemBlocksData = {
  title: "Manual Unit Testing",
  subtitle: "👋 Challenges 👋",
  btnText: "Join Waitlist",
  blocksData: blocksData,
};
const FeaturesData = {
  title: "Keploy's ",
  title2: "ensure ",
  subtitle:
    "Transforming interactions into realistic, diverse, and customizable stubs for precise testing",
  highlightTitle: "Unit Test Generation",
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
    <RootLayout>
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
