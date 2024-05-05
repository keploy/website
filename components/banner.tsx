'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Banner() {

  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 left-0 w-full md:bottom-8 md:left-12 md:w-auto z-60">
          <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className='text-slate-500 inline-flex'><Link className="font-medium hover:underline text-slate-50" href="https://github.com/keploy/keploy" target="_blank" rel="noreferrer">Download<span className="hidden sm:inline"> on GitHub</span></Link> <span className="italic px-1.5">or</span> <Link className="font-medium hover:underline text-primary-300" href="https://app.keploy.io" target="_blank" rel="noreferrer">Check Premium Version</Link></div>
            <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700" onClick={() => setBannerOpen(false)}>
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}