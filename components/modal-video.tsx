'use client';

import { useState, useEffect, useRef, useMemo, Fragment } from 'react';
import type { StaticImageData } from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { theme } = useTheme();
  const color = useMemo(() => (theme === 'dark' ? '#ffffff' : '#BE2C1B'), [theme]);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hoverState: boolean) => setIsHovered(hoverState);

  return (
    <div className="relative">
      {/* Video thumbnail */}
      <div className="relative flex justify-center z-10 mb-8" data-aos="zoom-y-out" data-aos-delay="450">
        <Image
          className="mx-auto rounded-lg h-auto sm:w-auto md:w-9/12"
          src={thumb}
          width={thumbWidth}
          height={thumbHeight}
          alt={thumbAlt}
          loading="eager" // Ensures the image is loaded immediately
        />
        <svg
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto cursor-pointer"
          onClick={() => setModalOpen(true)}
          width="768"
          height="432"
          viewBox="0 0 768 432"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            fill="url(#hero-ill-a)"
            cx="384"
            cy="216"
            r="128"
            fillOpacity={isHovered ? 0.3 : 0.2}
          />
          {/* Play button */}
          <polygon
            fill="#ff914d"
            stroke="#6f0a0d"
            strokeWidth="1"
            points="374,200 374,232 400,216"
          />
        </svg>
      </div>

      {/* Modal */}
      <Transition show={modalOpen} as={Fragment}>
        <Dialog
          initialFocus={videoRef}
          onClose={() => setModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
          <Dialog.Panel className="relative bg-black p-4 rounded-lg max-w-6xl mx-auto">
            <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </div>
  );
}