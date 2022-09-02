import React, { useEffect, useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.start);

  useEffect(
    () => {
      console.log("Counter mounted");
    },
    // ga ada dependency, jadi useEffect
    // ini hanya dijalanin satu kali
    []
  );

  useEffect(
    () => {
      let currentCount = props.start;
      const timer = setInterval(() => {
        setCount(currentCount++);
      }, 1000);

      // fn ini dijalanin kalo komponen
      // dihapus dari app
      return function () {
        console.log("Counter unmounted");
        clearInterval(timer);
      };
    },
    // useEffect ini hanya dijalanin lagi
    // kalo props.start berubah
    [props.start]
  );

  useEffect(
    () => {
      console.log("Count updated");
    },
    // useEffect ini hanya dijalanin lagi
    // kalo count berubah
    [count]
  );

  return <div className="counter">{count}</div>;
};

const CobaUseEffect = () => {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowCounter(!showCounter);
        }}
      >
        Tampilin/sembunyiin Counter
      </button>

      {showCounter && <Counter start={10} />}
    </div>
  );
};

export default CobaUseEffect;
