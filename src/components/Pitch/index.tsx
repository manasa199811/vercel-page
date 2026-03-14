import "./Pitch.css";

export default function Pitch() {
  return (
    <section className="pitch">
      <div className="pitch-inner">
        <h2 className="pitch-text">
          Develop with your favorite tools
          <span className="pitch-icon">›_</span>
          <br />
          Launch globally, instantly
          <span className="pitch-icon">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <circle
                cx="14"
                cy="14"
                r="12.25"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              <path
                d="M1.75 10.8756C4.90656 10.102 9.23046 9.625 14 9.625C18.7695 9.625 23.0934 10.102 26.25 10.8756"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              <path
                d="M1.75 17.1244C4.90656 17.898 9.23046 18.375 14 18.375C18.7695 18.375 23.0934 17.898 26.25 17.1244"
                stroke="currentColor"
                strokeWidth="3.5"
              />
            </svg>
          </span>
          Keep pushing
          <span className="pitch-icon">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <path
                d="M7 10.9375V9.1875H3.5V10.9375H7ZM3.5 10.9375V28H7V10.9375H3.5Z"
                fill="currentColor"
              />
              <path
                d="M22.75 26.25C20.817 26.25 19.25 24.683 19.25 22.75C19.25 20.817 20.817 19.25 22.75 19.25C24.683 19.25 26.25 20.817 26.25 22.75C26.25 24.683 24.683 26.25 22.75 26.25Z"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              <path
                d="M5.25 8.75C3.317 8.75 1.75 7.183 1.75 5.25C1.75 3.317 3.317 1.75 5.25 1.75C7.183 1.75 8.75 3.317 8.75 5.25C8.75 7.183 7.183 8.75 5.25 8.75Z"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              <path
                d="M19.25 22.75C15.537 22.75 11.976 21.275 9.35051 18.6495C6.725 16.024 5.25 12.463 5.25 8.75"
                stroke="currentColor"
                strokeWidth="3.5"
              />
            </svg>
          </span>
        </h2>
      </div>
    </section>
  );
}
