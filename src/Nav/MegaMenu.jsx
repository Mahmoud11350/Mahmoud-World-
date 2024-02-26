import navImg from "../assets/imgs/megamenu.png";
import "./mega-menu.css";

const MegaMenu = () => {
  const linksOne = [
    { name: "testmonials", icon: "far fa-comments fa-fw" },
    { name: "team member", icon: "far fa-user fa-fw" },
    { name: "services", icon: "far fa-building fa-fw" },
    { name: "our skills", icon: "far fa-check-circle fa-fw" },
    { name: "how it works", icon: "far fa-clipboard fa-fw" },
  ];
  const linksTwo = [
    { name: "events", icon: "far fa-calendar-alt fa-fw" },
    { name: "pricing plans", icon: "fas fa-server fa-fw" },
    { name: "top videos", icon: "far fa-play-circle fa-fw" },
    { name: "stats", icon: "far fa-chart-bar fa-fw" },
    { name: "request a discount", icon: "fas fa-percent fa-fw" },
  ];
  return (
    <>
      <div className="mega-menu container">
        <div className="image">
          <img src={navImg} alt="" />
        </div>
        <ul className="mega-one">
          {linksOne.map((link) => {
            return (
              <li key={link.name}>
                <i className={link.icon}></i>
                <a href="">{link.name}</a>
              </li>
            );
          })}
        </ul>
        <ul className="mega-two">
          {linksTwo.map((link) => {
            return (
              <li key={link.name}>
                <i className={link.icon}></i>
                <a href="">{link.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default MegaMenu;
