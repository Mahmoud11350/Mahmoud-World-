import "./main-heading.css";
const MainHeading = ({ children }) => {
  return (
    <div className="main-heading">
      <h2>{children}</h2>
    </div>
  );
};

export default MainHeading;
