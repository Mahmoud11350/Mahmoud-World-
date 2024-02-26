import MainHeading from "../MainHeading/MainHeading";
import "./skills.css";
import skillImg from "../assets/imgs/skills.png";
const Skills = () => {
  const skills = [
    { skillName: "html", progress: "80%" },
    { skillName: "css", progress: "90%" },
    { skillName: "javascript", progress: "70%" },
    { skillName: "python", progress: "70%" },
  ];
  return (
    <section className="skills">
      <MainHeading>Our Skills</MainHeading>
      <div className="container">
        <img src={skillImg} alt="" />
        <div className="skills-box">
          {skills.map((skill) => {
            return (
              <div className="skill">
                <h3>{skill.skillName}</h3>
                <div>
                  <span
                    data-progress={skill.progress}
                    style={{ width: `${skill.progress}` }}
                  ></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
