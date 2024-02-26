import MainHeading from "../MainHeading/MainHeading";
import "./testmonials.css";
import avatar1 from "../assets/imgs/avatar-01.png";
import avatar2 from "../assets/imgs/avatar-02.png";
import avatar3 from "../assets/imgs/avatar-03.png";
import avatar4 from "../assets/imgs/avatar-04.png";
import avatar5 from "../assets/imgs/avatar-05.png";
import avatar6 from "../assets/imgs/avatar-06.png";
const Testmonials = () => {
  const testmonails = [
    { name: "Mahmoud Salah", job: "Full Stack developer", img: avatar1 },
    { name: "Ahmed Salah", job: "graphic designer", img: avatar2 },
    { name: "Mahmoud Salah", job: "ui & ux", img: avatar3 },
    { name: "Mahmoud Salah", job: "Full Stack developer", img: avatar4 },
    { name: "Ahmed Salah", job: "graphic designer", img: avatar5 },
    { name: "Mahmoud Salah", job: "ui & ux", img: avatar6 },
  ];
  return (
    <section className="testmonials" id="testmonilas">
      <MainHeading>Testmonials</MainHeading>
      <div className="container">
        {testmonails.map((person) => {
          return (
            <div className="box">
              <div className="image">
                <img src={person.img} alt={person.img} />
              </div>
              <h3>{person.name}</h3>
              <p>{person.job}</p>
              <ul>
                <li>
                  <i class="filled fas fa-star"></i>
                </li>
                <li>
                  <i class="filled fas fa-star"></i>
                </li>
                <li>
                  <i class="filled fas fa-star"></i>
                </li>
                <li>
                  <i class="filled fas fa-star"></i>
                </li>
                <i class="far fa-star"></i>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                et reiciendis voluptatum, amet est natus quaerat ducimus
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Testmonials;
