import React from "react";
import { Link } from "react-router-dom";
export default function SingleJob({ job }) {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h2>
                Senior Frontend Engineer -{" "}
                <small className="text-uppercase">Vanhack</small>
              </h2>
              <h5>
                <i className="fa fa-map-marker"></i> Vancouver - Canada
                &nbsp;&nbsp;
                <i className="fa fa-money"></i> (GBP) 30k to 40k
              </h5>
            </div>
            <div className="col-md-2">
              <button className="btn btn-block btn-primary primary">
                Apply
              </button>
              <Link to="/" className="mt-2 btn btn-link">
                Back to Job List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="mb-5">Description</h3>

        <div>
          <p>
            <strong>Requirements:</strong>
          </p>
          <ul>
            <li>
              4+ years of experience working with C#, .NET, ASP.NET, Javascript,
              AngularJS.
            </li>
            <li>
              Strong knowledge with AWS, Google Cloud, SQL, NoSQL, Typescript,
              T-SQL.
            </li>
            <li>CI and automated deployments, API's, Design Patterns.</li>
            <li>Advanced or Fluent English</li>
            <li>Challenge completed with a higher score than 80%.</li>
          </ul>
          <p>
            <br />
          </p>
          <p>
            &nbsp;<strong>Observation:</strong>&nbsp;
          </p>
          <p>
            <em>
              <strong>
                If you've got a friend who is a good fit for this role and it's
                a not VanHacker yet, recommend him/her to us.&nbsp;
              </strong>
            </em>
          </p>
          <p>
            <em>
              <strong>
                If your recommendation is hired, you'll receive $150 CAD from
                VanHack.&nbsp;
              </strong>
            </em>
          </p>
          <p>
            <em>
              <strong>
                Use this link to get your referral personal link:
                https://app.vanhack.com/New/#/referral
              </strong>
            </em>
          </p>
        </div>
        <div className="mt-3 pb-5">
          <h5 className="text-info">Skills</h5>
          <button class="btn btn-sm btn-success btn-themed-skill ml-1">
            JavaScript
          </button>
          <button class="btn btn-sm btn-primary btn-themed-skill ml-1">
            JavaScript
          </button>
          <button class="btn btn-sm btn-primary btn-themed-skill ml-1">
            C#
          </button>
          <button class="btn btn-sm btn-success btn-themed-skill ml-1">
            .NET
          </button>
        </div>
        <div className="pb-5 mb-5"></div>
      </div>
    </>
  );
}
