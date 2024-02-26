import "./discount.css";
import discount from "../assets/imgs/discount.png";
const Discount = () => {
  return (
    <section className="discount">
      <div className="have-discount">
        <h3>We have discount</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          asperiores consectetur, recusandae ratione provident necessitatibus,
          cumque delectus commodi fuga praesentium beatae. Totam vel similique
          laborum dicta aperiam odit doloribus corporis.
        </p>
        <img src={discount} alt="" />
      </div>
      <div className="request-discount">
        <h3>Request a discount</h3>
        <input type="text" name="" id="" placeholder="your name" />
        <input type="text" name="" id="" placeholder="your email" />
        <input type="text" name="" id="" placeholder="your phone" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="tell us about your needs"
        ></textarea>
        <a href="#">send</a>
      </div>
    </section>
  );
};
export default Discount;
