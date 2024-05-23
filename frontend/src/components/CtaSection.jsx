import React from 'react';

const CtaSection = () => {

    const handleRedirect = () => {

    }

  return (
    <section className="cta-section">
      <h2>Welcome to our Authentication App!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button onClick={() => handleRedirect }>Get Started</button>
    </section>
  );
};

export default CtaSection;
