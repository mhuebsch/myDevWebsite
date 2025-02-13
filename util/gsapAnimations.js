import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1 }
  );
};

export const fadeInScale = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
  );
};

export const slideUp = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
  );
};

export const slideLeft = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
  );
};

export const slideRight = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
  );
};

export const scaleUp = (element) => {
  gsap.fromTo(
    element,
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
  );
};

export const scaleDown = (element) => {
  gsap.fromTo(
    element,
    { scale: 1.2, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
  );
};

export const rotateIn = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, rotate: -90 },
    { opacity: 1, rotate: 0, duration: 1, ease: 'power2.out' }
  );
};

export const rotateOut = (element) => {
  gsap.to(element, {
    opacity: 0,
    rotate: 90,
    duration: 1,
    ease: 'power2.out',
  });
};

export const scrollFadeIn = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
    }
  );
};

export const scrollSlideLeft = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
    }
  );
};

export const staggerFadeInScale = (elements) => {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 50, scale: 0 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    }
  );
};
