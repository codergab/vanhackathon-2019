import React from "react";
import { Link } from "react-router-dom";
import "./job.css";
export default function Job({ job }) {
  const to = `/job/${job.title
    .toLowerCase()
    .split(" ")
    .join("-")}-${Math.floor(Math.random() * 10000000) + 10}`;
  return (
    <div className="card job-card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-1" style={{ paddingRight: "2rem" }}>
            <img src={job.company.logo} className="rounded" height={50} />
          </div>
          <div className="col-md-8" style={{ paddingLeft: "2rem" }}>
            <h6 className="text-muted">{job.company.name}</h6>
            <h5 className="">{job.title}</h5>
            <p className="text-muted pt-2">{job.excerpt}</p>
            {job.skills.required.length > 0 &&
              job.skills.required.map((skill, i) => (
                <button className="btn btn-sm btn-primary btn-themed-skill ml-1">
                  {skill}
                </button>
              ))}
            {job.skills.additional.length > 0 &&
              job.skills.additional.map((skill, i) => (
                <button className="btn btn-sm btn-success btn-themed-skill ml-1">
                  {skill}
                </button>
              ))}
          </div>
          <div className="col-md-3">
            <Link to={to} className="btn btn-primary primary">
              Quick Apply
            </Link>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <ul>
          <li className="job-location">
            <i className="fa fa-location-arrow" aria-hidden="true"></i> San
            Francisco
          </li>
          <li className="job-contract">
            <i className="fa fa-briefcase" aria-hidden="true"></i> Full Time
          </li>
          <li className="job-comesation">
            <i className="fa fa-money" aria-hidden="true"></i> Not Informed
          </li>

          <li className="job-listed">
            <i className="fa fa-clock-o" aria-hidden="true"></i> 2 Days Ago
          </li>
        </ul>
      </div>
    </div>
  );
}
