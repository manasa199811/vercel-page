import "./Pitch.css"

export default function Pitch() {
  return (
    <section className="pitch">

      <h2 className="pitch-line">
        Develop with your favorite tools

        <svg className="pitch-icon" viewBox="0 0 28 28">
          <path d="M2.50012 25.5L11.2151 16.3009C11.3749 16.1322 11.3749 15.8679 11.2151 15.6991L2.50012 6.5"
          stroke="currentColor"
          strokeWidth="3.5"/>
          <path d="M14.75 26.25H26.25"
          stroke="currentColor"
          strokeWidth="3.5"/>
        </svg>

      </h2>

      <h2 className="pitch-line">
        Launch globally, instantly

        <svg className="pitch-icon" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="12.25" stroke="currentColor" strokeWidth="3.5"/>
        </svg>
<h2 className="pitch-line">
        Keep pushing

        <svg className="pitch-icon" viewBox="0 0 28 28">
          <path d="M7 10.9375V9.1875H3.5V10.9375H7Z"
          fill="currentColor"/>
        </svg>

      </h2>
      </h2>

    </section>
  )
}