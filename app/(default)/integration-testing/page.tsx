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
import { featuresData,faqQuestions } from "@/components/utils/integration-testing";
import BannerBunny from "@/public/images/banner-bunny.png";
import FAQ from "@/components/pillar-page/faq";
import RootLayout, { Metadata } from "@/app/layout";

const pageMetadata: Metadata = {
  title: 'Keploy | Maximize Integration Testing Efficiency with Our Tools!',
  description: 'Discover how Keploy’s integration testing tools streamline complex workflows. Achieve scalable, reliable, and automated testing with zero-code solutions. Start now.',
  keywords: 'integration testing, test coverage tools, automated testing, zero-code testing, Python integration testing, Java integration testing, Jest, Go test',
};

const heroData = {
    titleTop: "Optimize Integration Testing",
    titleBottom: "with Seamless Automation",
    subtitleTop: "Automate your integration testing workflows for enhanced collaboration.",
    subtitleBottom: "Achieve reliable and scalable testing for complex systems with zero-code solutions🚀",
    animationSrc: testAndStubsGen,
};

const blocksData = [
    {
      title: "Interdependent Components",
      description: "Testing integrated systems can be challenging when components are highly interdependent, making it difficult to isolate and identify issues.",
      SvgComponent: MdiLightningBolt,
    },
    {
      title: "Complex Environment Setup",
      description: "Setting up environments that mimic real-world systems can be complex and resource-intensive, often requiring additional infrastructure.",
      SvgComponent: FluentPuzzleCubePiece20Filled,
    },
    {
      title: "Test Data Inconsistencies",
      description: "Ensuring consistent and relevant data across different integrated components can be difficult, leading to unreliable test results.",
      SvgComponent: CollaborationIcon,
    },
    {
      title: "Limited Test Coverage",
      description: "Comprehensive coverage is hard to achieve in integration testing due to the complexity of testing all possible interactions between components.",
      SvgComponent: StreamlineBrowserCheck,
    },
    {
      title: "Maintenance Overhead",
      description: "Frequent code changes often lead to increased maintenance of integration tests, which can be both time-consuming and resource-intensive.",
      SvgComponent: PsPiggyBankCoins,
    },
    {
      title: "Debugging Complexity",
      description: "Identifying and resolving issues within integrated systems is often complex and time-consuming due to the interconnected nature of the components.",
      SvgComponent: MaterialSymbolsLightEarlyOnOutline,
    },
];
  
const ProblemBlocksData = {
  title: "Smart generation - Enhanced development",
  subtitle: "👋 Say Hi to 👋",
  btnText: "Join Waitlist",
  blocksData: blocksData,
};
const FeaturesData = {
  title: "Ensure ",
  title2: "with",
  subtitle:
    "Transforming interactions into realistic, diverse, and customizable stubs for precise testing",
  highlightTitle: "Code Coverage ",
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
