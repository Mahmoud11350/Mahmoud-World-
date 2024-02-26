import MainHeading from "../MainHeading/MainHeading";
import "./top-videos.css";
import videoPreview from "../assets/imgs/video-preview.jpg";
const TopVideos = () => {
  return (
    <section className="top-videos">
      <MainHeading>Top Videos</MainHeading>
      <div className="container">
        <div className="videos-list">
          <h4>top video</h4>
          <ul>
            <li>
              <span>how to create sub domain</span>
              <span>05:18</span>
            </li>
            <li>
              <span>playing with the dns</span>
              <span>03:18</span>
            </li>{" "}
            <li>
              <span>every thing about virtual host</span>
              <span>05:30</span>
            </li>{" "}
            <li>
              <span>how to menitor your websites</span>
              <span>05:18</span>
            </li>{" "}
            <li>
              <span>uncharted beating the last boss</span>
              <span>09:18</span>
            </li>{" "}
            <li>
              <span>ys oath in overview</span>
              <span>12:18</span>
            </li>{" "}
            <li>
              <span>series games ending</span>
              <span>9:10</span>
            </li>
          </ul>
        </div>
        <div className="video">
          <img src={videoPreview} alt="" />
          <h3>Every thing about virtual hosts</h3>
        </div>
      </div>
    </section>
  );
};

export default TopVideos;
