import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import StatsBox from "../../../components/StatsBox/StatsBox";
import AsideBox from "../../../components/AsideBox/AsideBox";
import { MathJaxContext, MathJax } from "better-react-mathjax";

function AnIAEAForAI() {
  return (
    <MathJaxContext>
      <Header thisTitle={"An IAEA For AI"} returnDestination={"Blog"} />

      {/* <StatsBox
        words={"?"}
        time={"?"}
        status={
          ""
        }
        tags={[]}
      /> */}

      <main>
        {/* <h2>Table of Contents</h2>
        <ul>
          <li>Introduction</li>
          <li>Argument</li>
          <li>Conclusion</li>
          <li>Appendix: Maths Examples</li>
        </ul> */}
        <h2>1 – Introduction</h2>
        <h2>2 – IAEA</h2>
        <h2>3 – AI</h2>
        <h2>4 – Conclusion</h2>
        <AsideBox title={"Example aside."}>
          <p><i>This aside clarifies a special condition of the foregoing argument.</i></p>
        </AsideBox>        
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default AnIAEAForAI;
