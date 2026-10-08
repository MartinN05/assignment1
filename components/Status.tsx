import { useState } from "react";

type StatusProps = {
  title: string;
};

export default function Status({ title }: StatusProps) {
  const [active, setActive] = useState(false);

  function changeStatus() {
    setActive(!active);
  }

  return (
    <div>
      <h2>{title}</h2>

      <p>
        Status: {active ? "Active" : "Inactive"}
      </p>

      <button onClick={changeStatus}>
        Change Status
      </button>
    </div>
  );
}