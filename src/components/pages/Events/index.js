import React from "react";
import "./event.css";
import logo from "../../../assets/images/blob-shape.svg";
import EventList from "./event-list";
export default function Events() {
  return (
    <div>
      <div className="event__list">
        <div className="container">
          <p className="text-center text-primary display-4 event__list-title">
            Upcoming Events
          </p>
          <div className="mt-5">
            <EventList />
          </div>
        </div>
      </div>
    </div>
  );
}
