import "./../styles/app/index.css";

import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import Board from "../components/Board/BoardStatus";

function App() {
  return (
    <main className="container--main">
      <section className="header">
        <h1 className="header header__title">Kanban Board</h1>
        <h6 className="header header__subtitle">
          A board to keep track of projects and tasks. Built with React by{" "}
          <Link to="https://github.com/ainunns">
            <FaGithub /> ainunns
          </Link>
        </h6>
      </section>
      <section className="container--app">
        <Board title="Backlog" ticketCount={5} />
        <Board title="Ready" ticketCount={15} />
        <Board title="In Progress" ticketCount={5} />
        <Board title="Done" ticketCount={5} />
      </section>
    </main>
  );
}

export default App;
