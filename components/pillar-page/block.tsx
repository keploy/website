import arrowsSvg from "@/public/images/arrows.svg";
import Image from "next/image";
import { useState } from "react";
import FormModal from "../waitlistForm";
const Item = (props: {
  title: string;
  description: string;
  SvgComponent: Function;
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded shadow-xl h-full text-center">
      {props.SvgComponent()}
      <h4 className="text-xl font-bold leading-snug tracking-tight text-accent-200 mb-1">
        {props.title}
      </h4>
      <p className="text-gray-600 mb-4">{props.description}</p>
    </div>
  );
};

export default function ProblemBlocks(props: {
  title: string;
  subtitle: string;
  btnText: string;
  blocksData: Array<{
    title: string;
    description: string;
    SvgComponent: Function;
  }>;
}) {
  const [isFormOpen, setFormOpen] = useState(false);
  return (
    <section className="relative bg-neutral-100">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gradient-to-b from-secondary-500 to-secondary-100  pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className=" w-full text-center pb-6 md:pb-10">
            <h1 className="h1 mb-4 text-secondary-300 whitespace-nowrap">
              {props.title}
            </h1>
            <div className="flex justify-center w-full">
              <h3 className="h3 text-xl text-gray-600 flex justify-center items-center">
                &nbsp; {props.subtitle} &nbsp;
              </h3>
            </div> 
          </div>
          <div className="flex flex-row justify-center gap-40 text-gray-600 mb-7">
            <Image src={arrowsSvg} alt="arrows" width={10} height={10} />
            <Image src={arrowsSvg} alt="arrows" width={10} height={10} />
          </div>
          {/* Items */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {props.blocksData.map((block, index) => (
              <Item
                key={index}
                title={block.title}
                description={block.description}
                SvgComponent={block.SvgComponent}
              />
            ))}
          </div>
          {props.btnText && (
            <div onClick={()=>{
              if (props.btnText=="Join Waitlist") setFormOpen(true)
              }}
             className="flex justify-center md:justify-center gap-4 mt-8">
              <a
                className="btn text-secondary-300 bg-primary-300 hover:text-white"
              > 
                {props.btnText}
              </a>
            </div>
          )}
        </div>   
      </div>
      <FormModal isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
}
