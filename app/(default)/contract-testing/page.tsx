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
import { featuresData,faqQuestions } from "@/components/utils/contract-testing";
import BannerBunny from "@/public/images/banner-bunny.png";
import FAQ from "@/components/pillar-page/faq";
import RootLayout, { Metadata } from "@/app/layout";

const pageMetadata: Metadata = {
  title: 'Keploy | Consumer Driven Contract Testing without Code Changes!',
  description: "Discover how Keploy automates contract tests more effectively than Pact, with no code changes required. Effective, efficient, and reliable!",
  keywords: 'contract testing, contract tests, pact.io alternative',
};

const blocksData = [
  {
    title: "Inconsistent Responses",
    description: "Difficulty ensuring APIs consistently meet agreed-upon contracts.",
    SvgComponent: MdiLightningBolt,
  },
  {
    title: "Integration Challenges",
    description: "Complex integrations between services causing mismatched data and behavior.",
    SvgComponent: FluentPuzzleCubePiece20Filled,
  },
  {
    title: "Manual Verification",
    description: "Process of verifying contract manually are tedious and usually error-prone.",
    SvgComponent: CollaborationIcon,
  },
  {
    title: "Lack of Automation",
    description: "Insufficient tools for automating contract tests, leading to repetitive tasks.",
    SvgComponent: StreamlineBrowserCheck,
  },
  {
    title: "Version Management",
    description: "Managing contract changes across different API versions is very difficult.",
    SvgComponent: PsPiggyBankCoins,
  },
  {
    title: "Debugging Issues",
    description: "Identifying and resolving contract violations quickly is difficult.",
    SvgComponent: MaterialSymbolsLightEarlyOnOutline,
  },
];

const heroData = {
  titleTop: "Cross-Language Contract ",
  titleBottom: "Testing Made Simple",
  subtitleTop: "Streamline API Integration and Debugging for Efficient Development Processes",
  subtitleBottom:
    "Automate Contract validation to improve efficiency accurately!🚀",
  animationSrc: testAndStubsGen,
};
const ProblemBlocksData = {
  title: "Challenges of Contract Testing",
  subtitle: "👋 Tried of 👋",
  btnText: "Join Waitlist",
  blocksData: blocksData,
};
const FeaturesData = {
  title: "Improve ",
  title2: "with ",
  highlightTitle: "Contract Testing",
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
