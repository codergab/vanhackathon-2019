import React, { Component } from "react";

import Event from "./Event";
import ContentLoader from "../../layouts/Loader";
export default class EventList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [
        {
          cover:
            "https://vanhackblobstorageprod.blob.core.windows.net/img/events/cover/7d6e1e61-c2d1-4c44-ab22-1141f9fe665d.jpg",
          name: "Vanhackathon",
          date: "2019-11-20T00:00:00",
          isOnline: false,
          theEvent:
            "<p>Leap Ontario brings together top, international software engineers and Ontario Tech companies for meetings and interviews. Are you interested in finding a job in Canada and fueling the growth of a thriving Tech ecosystem? This event will increase your chances of achieving your dreams of a new career path in a new and exciting city.&nbsp;</p><p><br></p><p>Pre screened and pre selected candidates will fly in to Toronto for face to face interviews, in the hopes of filling over 50 positions.&nbsp;</p><p><br></p><p>This is an amazing chance to meet and interview with top Ontario Tech companies, who are committed to innovation, inclusion and diversity, and find a job abroad. Don't miss it!&nbsp;</p>",
          applied: false,
          city: "Toronto",
          country: "Canada",
          flag:
            "https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg",
          isPremium: true
        },
        {
          cover:
            "https://vanhackblobstorageprod.blob.core.windows.net/img/events/cover/relocation-summit-2019.png",
          name: "Relocation Summit 2019",
          date: "2019-11-20T00:00:00",
          isOnline: false,
          theEvent:
            "<p>The new edition of <strong>VanHack Relocation Summit</strong> brings together insights and lessons from exceptional leaders, makers, and innovators in the international tech market - for<strong> 8 days</strong> of inspired conversation and purposeful networking.&nbsp;</p>↵<p>Join us to start changing your life: be part of the biggest online event for <strong>Tech Talent</strong> who want to relocate to Canada or Europe and get closer to your dream job abroad.</p>↵<p><br></p>↵<p><br></p>↵<h2><strong>What to expect from the Relocation Summit?</strong></h2>↵<h2><br></h2>↵<p><strong>Perfect your skills</strong></p>↵<p>An intense week of content to help tech talents like you improve your skills, get the mindset and start your journey to get hired abroad.</p>↵<p><strong>Network and see what your peers are doing</strong></p>↵<p>Not only meet great professionals from the tech industry in Canada and Europe but you will also have the chance to meet people going through the same journey as you toward your job abroad.&nbsp;</p>↵<p><strong>Learn from your tech heroes&nbsp;</strong></p>↵<p>Hear from people that are part of the tech market in Canada and Europe - and the ones who went through the same path as you are now. Learn from the best to make your journey to find a job abroad smoother. &nbsp;</p>↵<p><strong>Make your dreams happen!</strong></p>↵<p>Relocation Summit is a great opportunity to help you turn your dream into a plan and make them happen! Start your journey to find an amazing job abroad, relocate and start a new life.</p>↵<p><br></p>↵<p><br></p>↵<h2><strong>Who should attend?</strong></h2>↵<h2><br></h2>↵<p>Our VanHack Relocation Summit is a virtual conference and networking event for absolutely everyone involved in the development and IT, and are looking to find a tech job abroad.&nbsp;</p>↵<p><br></p>↵<p><br></p>↵<h2><strong>Where? When? How?</strong></h2>↵<h2><br></h2>↵<p>Nov 27th - Dec 4th | Online - You can watch from everywhere in the world!</p>↵<p><br></p>↵<p><br></p>↵<h2><strong>Last year numbers</strong></h2>↵<h2><br></h2>↵<p><strong>+11.000 </strong>participants</p>↵<p><strong>+18 </strong>hours of content</p>↵<p><strong>+20</strong> speakers</p>",
          applied: false,
          city: "Toronto",
          country: "Canada",
          flag:
            "https://vanhackblobstorageprod.blob.core.windows.net/flags/canada.svg",
          isPremium: true
        },
        {
          cover:
            "https://vanhackblobstorageprod.blob.core.windows.net/img/events/cover/relocation-summit-2019.png",
          name: "Relocation Summit 2019",
          date: "2019-11-20T00:00:00",
          isOnline: false,
          theEvent:
            "<p>The new edition of <strong>VanHack Relocation Summit</strong> brings together insights and lessons from exceptional leaders, makers, and innovators in the international tech market - for<strong> 8 days</strong> of inspired conversation and purposeful networking.&nbsp;</p>↵<p>Join us to start changing your life: be part of the biggest online event for <strong>Tech Talent</strong> who want to relocate to Canada or Europe and get closer to your dream job abroad.</p>↵<p><br></p>↵<p><br></p>↵<h2><strong>What to expect from the Relocation Summit?</strong></h2>↵<h2><br></h2>↵<p><strong>Perfect your skills</strong></p>↵<p>An intense week of content to help tech talents like you improve your skills, get the mindset and start your journey to get hired abroad.</p>↵<p><strong>Network and see what your peers are doing</strong></p>↵<p>Not only meet great professionals from the tech industry in Canada and Europe but you will also have the chance to meet people going through the same journey as you toward your job abroad.&nbsp;</p>↵<p><strong>Learn from your tech heroes&nbsp;</strong></p>↵<p>Hear from people that are part of the tech market in Canada and Europe - and the ones who went through the same path as you are now. Learn from the best to make your journey to find a job abroad smoother. &nbsp;</p>↵<p><strong>Make your dreams happen!</strong></p>↵<p>Relocation Summit is a great opportunity to help you turn your dream into a plan and make them happen! Start your journey to find an amazing job abroad, relocate and start a new life.</p>↵<p><br></p>↵<p><br></p>↵<h2><strong>Who should attend?</strong></h2>↵<h2><br></h2>↵<p>Our VanHack Relocation Summit is a virtual conference and networking event for absolutely everyone involved in the development and IT, and are looking to find a tech job abroad.&nbsp;</p>↵<p><br></p>↵<p><br></p>↵<h2><strong>Where? When? How?</strong></h2>↵<h2><br></h2>↵<p>Nov 27th - Dec 4th | Online - You can watch from everywhere in the world!</p>↵<p><br></p>↵<p><br></p>↵<h2><strong>Last year numbers</strong></h2>↵<h2><br></h2>↵<p><strong>+11.000 </strong>participants</p>↵<p><strong>+18 </strong>hours of content</p>↵<p><strong>+20</strong> speakers</p>",
          applied: false,
          city: "Toronto",
          country: "Canada",
          flag:
            "https://vanhackblobstorageprod.blob.core.windows.net/flags/colombia.svg",
          isPremium: false
        }
      ],
      showEvents: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showEvents: true });
    }, 1000);
  }
  render() {
    return (
      <div className="row">
        {this.state.showEvents &&
          this.state.events.map((event, i) => <Event event={event} key={i} />)}
        <div className="col-md-4">
          {!this.state.showEvents && <ContentLoader />}
        </div>
        <div className="col-md-4">
          {!this.state.showEvents && <ContentLoader />}
        </div>
        <div className="col-md-4">
          {!this.state.showEvents && <ContentLoader />}
        </div>
      </div>
    );
  }
}
