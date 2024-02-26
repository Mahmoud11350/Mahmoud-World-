import MainHeading from "../MainHeading/MainHeading";
import "./how-works.css";
import workSteps from "../assets/imgs/work-steps.png";
import workSteps1 from "../assets/imgs/work-steps-1.png";
import workSteps2 from "../assets/imgs/work-steps-2.png";
import workSteps3 from "../assets/imgs/work-steps-3.png";
const HowWorks = () => {
  const workStep = [
    { imgSrc: workSteps1, name: "buisness analysis" },
    { imgSrc: workSteps2, name: "Architecture" },
    { imgSrc: workSteps3, name: "development" },
  ];
  return (
    <section className="how-works">
      <MainHeading>How it works </MainHeading>
      <div className="container">
        <div className="image">
          <img src={workSteps} alt="" />
        </div>
        <div className="box">
          {workStep.map((step) => {
            return (
              <div>
                <img src={step.imgSrc} alt="" />
                <div>
                  <h4>{step.name}</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Enim nesciunt obcaecati quisquam quis laborum recusandae
                    debitis vel
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
