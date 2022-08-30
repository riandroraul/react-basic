import React, { useEffect, useState } from "react";

const Clock2 = () => {
  const [time, setTime] = useState({ date: new Date() });
  const tick = () => {
    setTime({ date: new Date() });
  };

  useEffect(() => {
    setInterval(() => {
      tick();
    }, 1000);
  }, [time]);

  return (
    <div>
      <h1>Hello, dunia!</h1>
      <h2>Ini {time.date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock2;
