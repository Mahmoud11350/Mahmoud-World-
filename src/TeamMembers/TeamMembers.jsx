import "./team-member.css";
import MainHeading from "../MainHeading/MainHeading";
import team1 from "../assets/imgs/team-01.jpg";
import team2 from "../assets/imgs/team-02.jpg";
import team3 from "../assets/imgs/team-03.jpg";
import team4 from "../assets/imgs/team-04.jpg";
import team5 from "../assets/imgs/team-05.png";
import team6 from "../assets/imgs/team-06.png";
import team7 from "../assets/imgs/team-07.jpg";
import team8 from "../assets/imgs/team-08.jpg";

const TeamMembers = () => {
  const teams = [team1, team2, team3, team4, team5, team6, team7, team8];
  return (
    <>
      <section className="team-member">
        <MainHeading>Team members</MainHeading>
        <div className="container">
          {teams.map((team) => {
            return (
              <div className="box">
                <div>
                  <div className="img">
                    <img src={team} alt="" />
                  </div>
                  <ul>
                    <li>
                      <i class="fab fa-facebook-f"></i>
                    </li>
                    <li>
                      <i class="fab fa-twitter"></i>
                    </li>
                    <li>
                      <i class="fab fa-linkedin-in"></i>
                    </li>
                    <li>
                      <i class="fab fa-youtube"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <h3>Name</h3>
                  <p>Simple Short Description</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default TeamMembers;
