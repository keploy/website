'use client'
import Footer from "@/components/ui/footer";
import Hero from '@/components/test-duplication/hero'
import Features from '@/components/test-duplication/feature'
import ProblemBlocks from '@/components/test-duplication/block'
import Banner from '@/components/test-duplication/banner'
import Language from "@/components/language";
import SocialLinks from "@/components/test-duplication/community"
import { Testimonial } from "@/components/testimonial";
import { testimonialData } from "@/components/utils/testimonial";

export default function Home() {
  return (
    <>
        <Hero />
        <ProblemBlocks />
        <Features />
        <Testimonial
          content={testimonialData[1].content}
          author={testimonialData[1].author}
          company={testimonialData[1].company}
          image={testimonialData[1].image}
        />
        <SocialLinks/>
        <Testimonial
          content={testimonialData[0].content}
          author={testimonialData[0].author}
          company={testimonialData[0].company}
          image={testimonialData[0].image}
        />
        <Language />
        <Banner />
        <Footer />
    </>
  )
}