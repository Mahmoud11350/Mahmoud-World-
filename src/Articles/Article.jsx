const Article = ({ imgSrc }) => {
  return (
    <div className="article">
      <img src={imgSrc} alt="" />
      <h4>Test Title</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
      </p>
      <ul>
        <li>
          <a href="">read more</a>
        </li>
        <li>
          <a href="">
            <i class="fas fa-long-arrow-alt-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Article;
