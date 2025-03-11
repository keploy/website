export const metadata = {
  title: "Sign In - Simple",
  description: "Page description",
};

import Link from "next/link";
import Header from "@/components/ui/header";
export default function Privacy() {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">Privacy Policy</h1>
            </div>

            {/* Form */}
            <div>
              Keploy, Inc. Privacy Policy Last updated: June 8th, 2023 Keploy
              Inc. operates https://keploy.io and https://keploy.io/docs (the
              "Sites"). This page informs you of our policies regarding the
              collection, use and disclosure of Personal Information we receive
              from users of the Sites. We use your Personal Information only for
              providing and improving the Sites. By using the Sites, you agree
              to the collection and use of information in accordance with this
              policy. Information Collection And Use While using our Sites, we
              may ask you to provide us with certain personally identifiable
              information that can be used to contact or identify you.
              Personally identifiable information may include, but is not
              limited to your name ("Personal Information"). Log Data Like many
              site operators, we collect information that your browser sends
              whenever you visit our Sites ("Log Data"). This Log Data may
              include information such as your computer's Internet Protocol
              ("IP") address, browser type, browser version, the pages of our
              Sites that you visit, the time and date of your visit, the time
              spent on those pages and other statistics. In addition, we may use
              third party services such as Google Analytics that collect,
              monitor and analyze this data. Communications Depending on the
              method of collection, we may use your Personal Information to
              contact you with newsletters, marketing or promotional materials
              and other information that we believe is relevant for you. Cookies
              Cookies are files with a small amount of data, which may include
              an anonymous unique identifier. Cookies are sent to your browser
              from a web site and stored on your computer's hard drive. Like
              many sites, we use "cookies" to collect information. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent. However, if you do not accept cookies, you
              may not be able to use some portions of our Sites. Security The
              security of your Personal Information is important to us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage, is 100% secure. While we strive to
              use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security. Changes To
              This Privacy Policy This Privacy Policy is effective as of January
              1st 2021 and will remain in effect except with respect to any
              changes in its provisions in the future, which will be in effect
              immediately after being posted on this page. We reserve the right
              to update or change our Privacy Policy at any time and you should
              check this Privacy Policy periodically. Your continued use of the
              Service after we post any modifications to the Privacy Policy on
              this page will constitute your acknowledgment of the modifications
              and your consent to abide and be bound by the modified Privacy
              Policy. If we make any material changes to this Privacy Policy, we
              will notify you either through the email address you have provided
              us, or by placing a prominent notice on our website. Contact Us If
              you have any questions about this Privacy Policy, please contact
              us.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
