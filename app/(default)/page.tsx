import Footer from "@/components/ui/footer";

export const metadata = {
  title: 'Keploy - Open Source Stubs and API Test Generator for Developer',
  description: 'Keploy is AI based test case and stubs/mocks generator for e2e testing. 90% test coverage in minutes with open source testing tool',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import ProblemBlocks from '@/components/problem-blocks'
import Newsletter from '@/components/newsletter'
import Language from "@/components/language";
import Community from "@/components/community";
import Installation from "@/components/installation";

import MarutiLogo from "@/public/images/users/Logo_for_Maruti_Suzuki.svg";
import NutanixLogo from "@/public/images/users/Nutanix_Logo.svg";
import { Testimonial } from "@/components/testimonial";
import { testimonialData } from "@/components/utils/testimonial";
import TwitterTestimonials from "@/components/TwitterTestimonials";

export default function Home() {
  return (
    <>
        <Hero />
        <ProblemBlocks />
        <Features />
  
        <Testimonial
          content={testimonialData[0].content}
          author={testimonialData[0].author}
          company={testimonialData[0].company}
          image={testimonialData[0].image}
        />
        <Installation/>
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
        <TwitterTestimonials/>
        <Newsletter />
        <Footer />
    </>
  )
}
