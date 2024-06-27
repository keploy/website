import Footer from "@/components/ui/footer";

import Hero from '@/components/hero'
import Features from '@/components/features'
import ProblemBlocks from '@/components/problem-blocks'
import Newsletter from '@/components/newsletter'
import Language from "@/components/language";
import Community from "@/components/community";
import Installation from "@/components/installation";
import { Testimonial } from "@/components/testimonial";
import { testimonialData } from "@/components/utils/testimonial";
import TwitterTestimonials from "@/components/TwitterTestimonials"
import RunCommandComponent from "@/components/atg/RunCommandComponent";
import Editor from "@/components/atg/editor";
export default function Home() {
  return (
    <>
        <Header/>
        <Hero />
        <Features />
  
        <Testimonial
          content={testimonialData[0].content}
          author={testimonialData[0].author}
          company={testimonialData[0].company}
          image={testimonialData[0].image}
        />
        <Editor/>
        {/* <RunCommandComponent/> */}
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
        <TwitterTestimonials/>
        <Newsletter />
        <Footer />
    </>
  )
}
