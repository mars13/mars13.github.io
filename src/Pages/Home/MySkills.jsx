import data from "../../data/index.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faRProject,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faProjectDiagram,
  faSitemap,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Renders the "My Skills" section of the portfolio page.
 * Displays a list of skills categorized into different sections.
 * Each skill is presented with an icon, title, and description.
 * The data for the skills is imported from an external JSON file.
 */
export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <div className="skills--section--container">
          <h2 className="skills--section--heading">My Skills</h2>
          <div className="skills--section--cards">
            {Object.entries(data.skills).map(([category, skills]) => (
              <div key={category} className="skills--category">
                <h3 className="skills--category--title">
                  {category
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </h3>
                <div className="skills--cards--container">
                  {skills.map((skill) => (
                    <div key={skill.id} className="skill--card">
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className="skill--icon"
                      />{" "}
                      <h4 className="skill--title">{skill.title}</h4>
                      <p className="skill--description">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
