import { useState } from "react";

type CounterProps = {
  title: string;
};

export default function Counter({ title }: CounterProps) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{title}</h2>

      <p>Count: {count}</p>

      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>

      {count >= 5 && <p>You reached 5!</p>}
    </div>
  );
}