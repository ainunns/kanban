import "./../../../styles/app/task/detail.css";

import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Chips from "../../../components/Chips";
import ContentDetail from "./component/ContentDetail";

export default function DetailTicket() {
  return (
    <main className="container--main">
      <section className="container--section">
        <Link to="/" className="arrow__link">
          <FaArrowLeft />
          back to board
        </Link>
        <h1 className="header__section">Detail Ticket</h1>
      </section>
      <section className="container--section section__detail">
        <ContentDetail title="" className="section__detail__content--tags">
          <Chips color="primary">Tag 1</Chips>
        </ContentDetail>
        <div className="section__detail__content__grid">
          <ContentDetail title="Title">
            <p>Task 1</p>
          </ContentDetail>
          <ContentDetail title="Description">
            <p>Task 1</p>
          </ContentDetail>
          <ContentDetail title="Status">
            <p>Task 1</p>
          </ContentDetail>
          <ContentDetail title="Due Date">
            <p>Rabu, 40 Sept 2029</p>
          </ContentDetail>
        </div>
      </section>
      <section className="container--section section__action">
        <button
          type="button"
          className="section__action__button button__primary--filled"
        >
          Delete Ticket
        </button>
        <button
          type="button"
          className="section__action__button button__primary--outline"
        >
          Edit Ticket
        </button>
      </section>
    </main>
  );
}
