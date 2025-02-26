import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { MathJaxContext } from "better-react-mathjax";
import InMath from "../../../components/InMath/InMath";
import OutMath from "../../../components/OutMath/OutMath";

function PaperTemplate() {
  const quoteStyle = {
    backgroundColor: "aliceblue",
    borderRadius: "1rem",
    padding: "0.2rem",
  };

  const meStyle = {
    color: "purple"
  }

  const questionStyle = {
    color: "crimson"
  }

  return (
    <MathJaxContext>
      <Header
        thisTitle={"Notes on Author (Year)"}
        returnDestination={"Paper Notes"}
      />

      <main>
        <h3 style={{ marginBottom: "0" }}>
          Author (<i>Venue</i>, Year)
        </h3>
        <h1>Title</h1>
        <p style={{ fontSize: "1.2rem" }}>
          [<a href="/papers/sanborn_chater_2016.pdf">PDF</a>,{" "}
          <a href="https://www.sciencedirect.com/science/article/pii/S1364661316301565">
            Journal
          </a>
          ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; key=[their thoughts,{" "}
          <span style={quoteStyle}>"their words"</span>,{" "}
          <span style={meStyle}>my thoughts</span>]
        </p>
        <br />
        <h4>Notes</h4>
        <ul>
          <li>
            Their thoughts.
          </li>
          <li style={meStyle}>
            My thoughts.
          </li>
          <li style={quoteStyle}>
            "Their words."
          </li>
        </ul>
        <br />
        <h4>Questions</h4>
        <ul style={questionStyle}>
          <li>What next?</li>
        </ul>
        <br />
        <ul>
          <li>
            We can reference a variable <InMath eq={"y"} /> inline or write an
            inline equation, such as <InMath eq={"y = x + 2"}></InMath>.
          </li>
          <li>
            We can also write a non-inline/block equation, such as:{" "}
            <OutMath
              eq={
                "V(x) = \\max_{a \\in \\Gamma (x)} \\{ F(x, a) + \\beta V(T(x, a)) \\}"
              }
            ></OutMath>
          </li>
        </ul>
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default PaperTemplate;
