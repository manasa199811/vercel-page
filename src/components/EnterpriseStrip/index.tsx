import "./EnterpriseStrip.css";

export default function EnterpriseStrip() {
  return (
    <section className="enterprise-strip">

      <div className="enterprise-container">

        {/* LEFT */}
        <div className="enterprise-item">
          <h2>Scale your</h2>

          <a href="/enterprise" className="enterprise-btn">

            <span className="icon">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.5 2.25C2.5 1.83579 2.83579 1.5 3.25 1.5H6.75C7.16421 1.5 7.5 1.83579 7.5 2.25V7.5V14.5H2.5V2.25ZM7.5 16H1.75H1V15.25V2.25C1 1.00736 2.00736 0 3.25 0H6.75C7.99264 0 9 1.00736 9 2.25V6.5H12.25C13.4926 6.5 14.5 7.50736 14.5 8.75V15.25V16H13.75H9H8.25H7.5ZM9 14.5H13V8.75C13 8.33579 12.6642 8 12.25 8H9V14.5Z" fill="currentColor"/>
              </svg>
            </span>

            Enterprise
          </a>
        </div>

        {/* RIGHT */}
        <div className="enterprise-item">
          <h2>without compromising</h2>

          <a href="/security" className="enterprise-btn">

            <span className="icon">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 9.52717V4.057C4.5 3.7 6 3.2 8 2.05704C10 3.2 11.5 3.7 12.5 4.057V9.52717C12.5 10.9 11.7 12.2 10.49 12.85L8 14.15L5.51 12.85C4.27 12.2 3.5 10.9 3.5 9.52717Z" fill="currentColor"/>
              </svg>
            </span>

            Security
          </a>
        </div>

      </div>

    </section>
  );
}