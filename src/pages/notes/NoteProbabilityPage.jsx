import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { MathJaxContext, MathJax } from "better-react-mathjax";

function NoteProbabilityPage() {
  return (
    <MathJaxContext>
      <Header
        thisTitle={"Probability Distributions"}
        returnDestination={"Notes"}
      />

      <main>
        <h2>Discrete</h2>
        <ul>
            <li>Bernoulli</li>
            <ul>
                <li>PMF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
                <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            </ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <h2>Continuous</h2>
        <ul>
          <li>Beta</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Beta-binomial</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Binomial</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Boltzmann</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Cauchy</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Chi</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Chi-squared</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Dirichlet</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Exponential</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>F</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Gamma</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Gaussian</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Geometric</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Gibbs</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Gumbel</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Hypergeometric</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Laplace</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Logarithmic</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Logistic</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Logit-normal</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Multinomial</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Multivariate normal</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Multivariate t</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Pareto</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Poisson</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Rademacher</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Student's t</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Uniform</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Von Mises</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Weibull</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Yule-Simon</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Zeta</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
          <li>Zipf</li>
          <ul>
            <li>PDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
            <li>CDF: <MathJax inline={true}>{"\\( \\)"}</MathJax></li>
          </ul>
        </ul>
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default NoteProbabilityPage;
