import React, { useEffect, useState } from "react";
import { Trail, animated, Keyframes } from "react-spring";

import "./styles.css";

const dots = ["dot-1", "dot-2", "dot-3"];

export default function App() {
  const [animation1, setAnimation1] = useState({ opacity: 1, from: 0, to: 1 });
  const [animation2, setAnimation2] = useState({ opacity: 0, from: 1, to: 0 });

  useEffect(() => {
    let animation = 1;
    const intervalId = setInterval(() => {
      if (animation === 1) {
        setAnimation1({ opacity: 0, from: 1, to: 0 });
        setAnimation2({ opacity: 1, from: 0, to: 1 });
        animation = 2;
      } else {
        setAnimation1({ opacity: 1, from: 0, to: 1 });
        setAnimation2({ opacity: 0, from: 1, to: 0 });
        animation = 1;
      }
    }, 400);
    return () => clearInterval(intervalId);
  }, []);

  const content = ({ radians, color }) =>
    dots.map((item, index) => (
      <animated.div
        className="dot"
        key={item}
        style={{
          willChange: "transform, opacity",
          transform: radians.interpolate(
            (r) =>
              `translate3d(0, ${
                6 * Math.sin(r + (index * 0.5 * Math.PI) / 5)
              }px, 0)`
          ),
          opacity: radians.interpolate((r) => 1 - index / dots.length)
        }}
      />
    ));

  return (
    <div class="dots">
      <Trail items={dots} keys={dots} from={animation1} to={animation2}>
        {(dot) => (props) => <animated.div className="dot" style={props} />}
      </Trail>
    </div>
  );
}
