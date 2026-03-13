import "./DeployCTA.css";

export default function DeployCTA() {
  return (
    <section className="deploy-section">

      <div className="deploy-grid">

        {/* LEFT SIDE */}
        <div className="deploy-box">
          <p className="deploy-text">
            <b>Ready to deploy?</b> Start building with a free account.
            Speak to an expert for your <i>Pro</i> or <a>Enterprise</a> needs.
          </p>

          <div className="deploy-buttons">

            <button className="deploy-primary">
              Start Deploying
            </button>

            <button className="deploy-secondary">
              Talk to an Expert
            </button>

          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="deploy-box">

          <p className="deploy-text">
            <b>Explore Vercel Enterprise</b> with an interactive product tour,
            trial, or a personalized demo.
          </p>

          <button className="deploy-secondary">
            Explore Enterprise
          </button>

        </div>

      </div>

    </section>
  );
}