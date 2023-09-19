import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import StatsBox from "../../components/StatsBox/StatsBox";
import AsideBox from "../../components/AsideBox/AsideBox";
import { MathJaxContext, MathJax } from "better-react-mathjax";

function BlogBareTemplatePage() {
  return (
    <MathJaxContext>
      <Header thisTitle={"Bare Blog Template"} returnDestination={"Blogs"} />

      <StatsBox
        words={"?"}
        time={"?"}
        status={
          ""
        }
        tags={[]}
      />

      <main>
        {/* <h2>Table of Contents</h2>
        <ul>
          <li>Introduction</li>
          <li>Argument</li>
          <li>Conclusion</li>
          <li>Appendix: Maths Examples</li>
        </ul> */}
        <h2>Section</h2>
        <p>Text</p>
        <AsideBox title={"Example aside."}>
          <p><i>This aside clarifies a special condition of the foregoing argument.</i></p>
          <br />
          <p>Text</p>
        </AsideBox>        
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default BlogBareTemplatePage;
