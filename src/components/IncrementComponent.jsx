import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [pause, setpause] = useState(false);
  const inter = useRef(null);

  console.log(inter);

  const btnClassName = "py-1 px-2 rounded bg-neutral-200 m-3",
    inputClassName = "border border-slate-400";

  const checkDigit = (digit) => {
    if (digit < 10) return digit.toString().padStart(2, 0);
    else return digit;
  };

  const handleOnChange = (e, setState) => {
    setState(() => {
      if (e.target.value < 0) return 0;
      else return e.target.value;
    });
  };

  const handleStart = () => {
    if (!inter.current) {
      inter.current = setInterval(() => {
        setSecond((prev) => {
          if (prev < 2 && minute > 0) {
            setMinute(minute - 1);
            return 60;
          } else if (prev === 1 && minute === 0) {
            clearInterval(inter.current);
            inter.current = null;
            console.log(inter.current);
          } else {
            console.log({ "prev - 1": prev - 1, minute });
            return prev - 1;
          }
        });
      }, 1000);
    }
  };

  // useEffect(() => {
  //   clearInterval(inter.current);

  //   console.log(inter.current);
  // }, [pause, inter]);

  const handlePauseResume = () => {
    setpause(!pause);
    // if(inter.current) {
    clearInterval(inter.current);
    inter.current = null;
    console.log(inter.current);
    // } else {
    //   handleStart();
    // }
  };
  return (
    <>
      <label>
        <input
          className={inputClassName}
          type="number"
          value={minute}
          onChange={(e) => handleOnChange(e, setMinute)}
        />
        Minutes
      </label>
      <br />
      <label>
        <input
          type="number"
          className={inputClassName}
          value={second}
          onChange={(e) => handleOnChange(e, setSecond)}
        />
        Seconds
      </label>
      <br />

      <button className={btnClassName} onClick={handleStart}>
        START
      </button>
      <button className={btnClassName} onClick={handlePauseResume}>
        PAUSE / RESUME
      </button>
      <button className={btnClassName}>RESET</button>

      <h1 data-testid="running-clock">
        {checkDigit(minute)}:{checkDigit(second) ?? "00"}
      </h1>
    </>
  );
}

export function IncrementComponent() {
  const [arr, setArr] = useState([]);

  const fun = () => {
    if (arr.length < 3) {
      setArr([...arr, ""]);
    }
  };

  return (
    <div className="App">
      <button onClick={fun}>Click</button>
      {arr.map((x, i) => (
        <h1 key={i}>Hello React.</h1>
      ))}
    </div>
  );
}
