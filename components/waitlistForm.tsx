import Image from "next/image";
import React, { useState, useRef } from "react";
import { ChangeEvent } from "react";
import CloseIcon from "@/public/images/cross-icon.svg";
import Success from "@/components/success";
import Loader from "@/components/utils/loader";
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
  const [loading, setLoading] = useState<boolean>(false);
  const [success,setSuccess] = useState<boolean>(false)
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
  const resetFormData =()=>{
    setFormData({
      name: "",
      email: "",
      companyAndRole: "",
      linkedInProfile: "",
      language: "",
      currentMethod: "",
      dependencies: "",
    })
  }
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
    fetch(scriptUrl, {
      method: "POST",
      body: data,
    })
      .then((res) => {
        setLoading(false);
        setSuccess(true)
      })
      .catch((err) => console.log(err));
  };

  const isSubmitDisabled = (): boolean => {
    return Boolean(loading || Object.values(formData).some((value) => value.trim() === ""));
  };

  return (
    <>
      {isOpen && (
        <div className="fixed overflow-hidden	 inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-center items-center z-99999 ">
          <div className="sm:max-h-fit flex flex-col bg-neutral-100 rounded-lg p-8 justify-center w-full h-full sm:h-fit sm:mx-3/4 mt-24 sm:mt-10 shadow-md border-b-primary-300 border-b-2">
            <div
              className=" flex justify-end cursor-pointer"
              onClick={() => {
                resetFormData();
                setSuccess(false);
                onClose();
              }}
            >
              <Image src={CloseIcon} alt="close icon" height={32} width={32} />
            </div>
            {!success ? (
              <form
                className="flex flex-col gap-y-4 text-sm py-8 px-1 text-white overflow-auto no-scrollbar"
                onSubmit={(e) => handleSubmit(e)}
                ref={formRef}
              >
                <h1
                  className="h2 mb-4 text-secondary-300 text-center"
                  data-aos="zoom-y-out"
                >
                  Join the Waitlist
                  <br />
                </h1>
                <div className="flex flex-col md:flex-row  gap-4">
                  {" "}
                  <div className="flex flex-col">
                    <label
                      htmlFor="name "
                      className="text-secondary-300 font-bold pb-2 text-base"
                    >
                      Full Name<span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="rounded text-black px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      disabled={loading}
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
                      disabled={loading}
                    />
                    {emailError && (
                      <p className="text-sm text-red-500 ml-4 font-semibold mt-3">
                        {emailError}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="companyAndRole "
                      className="text-secondary-300 font-bold pb-2 text-base"
                    >
                      Company Name and Role
                      <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyAndRole"
                      className="rounded text-black  px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={formData.companyAndRole}
                      onChange={handleChange}
                      placeholder="Company Name"
                      disabled={loading}
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
                      disabled={loading}
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
                    disabled={loading}
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
                    className="rounded text-black px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.currentMethod}
                    onChange={handleChange}
                    placeholder="Company Name"
                    disabled={loading}
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
                    style={{resize: "none" }}
                    value={formData.dependencies}
                    onChange={(e) => handleChange(e)}
                    placeholder="List all the dependencies of your application"
                    disabled={loading}
                  />
                </div>

                <button
                  className={`btn text-secondary-300 bg-primary-300 w-full mb-4 sm:mb-0 px-2 py-3 rounded text-base font-bold border-1 border-transparent text-white shadow mt-2 ${
                    isSubmitDisabled()
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-primary-500"
                  }`}
                  type="submit"
                  disabled={isSubmitDisabled()}
                >
                  {loading ? <Loader /> : "Join"}
                </button>
              </form>
            ) : (
              <div className="sm:max-w-6xl sm:min-w-96">
                <Success
                  heading="Welcome Aboard!"
                  subHeading="Thank you for joining our waitlist. We'll get in touch with you shortly."
                  ctaText="Okay"
                  ctaClickFunction={() => {
                    resetFormData();
                    setSuccess(false);
                    onClose();
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
