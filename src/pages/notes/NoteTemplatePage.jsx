import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { MathJaxContext, MathJax } from "better-react-mathjax";

function NoteTemplatePage() {
    return (
        <MathJaxContext>
            <Header thisTitle={"Example Note Title"} returnDestination={"Notes"}/>

            <main>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt, numquam voluptates molestiae fuga corporis accusamus odio veniam fugit quidem. Enim eaque asperiores officia iste atque quibusdam architecto dolores magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse sint nam minima. Repellat, laboriosam corrupti rem iure placeat delectus esse fugit sequi illo, sapiente exercitationem dolores ratione. Quis, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tenetur deleniti, possimus culpa hic unde debitis nesciunt deserunt sint accusamus! Quaerat voluptatem distinctio odit voluptatibus, laboriosam quia neque ea voluptatum?</p>
                <br />
                <p><b>Maths examples:</b></p>
                <ul>
                    <li>We can write an inline equation, such as <MathJax inline={true}>{"\\( y = x + 2 \\)"}</MathJax>.</li>
                    <li>We can also write a non-inline/block equation, such as: <MathJax className="block-equation">{"\\( y = x + 2 \\)"}</MathJax></li>
                    <ul>
                        <li>(See global.scss for styling of the block-equation className, as applied above.)</li>
                    </ul>
                </ul>
            </main>

            <Footer />
        </MathJaxContext>
    );
}

export default NoteTemplatePage;