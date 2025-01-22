// import gsap from 'gsap';

// test('Check GSAP utils.toArray', () => {
//   console.log('GSAP:', gsap);
// //   console.log('GSAP utils:', gsap.utils);
// //   console.log('GSAP utils.toArray:', gsap.utils?.toArray);
// });

import { render } from '@testing-library/react';
import React from 'react';
import Features from '../components/features'; // Adjust the import path
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

// Mock Intersection Observer
jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn(),
}));

// Mock global methods
beforeAll(() => {
  // Mock window.scrollTo
  global.scrollTo = jest.fn();

  // Mock getBoundingClientRect
  Element.prototype.getBoundingClientRect = jest.fn(() => ({
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    bottom: 100,
    right: 100,
  }));

  // Spy on ScrollTrigger.create
  jest.spyOn(ScrollTrigger, 'create');
});

afterAll(() => {
  jest.restoreAllMocks();
});

test('Features component initializes ScrollTrigger when inView is true', () => {
  // Mock useInView to simulate the element being in view
  (useInView as jest.Mock).mockReturnValue({ ref: jest.fn(), inView: true });

  // Render the Features component
  const { container } = render(<Features />);

  // Check that the DOM contains expected elements
  const details = container.querySelectorAll('.detail');
  const images = container.querySelectorAll('.imageToShow');

  // Assertions to ensure elements exist
  expect(details.length).toBeGreaterThan(0); // Ensure `.detail` elements exist
  expect(images.length).toBeGreaterThan(0); // Ensure `.imageToShow` elements exist

  // Verify ScrollTrigger.create was called
  expect(ScrollTrigger.create).toHaveBeenCalled();
});