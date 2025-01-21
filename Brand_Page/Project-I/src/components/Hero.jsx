const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>STEP UP YOUR GAME.</h1>
        <p>
        EVERY STEP TELLS A STORY—CRAFTED FOR COMFORT, DESIGNED FOR PERFORMANCE, AND BUILT TO INSPIRE. WALK CONFIDENTLY, RUN PASSIONATELY, AND EXPLORE ENDLESSLY WITH SHOES THAT MOVE WITH YOU, NOT AGAINST YOU.
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
