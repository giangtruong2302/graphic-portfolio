import "./Home.scss";
import profile from "../../assets/G.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="details">
        <span className="intro">Hello, I'm</span>

        <div className="name">
          <div>
            <h1 className="txt">DY</h1>
            <h1 className="txt">N</h1>
          </div>

          <h1 className="txt lg">O</h1>

          <div className="dev">
            FULL-STACK <b>DEVELOPER</b>
          </div>
        </div>
      </div>

      <div className="profile-img">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Home;
