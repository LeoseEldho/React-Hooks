import React, { useState, useEffect } from "react";

function IntervelHookCounter() {
  let [ count, setcount ] = useState(0);

  const tick = () => {
    setcount(prevCount=>prevCount + 1);
  };
  useEffect(() => {
    const intervel = setInterval(tick, 3000);
    return () => {
      clearInterval(intervel);
    };
  });
  return <div>{count}</div>;
}
export default IntervelHookCounter;
