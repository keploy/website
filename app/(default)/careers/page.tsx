"use client";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Globe,
  Briefcase,
  Heart,
  Users,
  Coffee,
  BookOpen,
  Gift,
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Inclusive Health Package",
    description: "Comprehensive health coverage for your well-being.",
  },
  {
    icon: Users,
    title: "Flexible Working Style",
    description: "Work remotely and collaborate across time zones.",
  },
  {
    icon: Coffee,
    title: "Balanced Working Life",
    description: "Enjoy flexible 4-week vacations to recharge.",
  },
  {
    icon: Globe,
    title: "Diversity and Inclusion",
    description: "We celebrate and support our diverse team.",
  },
  {
    icon: Gift,
    title: "Generous Perks Program",
    description: "Stipends for home office, learning, and wellness.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Access to courses, conferences, and workshops.",
  },
];

const jobOpenings = [
  {
    title: "Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (US, Mexico, Canada)",
    type: "Full time",
    description:
      "We're looking for a talented Full-Stack Engineer to join our team and help build the future of software testing.",
  },
  {
    title: "Staff Product Designer",
    department: "Design",
    location: "Remote (US, Mexico, Canada)",
    type: "Full time",
    description:
      "Join our design team to create intuitive and beautiful interfaces for our cutting-edge testing platform.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote (Worldwide)",
    type: "Full time",
    description:
      "Help us scale our infrastructure and improve our deployment processes as we grow rapidly.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote (US, Europe)",
    type: "Full time",
    description:
      "Drive the vision and strategy for our products, working closely with engineering and design teams.",
  },
];

const page = () => {
  const [activeTab, setActiveTab] = useState("all");
  const openPositionsRef = useRef<HTMLDivElement | null>(null);

  const filteredJobs =
    activeTab === "all"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department.toLowerCase() === activeTab);

      const handleScrollToOpenPositions = () => {
        if (openPositionsRef.current) {
          openPositionsRef.current.scrollIntoView({ behavior: "smooth" });
        }
      };
      
  return (
    <div className=" w-full justify-center flex  ">
      <div className=" w-full    ">
        <div className="justify-center flex ">
          <section
            data-section-id="1"
            data-share=""
            data-category="careers"
            data-component-id="5d1a71a8_01_awz"
            className="pb-32 max-w-[1120px] "
            data-path="0"
          >


            <header className="relative overflow-hidden  py-16 sm:py-24">
              <div className="absolute inset-0">
                <Image
                  src="/placeholder.svg?height=600&width=1600"
                  alt="Abstract background"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-20"
                />
              </div>
              <div className="relative container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-4 inline-block rounded-md border border-[#FF914D]  px-2 py-1 text-sm font-medium uppercase text-[#FF914D]">
                    CAREERS AT KEPLOY
                  </div>

                  <h1
                    className="text-4xl md:text-5xl mb-3 lg:text-6xl text-secondary-300 font-extrabold leading-tight sm:leading-tight md:leading-tighter tracking-tighter  aos-init aos-animate"
                    data-aos="zoom-y-out"
                  >
                    Build the Future
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-500 to-gradient-200">
                      of Software Testing!
                    </span>
                  </h1>
                  <p className="mb-8 max-w-2xl md:text-xl text-lg text-[#5F3131]">
                    Join our mission to revolutionize how developers approach
                    quality assurance and empower teams to ship with confidence.
                  </p>
                  <Button
                    onClick={handleScrollToOpenPositions}
                    size="lg"
                    className="bg-[#FF914D] hover:bg-[#EF546B] text-white"
                  >
                    View Open Positions
                  </Button>
                </motion.div>
              </div>
            </header>
            <main className="container mx-auto px-4 ">
              <section className="mb-24">
                <h2 className="mb-8 text-3xl font-bold text-[#00163D]">
                  What we're building
                </h2>
                <div className="grid gap-12 lg:grid-cols-2">
                  <div>
                    <p className="mb-6 text-lg text-[#00163D]">
                      At Keploy, we're reimagining software testing for the
                      modern development landscape. Our AI-powered platform is
                      designed to seamlessly integrate into developers'
                      workflows, automating test creation and maintenance while
                      providing deep insights into application behavior.
                    </p>
                    <p className="text-lg text-[#00163D]">
                      We're not just building a tool; we're fostering a new
                      paradigm where quality is embedded throughout the
                      development process, enabling teams to ship faster and
                      with greater confidence.
                    </p>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-xl lg:h-auto">
                    <Image
                      src="https://static.shuffle.dev/components/preview/0066bef8-104a-41d9-bd92-894baaa0dfce/assets/public/solstice-assets/images/careers/picture1-large.png"
                      alt="Keploy platform interface"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </section>

              <section className="mb-24">
                <h2 className="mb-8 text-3xl font-bold text-[#00163D]">
                  Benefits
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg bg-white border-[#E6E2D4]">
                        <CardContent className="flex h-full flex-col p-6">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF914D]">
                            <benefit.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="mb-2 text-xl font-bold text-[#00163D]">
                            {benefit.title}
                          </h3>
                          <p className="flex-grow text-[#5F3131]">
                            {benefit.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section ref={openPositionsRef} className="mb-24">
                <h2 className="mb-8 text-3xl font-bold text-[#00163D]">
                  Open Positions
                </h2>
                <Tabs defaultValue="all" className="mb-8">
                  <TabsList className="bg-[#E6E2D4]">
                    <TabsTrigger
                      value="all"
                      onClick={() => setActiveTab("all")}
                      className="data-[state=active]:bg-[#FF914D] data-[state=active]:text-white"
                    >
                      All Departments
                    </TabsTrigger>
                    <TabsTrigger
                      value="engineering"
                      onClick={() => setActiveTab("engineering")}
                      className="data-[state=active]:bg-[#FF914D] data-[state=active]:text-white"
                    >
                      Engineering
                    </TabsTrigger>
                    <TabsTrigger
                      value="design"
                      onClick={() => setActiveTab("design")}
                      className="data-[state=active]:bg-[#FF914D] data-[state=active]:text-white"
                    >
                      Design
                    </TabsTrigger>
                    <TabsTrigger
                      value="product"
                      onClick={() => setActiveTab("product")}
                      className="data-[state=active]:bg-[#FF914D] data-[state=active]:text-white"
                    >
                      Product
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredJobs.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full overflow-hidden transition-all duration-300 hover:border-[#FF914D] hover:shadow-md bg-white border-[#E6E2D4]">
                        <CardContent className="flex h-full flex-col justify-between p-6">
                          <div>
                            <h3 className="mb-2 text-xl font-bold text-[#00163D]">
                              {job.title}
                            </h3>
                            <p className="mb-4 text-[#5F3131]">
                              {job.description}
                            </p>
                            <div className="mb-4 flex flex-wrap items-center gap-4">
                              <div className="flex items-center text-sm text-[#00163D]">
                                <Briefcase className="mr-1 h-4 w-4" />
                                {job.department}
                              </div>
                              <div className="flex items-center text-sm text-[#00163D]">
                                <MapPin className="mr-1 h-4 w-4" />
                                {job.location}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="rounded-full bg-[#E6E2D4] px-3 py-1 text-sm font-medium text-[#00163D]">
                              {job.type}
                            </span>
                            <Button
                              variant="outline"
                              className="border-[#FF914D] text-[#FF914D] hover:bg-[#FF914D] hover:text-white"
                            >
                              Apply Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <Card className="overflow-hidden bg-gradient-to-r from-[#FF914D] to-[#EF546B] text-white">
                  <CardContent className="p-8">
                    <div className="mb-6 flex flex-col items-center text-center sm:flex-row sm:text-left">
                      <div className="mb-4 sm:mb-0 sm:mr-6">
                        <h3 className="mb-2 text-2xl font-bold">
                          Join Our Talent Community
                        </h3>
                        <p className="text-[#E6E2D4]">
                          Stay updated on new opportunities at Keploy
                        </p>
                      </div>
                    </div>
                    <form className="flex flex-col items-center gap-4 sm:flex-row">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-white/10 text-white placeholder:text-[#E6E2D4] sm:w-2/3"
                      />
                      <Button className="w-full bg-white text-[#FF914D] hover:bg-[#E6E2D4] sm:w-auto">
                        Subscribe
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </section>
            </main>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
