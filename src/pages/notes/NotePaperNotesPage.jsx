import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { MathJaxContext } from "better-react-mathjax";
import InMath from "../../components/InMath/InMath";
import OutMath from "../../components/OutMath/OutMath";
import MetaBox from "../../components/MetaBox/MetaBox";
import PaperNote from "../../components/PaperNote/PaperNote";

function NotePaperNotesPage() {
  const myPurple = "#B10DC9";
  const myGreen = "#2ECC40";
  const myRed = "#FF4136";
  const myBlue = "#0074D9";

  return (
    <MathJaxContext>
      <Header thisTitle={"Paper Notes"} returnDestination={"Notes"} />

      <main>
        <MetaBox>
          <p>
            <b>Key:</b> Target quotations/paraphrases/claims;{" "}
            <span style={{ color: myPurple }}>
              additional context/connections
            </span>
            ; <span style={{ color: myGreen }}>my comments/thoughts/ideas</span>
            ;{" "}
            <span style={{ color: myRed }}>my confusions/questions/todos</span>;{" "}
            <span style={{ color: myBlue }}>references to check out</span>; ...{" "}
          </p>
        </MetaBox>
        <PaperNote
          date="24-10-2023"
          authors="Häusser"
          year="2001"
          venue="Current Biology"
          title="Synaptic function: Dendritic democracy"
        >
          <ul>
            <li>This is an explication of a core point of the paper.</li>
            <li style={{ color: myRed }}>
              This is an example confusion/question.
            </li>
            <li style={{ color: myPurple }}>
              This is some additional context to remember.
            </li>
            <li style={{ color: myBlue }}>
              This is a refernece to check: Author et al. (Journal, 2023).
            </li>
            <li style={{ color: myGreen }}>
              This is an example comment/thought.
            </li>
          </ul>
        </PaperNote>
        <PaperNote
          authors="Joe et al."
          year="2024"
          venue="Journal of Rubbish"
          title="My first paper"
        >
          <ul>
            <li>This is an example</li>
            <li>This is an example</li>
            <li>This is an example</li>
          </ul>
        </PaperNote>
        <br />
        <p>
          <b>Maths examples:</b>
        </p>
        <ul>
          <li>
            We can reference a variable <InMath eq={"y"} /> inline or write an
            inline equation, such as <InMath eq={"y = x + 2"} />.
          </li>
          <li>
            We can also write a non-inline/block equation, such as:{" "}
            <OutMath
              eq={
                "V(x) = \\max_{a \\in \\Gamma (x)} \\{ F(x, a) + \\beta V(T(x, a)) \\}"
              }
            />
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

export default NotePaperNotesPage;
