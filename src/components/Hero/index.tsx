import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* GRID */}
      <div className="hero-grid"></div>

      {/* RAINBOW LIGHT */}
      <div className="hero-rainbow"></div>

      {/* CONTENT */}
      <div className="hero-content">

        <h1 className="hero-title">
          Build and deploy on the AI Cloud.
        </h1>

        <p className="hero-subtitle">
          Vercel provides the developer tools and cloud infrastructure
          <br />
          to build, scale, and secure a faster, more personalized web.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary">
            ▲ Start Deploying
          </button>

          <button className="btn-secondary">
            Get a Demo
          </button>

        </div>

      </div>

      {/* TRIANGLE */}
      <div className="hero-triangle">

        <svg viewBox="0 0 1200 700">

          <path fill="#000" d="M485 650.4h230L600 451.21z"/>

          <path stroke="white" opacity="1" d="M715 650.4 L600 451.21 L485 650.4"/>
          <path stroke="white" opacity="0.93" d="M715 650.4 L600 460.33 L485 650.4"/>
          <path stroke="white" opacity="0.87" d="M715 650.4 L600 469.44 L485 650.4"/>
          <path stroke="white" opacity="0.8" d="M715 650.4 L600 478.56 L485 650.4"/>
          <path stroke="white" opacity="0.73" d="M715 650.4 L600 487.67 L485 650.4"/>
          <path stroke="white" opacity="0.67" d="M715 650.4 L600 496.79 L485 650.4"/>
          <path stroke="white" opacity="0.6" d="M715 650.4 L600 505.9 L485 650.4"/>
          <path stroke="white" opacity="0.53" d="M715 650.4 L600 515.02 L485 650.4"/>
          <path stroke="white" opacity="0.47" d="M715 650.4 L600 524.13 L485 650.4"/>
          <path stroke="white" opacity="0.4" d="M715 650.4 L600 533.25 L485 650.4"/>
          <path stroke="white" opacity="0.33" d="M715 650.4 L600 542.36 L485 650.4"/>
          <path stroke="white" opacity="0.27" d="M715 650.4 L600 551.48 L485 650.4"/>
          <path stroke="white" opacity="0.2" d="M715 650.4 L600 560.59 L485 650.4"/>
          <path stroke="white" opacity="0.13" d="M715 650.4 L600 569.71 L485 650.4"/>
          <path stroke="white" opacity="0.07" d="M715 650.4 L600 578.82 L485 650.4"/>

        </svg>

      </div>

    </section>
  );
}