import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import MetaBox from "../../../components/MetaBox/MetaBox";
import { HashLink } from "react-router-hash-link";
import "./NoteCognitiveScienceMemorandaPage.scss";

function NoteCognitiveScienceMemorandaPage() {
  return (
    <MathJaxContext>
      <Header
        thisTitle={"Memoranda: Cognitive Science"}
        returnDestination={"Notes"}
      />

      <main>
        <MetaBox>
          <p>
            Short technical memoranda which I think are relevant to the general
            project of cognitive science: understanding effective cognition and
            intelligent behaviour. Encompasses psychology, neuroscience, AI/ML,
            ...{" "}
          </p>
        </MetaBox>

        <h2>Table of Contents</h2>
        <p>
          <i>Roughly, from biology to silicon:</i>
        </p>
        <ol type="1">
          <li>
            (So-Called) <HashLink to="#neuro">Neuroscience</HashLink> (Mostly)
          </li>
          {/* <ol type="a">
            <li>Testing</li>
            <ol type="i">
                <li></li>
            </ol>
            <li>Testing</li>
          </ol> */}
          <li>
            (So-Called) <HashLink to="#psych">Psychology</HashLink> (Mostly)
          </li>
          <li>
            (So-Called) <HashLink to="#cogsci">Cognitive Science</HashLink>{" "}
            (Mostly)
          </li>
          <li>
            (So-Called) <HashLink to="#ai">Artificial Intelligence</HashLink>{" "}
            (Mostly)
          </li>
          <li>
            Appendix: <HashLink to="#researchers">Researchers</HashLink>
          </li>
          <li>
            Appendix: <HashLink to="#references">References</HashLink>
          </li>
        </ol>

        <h1 id="neuro">Neuroscience</h1>
        <p>...</p>

        <h1 id="psych">Psychology</h1>
        <p>...</p>

        <h1 id="cogsci">Cognitive Science</h1>
        <p>...</p>

        <h1 id="ai">Artificial Intelligence</h1>
        <p>...</p>

        <h1 id="researchers">Researchers</h1>
        <p>...</p>

        <h1 id="references">References</h1>
        <ul>
          <li>...</li>
        </ul>

        <br />
        <p>
          <b>Maths examples:</b>
        </p>
        <ul>
          <li>
            We can reference a variable{" "}
            <MathJax className="inline-eq" inline={true}>
              {"\\( y \\)"}
            </MathJax>{" "}
            inline or write an inline equation, such as{" "}
            <MathJax className="inline-eq" inline={true}>
              {"\\( y = x + 2 \\)"}
            </MathJax>
            .
          </li>
          <li>
            We can also write a non-inline/block equation, such as:{" "}
            <MathJax className="block-eq" inline={false}>
              {
                "$$ V(x) = \\max_{a \\in \\Gamma (x)} \\{ F(x, a) + \\beta V(T(x, a)) \\} $$"
              }
            </MathJax>
          </li>
          <ul>
            <li>
              (See global.scss for styling of the block-equation className, as
              applied above.)
            </li>
          </ul>
        </ul>
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default NoteCognitiveScienceMemorandaPage;
