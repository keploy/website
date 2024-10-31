interface caseStudySearchProps{
  setSearch: React.Dispatch<React.SetStateAction<string>>,
}

export default function CaseStudySearch({setSearch}: caseStudySearchProps) {
  return (
    <>
      <div className="md:max-w-[70vw] max-w-[80vw] w-full mt-7 sm:mt-12 flex relative mb-7 md:flex-nowrap overflow-scroll">
        <form>
          <div className="relative w-[70vw] min-w-48 z-10 flex justify-center items-center gap-x-3 px-3 py-1 bg-white border rounded-lg shadow-lg shadow-gray-100 ">
            <div className="w-full">
              <label
                className="block text-sm text-gray-700 font-medium"
              >
                <span className="sr-only">Search article</span>
              </label>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="email"
                name="hs-search-article-1"
                id="hs-search-article-1"
                className="py-2.5 px-4 block w-full border-none rounded-xl mt-1"
                placeholder="Search article"
              />
            </div>
            <div>
              <a
                className="size-[32px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-secondary-200 text-white hover:bg-secondary-300 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                <svg
                  className="shrink-0 size-5"
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </a>
            </div>
          </div>
</form>
      </div>

    </>
  );
}
