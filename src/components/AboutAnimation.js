import { useEffect } from 'react';

const AboutAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing after first appearance
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const animatedElements = document.querySelectorAll(
      '.animate-image, .animate-text, .animate-skill'
    );

    animatedElements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('show'); // Make sure it's visible on load
      } else {
        observer.observe(element);
      }
    });

    // Ensure all text elements are visible initially
    document.querySelectorAll('.animate-text').forEach((element) => {
      element.style.opacity = '1';
      element.style.transform = 'none';
    });

    return () => {
      animatedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return null;
};

export default AboutAnimation;
