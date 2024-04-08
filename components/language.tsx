import TestimonialImage from "@/public/images/users/Nutanix_Logo.svg";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Language() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute bottom-0 -mb-32 transform -translate-x-1/2 pointer-events-none left-1/2"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-03"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 0)"
            fill="url(#illustration-03)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
          </g>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-03)"
            fillRule="evenodd"
          >
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center ">
            <h2 className="h2 text-secondary-300">
              Replicate data from{" "}
              <span
                className="relative inline-block pl-1 border-l-2 border-primary-400"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {" "}
                <span
                  className="absolute inset-0 opacity-50 bg-gradient-to-r from-primary-300 to-primary-50"
                  aria-hidden="true"
                />
                <span
                  className="relative text-accent-100 "
                  data-aos="fade-in"
                  data-aos-delay="500"
                >
                  any source &nbsp;
                </span>
              </span>
            </h2>
          </div>
          <div className="max-w-6xl px-4 mx-auto overflow-hidden sm:px-6  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
            <div className="relative inline-flex flex-nowrap no-scrollbar ">
              <div className="flex items-center py-12 animate-marquee whitespace-nowrap w-max">
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/apacheclient.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/chi.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/dynamo.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/echo.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/elastic.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/express.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/gin.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/googlemaps.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/gorilla.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/grpc.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/h2db.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/mariadb.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/mongo.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/nethttp.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/octokit.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/okhttp.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/oracledb.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/postgres.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/redis.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/s3.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/springboot.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/sql.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/webgo.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
              </div>
              <div className="flex items-center py-12 animate-marquee whitespace-nowrap w-max">
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/apacheclient.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/chi.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/dynamo.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/echo.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/elastic.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/express.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/gin.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/googlemaps.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/gorilla.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/grpc.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/h2db.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/mariadb.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/mongo.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/nethttp.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/octokit.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/okhttp.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/oracledb.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/postgres.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/redis.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/s3.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/springboot.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/sql.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
                <span className="flex-none mx-4">
                  <img
                    className="relative transition-transform hover:scale-110"
                    src="/images/frameworks/webgo.png"
                    width={106}
                    height={100}
                    alt="Nutanix Testimonial"
                  />
                </span>
              </div>
              div
            </div>
          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto mt-10 mb-3 text-center ">
            <h2 className="h2 text-secondary-300 ">...in your language</h2>
          </div>

          {/* Items */}
          <div className="grid max-w-sm grid-cols-6 gap-4 mx-auto md:max-w-4xl md:grid-cols-6 place-content-center">
            {/* Item */}
            <div className="flex items-center justify-center col-span-2 py-2 transition-transform hover:scale-110 md:col-auto">
              <svg
                className="max-w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="80"
                viewBox="0 0 150 70"
              >
                <path
                  d="M21.43 42.108s-1.843 1.122 1.282 1.443c3.767.48 5.77.4 9.938-.4a15.03 15.03 0 0 0 2.645 1.282c-9.377 4.007-21.24-.24-13.866-2.324zm-1.202-5.21s-2.004 1.523 1.122 1.843c4.088.4 7.293.48 12.824-.64a4.89 4.89 0 0 0 1.923 1.202c-11.3 3.366-23.964.32-15.87-2.404zm22.12 9.137s1.363 1.122-1.523 2.004c-5.37 1.603-22.522 2.084-27.33 0-1.683-.72 1.523-1.763 2.565-1.923 1.042-.24 1.603-.24 1.603-.24-1.843-1.282-12.263 2.645-5.3 3.767 19.155 3.126 34.944-1.362 29.975-3.607zM22.312 31.448s-8.736 2.084-3.126 2.805c2.404.32 7.133.24 11.54-.08 3.607-.32 7.213-.962 7.213-.962s-1.282.56-2.164 1.122c-8.896 2.324-25.968 1.282-21.08-1.122 4.168-2.004 7.614-1.763 7.614-1.763zm15.63 8.736c8.976-4.65 4.81-9.137 1.924-8.576-.72.16-1.042.32-1.042.32s.24-.48.8-.64c5.69-2.004 10.18 6.01-1.843 9.137 0 0 .08-.08.16-.24zM23.194 52.847c8.656.56 21.88-.32 22.2-4.408 0 0-.64 1.603-7.133 2.805-7.374 1.363-16.5 1.202-21.88.32 0 0 1.122.962 6.812 1.282z"
                  fill="#4e7896"
                />
                <path
                  d="M32.49 5s4.97 5.05-4.73 12.663c-7.774 6.17-1.763 9.698 0 13.705-4.568-4.087-7.854-7.694-5.6-11.06C25.438 15.34 34.494 12.935 32.49 5zm-2.565 23.002c2.324 2.645-.64 5.05-.64 5.05s5.93-3.046 3.206-6.813c-2.485-3.607-4.408-5.37 6.01-11.38 0 0-16.43 4.088-8.576 13.144z"
                  fill="#f58219"
                />
                <path
                  d="M91.677 44.583V26.397c0-4.64-2.598-7.794-9.093-7.794-3.71 0-6.866.928-9.65 2.04l.928 3.34c2.04-.742 4.64-1.485 7.423-1.485 3.526 0 5.196 1.485 5.196 4.454v2.412h-1.856c-8.907 0-13 3.34-13 8.722 0 4.454 2.784 7.052 7.794 7.052 3.155 0 5.567-1.485 7.794-3.34l.37 2.784h4.083zm-5.196-5.938c-1.856 1.67-3.897 2.598-5.753 2.598-2.412 0-3.897-1.485-3.897-4.083s1.485-4.454 7.423-4.454h2.227v5.938zm22.64 5.938h-6.495L94.832 19.16h5.567l4.825 15.588 1.113 4.64c2.413-6.68 4.268-13.547 5.01-20.227h5.567c-1.485 8.35-4.082 17.443-7.794 25.423zm30.062 0V26.397c0-4.64-2.598-7.794-9.093-7.794-3.71 0-6.866.928-9.65 2.04l.742 3.34c2.227-.742 4.825-1.485 7.608-1.485 3.526 0 5.196 1.485 5.196 4.454v2.412h-1.856c-8.907 0-13 3.34-13 8.722 0 4.454 2.598 7.052 7.608 7.052 3.34 0 5.753-1.485 7.98-3.34l.37 2.784h4.083zm-5.196-5.938c-1.856 1.67-3.897 2.598-5.753 2.598-2.412 0-3.897-1.485-3.897-4.083s1.484-4.454 7.423-4.454h2.227v5.938zM65.883 48.85c-1.485 2.227-3.71 3.897-6.495 4.825l-2.413-2.97c1.856-1.113 3.712-2.783 4.454-4.268.742-1.3.928-3.155.928-7.423v-28.95h5.567v28.578c0 5.753-.557 7.98-2.04 10.206z"
                  fill="#4e7896"
                />
              </svg>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center col-span-2 py-2 transition-transform hover:scale-110 md:col-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full"
                viewBox="0 0 150 75"
                width="161"
                height="80"
                preserveAspectRatio="xMidYMid"
              >
                <g transform="matrix(.277129 0 0 .277129 9.76251 9.894026)">
                  <path
                    d="M471.05 51.6c-1.245 0-2.455.257-3.526.863l-33.888 19.57c-2.193 1.263-3.526 3.65-3.526 6.188v39.07c0 2.537 1.333 4.92 3.526 6.187l8.85 5.1c4.3 2.12 5.886 2.086 7.843 2.086 6.366 0 10-3.863 10-10.577V81.542c0-.545-.472-.935-1.007-.935h-4.245c-.544 0-1.007.4-1.007.935v38.565c0 2.976-3.1 5.97-8.13 3.454l-9.2-5.396c-.325-.177-.576-.5-.576-.863v-39.07c0-.37.248-.748.576-.935l33.817-19.5c.317-.182.694-.182 1.007 0l33.817 19.5c.322.193.576.553.576.935v39.07c0 .373-.187.755-.504.935l-33.888 19.5c-.3.173-.7.173-1.007 0l-8.706-5.18c-.26-.152-.613-.14-.863 0-2.403 1.362-2.855 1.52-5.108 2.302-.555.193-1.4.494.288 1.44l11.368 6.7c1.082.626 2.288.935 3.526.935 1.255 0 2.443-.3 3.526-.935l33.888-19.5c2.193-1.276 3.526-3.65 3.526-6.187v-39.07c0-2.538-1.333-4.92-3.526-6.188l-33.888-19.57c-1.062-.606-2.28-.863-3.526-.863zm9.066 27.918c-9.65 0-15.397 4.107-15.397 10.936 0 7.4 5.704 9.444 14.966 10.36 11.08 1.085 11.944 2.712 11.944 4.893 0 3.783-3.016 5.396-10.145 5.396-8.956 0-10.925-2.236-11.584-6.7-.078-.478-.446-.863-.935-.863h-4.4a1.03 1.03 0 0 0-1.007 1.007c0 5.703 3.102 12.447 17.916 12.447 10.723 0 16.908-4.2 16.908-11.584 0-7.3-4.996-9.273-15.397-10.65-10.5-1.4-11.512-2.07-11.512-4.533 0-2.032.85-4.75 8.634-4.75 6.953 0 9.523 1.5 10.577 6.188.092.44.48.8.935.8h4.4c.27 0 .532-.166.72-.36.184-.207.314-.44.288-.72-.68-8.074-6.064-11.872-16.908-11.872z"
                    fill="#83cd29"
                  />
                  <path
                    d="M271.82.383a2.18 2.18 0 0 0-1.079.288 2.18 2.18 0 0 0-1.079 1.871v55.042c0 .54-.252 1.024-.72 1.295a1.5 1.5 0 0 1-1.511 0l-8.994-5.18a4.31 4.31 0 0 0-4.317 0L218.218 74.42c-1.342.774-2.16 2.264-2.16 3.813v41.443a4.31 4.31 0 0 0 2.159 3.741l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.31 4.31 0 0 0 2.159-3.741V16.356c0-1.572-.858-3.047-2.23-3.813L272.9.598c-.336-.187-.708-.22-1.08-.216zM40.86 52.115c-.685.028-1.328.147-1.943.504L3.015 73.34a4.3 4.3 0 0 0-2.158 3.741L.93 132.7c0 .774.4 1.492 1.08 1.87.667.4 1.494.4 2.158 0l21.297-12.232c1.35-.8 2.23-2.196 2.23-3.74V92.623c0-1.55.815-2.97 2.16-3.74l9.066-5.252a4.25 4.25 0 0 1 2.158-.576 4.24 4.24 0 0 1 2.159.576L52.3 88.88c1.343.77 2.158 2.192 2.158 3.74v25.974c0 1.546.9 2.95 2.23 3.74l21.297 12.232c.67.4 1.495.4 2.158 0 .66-.38 1.08-1.097 1.08-1.87l.072-55.617a4.28 4.28 0 0 0-2.158-3.741L43.235 52.618c-.607-.356-1.253-.476-1.943-.504h-.43zm322.624.504a4.29 4.29 0 0 0-2.159.576l-35.903 20.722c-1.34.775-2.16 2.192-2.16 3.74V119.1c0 1.558.878 2.97 2.23 3.74l35.615 20.3c1.315.75 2.92.807 4.245.07l21.585-12.016c.685-.38 1.148-1.09 1.15-1.87s-.403-1.482-1.08-1.87l-36.12-20.722c-.676-.386-1.15-1.167-1.15-1.943V91.83c0-.774.48-1.484 1.15-1.87l11.224-6.476c.668-.386 1.488-.386 2.16 0L375.5 89.96a2.15 2.15 0 0 1 1.079 1.87v10.217a2.15 2.15 0 0 0 1.079 1.87c.673.388 1.488.39 2.16 0L401.33 91.4c1.335-.776 2.16-2.197 2.16-3.74v-10a4.32 4.32 0 0 0-2.159-3.741l-35.687-20.722a4.28 4.28 0 0 0-2.159-.576zm-107.35 30.94a1.21 1.21 0 0 1 .576.143l12.303 7.123c.334.193.576.55.576.935v14.246c0 .387-.24.743-.576.935l-12.303 7.123c-.335.19-.744.19-1.08 0l-12.303-7.123c-.335-.193-.576-.55-.576-.935v-14.246c0-.385.242-.74.576-.935l12.303-7.122c.168-.097.316-.143.504-.143v-.001z"
                    fill="#404137"
                  />
                  <path
                    d="M148.714 52.402a4.31 4.31 0 0 0-2.16.576l-35.903 20.65c-1.342.774-2.158 2.265-2.158 3.813v41.443a4.3 4.3 0 0 0 2.158 3.74l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.31 4.31 0 0 0 2.159-3.741V77.44c0-1.55-.816-3.04-2.16-3.813l-35.903-20.65a4.27 4.27 0 0 0-2.16-.576zm214.7 36.983c-.143 0-.302 0-.432.07l-6.907 4.03a.84.84 0 0 0-.432.719v7.915c0 .298.173.57.432.72l6.907 3.957a.75.75 0 0 0 .79 0l6.907-3.957c.256-.147.432-.422.432-.72v-7.915c0-.298-.175-.57-.432-.72l-6.907-4.03c-.128-.076-.216-.07-.36-.07z"
                    fill="#83cd29"
                  />
                </g>
              </svg>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center col-span-2 py-2 transition-transform hover:scale-110 md:col-auto">
              <svg
                className="max-w-full "
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="150"
                height="100"
                viewBox="0 0 254.5 255"
              >
                <style>{`.st4{fill:#00ACD7;}`}</style>
                <path
                  className="st4"
                  d="M40.2,101.1c-.4,0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5,1.1-.5l35.7,0c.4,0,.5,.3,.3,.6l-1.7,2.6c-.2,.3-.7,.6-1,.6L40.2,101.1z M25.1,110.3c-.4,0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5,1.1-.5l45.6,0c.4,0,.6,.3,.5,.6l-.8,2.4c-.1,.4-.5,.6-.9,.6L25.1,110.3z M49.3,119.5c-.4,0-.5-.3-.3-.6l1.4-2.5c.2-.3,.6-.6,1-.6l20,0c.4,0,.6,.3,.6,.7l-.2,2.4c0,.4-.4,.7-.7,.7L49.3,119.5z M153.1,99.3c-6.3,1.6-10.6,2.8-16.8,4.4c-1.5,.4-1.6,.5-2.9-1c-1.5-1.7-2.6-2.8-4.7-3.8c-6.3-3.1-12.4-2.2-18.1,1.5c-6.8,4.4-10.3,10.9-10.2,19c.1,8,5.6,14.6,13.5,15.7c6.8,.9,12.5-1.5,17-6.6c.9-1.1,1.7-2.3,2.7-3.7c-3.6,0-8.1,0-19.3,0c-2.1,0-2.6-1.3-1.9-3c1.3-3.1,3.7-8.3,5.1-10.9c.3-.6,1-1.6,2.5-1.6c5.1,0,23.9,0,36.4,0c-.2,2.7-.2,5.4-.6,8.1c-1.1,7.2-3.8,13.8-8.2,19.6c-7.2,9.5-16.6,15.4-28.5,17c-9.8,1.3-18.9-.6-26.9-6.6c-7.4-5.6-11.6-13-12.7-22.2c-1.3-10.9,1.9-20.7,8.5-29.3c7.1-9.3,16.5-15.2,28-17.3c9.4-1.7,18.4-.6,26.5,4.9c5.3,3.5,9.1,8.3,11.6,14.1c.6,.9.2,1.4-1,1.7zM186.2,154.6c-9.1-.2-17.4-2.8-24.4-8.8c-5.9-5.1-9.6-11.6-10.8-19.3c-1.8-11.3,1.3-21.3,8.1-30.2c7.3-9.6,16.1-14.6,28-16.7c10.2-1.8,19.8-.8,28.5,5.1c7.9,5.4,12.8,12.7,14.1,22.3c1.7,13.5-2.2,24.5-11.5,33.9c-6.6,6.7-14.7,10.9-24,12.8c-2.7,.5-5.4,.6-8,.9zm23.8-40.4c-.1-1.3-.1-2.3-.3-3.3c-1.8-9.9-10.9-15.5-20.4-13.3c-9.3,2.1-15.3,8-17.5,17.4c-1.8,7.8,2,15.7,9.2,18.9c5.5,2.4,11,2.1,16.3-.6c7.9-4.1,12.2-10.5,12.7-19.1z"
                />
              </svg>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center col-span-2 py-2 transition-transform hover:scale-110 md:col-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="100"
                viewBox="5.591 3.262 474.801 167.803"
              >
                <path
                  d="M184.614 61.929c0-14.562-4.152-22.038-12.457-22.447-3.305-.156-6.53.37-9.669 1.589-2.505.896-4.191 1.784-5.078 2.681V78.51c5.312 3.334 10.029 4.884 14.143 4.64 8.703-.577 13.061-7.643 13.061-21.221zm10.244.604c0 7.398-1.735 13.539-5.225 18.422-3.889 5.527-9.279 8.373-16.17 8.529-5.195.165-10.547-1.462-16.054-4.874v31.591l-8.909-3.178v-70.12c1.462-1.793 3.344-3.333 5.624-4.64 5.303-3.09 11.745-4.678 19.329-4.756l.126.126c6.931-.087 12.271 2.759 16.024 8.529 3.5 5.293 5.255 12.077 5.255 20.371zM249.305 83.266c0 9.923-.994 16.794-2.982 20.615-1.998 3.82-5.8 6.871-11.414 9.143-4.552 1.793-9.475 2.768-14.757 2.934l-1.473-5.614c5.371-.73 9.153-1.462 11.346-2.193 4.318-1.462 7.281-3.703 8.909-6.706 1.306-2.446 1.949-7.115 1.949-14.025V85.1c-6.092 2.769-12.476 4.143-19.152 4.143-4.387 0-8.256-1.374-11.59-4.143-3.743-3.012-5.614-6.832-5.614-11.462v-37.08l8.909-3.051v37.321c0 3.986 1.286 7.057 3.859 9.211s5.907 3.188 9.991 3.109c4.084-.088 8.46-1.667 13.109-4.757v-43.54h8.909v48.415zM284.082 88.997a35.51 35.51 0 0 1-2.934.126c-5.039 0-8.968-1.198-11.774-3.606-2.798-2.407-4.201-5.73-4.201-9.971v-35.09h-6.102v-5.604h6.102V19.968l8.899-3.168v18.052h10.01v5.604h-10.01v34.846c0 3.344.896 5.712 2.689 7.097 1.54 1.14 3.987 1.793 7.32 1.959v4.639zM338.023 88.266h-8.909V53.878c0-3.499-.818-6.511-2.446-9.025-1.881-2.847-4.493-4.27-7.847-4.27-4.084 0-9.191 2.154-15.322 6.462v41.221h-8.908V6.069l8.908-2.807V40.7c5.692-4.143 11.911-6.219 18.666-6.219 4.718 0 8.538 1.589 11.463 4.757 2.934 3.167 4.396 7.115 4.396 11.833v37.195h-.001zM385.374 60.526c0-5.595-1.062-10.215-3.178-13.87-2.515-4.454-6.423-6.804-11.706-7.047-9.767.565-14.641 7.563-14.641 20.976 0 6.15 1.014 11.287 3.061 15.41 2.612 5.254 6.531 7.847 11.756 7.759 9.805-.079 14.708-7.818 14.708-23.228zm9.757.058c0 7.964-2.037 14.592-6.102 19.884-4.475 5.927-10.653 8.899-18.539 8.899-7.817 0-13.909-2.973-18.305-8.899-3.987-5.292-5.976-11.92-5.976-19.884 0-7.485 2.154-13.782 6.463-18.909 4.552-5.439 10.536-8.168 17.935-8.168 7.397 0 13.421 2.729 18.061 8.168 4.309 5.127 6.463 11.424 6.463 18.909zM446.205 88.266h-8.909V51.929c0-3.986-1.198-7.096-3.596-9.338-2.398-2.232-5.596-3.314-9.582-3.227-4.229.078-8.256 1.462-12.076 4.143v44.759h-8.909v-45.86c5.127-3.732 9.845-6.17 14.153-7.31 4.064-1.062 7.651-1.589 10.741-1.589 2.114 0 4.104.204 5.975.614 3.499.809 6.346 2.31 8.538 4.513 2.447 2.437 3.665 5.36 3.665 8.782v40.85z"
                  fill="#646464"
                />
                <linearGradient
                  id="a"
                  gradientUnits="userSpaceOnUse"
                  x1="-2031.312"
                  y1="275.868"
                  x2="-1922.296"
                  y2="182.075"
                  gradientTransform="matrix(.5625 0 0 -.568 1145.56 166.282)"
                >
                  <stop offset="0" stopColor="#5a9fd4" />
                  <stop offset="1" stopColor="#306998" />
                </linearGradient>
                <path
                  d="M60.51 6.398c-4.584.021-8.961.412-12.812 1.094-11.346 2.005-13.406 6.2-13.406 13.938v10.219h26.812v3.406H24.229c-7.792 0-14.616 4.684-16.75 13.594-2.462 10.213-2.571 16.586 0 27.25 1.906 7.938 6.458 13.594 14.25 13.594h9.219v-12.25c0-8.85 7.657-16.656 16.75-16.656h26.781c7.455 0 13.406-6.138 13.406-13.625V21.429c0-7.266-6.13-12.725-13.406-13.938-4.607-.766-9.385-1.115-13.969-1.093zm-14.5 8.218c2.77 0 5.031 2.299 5.031 5.125 0 2.816-2.262 5.094-5.031 5.094-2.779 0-5.031-2.277-5.031-5.094 0-2.826 2.252-5.125 5.031-5.125z"
                  fill="url(#a)"
                />
                <linearGradient
                  id="b"
                  gradientUnits="userSpaceOnUse"
                  x1="-1880.151"
                  y1="125.305"
                  x2="-1919.08"
                  y2="180.384"
                  gradientTransform="matrix(.5625 0 0 -.568 1145.56 166.282)"
                >
                  <stop offset="0" stopColor="#ffd43b" />
                  <stop offset="1" stopColor="#ffe873" />
                </linearGradient>
                <path
                  d="M91.229 35.054V46.96c0 9.231-7.826 17-16.75 17H47.698c-7.336 0-13.406 6.278-13.406 13.625v25.531c0 7.267 6.318 11.541 13.406 13.625 8.487 2.496 16.626 2.947 26.781 0 6.75-1.954 13.406-5.888 13.406-13.625V92.898H61.104v-3.406h40.187c7.793 0 10.696-5.436 13.406-13.594 2.8-8.398 2.681-16.476 0-27.25-1.926-7.757-5.604-13.594-13.406-13.594H91.229zM76.166 99.71c2.779 0 5.031 2.277 5.031 5.094 0 2.826-2.252 5.125-5.031 5.125-2.77 0-5.031-2.299-5.031-5.125 0-2.816 2.262-5.094 5.031-5.094z"
                  fill="url(#b)"
                />
                <path
                  d="M463.554 26.909h1.562v-9.796h3.699v-1.168h-8.962v1.168h3.7v9.796m6.648 0h1.334v-8.947l2.896 8.946h1.485l3.019-8.916v8.917h1.456V15.946h-1.926l-3.299 9.393-2.812-9.393h-2.153v10.963"
                  fill="#646464"
                />
                <radialGradient
                  id="c"
                  cx="-3393.238"
                  cy="376.791"
                  r="29.037"
                  gradientTransform="matrix(0 -.2399 -1.0547 0 458.797 -680.1)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#b8b8b8" stopOpacity=".498" />
                  <stop offset="1" stopColor="#7f7f7f" stopOpacity="0" />
                </radialGradient>
                <path
                  d="M97.339 134.098c0 3.848-16.087 6.967-35.932 6.967-19.844 0-35.931-3.119-35.931-6.967s16.087-6.968 35.931-6.968c19.845 0 35.932 3.12 35.932 6.968z"
                  opacity=".444"
                  fill="url(#c)"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center col-span-2 py-2 transition-transform hover:scale-110 md:col-auto">
              <Image
                src="/images/frameworks/csharp.svg" 
                alt="C# Logo"
                width={150} 
                height={80} 
                className="mb-2"
              />
            </div>
            <div className="flex items-center justify-center col-span-2 py-2 transition-transform hover:scale-110 md:col-auto">
              <Image
                src="/images/frameworks/rust.svg" 
                alt="C# Logo"
                width={150} 
                height={80}   
                className="mb-5"
              />
            </div>
          </div>
          {/* Testimonials */}
          {/* <div className="max-w-3xl mx-auto mt-20 " data-aos="zoom-y-out">
            <div className="relative flex items-start transition duration-300 border-2 border-gray-200 rounded rounded-lg bg-gradient-to-r from-neutral-100 to-neutral-300 hover:shadow-xl"> */}

          {/* Testimonial */}
          {/* <div className="px-12 py-8 pt-20 mx-4 text-center md:mx-0 ">
                <div className="absolute top-0 -mt-8 transform -translate-x-1/2 left-1/2 ">
                  <svg className="absolute top-0 right-0 w-16 h-16 -mr-12 fill-current text-primary-300" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image className="relative mt-16 " src={TestimonialImage} width={106} height={100} alt="Nutanix Testimonial" />
                </div>
                <blockquote className="mb-4 text-xl italic font-medium text-accent-200">
                  “Makes it easy to unit test my complex systems with realistic test data“
                </blockquote>
                <cite className="block mb-1 text-lg not-italic font-bold text-primary-300">Staff Engineer</cite>
                <div className="text-gray-600 text-seconday-300">@Nutanix</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
