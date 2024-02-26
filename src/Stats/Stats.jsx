import MainHeading from "../MainHeading/MainHeading";
import "./stats.css";
const Stats = () => {
  return (
    <section className="stats">
      <MainHeading>our awesome stats</MainHeading>
      <div className="container">
        <div className="box">
          <i class="far fa-user fa-2x fa-fw"></i> <h3>150</h3>
          <p>clients</p>
        </div>
        <div className="box">
          <i class="fas fa-code fa-2x fa-fw"></i> <h3>170</h3>
          <p>projects</p>
        </div>{" "}
        <div className="box">
          <i class="fas fa-globe-asia fa-2x fa-fw"></i> <h3>10</h3>
          <p>countries</p>
        </div>{" "}
        <div className="box">
          <i class="far fa-money-bill-alt fa-2x fa-fw"></i> <h3>1000</h3>
          <p>money</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
