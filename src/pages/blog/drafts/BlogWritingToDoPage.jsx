import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import StatsBox from "../../../components/StatsBox/StatsBox";
import AsideBox from "../../../components/AsideBox/AsideBox";
import { MathJaxContext, MathJax } from "better-react-mathjax";

function BlogWritingToDoPage() {
  return (
    <MathJaxContext>
      <Header thisTitle={"Writing To Do"} returnDestination={"Blog"} />

      <StatsBox
        words={"~331"}
        time={"~1"}
        status={
          "A bit silly."
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
        <p>I'm one of those (not so rare, I think) foolish, hopeful, naive delusionals who is always thinking:</p>  
        <br />
        <p>“Gosh, now there’s yet another topic I should add to my list of <i>essays I would like to write when I find the time</i>. I sure do hope I find my way around to it soon, before I completely forget these dewy, mediocre sparks of spontaneous shower-genius on the subject! But before I can begin on that topic, I must finish all the other essays I’ve already begun, but which are not <i>quite</i> yet ready for publication in <i>The Pantheon</i>, where I picture them snugly nestled between Chaucer and Confucius.”</p>
        <br />
        <p>Yes, well, because my surname ends in “C”, you see. Oh, ha, my mistake! You wanted to know why I pictured myself in <i>The Pantheon</i> rather than <i>The Poubelle</i>? Yes, I suppose you would.</p>
        <br />
        <p>This problem is quite a persistent one, so it requires a cleverly engineered solution. It seems to be the aspiration of many bloggers to <i>just put things out there</i>. I’ve always agreed with this sentiment, and thought it applicable in my own context, but for some reason it hasn’t been sufficient to force me. I don't know why.</p>
        <br />
        <p>I'm generally reluctant to publish anything because every topic seems to deserve a book-length treatment (or a book series accompanied by a speaking tour). Consistent with this, I'm often turned off by the brevity of Tweet threads and perfunctory blog posts, even though some such short writings are masterfully concise and information-dense. But I'm trying to be less neurotic, and I often notice that my notes are quite lengthy, often in full sentences, and very occasionally interesting (at least to me). </p>
        <br />
        <p>So... I have decided to publish some blogs here, promising no more than scattered comments on things I would love — at some point far in the future but definitely-not-now — to write about properly. Hopefully this low bar will get me going and I can try to surpass it later!</p>
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default BlogWritingToDoPage;
