import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import StatsBox from "../../components/StatsBox/StatsBox";
import AsideBox from "../../components/AsideBox/AsideBox";
import { MathJaxContext, MathJax } from "better-react-mathjax";

function Template() {
  return (
    <MathJaxContext>
      <Header thisTitle={"Example Blog Title"} returnDestination={"Blog"} />

      <StatsBox
        words={"~134"}
        time={"~0.5"}
        status={
          "Complete. I'm quite confident this template will be agreeable to use for a long time."
        }
        tags={["template", "example"]}
      />

      <main>
        <h2>Table of Contents</h2>
        <ul>
          <li>Introduction</li>
          <li>Argument</li>
          <li>Conclusion</li>
          <li>Appendix: Maths Examples</li>
        </ul>
        <h2>Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
          sint architecto alias earum, aperiam ipsa, dignissimos atque dolore
          repellendus, excepturi hic repellat! Provident perferendis et mollitia
          odit libero numquam?
        </p>
        <h2>Argument</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
          corrupti suscipit saepe sequi quam commodi explicabo quas rem numquam
          molestiae. Architecto est provident eaque, at iste voluptate nihil
          laboriosam commodi.
        </p>
        <AsideBox title={"An inessential qualification for those especially interested."}>
          <p><i>This aside clarifies a special condition of the foregoing argument.</i></p>
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptates ducimus sequi voluptatibus corporis, ex iure dolorem odio id dicta maiores quaerat! Aliquam voluptatibus voluptate aperiam dicta laborum, reprehenderit vitae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptates ducimus sequi voluptatibus corporis, ex iure dolorem odio id dicta maiores quaerat! Aliquam voluptatibus voluptate aperiam dicta laborum, reprehenderit vitae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptates ducimus sequi voluptatibus corporis, ex iure dolorem odio id dicta maiores quaerat! Aliquam voluptatibus voluptate aperiam dicta laborum, reprehenderit vitae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptates ducimus sequi voluptatibus corporis, ex iure dolorem odio id dicta maiores quaerat! Aliquam voluptatibus voluptate aperiam dicta laborum, reprehenderit vitae?</p>
        </AsideBox>
        <h2>Conclusion</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          esse illo sed velit in cum doloremque necessitatibus aliquid itaque
          maiores, fugiat labore, unde facere vitae rerum expedita quia modi
          dignissimos.
        </p>
        <h2>Appendix: Maths Examples</h2>
        <ul>
          <li>
            We can reference a variable <MathJax className="inline-eq" inline={true}>{"\\( y \\)"}</MathJax> inline or write an inline equation, such as{" "}
            <MathJax className="inline-eq" inline={true}>{"\\( y = x + 2 \\)"}</MathJax>.
          </li>
          <li>
            We can also write a non-inline/block equation, such as:{" "}
            <MathJax className="block-eq" inline={false}>{"$$ V(x) = \\max_{a \\in \\Gamma (x)} \\{ F(x, a) + \\beta V(T(x, a)) \\} $$"}</MathJax>
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

export default Template;
