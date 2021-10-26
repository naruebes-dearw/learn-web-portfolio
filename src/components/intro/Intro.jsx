import "./intro.css";
import Me from "../../img/me2.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">John Burtom</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-disc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus suscipit erat, sit amet varius leo ultrices sit amet. Maecenas mattis rutrum eros non imperdiet lacus aliquet id purus.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="i-scroll"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="6" y="3" width="12" height="18" rx="4" />
          <line x1="12" y1="7" x2="12" y2="11" />
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro
