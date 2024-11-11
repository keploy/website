interface CaseStudyCardProps {
  title: string;
  text: string;
  imageUrl: string;
  tags: string[];
}

export default function CaseStudyCard({
  title,
  text,
  imageUrl,
  tags,
}: CaseStudyCardProps) {
  return (
    <a
      className="group block rounded-xl overflow-hidden focus:outline-none"
      href="#"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="shrink-0 relative overflow-hidden w-full sm:w-56 ">
          <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
              src="/images/gradient.png"
              alt="Blog Image"
            />
          </div>

          <div className="gap-2 mt-2 flex overflow-x-scroll">
            {tags.map((tag) => (
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 text-nowrap">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="grow">
          <h3 className="text-xl font-extrabold text-primary-400 group-hover:text-primary-300">
            {title}
          </h3>
          <p className="mt-3 text-gray-600">{text}</p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
            Read more
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </div>
    </a>
  );
}
