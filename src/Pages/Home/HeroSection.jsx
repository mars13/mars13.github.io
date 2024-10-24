export default function HeroSection() {
    return (
      <section id="hero-section" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title"> Hey, I'm Marina</p>
            <h1 className="hero--section--title">
              <span className="hero--section--title--color">
                Bioinformatics
              </span>
              <br />
              Postdoc
            </h1>
            <p className="hero--section-description">
              I am a bioinformatics postdoc in van Heesch lab at Prinses Máxima Centrum voor Kinderoncologie.
            </p>
          </div>
          <button className="btn btn-primary"> Get In Touch </button>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
}