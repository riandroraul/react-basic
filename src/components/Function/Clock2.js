import React, { useEffect, useState, useReducer } from "react";

const Clock2 = () => {
  const [time, setTime] = useState({ date: new Date(), date2: new Date() });
  const tick = () => {
    setTime({ date: new Date(), date2: new Date() });
  };

  useEffect(() => {
    setInterval(() => {
      tick();
    }, 1000);
  }, [time]);

  const { date, date2 } = time;
  return (
    <div>
      <h1>Hello, dunia!</h1>
      <h2>
        Today : {"   "}
        {date2.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h2>
      <h2>Time Now : {date.toLocaleTimeString("en-GB")}</h2>
    </div>
  );
};

export default Clock2;
