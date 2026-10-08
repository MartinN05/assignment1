import { useState } from "react";
import Header from "@/components/Header";
import Counter from "@/components/Counter";
import MessageBox from "@/components/MessageBox";
import Status from "@/components/Status";

export default function Home() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Header title="Assignment 1" />

      <nav>
        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("counter")}>
          Counter
        </button>

        <button onClick={() => setPage("message")}>
          Message
        </button>

        <button onClick={() => setPage("status")}>
          Status
        </button>
      </nav>

      {page === "home" && (
        <div>
          <h2>Welcome!</h2>
          <p>Welcome To My Assigment.</p>
        </div>
      )}

      {page === "counter" && (
        <Counter title="Counter" />
      )}

      {page === "message" && (
        <MessageBox message="Welcome Hi!" />
      )}

      {page === "status" && (
        <Status title="Student" />
      )}
    </div>
  );
}