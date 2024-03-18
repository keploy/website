import React,{useState} from 'react';
// import twitterIcon from './assets/images/twitter-icon.png';
import githubIcon from './assets/images/github-icon.png';
import slackIcon from './assets/images/slack-icon.png';
import youtubeIcon from './assets/images/youtube-icon.png';
import linkedinIcon from './assets/images/linkedin-icon.png';
import "./comm.css"
interface SocialLink {
  href: string;
  icon: React.ReactElement;
  title: string;
  description:string;
}
const TwitterIcon = () => (
    <svg
    width="50%"
    height="50%"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="sm:mr-2"
  >
    <path
      d="M31.439 6.599c-1.11.496-2.303.832-3.557.983a6.256 6.256 0 0 0 2.723-3.458 12.3 12.3 0 0 1-3.933 1.516 6.165 6.165 0 0 0-4.52-1.972c-3.42 0-6.193 2.798-6.193 6.251 0 .488.056.963.16 1.422-5.15-.262-9.712-2.75-12.767-6.53a6.289 6.289 0 0 0-.838 3.141 6.265 6.265 0 0 0 2.755 5.203 6.138 6.138 0 0 1-2.805-.782v.08c0 3.028 2.134 5.553 4.968 6.128a6.187 6.187 0 0 1-2.797.107c.788 2.482 3.075 4.29 5.786 4.338a12.359 12.359 0 0 1-7.693 2.676c-.5 0-.993-.03-1.478-.087a17.404 17.404 0 0 0 9.493 2.808c11.394 0 17.623-9.522 17.623-17.78 0-.268-.006-.539-.018-.807a12.654 12.654 0 0 0 3.088-3.233l.003-.004Z"
      fill="#259DF4"
    />
  </svg>
  );
  const GithubIcon = () => (
    <svg
    width="50%"
    height="50%"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="sm:mr-2"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.05 1.281A15.1 15.1 0 0 0 1.132 13.957a15.088 15.088 0 0 0 10.145 16.74c.76.138 1.029-.334 1.029-.732v-2.567c-4.217.917-5.107-2.029-5.107-2.029a4.04 4.04 0 0 0-1.677-2.214c-1.363-.926.11-.926.11-.926a3.178 3.178 0 0 1 2.309 1.556 3.224 3.224 0 0 0 4.392 1.26 3.206 3.206 0 0 1 .927-2.02c-3.355-.38-6.876-1.677-6.876-7.411a5.836 5.836 0 0 1 1.547-4.049 5.502 5.502 0 0 1 .149-3.993s1.27-.408 4.151 1.547c2.475-.68 5.088-.68 7.563 0 2.882-1.955 4.142-1.547 4.142-1.547a5.474 5.474 0 0 1 .186 3.965 5.836 5.836 0 0 1 1.547 4.049c0 5.8-3.53 7.069-6.895 7.411a3.566 3.566 0 0 1 1.029 2.78v4.141c0 .491.269.871 1.038.723a15.096 15.096 0 0 0 9.98-16.698A15.09 15.09 0 0 0 16.05 1.28Z"
      fill="#262626"
    />
  </svg>
  );
  const SlackIcon = () => (
    <svg
    width="50%"
    height="50%"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="sm:mr-2"
  >
    <path
      d="M6.583 20.522a3.28 3.28 0 1 1-3.28-3.28h3.28v3.28ZM8.227 20.522a3.28 3.28 0 0 1 6.559 0v8.197a3.28 3.28 0 1 1-6.56 0v-8.197Z"
      fill="#E01E5A"
    />
    <path
      d="M11.498 6.56a3.28 3.28 0 1 1 3.28-3.28v3.28h-3.28ZM11.5 8.223a3.28 3.28 0 0 1 0 6.56H3.28a3.28 3.28 0 1 1 0-6.56h8.22Z"
      fill="#36C5F0"
    />
    <path
      d="M25.422 11.502a3.28 3.28 0 1 1 3.28 3.28h-3.28v-3.28ZM23.778 11.5a3.28 3.28 0 1 1-6.56 0V3.28a3.28 3.28 0 1 1 6.56 0v8.22Z"
      fill="#2EB67D"
    />
    <path
      d="M20.498 25.441a3.28 3.28 0 1 1-3.28 3.28v-3.28h3.28ZM20.498 23.802a3.28 3.28 0 1 1 0-6.56h8.222a3.28 3.28 0 1 1 0 6.56H20.5Z"
      fill="#ECB22E"
    />
  </svg>
  );
  const YoutubeIcon = () => (
    <svg
    width="50%"
    height="50%"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=" sm:mr-2"
  >
    <path
      d="m16.7 27.165-6.561-.117c-2.125-.041-4.255.04-6.338-.382-3.168-.632-3.393-3.73-3.628-6.328A43.327 43.327 0 0 1 .586 9.345C.93 7.312 2.288 6.1 4.386 5.967c7.084-.479 14.215-.423 21.283-.198.746.02 1.498.132 2.234.26 3.634.62 3.722 4.13 3.957 7.086a39.213 39.213 0 0 1-.313 8.95c-.36 2.456-1.05 4.514-3.957 4.713-3.644.26-7.204.468-10.858.402 0-.015-.021-.015-.031-.015Z"
      fill="#fff"
    />
    <path
      d="m16.7 27.165-6.561-.117c-2.125-.041-4.255.04-6.338-.382-3.168-.632-3.393-3.73-3.628-6.328A43.327 43.327 0 0 1 .586 9.345C.93 7.312 2.288 6.1 4.386 5.967c7.084-.479 14.215-.423 21.283-.198.746.02 1.498.132 2.234.26 3.634.62 3.722 4.13 3.957 7.086a39.213 39.213 0 0 1-.313 8.95c-.36 2.456-1.05 4.514-3.957 4.713-3.644.26-7.204.468-10.858.402 0-.015-.021-.015-.031-.015Zm-3.857-6.215c2.746-1.539 5.44-3.052 8.17-4.58-2.752-1.539-5.44-3.052-8.17-4.58v9.16Z"
      fill="red"
    />
  </svg>
  );
  const LinkedInIcon = () => (
    <svg
    width="50%"
    height="50%"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=" sm:mr-2"
  >
    <g clipPath="url(#linkedin_inline_svg__a)">
      <path
        d="M0 2.346C0 1.086 1.06.062 2.365.062h27.27C30.941.063 32 1.085 32 2.346v27.306c0 1.26-1.059 2.282-2.365 2.282H2.365C1.059 31.934 0 30.913 0 29.652V2.345Z"
        fill="#069"
      />
      <path
        d="M9.723 26.735v-14.35H4.935v14.35h4.789ZM7.33 10.427c1.67 0 2.709-1.102 2.709-2.479-.031-1.408-1.04-2.48-2.677-2.48-1.64 0-2.71 1.072-2.71 2.48 0 1.377 1.04 2.479 2.646 2.479h.031Zm5.044 16.308h4.788v-8.013c0-.428.031-.857.158-1.163.346-.857 1.133-1.745 2.456-1.745 1.733 0 2.426 1.316 2.426 3.245v7.676h4.788v-8.228c0-4.407-2.362-6.458-5.512-6.458-2.583 0-3.718 1.438-4.348 2.418h.032v-2.08h-4.788c.062 1.345 0 14.348 0 14.348Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="linkedin_inline_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
  );
  
const socialLinks: SocialLink[] = [
    {
        href: 'https://twitter.com/Keployio',
        icon: <TwitterIcon/>,
        title: 'Twitter',
        description:`Let's talk about regression testing!`
      },
      {
        href: 'https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg',
        icon: <YoutubeIcon/>,
        title: 'Youtube',
        description:'Learn with Keploy team and community videos'
      },
      {
        href: 'https://github.com/keploy/keploy',
        icon: <GithubIcon/>,
        title: 'Github',
        description:'Contribute code to Keploy or report a bug'

      },
      {
        href: 'https://join.slack.com/t/keploy/shared_invite/zt-2dno1yetd-Ec3el~tTwHYIHgGI0jPe7A',
        icon: <SlackIcon/>,
        title: 'Slack',
        description:'Connect and chat with other Keploy users'

      },
      {
        href: 'https://www.linkedin.com/company/74471957',
        icon: <LinkedInIcon/>,
        title: 'LinkedIn',
        description:'Follow us and connect with other Keploy engineers!'
      },
];

const SocialCloud: React.FC = () => {
    const [value,setValue] = useState("")
  return (
    <>
        <div className="max-w-3xl mx-auto text-center ">
        <h2 className="h2 text-secondary-300 ">
          🐰 Join the Keploy community ✨
        </h2>
      </div>
    <div className="social-cloud">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-link link-${index + 1}`}
          title={link.title}
          onMouseEnter={()=>setValue(link.description)}
          onMouseLeave={()=>setValue(" Where Code Meets Community!")}
        >
            {link.icon}
        </a>
        
      ))}

    </div>
    <p className='text-center text-2xl text-accent-200 mb-4'>{value}</p>

    </>

  );
};

export default SocialCloud;