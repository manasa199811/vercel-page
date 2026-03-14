import "./EnterpriseStrip.css";

export default function EnterpriseStrip() {
  return (
    <section className="enterprise">
      <div className="enterprise-inner">
        <h2 className="enterprise-text">
          Scale your
          <span className="enterprise-pill">
            <span className="enterprise-icon">
              <svg height="16" viewBox="0 0 16 16" width="16">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 2.25C2.5 1.83579 2.83579 1.5 3.25 1.5H6.75C7.16421 1.5 7.5 1.83579 7.5 2.25V7.5V14.5H2.5V2.25ZM7.5 16H1.75H1V15.25V2.25C1 1.00736 2.00736 0 3.25 0H6.75C7.99264 0 9 1.00736 9 2.25V6.5H12.25C13.4926 6.5 14.5 7.50736 14.5 8.75V15.25V16H13.75H9H8.25H7.5ZM9 14.5H13V8.75C13 8.33579 12.6642 8 12.25 8H9V14.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Enterprise
          </span>
          without compromising
          <span className="enterprise-pill">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                fill="currentColor"
                d="M8 0l6 3v4c0 4-3 7-6 9-3-2-6-5-6-9V3z"
              />
            </svg>
            Security
          </span>
        </h2>
      </div>
    </section>
  );
}
