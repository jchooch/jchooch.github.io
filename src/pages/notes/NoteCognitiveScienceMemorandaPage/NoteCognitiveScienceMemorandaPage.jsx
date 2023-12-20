import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import MetaBox from "../../../components/MetaBox/MetaBox";
import { HashLink } from "react-router-hash-link";
import "./NoteCognitiveScienceMemorandaPage.scss";

function NoteCognitiveScienceMemorandaPage() {
  return (
    <MathJaxContext>
      <Header
        thisTitle={"Memoranda: Cognitive Science"}
        returnDestination={"Notes"}
      />

      <main>
        <MetaBox>
          <p>
            Short technical memoranda which I think are relevant to the general
            project of cognitive science: understanding effective cognition and
            intelligent behaviour. Encompasses psychology, neuroscience, AI/ML,
            ...{" "}
          </p>
        </MetaBox>

        <h2>Table of Contents</h2>
        <p>
          <i>Roughly, from biology to silicon:</i>
        </p>
        <ol type="1">
          <li>
            (So-Called) <HashLink to="#neuro">Neuroscience</HashLink> (Mostly)
          </li>
          <li>
            (So-Called) <HashLink to="#psych">Psychology</HashLink> (Mostly)
          </li>
          <li>
            (So-Called) <HashLink to="#cogsci">Cognitive Science</HashLink>{" "}
            (Mostly)
          </li>
          <li>
            (So-Called) <HashLink to="#ai">Artificial Intelligence</HashLink>{" "}
            (Mostly)
          </li>
          <li>
            Appendix: <HashLink to="#researchers">Researchers</HashLink>
          </li>
          <li>
            Appendix: <HashLink to="#references">References</HashLink>
          </li>
        </ol>

        <div className="horizontal-line"></div>
        <h1 id="neuro">Neuroscience</h1>
        <h3>— General Neurobiology —</h3>
        <h4>Major neuroactive molecules</h4>
        <ul>
          <li>Excitatory NTs</li>
          <ul>
            <li>Glutamate (Glu)</li>
            <li>Acetylcholine (ACh)</li>
            <li>Histamine</li>
            <li>Dopamine (DA)</li>
            <li>Norepinephrine (NE) / Noradrenaline (NAd)</li>
            <li>Epinephrine (Epi) / Adrenaline (Ad)</li>
          </ul>
          <li>Inhibitory NTs</li>
          <ul>
            <li>Gamma-aminobutyric acid (GABA)</li>
            <li>Seretonin (5-HT)</li>
            <li>Dopamine (DA)</li>
          </ul>
          <li>Neuromodulators</li>
          <ul>
            <li>Dopamine (DA)</li>
            <li>Serotonin (5-HT)</li>
            <li>Acetylcholine (ACh)</li>
            <li>Histamine</li>
            <li>Norepinephrine (NE)</li>
          </ul>
          <li>Neurohormones</li>
          <ul>
            <li>Oxytocin</li>
            <li>Vasopressin / Anti-diuretic hormone</li>
            <li>Dopamine (DA)</li>
            <li>Norepinephrine (NE) / Noradrenaline (NAd)</li>
            <li>Epinephrine (Epi) / Adrenaline (Ad)</li>
            <li>Cortisol? (adrenal but not a neurosecretion?)</li>
          </ul>
          <li>Retrograde NTs</li>
          <ul>
            <li>Anandamide</li>
            <li>Nitric oxide</li>
          </ul>
        </ul>
        <br />
        <h3>— Neural Data Science —</h3>
        <ul>
          <li>
            General Linear Model: a special case of the Generalized Linear Model
            where the nonlinearity (aka inverse link function) is the identity
            function. General LM is truly linear; it's a compact multivariate
            linear regression. N.B. These are <i>sometimes</i> called GLMs, but
            that term's normally reserved for Generalized LMs, which are more
            common in stats/neuro. General LMs are sometimes used in psych/fMRI.
          </li>
          <ul>
            <li>
              Gaussian:{" "}
              <MathJax className="inline-eq" inline={true}>
                {"\\( y = \\vec{\\theta} \\cdot \\vec{x} + \\varepsilon \\)"}
              </MathJax>
            </li>
            <li>
              Poisson:{" "}
              <MathJax className="inline-eq" inline={true}>
                {"\\( y \\sim Pois(\\vec{\\theta} \\cdot \\vec{x}) \\)"}
              </MathJax>
            </li>
            <li>
              So you always do some linear dimensionality reduction (with{" "}
              <MathJax className="inline-eq" inline={true}>
                {"\\( \\vec{\\theta} \\)"}
              </MathJax>
              ), then add noise. This is like an LNP, except you have an
              identity function instead of the nonlinearity.
            </li>
          </ul>
          <li>Generalized Linear Model (GLM): this is often nonlinear.</li>
          <ul>
            <li>
              Gaussian:{" "}
              <MathJax className="inline-eq" inline={true}>
                {"\\( y = f(\\vec{\\theta} \\cdot \\vec{x}) + \\varepsilon \\)"}
              </MathJax>
            </li>
            <li>
              Poisson:{" "}
              <MathJax className="inline-eq" inline={true}>
                {"\\( y \\sim Pois(f(\\vec{\\theta} \\cdot \\vec{x})) \\)"}
              </MathJax>
            </li>
            <ul>
              <li>
                To be fed into{" "}
                <MathJax className="inline-eq" inline={true}>
                  {"\\( Pois(\\cdot) \\)"}
                </MathJax>
                ,{" "}
                <MathJax className="inline-eq" inline={true}>
                  {"\\( f \\)"}
                </MathJax>{" "}
                should be positive.
              </li>
            </ul>
            <li>
              <MathJax className="inline-eq" inline={true}>
                {"\\( f^{-1} \\)"}
              </MathJax>{" "}
              is called the link function, so{" "}
              <MathJax className="inline-eq" inline={true}>
                {"\\( f \\)"}
              </MathJax>{" "}
              is the inverse link function. The stochastic function (e.g.{" "}
              <MathJax className="inline-eq" inline={true}>
                {"\\( Pois(\\cdot) \\)"}
              </MathJax>
              ) is also called the distribution function.
            </li>
          </ul>
          <li>
            <MathJax className="inline-eq" inline={true}>
              {"\\( \\Delta F / F \\)"}
            </MathJax>
          </li>
          <li>
            Maximum likelihood estimate for linear-Gaussain GLM:{" "}
            <MathJax className="inline-eq" inline={true}>
              {"\\( \\hat{k} = (X^T X)^{-1} X^T Y \\)"}
            </MathJax>
          </li>
          <ul>
            <li>
              Where{" "}
              <MathJax className="inline-eq" inline={true}>
                {"\\( Y = X \\vec{k} + \\text{noise} \\)"}
              </MathJax>
            </li>
          </ul>
          <li>
            Encoding model: probability of neural activity given stimulus:{" "}
            <MathJax className="inline-eq" inline={true}>
              {"\\( P(y|x) \\)"}
            </MathJax>
            .
          </li>
          <li>
            Latent encoding model: encoding model in terms of a latent variable
            rather than a stimulus variable:{" "}
            <MathJax className="inline-eq" inline={true}>
              {"\\( P(y|x)P(x) \\)"}
            </MathJax>
            .
          </li>
          <li>
            Latent dynamical encoding model: encoding model in terms of a{" "}
            <i>dynamical</i> latent variable rather than a stimulus variable:{" "}
            <MathJax className="inline-eq" inline={true}>
              {"\\( P(y_t|x_t)P(x_t|\\textbf{x}_{t-1, ..., 0}) \\)"}
            </MathJax>
          </li>
          <li>
            Inevitably have to make tradeoffs between ease of fitting and
            tractability versus richness or flexibility.
          </li>
          <li>Simple neuron model: Linear Poisson model:</li>
          <ul>
            <li>
              Spike rate = parameter x stimulus:{" "}
              <MathJax className="inline-eq" inline={true}>
                {"\\( \\lambda = \\theta \\cdot x \\)"}
              </MathJax>
            </li>
            <li>
              <MathJax className="inline-eq" inline={true}>
                {
                  "\\( \\lambda = \\mu = \\sigma^2 \\; \\text{of Poisson neuron} \\)"
                }
              </MathJax>
            </li>
            <li>
              <MathJax className="inline-eq" inline={true}>
                {"\\( y \\sim Pois(\\lambda) \\)"}
              </MathJax>
            </li>
            <li>Encoding model: <MathJax className="inline-eq" inline={true}>
                {"\\( P(y|x,\\theta) = \\frac{1}{y!} \\lambda^y e^{-\\lambda} = \\frac{1}{y!} (\\theta x)^y e^{-(\\theta x)} \\)"}
            </MathJax></li>
            <li>MLE: given observed data <MathJax className="inline-eq" inline={true}>
                {"\\( (Y, X) \\)"}
            </MathJax>, find <MathJax className="inline-eq" inline={true}>
                {"\\( \\theta \\)"}
            </MathJax> that maximizes <MathJax className="inline-eq" inline={true}>
                {"\\( P(Y|X,\\theta) \\)"}
            </MathJax>:</li>
            <ul>
              <li>Assuming conditional independence across trials: <MathJax className="inline-eq" inline={true}>
                {"\\( P(Y | X, \\theta) = \\prod_{i=1}^N \\overbrace{P(y_i|x_i, \\theta)}^{\\text{single-trial prob}} \\)"}
            </MathJax></li>
              <li>We call <MathJax className="inline-eq" inline={true}>
                {"\\( P(Y|X,\\theta) \\)"}
            </MathJax> a likelihood when it's a function of <MathJax className="inline-eq" inline={true}>
                {"\\( \\theta \\)"}
            </MathJax>. (If we are considering the distribution over different Y with a fixed theta, then we call it the encoding distribution or something like that.)</li>
            </ul>
            <li><MathJax className="inline-eq" inline={true}>
                {"\\( \\Delta F / F \\)"}
            </MathJax></li>
          </ul>
          <li></li>
        </ul>
        <br />
        <h3>— Cognitive Neuroscience —</h3>
        <br />
        <div className="horizontal-line"></div>
        <h1 id="psych">Psychology</h1>
        <h3>— Cognitive Psychology —</h3>
        <h3>— Developmental Psychology —</h3>
        <h3>— Clinical Psychology —</h3>
        <div className="horizontal-line"></div>
        <h1 id="cogsci">Cognitive Science</h1>
        <p>...</p>
        <div className="horizontal-line"></div>
        <h1 id="ai">Artificial Intelligence</h1>
        <p>...</p>
        <div className="horizontal-line"></div>
        <h1 id="researchers">Appendix: Researchers</h1>
        <p>...</p>
        <div className="horizontal-line"></div>
        <h1 id="references">Appendix: References</h1>
        <ul>
          <li>...</li>
        </ul>

        <br />
        <p>
          <b>MathJax examples:</b>
        </p>
        <ul>
          <li>
            <MathJax inline={true}>{"\\( y = mx + c \\)"}</MathJax>
          </li>
          <li>
            <MathJax>
              {
                "\\[ V(x) = \\max_{a \\in \\Gamma (x)} \\{ F(x, a) + \\beta V(T(x, a)) \\} \\]"
              }
            </MathJax>
          </li>
          <li>
            <MathJax className="inline-eq" inline={true}>
              {"\\( y = x + 2 \\)"}
            </MathJax>
          </li>
          <li>
            <MathJax className="block-eq" inline={false}>
              {
                "$$ V(x) = \\max_{a \\in \\Gamma (x)} \\{ F(x, a) + \\beta V(T(x, a)) \\} $$"
              }
            </MathJax>
          </li>
        </ul>
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default NoteCognitiveScienceMemorandaPage;
