import { MathJax } from "better-react-mathjax";
import "./InMath.scss";

function InMath({ eq }) {
    return (
        <MathJax className="in-math" inline={true}>
            {"\\( " + eq + " \\)"}
        </MathJax>
    )
}

export default InMath;