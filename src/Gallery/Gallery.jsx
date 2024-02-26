import MainHeading from "../MainHeading/MainHeading";
import galeryOne from "../assets/imgs/gallery-01.png";
import galeryTwo from "../assets/imgs/gallery-02.png";
import galeryThree from "../assets/imgs/gallery-03.jpg";
import galeryFour from "../assets/imgs/gallery-04.png";
import galeryFive from "../assets/imgs/gallery-05.jpg";
import galerySix from "../assets/imgs/gallery-06.png";
import "./gallery.css";
const Gallery = () => {
  const imgs = [
    galeryOne,
    galeryTwo,
    galeryThree,
    galeryFour,
    galeryFive,
    galerySix,
  ];
  return (
    <section className="gallery">
      <MainHeading>Gallery</MainHeading>
      <div className="container">
        {imgs.map((img) => {
          return (
            <div>
              <div>
                <img src={img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
