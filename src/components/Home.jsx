import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home-section" className="home-section">
      <div className="container text-center">
        <span className="home-title">Hey! I am</span>
        <h1 className="home-name">Mohd Inzamam</h1>
        <p className="home-description">
          <span className="home-im-a">I'm a </span>
          <span className="home-react-developer">
            {['R', 'e', 'a', 'c', 't'].map((letter, index) => (
              <span className="typing" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                {letter}
              </span>
            ))}
            <span className="typing" style={{ animationDelay: `5 * 0.2}s` }}> </span>  {/* Plain space */}
            {['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'].map((letter, index) => (
              <span className="typing" key={index + 5} style={{ animationDelay: `${(index + 5) * 0.2}s` }}>
                {letter}
              </span>
            ))}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Home;
