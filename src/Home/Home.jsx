import "./home.css";
import homeImg from "../assets/imgs/landing-image.png";
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="image">
          <img src={homeImg} alt="" />
        </div>
        <div className="text">
          <h2>Welcome to Mahmoud World </h2>
          <p>
            Here Iam gonna share everything about my life. Books Iam reading,
            Games Iam Playing, Stories and Events
          </p>
        </div>
      </div>
      <i class="fas fa-angle-double-down fa-2x"></i>
    </section>
  );
};

export default Home;
