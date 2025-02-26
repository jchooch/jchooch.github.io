import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import StatsBox from "../../../components/StatsBox/StatsBox";

function BlogInventionPerfection() {
  return (
    <>
      <Header
        thisTitle={"Art I: Invention and Perfection"}
        returnDestination={"Blog"}
      />

      <StatsBox words={"?"} time={"?"} status={""} tags={[]} />

      <main>
        {/* <h2>Table of Contents</h2>
        <ul>
          <li>Introduction</li>
          <li>Argument</li>
          <li>Conclusion</li>
          <li>Appendix: Maths Examples</li>
        </ul> */}
        {/* <h2>Section</h2> */}
        <ul>
          <li>
            Art can be great by being inventive or by being perfective. These
            are rather different.
          </li>
        </ul>
        {/* <AsideBox title={"Example aside."}>
          <p>
            <i>
              This aside clarifies a special condition of the foregoing
              argument.
            </i>
          </p>
          <br />
          <p>Text</p>
        </AsideBox> */}
      </main>

      <Footer />
    </>
  );
}

export default BlogInventionPerfection;
