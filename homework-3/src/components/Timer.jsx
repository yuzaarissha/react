import { useEffect, useState } from "react";
import "./Timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    let id;
    if (active) {
      id = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(id);
            setActive(false);
            setEnded(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(id);
  }, [active]);

  useEffect(() => {
    if (ended === true && seconds === 0) {
      alert("Time's up!");
      setEnded(false);
    }
  });

  return (
    <section className="timer">
      <input
        type="number"
        min="0"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />
      <div className="buttons">
        <button
          onClick={() => {
            if (seconds > 0) setActive(true);
          }}
        >
          Start
        </button>
        <button onClick={() => setActive(false)}>Pause</button>
        <button
          onClick={() => {
            setActive(false);
            setSeconds(60);
          }}
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default Timer