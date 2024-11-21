import React from "react";

const PricingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-24">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-mono text-center font-black text-black py-12">
            Find the Perfect Plan for You
          </h1>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white shadow rounded-3xl p-14 h-[700px]">
              <h2 className="text-2xl font-bold text-gray-900">Basic Plan</h2>
              <p className="mt-2 text-gray-600">
                Perfect for individuals exploring Keploy
              </p>
              <div className="mt-14">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mt-10 space-y-4">
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-700">
                    Access to Open Source Features
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-700">Community Support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-700">Basic Data Mocking</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-700">10 Test Cases</span>
                </li>
              </ul>
              <button className="mt-36 w-full bg-orange-500 text-white py-3 px-4 rounded hover:bg-orange-600">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gray-900 shadow rounded-3xl p-14 h-[700px]">
              <h2 className="text-2xl font-bold text-white">Pro Plan</h2>
              <p className="mt-2 text-gray-300">
                Ideal for small teams and startups.
              </p>
              <div className="mt-14">
                <span className="text-4xl font-bold text-white">$48</span>
                <span className="text-gray-300">/month</span>
              </div>
              <ul className="mt-10 space-y-4">
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-300">
                    All Basic Plan Features
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-300">
                    Advanced Data Mocking
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-300">100 Test Cases</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-300">
                    Priority Community Support
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-300">
                    Dashboard Analytics
                  </span>
                </li>
              </ul>
              <button className="mt-32 w-full bg-orange-500 text-white py-3 px-4 rounded hover:bg-orange-600">
                Choose Pro
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white shadow rounded-3xl p-14 h-[700px]">
              <h2 className="text-2xl font-bold text-gray-900">
                Enterprise Plan
              </h2>
              <p className="mt-2 text-gray-600">
                Custom solutions tailored to your business needs.
              </p>
              <div className="mt-14">
                <span className="text-4xl font-bold text-gray-900">
                  Contact
                </span>
                <span className="text-gray-600"> for pricing</span>
              </div>
              <ul className="mt-10 space-y-4">
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-700">
                    All Pro Plan Features
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-700">
                    Unlimited Test Cases
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-700">
                    Dedicated Account Manager
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-700">
                    24/7 Priority Support
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✔</span>
                  <span className="ml-2 text-gray-700">
                    Custom Integration Support
                  </span>
                </li>
              </ul>
              <button className="mt-28 w-full bg-orange-500 text-white py-3 px-4 rounded hover:bg-orange-600">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;
