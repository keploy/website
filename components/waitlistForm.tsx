import React, { useState } from "react";
import { ChangeEvent } from "react";
interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
}

export default function CustomForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  // General handleChange function with TypeScript
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const isSubscribeDisabled = (): boolean => {
    // Example condition for disabling the subscribe button
    return !formData.email || !formData.name;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-center items-center ">
      <div className="bg-neutral-100 rounded-lg p-8 w-full max-w-md mx-auto shadow-md border-b-primary-300 border-b-2">
        <form
          className="flex flex-col gap-y-4 text-sm text-white"
          onSubmit={submitHandler}
        >
          <div className="flex flex-col">
            <label
              htmlFor="name "
              className="text-secondary-300 font-bold pb-2 text-base"
            >
              Name: <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="rounded text-black  px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email "
              className="text-secondary-300 font-bold pb-2 text-base"
            >
              Email: <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="rounded text-black  px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="company "
              className="text-secondary-300 font-bold pb-2 text-base"
            >
              Company: <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="company"
              className="rounded text-black  px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phone "
              className="text-secondary-300 font-bold pb-2 text-base"
            >
              Phone: <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="phone"
              className="rounded text-black  px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
          </div>

          {/* Repeat for other fields */}
          <button
            className={`btn text-secondary-300 bg-primary-300 w-full mb-4 sm:mb-0 px-2 py-1 rounded font-bold border-1 border-transparent text-white shadow mt-2 ${
              isSubscribeDisabled()
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary-500"
            }`}
            type="submit"
            disabled={isSubscribeDisabled()}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
