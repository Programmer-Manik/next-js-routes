"use client"
import { useState } from "react";
const Counter = () => {
   const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>counter:{counter}</h1>
    <button className="p-5" onClick={() => setCounter(counter+1)} >inCrease</button>
    <button className="p-5" onClick={() => setCounter(counter-1)}>deCrease</button>
    </div>
  );
};

export default Counter;
