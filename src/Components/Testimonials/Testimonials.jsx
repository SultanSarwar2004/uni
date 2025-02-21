import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Emma R.</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "Choosing to pursue my degree at Edusity was one of the best
                decisions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William J.</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "Enrolling at Edusity was a life-changing decision. The
                dedicated faculty, innovative learning approach, and welcoming
                environment have provided me with an exceptional educational
                experience."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Sophia L. </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "Attending Edusity has been an incredible experience. The
                combination of top-tier education, career-focused programs, and
                a nurturing atmosphere has prepared me for success in ways I
                never imagined."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>James T.</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "My time at Edusity has been truly rewarding. The engaging
                curriculum, inspiring professors, and strong sense of community
                have made my learning journey both fulfilling and enjoyable."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
