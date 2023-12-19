import "../../styles/dfs.css";
import { useState } from "react";
import { ReactComponent as LeftArrow } from "../../assets/svg/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/svg/right-arrow.svg";

export default function Controls({ start, startV, setStart, next, back }) {
  const [auto, setAuto] = useState(false);
  const [speed, setSpeed] = useState(5);

  return (
    <div>
      <div className="controls">
        <div className="start">
          <span>Start Vertex: </span>
          <input
            className="start-vertex"
            value={startV}
            onChange={(e) => setStart(e.target.value)}
            placeholder="Start Vertex"
          />
          <button onClick={start}>start</button>
        </div>
        <div className="type">
          <button
            className={auto ? "active" : ""}
            onClick={() => setAuto(true)}
          >
            Auto
          </button>
          <button
            className={!auto ? "active" : ""}
            onClick={() => setAuto(false)}
          >
            Manual
          </button>
        </div>
        {auto ? (
          <div className="auto">
            <span>speed:</span>
            <input
              type="range"
              min="0"
              max="10"
              value={speed}
              step="1"
              onChange={(e) => setSpeed(e.target.value)}
            />
          </div>
        ) : (
          <div className="manual">
            <button onClick={back}>
              <LeftArrow />
            </button>
            <button onClick={next}>
              <RightArrow />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
