import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import calendar from "../assets/icons/calendar.png";
import "../assets/css/timeline.css";

export function Timeline() {
  return (
    <>
      <div>
        <h1 className="font-bold text-white items-center justify-center flex ">
          <img src={calendar} alt="timeline" />
        </h1>
      </div>
      <div className="p-10 md:p-20 text-left">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#0e131e",
              color: "#fff",
              padding: "2rem",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(78, 86, 141)",
            }}
            date="2020 - present"
            iconStyle={{ background: "rgb(78, 86, 141)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Kalinga Institute of Industrial Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Odisha, India
            </h4>
            <p>
              Bachelor of Technology
              <br />
              Computer Science and Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "#0e131e",
              color: "#fff",
              padding: "2rem",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(78, 86, 141)",
            }}
            className="vertical-timeline-element--work"
            date="6 June 2023 - 7 July 2023"
            iconStyle={{ background: "rgb(78, 86, 141)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Sales and Marketing
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              HighRadius
              <br />
              Remote
            </h4>
            <p>
              <ul className="list-disc">
                <li>
                  Developed effective communication and to engage with clients,
                  contributing to successful client relationships.
                </li>
                <li>
                  Played a key role in strategizing and executing marketing
                  campaigns to promote company products and services.
                </li>
                <li>
                  Conducted in-depth analysis of market trends and competitor
                  activities, providing valuable inputs for datadriven
                  decision-making.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "#0e131e",
              color: "#fff",
              padding: "2rem",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(78, 86, 141)",
            }}
            className="vertical-timeline-element--work"
            date="26 June 2023 - 25 July 2023"
            iconStyle={{ background: "rgb(78, 86, 141)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Web Application Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ONGC Ltd.
              <br />
              Ahmedabad, Gujarat
              <br />
              Tech Stack : SpringBoot, React, MySQL
            </h4>
            <p>
              <ul className="list-disc">
                <li>
                  Developed a robust and user-friendly web application for Well
                  Services at ONGC Ltd.
                </li>
                <li>
                  Utilized Spring Boot for backend development and React JS for
                  frontend development, ensuring a seamless user experience.
                </li>
                <li>
                  Proficiently managed the database using MySQL Workbench,
                  facilitating efficient storage and retrieval of crucial
                  operational data.
                </li>
                <li>
                  Implemented CRUD (Create, Read, Update, Delete)
                  functionalities within the web application, streamlining data
                  management processes for the well services team.
                </li>
                <li>
                  Gained hands-on experience through a field visit to an ONGC
                  site, providing invaluable insights into production operations
                  and SCADA systems.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Timeline;
