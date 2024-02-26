import MainHeading from "../MainHeading/MainHeading";
import "./features.css";
import fea1 from "../assets/imgs/features-01.jpg";
import fea2 from "../assets/imgs/features-02.jpg";
import fea3 from "../assets/imgs/features-03.jpg";
const Features = () => {
  const features = [
    { name: "quality", imgSrc: fea1 },
    { name: "time", imgSrc: fea2 },
    { name: "passion", imgSrc: fea3 },
  ];
  return (
    <section className="features">
      <MainHeading>Features</MainHeading>
      <div className="container">
        {features.map((feature) => {
          return (
            <div className="box">
              <div className="image">
                <div className="overlay"></div>
                <img src={feature.imgSrc} alt={feature.name} />
              </div>
              <div className="content">
                <h3>{feature.name}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  harum hic veniam eligendi minima
                </p>
                <a href="#">more</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
