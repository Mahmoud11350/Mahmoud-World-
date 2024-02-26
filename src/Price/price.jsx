import MainHeading from "../MainHeading/MainHeading";
import "./price.css";
import basic from "../assets/imgs/hosting-basic.png";
import advanced from "../assets/imgs/hosting-advanced.png";
import proffesional from "../assets/imgs/hosting-professional.png";
const plans = [
  { imgSrc: basic, title: "basic", price: "$15" },
  { imgSrc: advanced, title: "advanced", price: "$30" },
  { imgSrc: proffesional, title: "proffesional", price: "$45" },
];
const Price = () => {
  return (
    <section className="price">
      <MainHeading>pricing plans</MainHeading>
      <div className="container">
        {plans.map((plan) => {
          return (
            <div className="box">
              <div className="main">
                <h3>{plan.title}</h3>
                <img src={plan.imgSrc} alt="" />
                <p>{plan.price}</p>
                <span>per month</span>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </span>
                    10GB HDD Space
                  </li>
                  <li>
                    {" "}
                    <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </span>
                    5 Email Adress
                  </li>
                  <li>
                    {" "}
                    <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </span>
                    2 Subdomains
                  </li>
                  <li>
                    {" "}
                    <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </span>
                    4 Databases
                  </li>
                  <li>
                    {" "}
                    <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </span>
                    {plan.title} support
                  </li>
                </ul>
                <a href="">choose plan</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Price;
