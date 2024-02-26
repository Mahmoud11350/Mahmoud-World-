import MainHeading from "../MainHeading/MainHeading";
import "./articles.css";
import Article from "./Article";
import catOne from "../assets/imgs/cat-01.jpg";
import catTwo from "../assets/imgs/cat-02.jpg";
import catThree from "../assets/imgs/cat-03.jpg";
import catFour from "../assets/imgs/cat-04.jpg";
import catFive from "../assets/imgs/cat-05.jpg";
import catSix from "../assets/imgs/cat-06.jpg";
import catSeven from "../assets/imgs/cat-07.jpg";
import catEight from "../assets/imgs/cat-08.jpg";
const Articles = () => {
  const imgs = [
    catOne,
    catTwo,
    catThree,
    catFour,
    catFive,
    catSix,
    catSeven,
    catEight,
  ];
  return (
    <>
      <section className="articles container">
        <MainHeading>Articles</MainHeading>
        <div className="article-box">
          {imgs.map((img) => {
            return <Article imgSrc={img} />;
          })}
        </div>
      </section>
    </>
  );
};
export default Articles;
