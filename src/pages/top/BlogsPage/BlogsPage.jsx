import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

function BlogsPage() {
  const draftStyle = {
    color: "#2a52be", // "cerulean"
  };

  return (
    <>
      <Header thisTitle={"Blogs"} />

      <main>
        <p>
          Mostly a place for one-and-done essays, didactic or polemical. <br />
          For other posts, see <Link to="/notes">Notes</Link>.
        </p>
        <br />
        <ul className="blogs-list">
          <li className="blogs-list__month">Drafts</li>
          <ul>
            {/* <li>2023-09-19: <Link to="/blogs/invention-and-perfection">Art I: Invention and Perfection</Link></li> */}
            
            {/* <li style={draftStyle}>My Research Interests, Circa 2024</li>
            <ul>
              <li>
                To include neurobiology, cognitive science, AI... and
                philosophy?
              </li>
            </ul> */}

            {/* <li style={draftStyle}>The Interpretability Plan</li>
            <ul>
              <li>How can AI models become interpretable? I am writing up an overview of the space, and my opinion on which directions are promising and which challenges are most substantial. To encompass sub- and supra-personal methods, science and engineering approaches.</li>
            </ul> */}

            {/* <li style={draftStyle}>Great Minds, Short Lived</li>
            <ul>
              <li>
                So many great minds have died young. The list blows my mind, and
                stimulates my imagination.
              </li>
              <li>BUT WE CAN CONSUME ALL THEIR WORK! ADD THIS IN!</li>
            </ul> */}

            {/* <li><Link to="/blogs/great-minds-short-lived">Great Minds, Short Lived</Link></li> */}

            <li style={draftStyle}>Art III: Power and Popularity</li>

            {/* <ul>
              <li>
                Must popular art be great art? What obligation does art have to
                be loved?
              </li>
            </ul> */}

            <li style={draftStyle}>Art II: Beauty and Axiology</li>

            {/* <ul>
              <li>
                What is beauty, and what is the place of aesthetics in axiology?
                Some of my opinions.
              </li>
            </ul> */}

            <li style={draftStyle}>Art I: Invention and Perfection</li>

          </ul>

          {/* <li className="blogs-list__month">December 2023</li>
          <ul>
            <li>
              2023-12-05: <Link to="love-poetry">Why I Love Poetry</Link>
            </li>
          </ul> */}

          <li>
            2023-11-11: <Link to="humanism">Humanism</Link>
          </li>
          <li>
            2023-04-17: <Link to="/blogs/template">Template</Link>
          </li>
          <ul>
            {/* <li>2023-09-10: <Link to="/blogs/writing-to-do">Writing To Do</Link></li> */}
          </ul>
        </ul>
      </main>

      <Footer />
    </>
  );
}

export default BlogsPage;
