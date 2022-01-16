/** @jsx createElement */
import { createElement, useState } from "./dep.ts";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className={`text-2xl text-red-500`}>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
