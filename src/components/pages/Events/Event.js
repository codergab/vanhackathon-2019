import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
export default function Event({ event }) {
  const to = `/event/${event.name
    .toLowerCase()
    .split(" ")
    .join("-")}-${Math.floor(Math.random() * 10000000) + 10}`;
  return (
    <div className="col-md-4">
      <Card className="event__list-card">
        <CardImg
          top
          width="80%"
          src={event.cover}
          alt="event-image"
          height={250}
          className="event__list-image"
        />
        <span
          style={{
            position: "absolute",
            padding: "0.3em 0.5em",
            color: "#fff",
            background: "rgba(0,0,0,0.5)"
          }}
        >
          {event.isPremium && "Premium"}
          {!event.isPremium && "Free"}
        </span>
        <CardBody>
          <div className="row">
            <div className="col-md-12">
              <h6 className="event__list-date">{event.date}</h6>
              <CardTitle>{event.name}</CardTitle>
              <div className="row">
                <div className="col-md-10">
                  <CardSubtitle className="text-muted">
                    <i className="im im-location"></i> {event.city} -{" "}
                    {event.country}
                  </CardSubtitle>
                </div>
                <div className="col-md-2">
                  <span>
                    <img
                      src={event.flag}
                      height={30}
                      style={{ marginTop: "-1em" }}
                    />
                  </span>
                </div>
              </div>

              <Link to={to} className="btn btn-primary btn-themed">
                See Details
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
