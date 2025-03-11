'use client'
import Footer from "@/components/ui/footer";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Hero from "@/components/hero";
import Features from "@/components/features";
import ProblemBlocks from "@/components/problem-blocks";
import Newsletter from "@/components/newsletter";
import Language from "@/components/language";
import Community from "@/components/community";
import Installation from "@/components/installation";
import { Testimonial } from "@/components/testimonial";
import { testimonialData } from "@/components/utils/testimonial";
import TwitterTestimonials from "@/components/TwitterTestimonials";
const Home: React.FC = () => {
  const [loadFeatures, setLoadFeatures] = useState<boolean>(false);

  const { ref: sentinelRef, inView: sentinelInView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  useEffect(() => {
    if (sentinelInView) {
      setLoadFeatures(true);
    }
  }, [sentinelInView]);

  return (
    <>
      <Hero />
      <div ref={sentinelRef} style={{ height: "1px", background: "transparent" }} />
      
      {loadFeatures && <Features />}

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