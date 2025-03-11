import Header from "@/components/ui/header";
import Link from "next/link";

export const metadata = {
  title: "Coming Soon",
  description: "Stay tuned! We're working hard to bring something amazing to you soon.",
};

export default function ComingSoon() {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-b from-gray-100 to-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="h1 text-4xl font-bold leading-tight text-gray-900 mb-4">
                Coming Soon
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We're putting the final touches on our new page. Reach out if you have any questions!
              </p>
              <Link 
                href="/" 
                className="btn-sm py-3 text-white bg-secondary-300 hover:text-primary-300 "
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}