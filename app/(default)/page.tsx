"use client";

import Footer from "@/components/ui/footer";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Hero from "@/components/hero";
import ProblemBlocks from "@/components/problem-blocks";
import Newsletter from "@/components/newsletter";
import Language from "@/components/language";
import Community from "@/components/community";
import Installation from "@/components/installation";
import { Testimonial } from "@/components/testimonial";
import { testimonialData } from "@/components/utils/testimonial";
import TwitterTestimonials from "@/components/TwitterTestimonials";
import Features from "@/components/features";

const Home: React.FC = () => {
  const [showFeatures, setShowFeatures] = useState<boolean>(false);

  // Top sentinel: when visible (and bottom not visible) => show Features
  const { ref: topSentinelRef, inView: topInView } = useInView({
    threshold: 0.1,
    triggerOnce: false, 
  });

  // Bottom sentinel: when visible => hide Features
  const { ref: bottomSentinelRef, inView: bottomInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    // If bottom is in view, you've scrolled past Features, unmount it
    if (bottomInView) {
      setShowFeatures(false);
    } else if (topInView && !bottomInView) {
      // If top is in view and bottom isn't, show Features
      setShowFeatures(true);
    }
  }, [topInView, bottomInView]);

  return (
    <>
      <Hero />
      
      <div ref={topSentinelRef} style={{ height: "50px", background: "transparent" }} />

      {showFeatures && <Features />}

      <div ref={bottomSentinelRef} style={{ height: "50px", background: "transparent" }} />

      <Testimonial
        content={testimonialData[0].content}
        author={testimonialData[0].author}
        company={testimonialData[0].company}
        image={testimonialData[0].image}
      />

      <Installation />

      <Testimonial
        content={testimonialData[2].content}
        author={testimonialData[2].author}
        company={testimonialData[2].company}
        image={testimonialData[2].image}
      />
      <Community />
      <Testimonial
        content={testimonialData[1].content}
        author={testimonialData[1].author}
        company={testimonialData[1].company}
        image={testimonialData[1].image}
      />
      <Language />
      <ProblemBlocks />
      <TwitterTestimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;