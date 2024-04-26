import Image from "next/image";
import React, { useState, useRef } from "react";
import { ChangeEvent } from "react";
import CloseIcon from "@/public/images/cross-icon.svg";
interface FormData {
  name: string;
  email: string;
  companyAndRole: string;
  linkedInProfile: string;
  language: string;
  currentMethod: string;
  dependencies: string;
}
interface FormProps {
  isOpen: Boolean;
  onClose: () => void;
}
export default function CustomForm({ isOpen, onClose }: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    companyAndRole: "",
    linkedInProfile: "",
    language: "",
    currentMethod: "",
    dependencies: "",
  });
  const [loading, setLoading] = useState<Boolean>(true);
  const [emailError, setEmailError] = useState("");
  const formRef = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxeKz80cojMFHbF84KNiBCZOpotsBJ3siAZ4JDck_G9YBkB7kZ0vwY_sUhBpg9z-aGvhQ/exec";
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");

      setTimeout(() => {
        return setEmailError("");
      }, 2000);
      return;
    }
    setLoading(true);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("companyAndRole", formData.companyAndRole);
    data.append("linkedInProfile", formData.linkedInProfile);
    data.append("language", formData.language);
    data.append("currentMethod", formData.currentMethod);
    data.append("dependencies", formData.dependencies);
    // return
    fetch(scriptUrl, {
      method: "POST",
      body: data,
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const isSubscribeDisabled = (): boolean => {
    return Object.values(formData).some((value) => value.trim() === "");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-center items-center ">
          <div className="flex flex-col bg-neutral-100 rounded-lg p-8 w-full mx-3/4 shadow-md border-b-primary-300 border-b-2">
            <div
              className="flex justify-end cursor-pointer"
              onClick={() => onClose()}
            >
              <Image src={CloseIcon} alt="close icon" height={32} width={32} />
            </div>
            <form
              className="flex flex-col gap-y-4 text-sm text-white"
              onSubmit={(e) => handleSubmit(e)}
              ref={formRef}
            >
              <div className="flex flex-row gap-4">
                {" "}
                <div className="flex flex-col">
                  <label
                    htmlFor="name "
                    className="text-secondary-300 font-bold pb-2 text-base"
                  >
                    Fullname<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="rounded text-black  px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Fullname"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email "
                    className="text-secondary-300 font-bold pb-2 text-base"
                  >
                    Email<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="rounded text-black  px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  {emailError && (
                    <p className="text-sm text-red-500 ml-4 font-semibold mt-3">
                      {emailError}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="companyAndRole "
                    className="text-secondary-300 font-bold pb-2 text-base"
                  >
                    Company Name and Role<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyAndRole"
                    className="rounded text-black  px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.companyAndRole}
                    onChange={handleChange}
                    placeholder="Company Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="linkedInProfile "
                    className="text-secondary-300 font-bold pb-2 text-base"
                  >
                    LinkedIn Profile <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="linkedInProfile"
                    className="rounded text-black  px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.linkedInProfile}
                    onChange={handleChange}
                    placeholder="Profile Link"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="language "
                  className="text-secondary-300 font-bold pb-2 text-base"
                >
                  What language are you using?{" "}
                  <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="language"
                  className="rounded text-black  px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.language}
                  onChange={handleChange}
                  placeholder="java, go, etc"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="currentMethod"
                  className="text-secondary-300 font-bold pb-2 text-base"
                >
                  What is your current method for API Testing?
                  <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="currentMethod"
                  className="rounded text-black  px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.currentMethod}
                  onChange={handleChange}
                  placeholder="Company Name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="dependencies "
                  className="text-secondary-300 font-bold pb-2 text-base"
                >
                  What dependencies are you using in your application? (Please
                  list all DBs, Services, Protocols in as much detail
                  possible..) <span className="text-red-700">*</span>
                </label>
                <textarea
                  name="dependencies"
                  className="rounded text-black  px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.dependencies}
                  onChange={(e) => handleChange(e)}
                  placeholder="List all the dependencies of your application"
                />
              </div>

              {/* Repeat for other fields */}
              <button
                className={`btn text-secondary-300 bg-primary-300 w-full mb-4 sm:mb-0 px-2 py-3 rounded text-base font-bold border-1 border-transparent text-white shadow mt-2 ${
                  isSubscribeDisabled()
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-primary-500"
                }`}
                type="submit"
                disabled={isSubscribeDisabled()}
              >
                Join
              </button>
              {/* {subscribed && <p className="text-sm text-green-800 text-center font-semibold mt-3">Thanks for subscribing!</p>} */}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
