import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { MathJaxContext } from "better-react-mathjax";
import InMath from "../../../components/InMath/InMath";
import OutMath from "../../../components/OutMath/OutMath";

function PaperLillicrap2019() {
  const quoteStyle = {
    backgroundColor: "aliceblue",
    borderRadius: "1rem",
    padding: "0.2rem",
  };

  const meStyle = {
    backgroundColor: "lavender",
    borderRadius: "1rem",
    padding: "0.2rem",
  };

  const questionStyle = {
    color: "crimson",
  };

  return (
    <MathJaxContext>
      <Header
        thisTitle={"Notes on Lillicrap & Kording (2019)"}
        returnDestination={"Paper Notes"}
      />

      <main>
        <h3 style={{ marginBottom: "0" }}>
          Lillicrap & Kording (<i>Arxiv</i>, 2019)
        </h3>
        <h1>What does it mean to understand a neural network?</h1>
        <p style={{ fontSize: "1.2rem" }}>
          [<a href="/papers/lillicrap2019.pdf">PDF</a>,{" "}
          <a href="https://arxiv.org/abs/1907.06374">arXiv:1907.06374</a>]
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; key=[their thoughts,{" "}
          <span style={quoteStyle}>"their words"</span>,{" "}
          <span style={meStyle}>my thoughts</span>]
        </p>
        <br />
        <ul>
          <li>
            We can understand deep learning code more easily than we can
            understand the weights it causes.
          </li>
          <li>
            Perhaps analagously it will be easier to understand biological
            learning and development rules than to understand biological tuning,
            connections.
          </li>
          <li style={meStyle}>
            L&K don't explain how we can know what rules are operative if not
            via parameters. Possible answer: we hypothesise rules based on
            normative considerations then check consistency with parameters.
            This fits with what, e.g., Gershman has said regarding "the innocent
            eye" in neuroscience. What if many parameter permutations are
            consistent with a hypothesised rule?
          </li>
          <li style={quoteStyle}>
            "The learning rules in artificial systems are compactly expressed,
            in the sense that they can be written in a few pages of high-level
            (e.g. Pytorch) code. And at least to us practitioners of machine
            learning it feels like having such a compact description is
            necessary for meaningful understanding."
          </li>
          <li>
            Compression of learnt models, e.g. via distillation, often has a
            limit and decreases performance.
          </li>
          <ul>
            <li style={quoteStyle}>
              " From distillation techniques we know that networks trained on
              ImageNet, a popular 2012 machine learning benchmark that requires
              the classification of natural images, cannot readily be compressed
              to fewer than about 100k free parameters [13, 20, 32] (though see
              [35]). We want to emphasize that these compressions, even of the
              ImageNet case, are not in any meaningful sense human
              understandable. Even the famous and somewhat trivial networks that
              solve the MNIST character recognition problem can not readily be
              compressed into a format that humans find readable [8]."
            </li>
          </ul>
          <li>
            To understand networks, scientists primarily study optimization
            phenomena: gradients, training dynamics, histograms of unit
            activations/derivatives, etc. But such inspection usually aids
            engineering without producing new understanding.
          </li>
          <li style={meStyle}>
            A prima facie reason to expect AI (or human) knowledge to be
            hard-to-compress: it is already the result of a learning process
            which is a compression process. So the better the learning process
            the harder further compression will be...? Counterpoints: language,
            communication, declarative learning, deduction.
          </li>
          <li>
            A compact mid-level model of neurobiology is sometimes wished for,
            akin to the statistical mechanical models of large physical systems.
            But such models are primarily for homogeneous systems with
            exchangeable parts and short memory. In contrast, neurons are not
            likely interchangeable, are computationally diverse, and may have
            long memory.
          </li>
          <li>
            Real brains may have some properties that make them <i>easier</i> to
            understand than ANNs: strong modularity, approximate linearity, high
            noise.
          </li>
          <li>Focus on principles, rather than parameters.</li>
          <li style={meStyle}>
            I guess this paper is basically arguing against MechInterp...? It
            implies we should focus on theory-informed study of objectives,
            learning rules, architecture, etc. Whether this seems reasonable
            seems to depend a lot on what understanding consists in, or in what
            service we desire it. Do we want understanding for control? For
            prediction? For active learning? For the scientific study of
            modelled phenomena? For more focused AI research?
          </li>
          <li style={meStyle}>I'm interested in the relationship between modularity and interpretability. MechInterp work on transformer MLP interpretability suggests simple modularity is not a requirement for significant feature extraction and interpretation.</li>
        </ul>
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default PaperLillicrap2019;
