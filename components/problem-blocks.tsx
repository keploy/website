export default function ProblemBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gradient-to-b from-secondary-500 to-secondary-100  pointer-events-none" aria-hidden="true" />
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
            <h1 className="h1 mb-4 dark:text-blue-700 text-secondary-300">Test smart - Build better</h1>
            <h3 className="h3 text-xl dark:text-gray-100 text-gray-600">  &nbsp; ❌ &nbsp;  Just say no to &nbsp; ❌ &nbsp;  </h3>
            <div className="flex dark:text-gray-100 text-gray-600 pt-3 pl-6 pr-6">
              <svg width="8" height="40" viewBox="0 0 8 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-2 md:invisible">
                <path d="M3.64644 39.3536C3.84171 39.5488 4.15829 39.5488 4.35355 39.3536L7.53553 36.1716C7.73079 35.9763 7.73079 35.6597 7.53553 35.4645C7.34027 35.2692 7.02369 35.2692 6.82843 35.4645L4 38.2929L1.17157 35.4645C0.976309 35.2692 0.659727 35.2692 0.464465 35.4645C0.269202 35.6597 0.269202 35.9763 0.464465 36.1716L3.64644 39.3536ZM3.5 -2.18558e-08L3.5 39L4.5 39L4.5 2.18558e-08L3.5 -2.18558e-08Z" fill="#111827"></path>
              </svg>
              <svg width="8" height="40" viewBox="0 0 8 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-2 invisible md:visible">
                <path d="M3.64644 39.3536C3.84171 39.5488 4.15829 39.5488 4.35355 39.3536L7.53553 36.1716C7.73079 35.9763 7.73079 35.6597 7.53553 35.4645C7.34027 35.2692 7.02369 35.2692 6.82843 35.4645L4 38.2929L1.17157 35.4645C0.976309 35.2692 0.659727 35.2692 0.464465 35.4645C0.269202 35.6597 0.269202 35.9763 0.464465 36.1716L3.64644 39.3536ZM3.5 -2.18558e-08L3.5 39L4.5 39L4.5 2.18558e-08L3.5 -2.18558e-08Z" fill="#111827"></path>
              </svg>
              {/*<svg width="8" height="40" viewBox="0 0 8 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-2 md:invisible">*/}
              {/*  <path d="M3.64644 39.3536C3.84171 39.5488 4.15829 39.5488 4.35355 39.3536L7.53553 36.1716C7.73079 35.9763 7.73079 35.6597 7.53553 35.4645C7.34027 35.2692 7.02369 35.2692 6.82843 35.4645L4 38.2929L1.17157 35.4645C0.976309 35.2692 0.659727 35.2692 0.464465 35.4645C0.269202 35.6597 0.269202 35.9763 0.464465 36.1716L3.64644 39.3536ZM3.5 -2.18558e-08L3.5 39L4.5 39L4.5 2.18558e-08L3.5 -2.18558e-08Z" fill="#111827"></path>*/}
              {/*</svg>*/}
              <svg width="8" height="40" viewBox="0 0 8 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-2 invisible md:visible">
                <path d="M3.64644 39.3536C3.84171 39.5488 4.15829 39.5488 4.35355 39.3536L7.53553 36.1716C7.73079 35.9763 7.73079 35.6597 7.53553 35.4645C7.34027 35.2692 7.02369 35.2692 6.82843 35.4645L4 38.2929L1.17157 35.4645C0.976309 35.2692 0.659727 35.2692 0.464465 35.4645C0.269202 35.6597 0.269202 35.9763 0.464465 36.1716L3.64644 39.3536ZM3.5 -2.18558e-08L3.5 39L4.5 39L4.5 2.18558e-08L3.5 -2.18558e-08Z" fill="#111827"></path>
              </svg>
              <svg width="8" height="40" viewBox="0 0 8 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-2 md:invisible">
                <path d="M3.64644 39.3536C3.84171 39.5488 4.15829 39.5488 4.35355 39.3536L7.53553 36.1716C7.73079 35.9763 7.73079 35.6597 7.53553 35.4645C7.34027 35.2692 7.02369 35.2692 6.82843 35.4645L4 38.2929L1.17157 35.4645C0.976309 35.2692 0.659727 35.2692 0.464465 35.4645C0.269202 35.6597 0.269202 35.9763 0.464465 36.1716L3.64644 39.3536ZM3.5 -2.18558e-08L3.5 39L4.5 39L4.5 2.18558e-08L3.5 -2.18558e-08Z" fill="#111827"></path>
              </svg>
            </div>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none ">

            {/* 1st item */}
            <div className="hidden md:flex relative  flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-secondary-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-primary-500" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-secondary-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-primary-500" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight text-accent-200 mb-1">Blind network calls</h4>
              <p className="text-gray-600 text-center">Unseen network calls hinder testing and analysis of software behavior.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="stroke-current text-primary-500" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="stroke-current text-primary-500" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="stroke-current text-secondary-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight text-accent-200 mb-1">Manual test writing</h4>
              <p className="text-gray-600 text-center">Time-consuming, repetitive to maintain test automation suites.</p>
            </div>

            {/* 3rd item */}
            <div className="hidden relative md:flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-secondary-300" d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286" />
                    <path className="stroke-current text-primary-500" strokeLinecap="square" d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286" />
                    <path className="stroke-current text-secondary-300" d="M36.571 32H40" />
                    <path className="stroke-current text-primary-500" d="M24 32h3.429" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight text-accent-200 mb-1">Inefficient codepath</h4>
              <p className="text-gray-600 text-center">Underperforming code leading to critical problems and inefficiencies.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-primary-500" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="stroke-current text-primary-500" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="stroke-current text-primary-500" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="stroke-current text-secondary-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight text-accent-200 mb-1">Dependency chaos</h4>
              <p className="text-gray-600 text-center">Tedious stubs and mocks maintenance for testing purpose.</p>
            </div>

            {/* 5th item */}
            <div className="hidden relative md:flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-primary-500" d="M19.429 32a12.571 12.571 0 0021.46 8.89L23.111 23.11A12.528 12.528 0 0019.429 32z" />
                    <path className="stroke-current text-secondary-300" d="M32 19.429c6.943 0 12.571 5.628 12.571 12.571M32 24a8 8 0 018 8" />
                    <path className="stroke-current text-primary-500" d="M34.286 29.714L32 32" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight text-accent-200 mb-1">Mystery production issues</h4>
              <p className="text-gray-600 text-center">Difficult-to-reproduce production issues locally for testing and debugging.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
                  <g strokeWidth="2" strokeLinecap="square">
                    <path className="stroke-current text-primary-500" d="M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775" />
                    <path className="stroke-current text-secondary-300" d="M44.571 43.429H34.286M44.571 37.714H34.286" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight text-accent-200 mb-1">Scattered test environments</h4>
              <p className="text-gray-600 text-center">Multiple env complicates testing, stub preparation and are unrealistic.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
