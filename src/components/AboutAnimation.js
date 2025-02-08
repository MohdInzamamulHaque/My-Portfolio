import { useEffect } from 'react';

const AboutAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        let aboutSectionVisible = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutSectionVisible = true;
          }
        });

        if (aboutSectionVisible) {
          document.querySelectorAll('.animate-image, .animate-text').forEach((element) => {
            element.classList.add('show');
            observer.unobserve(element);
          });
        }
      },
      {
        threshold: 0.2,
      }
    );

    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default AboutAnimation;
