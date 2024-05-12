
import HeroImage from '@/public/images/conferenceHeader.png'
import Image from "next/image";
export default function Hero() {
  return (
    <section>
      <div className=" max-w-6xl mx-auto px-4 sm:px-6 relative">




        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-56 md:pb-16">
              <Image  src={HeroImage}  alt="Image" />

      </div>
      </div>
    </section>
  )
}
