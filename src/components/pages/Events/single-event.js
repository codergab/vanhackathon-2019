import React from "react";

export default function SingleEvent() {
  return (
    <div className="card large-event__body" style={{ border: "none" }}>
      <div
        className="event-image"
        style={{ height: "400px", width: "100%", objectFit: "cover" }}
      >
        <img
          src="https://vanhackblobstorageprod.blob.core.windows.net/img/events/cover/7d6e1e61-c2d1-4c44-ab22-1141f9fe665d.jpg"
          style={{ objectFit: "cover", height: "400px", width: "100%" }}
        />

        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h4 className="card-title display-4 text-secondary">
                  Vanhackaton 2019
                </h4>
                <h6>
                  <i className="fa fa-map-marker"></i> Vancouver - Canada
                </h6>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary btn-lg btn-themed">
                  Reserve my Seat
                </button>
              </div>
            </div>
            <hr />
            <div className="row mt-3">
              <div className="col-md-12">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  {" "}
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.{" "}
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  {" "}
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.{" "}
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <ul>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </li>
                  <li>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </li>
                </ul>
                <p>
                  {" "}
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.{" "}
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <h4>Location on Map</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5206.104080937717!2d-123.12486427471237!3d49.27541111708412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d10d99f885%3A0x456d9c34bf28293f!2sYaletown%2C%20Vancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sng!4v1574198094925!5m2!1sen!2sng"
                width="100%"
                height="300"
                frameborder="0"
                style={{ border: "0" }}
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
