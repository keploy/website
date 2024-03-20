"use client";

import {useState} from "react";
import { websiteContactUrl } from "@/services/constants";
import Image from "next/image";
import BannerBunny from "@/public/images/banner-bunny.png";
 
export const subscribeMutation = (formData: { email: string, message: string }) => {
  if (websiteContactUrl) {
    return fetch(websiteContactUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://keploy.io'
      },
      body: JSON.stringify(formData),
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response;
    });
  } else {
    return Promise.reject("invalid website contact url");
  }
};


export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await subscribeMutation({ email: email, message:"$100" });
      if (response.status == 201) {
        setSubscribed(true);
      } else {
        console.error('Subscribe request failed.');
      }
    } catch (error) {
      console.error('Error sending subscribe request:', error);
    }
  };

  return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">

            {/* CTA box */}
            <div className="relative bg-secondary-300  rounded-lg  py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

          

              <div className="relative flex flex-col lg:flex-row justify-between items-center">

                {/* CTA content */}
                <div className="text-center lg:text-left lg:max-w-xl">
                  <h3 className="h3 text-primary-300 mb-3"> 🚀 Elevate Your Testing with Keploy!  </h3>
                  <h4 className="h4 text-white mb-3 ">Ready to simplify your testing process?</h4>
                  <p className="text-neutral-300 text-lg mb-3">
                    -  Click to experience Keploy's magic locally or book a demo for an interactive walkthrough. Embark on a journey to stress-free testing today!
                  </p>
                  <p className="text-neutral-300 text-lg mb-3">
                    - Choose any backend application with the <span  className="text-primary-300 text-lg mb-6 font-extrabold">LOWEST</span> Test Coverage!
                  </p>
                  <p className="text-neutral-300 text-lg mb-6">
                    - Our team will determine if Keploy can generate your API tests. <br/>
                    If we can!! you can keep the tests.
                    If we can’t, you get <span className="text-primary-300 text-lg mb-6 font-extrabold">$100.</span>
                  </p>
                  <div className="flex flex-col lg:flex-row items-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-secondary-300 bg-primary-300 hover:text-white w-full mb-4 sm:w-auto sm:mb-0" href="https://calendar.app.google/8Ncpff4QnAhpVnYd8">Book Cloud Demo</a>
                </div>
                <div>
                  <a className="btn text-white bg-secondary-300 hover:text-primary-300 w-full border-white sm:w-auto sm:ml-4" href="https://www.github.com/keploy/keploy">Try Locally</a>
                </div>
              </div>
                                

                </div>
              </div>
           
              <div className="absolute right-0 bottom-0 ">
              <Image src={BannerBunny} alt="Image"/>
                      </div>
         </div>
            
          </div>
        </div>
      </section>
  )
}