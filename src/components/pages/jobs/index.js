import React, { Component } from "react";
import Job from "./job";
import ContentLoader from "react-content-loader";
import { Spinner } from "reactstrap";
export default class Jobs extends Component {
  constructor() {
    super();

    this.state = {
      isTyping: false,
      jobs: [
        {
          title: "Senior Frontend Engineer",
          company: {
            name: "King",
            isVerified: true,
            logo:
              "http://www.vasterad.com/themes/hireo_082019/images/company-logo-03.png"
          },
          createdAt: "2019-11-17T00:00:00",
          city: "Toronto",
          country: "Canada",
          excerpt:
            "Awesome company in Toronto is hiring for senior front-end engineers!",
          skills: {
            required: ["JavaScript", "HTML", "CSS", "JQUERY"],
            additional: ["ReactJS", "AngularJS"]
          },
          salary: 0
        },
        {
          title: "Backend Engineer",
          company: {
            name: "Mates",
            isVerified: false,
            logo:
              "http://www.vasterad.com/themes/hireo_082019/images/company-logo-04.png"
          },
          createdAt: "2019-11-17T00:00:00",
          city: "Toronto",
          country: "Canada",
          excerpt:
            "Awesome company in Toronto is hiring for senior front-end engineers!",
          skills: {
            required: ["Python", "AWS", "Ruby on Rails"],
            additional: ["Agile", "Teamwork"]
          },
          salary: 0
        },
        {
          title: "Sr Software Engineer (Web App Developer)",
          company: {
            name: "Hexagon",
            isVerified: true,
            logo:
              "http://www.vasterad.com/themes/hireo_082019/images/company-logo-01.png"
          },
          createdAt: "2019-11-17T00:00:00",

          city: "Gatineau",
          country: "Canada",
          excerpt:
            "Great startup located in the Quebec Province is hiring a Sr Fullstack Engineer to join their team!",
          skills: {
            required: ["NodeJS", "AWS", "Ruby on Rails"],
            additional: ["Agile", "Teamwork"]
          },
          salary: 0
        }
      ],
      showJobs: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showJobs: true });
    }, 2000);
  }

  shouldFilterBySearch = e => {
    const valuu = e.target.value;
    if (valuu !== null) {
      setTimeout(() => {
        this.setState({ isTyping: true });
      }, 2000);
    } else {
      this.setState({ isTyping: false });
    }
  };
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-3">
          <p>Filters</p>
          <div className="row">
            <div className="col-md-12">
              <input type="checkbox" /> Remote <br />
              <input type="checkbox" /> Join Vanhack Team
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row mb-4">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                onKeyUp={this.shouldFilterBySearch}
                placeholder="Search for a Job. E.g Software Developer"
              />
              {this.state.isTyping && (
                <Spinner
                  color="secondary"
                  style={{ position: "absolute", top: "8px", left: "93%" }}
                />
              )}
            </div>
          </div>
          {!this.state.showJobs && (
            <ContentLoader
              height={475}
              width={800}
              speed={2}
              primaryColor="rgba(4, 117, 206, 0.1)"
              secondaryColor="rgba(4, 117, 206, 0.2)"
            >
              <rect x="33" y="8" rx="5" ry="5" width="572" height="234" />
              <rect x="31" y="261" rx="5" ry="5" width="572" height="234" />
            </ContentLoader>
          )}
          {this.state.showJobs &&
            this.state.jobs.map((job, i) => (
              <Job job={job} key={i} index={i} />
            ))}
        </div>
      </div>
    );
  }
}
