import "./../styles/app/index.css";
import "./../styles/components/modal.css";

import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import Board from "../components/board/StatusBoard";
import Loading from "../components/Loading";

function App() {
  const [open, setOpen] = React.useState(false);
  const [dataModal, setDataModal] = React.useState(null);
  const { data: boardData, isPending: isLoading } = useQuery({
    queryKey: ["/task"],
  });

  if (isLoading) {
    return <Loading />;
  }

  const unarchiveTickets = boardData.data.tasks.filter(
    (ticket) => !ticket.deletedAt
  );

  const [backlogTickets, readyTickets, inProgressTickets, doneTickets] = [
    unarchiveTickets.filter((ticket) => ticket.status === "backlog"),
    unarchiveTickets.filter((ticket) => ticket.status === "ready"),
    unarchiveTickets.filter((ticket) => ticket.status === "in progress"),
    unarchiveTickets.filter((ticket) => ticket.status === "done"),
  ];

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
        <Board
          open={open}
          setOpen={setOpen}
          dataModal={dataModal}
          setDataModal={setDataModal}
          title="Backlog"
          data={backlogTickets}
        />
        <Board
          open={open}
          setOpen={setOpen}
          dataModal={dataModal}
          setDataModal={setDataModal}
          title="Ready"
          data={readyTickets}
        />
        <Board
          open={open}
          setOpen={setOpen}
          dataModal={dataModal}
          setDataModal={setDataModal}
          title="In Progress"
          data={inProgressTickets}
        />
        <Board
          open={open}
          setOpen={setOpen}
          dataModal={dataModal}
          setDataModal={setDataModal}
          title="Done"
          data={doneTickets}
        />
      </section>
    </main>
  );
}

export default App;
