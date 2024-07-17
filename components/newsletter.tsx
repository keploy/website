"use client";

import { useState } from "react";
import { websiteContactUrl } from "@/services/constants";
import Link from "next/link";

const emailValidation = (email: string) => {
  const response = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if(!response){
    return {
      success: false,
      message: "Please enter a valid email address!"
    }
  }

  return {
    success: true,
    message: "Please hit the subscribe button"
  };
}

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
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value);
    const emailValidationResponse =  emailValidation(email);
    setSubscribeMessage(emailValidationResponse.message);
  }

  const handleSubscribe = async () => {
    try {
      const response = await subscribeMutation({ email: email, message:"$100" });
      if (response.status == 201) {
        setSubscribeMessage("Thanks for subscribing!");
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
              {/* Background illustration */}
              <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                      <stop stopColor="#DFDFDF" offset="1%" />
                      <stop stopColor="#00163d" offset="44.317%" />
                      <stop stopColor="#00061A" offset="90%" />
                    </radialGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <g fill="#FFF">
                      <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                      <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                      <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                      <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                      <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                      <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                      <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                      <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                    </g>
                    <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                  </g>
                </svg>
              </div>

              <div className="relative flex flex-col lg:flex-row justify-between items-center">

                {/* CTA content */}
                <div className="text-center lg:text-left lg:max-w-xl">
                  <h3 className="h3 text-primary-300 mb-2">Keploy test coverage Challenge! </h3>
                  <h4 className="h4 text-accent-100 mb-2 underline">How it works?</h4>
                  <p className="text-neutral-300 text-lg mb-3">
                    -  Share Your Application Dependencies with us!
                  </p>
                  <p className="text-neutral-300 text-lg mb-3">
                    - Choose any backend application with the <span  className="text-primary-300 text-lg mb-6 font-extrabold">LOWEST</span> Test Coverage!
                  </p>
                  <p className="text-neutral-300 text-lg mb-6">
                    - Our team will determine if Keploy can generate your API tests. <br/>
                    If we can!! you can keep the tests.
                    If we can’t, you get <span className="text-primary-300 text-lg mb-6 font-extrabold">$100.</span>
                  </p>

                  {/* CTA form */}
                  <form id="subscribeForm" className="w-full lg:w-auto">
                    {!subscribed && <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                      <input value={email}
                             onChange={handleEmailInput}
                             type="email" className="form-input w-full appearance-none bg-neutral-100 border border-secondary-500 focus:border-secondary-400 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-secondary-300 placeholder-secondary-100" placeholder="Your email…" aria-label="Your email…" />
                      <Link className="btn text-secondary-300 bg-primary-300 hover:bg-primary-400 shadow" href="#0"  onClick={handleSubscribe} >Subscribe</Link>
                    </div> }
                    {/* Subscribe Message */}
                    {<p className="text-sm text-gray-400 mt-3">{subscribeMessage}</p>}
                    {!subscribeMessage &&   <p className="text-sm text-gray-400 mt-3">No spam. You can unsubscribe at any time.</p> }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}