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
import { featuresData,faqQuestions } from "@/components/utils/ai-code-generation";
import BannerBunny from "@/public/images/banner-bunny.png";
import FAQ from "@/components/pillar-page/faq";
import RootLayout, { Metadata } from "@/app/layout";

const pageMetadata: Metadata = {
  title: 'Keploy | Transform Testing with AI that actually works! Explore Now!',
  description: "Unlock the power of AI generated tests and mocks with Keploy's coding assistance. Transform your testing with AI code generation that actually works. Check Now!",
  keywords: 'test generation, ai generated test, automated unit testing',
};

const heroData = {
  titleTop: "Integration Test Generator ",
  titleBottom: "for Developers",
  subtitleTop: "Transform Testing with AI that actually works! Explore Now!",
  subtitleBottom:
    "Experience efficiency and reliability with 90% coverage in 2 mins.🚀",
  animationSrc: testAndStubsGen,
};

const blocksData = [
  {
    title: "Learning Curve",
    description: "Steep learning curve to understand AI-powered test generation tools.",
    SvgComponent: MdiLightningBolt,
  },
  {
    title: "Dependency on Data Quality",
    description: "AI tools heavily rely on high-quality and representative data for accurate test generation.",
    SvgComponent: FluentPuzzleCubePiece20Filled,
  },
  {
    title: "Setting Test Parameters",
    description: "It is difficult to adjust AI-generated tests for various scenarios.",
    SvgComponent: CollaborationIcon,
  },
  {
    title: "Cost of Implementation",
    description: "High initial costs and ongoing expenses associated with integrating AI into testing workflows.",
    SvgComponent: StreamlineBrowserCheck,
  },
  {
    title: "Integration with Existing Tools",
    description: "Compatibility issues when integrating AI test generation with existing testing tools and frameworks.",
    SvgComponent: PsPiggyBankCoins,
  },
  {
    title: "Understanding Test Outcomes",
    description: "Difficulties in interpreting and validating AI-generated test results.",
    SvgComponent: MaterialSymbolsLightEarlyOnOutline,
  },
];
const ProblemBlocksData = {
  title: "Using AI for Test Generation",
  subtitle: "👋 Challenges 👋",
  btnText: "Join Waitlist",
  blocksData: blocksData,
};
const FeaturesData = {
  title: "With ",
  title2: "leverage",
  subtitle:
    "Generate realistic, diverse, and customizable tests for precise testing",
  highlightTitle: "AI Test Generation ",
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
