import { Twitter, Github, Linkedin, Youtube } from "lucide-react";

export interface SocialLink {
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const footerLinks = {
  solutions: {
    title: "Solutions",
    links: [
      { title: "API Testing", href: "https://keploy.io/api-testing" },
      { title: "Integration Testing", href: "https://keploy.io/integration-testing" },
      { title: "Unit Testing", href: "https://keploy.io/unit-test-generator" },
      { title: "VS Code Extension", href: "https://keploy.io/plugins" },
    ],
  },
  developers: {
    title: "Developers",
    links: [
      { title: "Documentation", href: "https://keploy.io/docs" },
      { title: "CLI Reference", href: "https://keploy.io/docs/running-keploy/cli-commands/" },
      { title: "GitHub", href: "https://github.com/keploy" },
      { title: "Getting Started", href: "https://keploy.io/docs/server/installation/" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { title: "Integrations", href: "https://keploy.io/docs/ci-cd/github/" },
      // { title: "Case Studies", href: "/case-studies" },
      { title: "Blog", href: "https://keploy.io/blog" },
      // { title: "Community", href: "/community" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { title: "About", href: "https://keploy.io/docs/about" },
      { title: "Privacy", href: "https://keploy.io/privacy-policy" },
      // { title: "Terms", href: "/terms" },
      // { title: "Contact", href: "/contact" },
    ],
  },
};

export const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    href: "https://twitter.com/keploy",
    icon: Twitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/keploy",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/keploy",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@keploy",
    icon: Youtube,
  },
];

export const footerSettings = {
  companyName: "Keploy",
};
