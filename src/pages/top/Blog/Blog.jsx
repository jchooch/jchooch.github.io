import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./Blog.scss";

function Blog() {
  const draftStyle = {
    color: "#2a52be", // "cerulean"
  };

  return (
    <>
      <Header thisTitle={"Blog"} />

      <main>
        {/* 
        HIDDEN
        - My Research Interests
          - Research Questions/Ideas
        - Some of My Favourite Images
        - Some of My Favourite Lyrics
        - On Poetry
        - Writing To Do
        - Memoranda: Cognitive Science
          - neuro, psych, ai/ml
        - Memoranda: Formal Sciences
          - Probability Distributions
        - Great Minds, Short Lived
          - So many great minds have died young. The list blows my mind, and stimulates my imagination.
          - But we can consume all their work.
        - The Interpretability Plan
          - How can AI models become interpretable? I am writing up an
              overview of the space, and my opinion on which directions are
              promising and which challenges are most substantial. To encompass
              sub- and supra-personal methods, science and engineering
              approaches.
        
        */}

        {/* <p>🧠, 🪜, 💡, 🎭, 🛶, 📚, 🪣, 🧱, #️⃣, 📄, 🚧, 🪣, 🗃️, 🔩, 🔧, 🔨</p> */}

        {/* <h2>📣 Essays</h2> */}
        <ul className="blog-list">
          <li className="blog-list__drafts">Drafts</li>
          <ul>
            <li style={draftStyle}>Invention and Perfection</li>
            {/* <li style={draftStyle}>An IAEA for AI</li> */}
          </ul>
          <li>
            2023-11-11: <Link to="humanism">Humanism</Link>
          </li>
        {/* </ul> */}
        {/* <br /> */}

        {/* <h2>🌲 Notebook</h2> */}
        {/* <ul className="blog-list"> */}
          <li className="blog-list--pinned">
            <Link to="/blog/recommendations">Recommendations</Link>
          </li>
          {/* <li>
            <Link to="/blog/papers">Paper Notes</Link>
          </li> */}
          <li>
            <Link to="/blog/bjj-resources">Brazilian Jiu-Jitsu Resources</Link>
          </li>
        </ul>
        <br />

        {/* <h2>💭 Journal</h2>
        <ul className="blog-list">
          <li className="blog-list">Example</li>
        </ul>
        <br /> */}

        {/* <h2>🖍️ Marginalia</h2>
        <ul className="blog-list">
          <li className="blog-list">Example</li>
        </ul>
        <br /> */}

        {/* <h2>🗒️ Tidbytes</h2>
        <ul className="blog-list">
          <li className="blog-list">Example</li>
        </ul>
        <br /> */}
      </main>

      <Footer />
    </>
  );
}

export default Blog;
