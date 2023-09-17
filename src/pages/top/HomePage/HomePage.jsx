import { Link } from "react-router-dom";
import homePhoto from "../../../assets/joe.jpeg";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <Header thisTitle={""} />

      <main className="home-main">
        <img src={homePhoto} class="home-main__photo" alt="joe" />
        <div className="home-main__welcome">
          <p>Hi, there. You must be lost! Me too...</p>
          <br />
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/blogs">Blogs</Link>
          </p>
          <p>
            <Link to="/notes">Notes</Link>
          </p>
          
          {/*   <p>
                  <Link to="/tracking">Tracking</Link>
                </p>
                <p>
                  <a href="">Research</a>
                </p>
                <p>
                  <a href="">Publications</a>
                </p> */}
          <br />
          <p>This site is new, and a work-in-progress.</p>
        </div>
      </main>

      <Footer thisPage={"home"} />
    </>
  );
}

export default HomePage;
