import Link from "next/link";
import { Keploy } from "../icons";
import { footerLinks, socialLinks, footerSettings } from "@/config/footer";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 my-20">
        <div className="flex flex-col  lg:flex-row gap-4 ">
          <div className="lg:mr-10">
            <Keploy.fullLogo />
            <div className="flex space-x-6 my-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-500 transition-colors"
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:grid-cols-4 w-full">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="lg:mt-4">
                <h3 className="text-base font-semi text-gray-900">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="my-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
            <p className="mt-8 text-sm text-gray-500 md:mt-0">
              © {footerSettings.companyName} Inc
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
