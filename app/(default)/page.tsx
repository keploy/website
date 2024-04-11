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
import FAQ, {Question} from "@/components/faq";

const faqData: Question[] = [
  {
    title: "What is native integration?",
    answer:
      "Native integration refers to the process of seamlessly integrating a tool or service directly into the native environment of an application or platform. This means that the integration is deeply woven into the core functionality of the application, providing a smooth and efficient user experience without the need for external plugins or third-party integrations.",
  },
  {
    title: "How does keploy provide combined coverage?",
    answer:
      "Keploy provides combined coverage by integrating both unit tests and end-to-end (E2E) tests into a single, unified testing framework. This allows developers to write tests that cover both the individual components of an application (unit tests) and the overall functionality of the application (E2E tests). By combining these two types of tests, Keploy ensures that the application is thoroughly tested and any issues or regressions are quickly identified and addressed.",
  },
  {
    title: "Can I combine my keploy tests with vitest?",
    answer:
      "Yes, you can combine your Keploy tests with Vitest, a lightweight and fast JavaScript testing framework. Keploy is designed to be compatible with various testing frameworks, including Vitest. By integrating Keploy with Vitest, you can leverage the power of both tools to create a comprehensive testing strategy for your application. Keploy can be used to generate and manage your test data, while Vitest can be used to write and run the actual tests, providing a seamless and efficient testing workflow.",
  },
];
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
        <FAQ questions={faqData}/>
        <Footer />
    </>
  )
}
