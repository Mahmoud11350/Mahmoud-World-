import MainHeading from "../MainHeading/MainHeading";
import "./events.css";
import events from "../assets/imgs/events.png";
const Events = () => {
  return (
    <>
      <section className="events">
        <MainHeading>Latest Events</MainHeading>
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
        <div className="container">
          <div className="image">
            <img src={events} alt="" />
          </div>
          <div className="info">
            <ul>
              <li>
                <span>150</span> <span>Days</span>
              </li>
              <li>
                <span>30</span> <span>hours</span>
              </li>
              <li>
                <span>90</span> <span>minutes</span>
              </li>
              <li>
                <span>200</span> <span>second</span>
              </li>
            </ul>
            <h3>Tech Masters Event 2022</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              tenetur doloremque iusto ut adipisci quam ratione aliquam
              excepturi nulla in harum, veritatis porro
            </p>
          </div>
        </div>
        <form action="">
          <input type="text" placeholder="Enter Your Email" />
          <a href="">Submit</a>
        </form>
      </section>
    </>
  );
};

export default Events;
