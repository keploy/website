import { ReactElement } from "react";
import { featuresData } from "../utils/stub-generation";

export default function Features() {
  return (
    <section className="bg-neutral-100 text-gray-900 pt-12 px-4 mb-20 sm:px-6">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xl text-center text-gray-600 pb-12 md:mt-12">Transforming interactions into realistic, diverse, and customizable stubs for precise testing</h2>
          <h2 className="h2 font-bold text-secondary-300">
            With Keploy's stub generation{" "}
            <span className="relative inline-block pl-1 border-l-2 border-primary-400 mt-3" data-aos="fade-right" data-aos-delay="200">{" "}
              <span
                className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-50 opacity-50 "
                aria-hidden="true"
              />
              <span className="relative text-orange-500 " data-aos="fade-in" data-aos-delay="500">eliminate&nbsp;</span></span>
          </h2>
        </div>
        {/* Grid of features */}
        <div className="flex flex-col flex-wrap justify-center gap-6">
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {featuresData.slice(0, 3).map((feature, index) => (
              <TextBlock key={index} heading={feature.title} subHeading={feature.description} icon={feature.icon} />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {featuresData.slice(3, 5).map((feature, index) => (
              <TextBlock key={index} heading={feature.title} subHeading={feature.description} icon={feature.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TextBlock = (props: { heading: string, subHeading: string, icon: ReactElement }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-100 text-black p-4 border-transparent shadow-md transition-shadow duration-200 w-auto max-w-xs hover:bg-gradient-to-r from-orange-100 via-orange-100 to-orange-200">
      <div className="mb-8">
        <div className="flex items-center justify-center w-16 h-16 rounded-full border-1 border-white">
          {props.icon}
        </div>
      </div>
      <h4 className="text-xl text-center text-accent-200 font-bold leading-snug tracking-tight mb-1">{props.heading}</h4>
      <p className="text-gray-600 text-center">{props.subHeading}</p>
    </div>
  );
};


