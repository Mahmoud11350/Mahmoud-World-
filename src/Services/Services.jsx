import MainHeading from "../MainHeading/MainHeading";
import "./services.css";
const Services = () => {
  return (
    <section className="services">
      <MainHeading>services</MainHeading>
      <div className="container">
        <div className="box">
          <i class="fas fa-user-shield fa-4x"></i>
          <h3>security</h3>
          <div className="info">
            <span>01</span>
            <span>details</span>
          </div>
        </div>
        <div className="box">
          <i class="fas fa-tools fa-4x"></i>
          <h3>fixing issues</h3>
          <div className="info">
            <span>02</span>
            <span>details</span>
          </div>
        </div>
        <div className="box">
          <i class="fas fa-map-marked-alt fa-4x"></i>
          <h3>location</h3>
          <div className="info">
            <span>03</span>
            <span>details</span>
          </div>
        </div>{" "}
        <div className="box">
          <i class="fas fa-laptop-code fa-4x"></i>
          <h3>coding</h3>
          <div className="info">
            <span>04</span>
            <span>details</span>
          </div>
        </div>{" "}
        <div className="box">
          <i class="fas fa-palette fa-4x"></i>
          <h3>security</h3>
          <div className="info">
            <span>05</span>
            <span>details</span>
          </div>
        </div>{" "}
        <div className="box">
          <i class="fas fa-bullhorn fa-4x"></i>
          <h3>marketing</h3>
          <div className="info">
            <span>06</span>
            <span>details</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
