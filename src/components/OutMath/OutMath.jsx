import { MathJax } from "better-react-mathjax";
import "./OutMath.scss";

function OutMath({ eq }) {
    return (
        <MathJax className="out-math" inline={false}>
            {"$$ " + eq + " $$"}
        </MathJax>
    )
}

export default OutMath;