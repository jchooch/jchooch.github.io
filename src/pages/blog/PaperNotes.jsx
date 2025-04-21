import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import { useState } from "react";
import { Link } from "react-router-dom";
import InMath from "../../components/InMath/InMath";
import doubleDescentFigure from "../../assets/blogs/doubleDescentFigure.png";

function PaperNotes() {
  const categoryContainerStyle = {
    display: "flex",
  };
  const categoriesContainerStyle = {
    color: "grey",
    border: "0.5px solid green",
    borderRadius: "1rem",
    padding: "1rem",
    display: "flex",
    flexWrap: "wrap",
    lineHeight: "2rem",
    justifyContent: "space-around",
  };
  const categoryCheckboxStyle = {
    marginRight: "0.5rem",
    marginLeft: "1rem",
    accentColor: "green",
  };

  const [filters, setFilters] = useState([]);

  const handleCheckboxClick = (event) => {
    console.log(filters);
    console.log(event.target.name);
    if (filters.includes(event.target.name)) {
      setFilters(filters.filter((elem) => elem != event.target.name));
      console.log(filters.filter((elem) => elem != event.target.name));
    } else {
      setFilters([...filters, event.target.name]);
      console.log([...filters, event.target.name]);
    }
    return;
  };

  const papers = [
    // {
    //   authors: "Whittington & Bogacz",
    //   venue: "Trends in Cognitive Sciences",
    //   year: "2019",
    //   title: "Theories of Error Back-Propagation in the Brain",
    //   link: "",
    //   categories: ["psych/neuro"],
    // },
    {
      authors: "Cushman & Paul",
      venue: "Oxford Handbook of Moral Psychology",
      year: "2022",
      title: "Are desires interdependent?",
      link: "",
      categories: ["psych/neuro", "phil"],
    },
    {
      authors: "Greenberg",
      venue: "Partisan Review",
      year: "1955",
      title: '"American-Type" Painting',
      link: "https://monoskop.org/images/c/ce/Greenberg_Clement_1955_1961_American-Type_Painting.pdf",
      categories: ["art/lit"],
      brief_notes: "TODO",
    },
    {
      authors: "Loewenstein",
      venue: "Kyklos",
      year: "1999",
      title:
        "Because It Is There: The Challenge of Mountaineering... for Utility Theory",
      link: "",
      categories: ["psych/neuro", "phil"],
    },
    {
      authors: "Pouget et al.",
      venue: "Nature Neuroscience",
      year: "2013",
      title: "Probabilistic Brains: Knowns and Unknowns",
      link: "/blog/paper/pouget-2013",
      categories: ["psych/neuro"],
    },
    {
      authors: "Doersch",
      venue: "arXiv",
      year: "2016",
      title: "Tutorial on Variational Autoencoders",
      link: "",
      categories: ["cs/ai"],
    },
    {
      authors: "Hubinger",
      venue: "arXiv",
      year: "2020",
      title: "An Overview of 11 Proposals for Building Safe Advanced AI",
      link: "",
      categories: ["cs/ai"],
    },
    {
      authors: "Gershman",
      venue: "Journal of Neuroscience",
      year: "2018",
      title:
        "The Successor Representation: Its Computational Logic and Neural Substrates",
      link: "",
      categories: ["psych/neuro"],
    },
    {
      authors: "Zhang et al.",
      venue: "ICLR",
      year: "2017",
      title: "Understanding Deep Learning Requires Rethinking Generalization",
      link: "",
      categories: ["cs/ai"],
    },
    {
      authors: "Ramaswamy",
      venue: "bioRxiv",
      year: "2019",
      title: "An Algorithmic Barrier to Neural Circuit Understanding",
      link: "",
      categories: ["cs/ai"],
    },
    {
      authors: "Lipton",
      venue: "ICML",
      year: "2016",
      title: "The Mythos of Model Interpretability",
      link: "",
      categories: ["cs/ai"],
    },
    {
      authors: "He et al.",
      venue: "CVPR",
      year: "2015",
      title: "Deep Residual Learning for Image Recognition",
      link: "",
      categories: ["cs/ai"],
    },
    {
      authors: "Forrester",
      venue: "Analysis",
      year: "2024",
      title: "✅ The Desire Machine",
      link: "",
      categories: ["phil"],
    },
    {
      authors: "Jacob",
      venue: "Science",
      year: "1977",
      title: "✅ Evolution and Tinkering",
      link: "https://web.mit.edu/~tkonkle/www/BrainEvolution/Meeting9/Jacob%201977%20Science.pdf",
      categories: ["bio/med"],
      brief_notes: "TODO",
    },
    {
      authors: "Guo et al.",
      venue: "ICML",
      year: "2017",
      title: "✅ On Calibration of Modern Neural Networks",
      link: "",
      categories: ["cs/ai"],
    },
    {
      authors: "Forrester",
      venue: "PhilPapers",
      year: "2023",
      title: "✅ Practical Reasons for Pragmatism",
      link: "",
      categories: ["phil"],
      brief_notes: "TODO",
    },
    {
      authors: "Corbi",
      venue: "Bollettino Filosofico",
      year: "2016",
      title: "The Original Position and the Rationality of Levi's Shame",
      link: "https://philarchive.org/rec/ECOTOP",
      categories: ["phil"],
      brief_notes: "TODO",
    },
    {
      authors: "Wolf",
      venue: "The Journal of Philosophy",
      year: "1982",
      title: "✅ Moral Saints",
      link: "https://www.jstor.org/stable/2026228",
      categories: ["phil"],
      brief_notes:
        "I didn't find it enormously persuasive, but I did find it stimulating. Something I hadn't thought of before: we know that it is very difficult to be a moral saint practically speaking, but if we are glad to be constructed such that we cannot easily become single-minded moral saints, then it should be possible to argue, via a sort of inverse enkratic principle, that we are not actually in favour of moral sainthood. Indeed, Wolf does almost make this argument when she says that the existence of psychological dependencies on quotidian pleasures may be a 'happy accident', but for me this would be a more interesting subject for analysis, and I would have liked to read about the second-order problem more than the first-order problem. The question will still remain whether our uncertain (or inconsistent) approval of moral sainthood is tantamount to moral uncertainty, uncertainty about the world, akrasia, lack of moral knowledge, substantive moral-philosophical issues, or a mixture of multiple factors. I think a mixture is likely, but that there is plenty of akrasia and uncertainty about the world, perhpaps well enough to explain our discomfort with moral sainthood (i.e. it may be shameful squeamishness). When I think of 'moral saints', I think of Larissa MacFarquhar's beautiful book 'Strangers Drowning'.",
    },
    // {
    //   authors: "Golan et al.",
    //   venue: "psyArXiv",
    //   year: "2023",
    //   title:
    //     "Deep neural networks are not a single hypothesis but a language for expressing computational hypotheses",
    //   link: "",
    //   categories: ["cs/ai", "psych/neuro"],
    // },
    // {
    //   authors: "Michael et al.",
    //   venue: "Github",
    //   year: "2023",
    //   title: "Debate Helps Supervise Unreliable Experts",
    //   link: "",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Bricken et al.",
    //   venue: "Anthropic Transformer Circuits Thread",
    //   year: "2023",
    //   title:
    //     "Towards Monosemanticity: Decomposing Language Models with Dictionary Learning",
    //   link: "",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Olah",
    //   venue: "Anthropic Transformer Circuits Thread",
    //   year: "2023",
    //   title: "Interpretability Dreams",
    //   link: "",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Botvinick & Braver",
    //   venue: "Annual Review of Psychology",
    //   year: "2015",
    //   title:
    //     "Motivation and Cognitive Control: From Behavior to Neural Mechanism",
    //   link: "",
    //   categories: ["psych/neuro", "⭐"],
    // },
    // {
    //   authors: "Häusser",
    //   venue: "Current Biology",
    //   year: "2001",
    //   title: "Synaptic function: Dendritic democracy",
    //   link: "",
    //   categories: ["psych/neuro"],
    // },
    // {
    //   authors: "McCoy et al.",
    //   venue: "arXiv",
    //   year: "2023",
    //   title:
    //     "Embers of Autoregression: Understanding Large Language Models Through the Problem They are Trained to Solve",
    //   link: "",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Tomov et al.",
    //   venue: "Neuron",
    //   year: "2023",
    //   title: "The neural architecture of theory-based reinforcement learning",
    //   link: "",
    //   categories: ["psych/neuro"],
    // },
    // {
    //   authors: "Gershman",
    //   venue: "Neurons, Behavior, Data Analysis, and Theory",
    //   year: "2019",
    //   title: "What does the free energy principle tell us about the brain?",
    //   link: "",
    //   categories: ["psych/neuro"],
    // },
    // {
    //   authors: "Cobb & Douglas",
    //   venue: "American Economic Review",
    //   year: "1928",
    //   title: "A Theory of Production",
    //   link: "",
    //   categories: ["society"],
    // },
    // {
    //   authors: "Krafft & Griffiths",
    //   venue: "CogSci",
    //   year: "2018",
    //   title: "Levels of Analysis in Computational Social Science",
    //   link: "",
    //   categories: ["society", "cs/ai"],
    // },
    // {
    //   authors: "Anderson",
    //   venue: "Science",
    //   year: "1972",
    //   title: "More Is Different",
    //   link: "",
    //   categories: ["math/phys", "phil"],
    // },
    // {
    //   authors: "Atkin",
    //   venue: "Stanford Encyclopedia of Philosophy",
    //   year: "2022",
    //   title: "Peirce’s Theory of Signs",
    //   link: "",
    //   categories: ["phil"],
    // },
    // {
    //   authors: "Grossman & Stiglitz",
    //   venue: "American Economic Review",
    //   year: "1980",
    //   title: "On the Impossibility of Informationally Efficient Markets",
    //   link: "",
    //   categories: ["society"],
    // },
    // {
    //   authors: "Russell",
    //   venue: "Mind",
    //   year: "1905",
    //   title: "On Denoting",
    //   link: "",
    //   categories: ["phil"],
    // },
    // {
    //   authors: "Forrester",
    //   venue: "Utilitas",
    //   year: "2023",
    //   title: "Concurrent Awareness Desire Satisfactionism",
    //   link: "",
    //   categories: ["phil"],
    // },
    // {
    //   authors: "Mumford",
    //   venue: "Biological Cybernetics",
    //   year: "1991",
    //   title:
    //     "On the Computational Architecture of the Neocortex II: The Role of Cortico-Cortical Loops",
    //   link: "",
    //   categories: ["psych/neuro"],
    // },
    // {
    //   authors: "Mumford",
    //   venue: "Biological Cybernetics",
    //   year: "1991",
    //   title:
    //     "On the Computational Architecture of the Neocortex I: The Role of the Thalamo-Cortical Loop",
    //   link: "",
    //   categories: ["psych/neuro"],
    // },
    // {
    //   authors: "Bechtel",
    //   venue: "Systems Biology: Philosophical Foundations",
    //   year: "2007",
    //   title: "Biological Mechanisms: Organized to Maintain Autonomy",
    //   link: "",
    //   categories: ["phil", "bio/med"],
    // },
    // {
    //   authors: "Schaffer",
    //   venue: "Metametaphysics: New Essays on the Foundations of Ontology",
    //   year: "2009",
    //   title: "On What Grounds What",
    //   link: "",
    //   categories: ["phil"],
    // },
    // {
    //   authors: "Quine",
    //   venue: "The Review of Metaphysics",
    //   year: "1948",
    //   title: "On What There Is",
    //   link: "",
    //   categories: ["phil"],
    // },
    // {
    //   authors: "Barto",
    //   venue: "Models of Information Processing in the Basal Ganglia",
    //   year: "1995",
    //   title: "Adaptive Critics and the Basal Ganglia",
    //   link: "",
    //   categories: ["psych/neuro"],
    // },
    // {
    //   authors: "Krueger",
    //   venue: "American Economic Review",
    //   year: "1974",
    //   title: "The Political Economy of the Rent-Seeking Society",
    //   link: "",
    //   categories: ["society"],
    // },
    // {
    //   authors: "Baddeley",
    //   venue: "Nature Reviews Neuroscience",
    //   year: "2003",
    //   title: "Working Memory: Looking Back and Looking Forward",
    //   link: "",
    //   categories: ["psych/neuro"],
    // },
    // {
    //   authors: "Delétang et al.",
    //   venue: "ICLR",
    //   year: "2023",
    //   title: "Neural Networks and the Chomsky Hierarchy",
    //   link: "",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Wang et al.",
    //   venue: "arXiv",
    //   year: "2022",
    //   title:
    //     "Interpretability in the Wild: a Circuit for Indirect Object Identification in GPT-2 Small",
    //   link: "",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Marr",
    //   venue: "Working paper",
    //   year: "1976",
    //   title:
    //     "From Computational Theory to Psychology and Neurophysiology – A Case Study from Vision",
    //   link: "",
    //   categories: ["psych/neuro"],
    // },
    // {
    //   authors: "Hayek",
    //   venue: "American Economic Review",
    //   year: "1945",
    //   title: "The Use of Knowledge in Society",
    //   link: "",
    //   categories: ["society"],
    // },
    // {
    //   authors: "Meng et al.",
    //   venue: "NeurIPS",
    //   year: "2022",
    //   title: "Locating and Editing Factual Associations in GPT",
    //   link: "",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Aitchison & Lengyel",
    //   venue: "Current Opinion in Neurobiology",
    //   year: "2017",
    //   title:
    //     "With or Without You: Predictive Coding and Bayesian Inference in the Brain",
    //   link: "https://core.ac.uk/download/pdf/146463121.pdf",
    //   categories: ["psych/neuro"],
    // },
    // {
    //   authors: "Newell et al.",
    //   venue: "Psychological Review",
    //   year: "1958",
    //   title: "Elements of a Theory of Human Problem Solving",
    //   link: "https://cse.buffalo.edu/~rapaport/Papers/Papers.by.Others/newell-etal58-EltsThHProbSlvg-PsyRev.pdf",
    //   categories: ["psych/neuro"],
    // },
    // {
    //   authors: "Chomsky",
    //   venue: "Language",
    //   year: "1959",
    //   title: "A Review of B. F. Skinner's Verbal Behavior",
    //   link: "",
    //   categories: ["psych/neuro"],
    // },
    // {
    //   authors: "Gould & Lewontin",
    //   venue: "Proceedings of the Royal Society B",
    //   year: "1979",
    //   title:
    //     "The Spandrels of San Marco and the Panglossian Paradigm: A Critique of the Adaptationist Programme",
    //   link: "",
    //   categories: ["bio/med"],
    // },
    // {
    //   authors: "Glorot et al.",
    //   venue: "AISTATS",
    //   year: "2011",
    //   title: "Deep Sparse Rectifier Neural Networks",
    //   link: "",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Goodfellow et al.",
    //   venue: "ICML",
    //   year: "2013",
    //   title: "Maxout Networks",
    //   link: "",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Ioffe & Szegedy",
    //   venue: "ICML",
    //   year: "2015",
    //   title:
    //     "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift",
    //   link: "",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Greenblatt et al.",
    //   venue: "arXiv",
    //   year: "2023",
    //   title: "AI Control: Improving Safety Despite Intentional Subversion",
    //   link: "",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Singhal et al.",
    //   venue: "OPT @ NeurIPS",
    //   year: "2023",
    //   title: "How to Guess a Gradient",
    //   link: "https://openreview.net/pdf/42420daae4ab6979c79f149fd1aed1f1a08205b2.pdf",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Hase et al.",
    //   venue: "NeurIPS",
    //   year: "2023",
    //   title:
    //     "Does Localization Inform Editing? Surprising Differences in Causality-Based Localization vs. Knowledge Editing in Language Models",
    //   link: "",
    //   categories: ["cs/ai"],
    // },

    // {
    //   authors: "Lillicrap & Kording",
    //   venue: "arXiv",
    //   year: "2019",
    //   title: "What does it mean to understand a neural network?",
    //   link: "/blog/paper/lillicrap-2019",
    //   categories: ["cs/ai"],
    // },
    // {
    //   authors: "Price",
    //   venue: "Stanford Encyclopedia of Philosophy",
    //   year: "2019",
    //   title: "Richard Mervyn Hare",
    //   link: "",
    //   categories: ["phil"],
    // },
    // {
    //   authors: "Khan et al.",
    //   venue: "ICML",
    //   year: "2024",
    //   title:
    //     "Debating with More Persuasive LLMs Leads to More Truthful Answers",
    //   link: "",
    //   categories: ["cs/ai"],
    // },
    {
      authors: "Sanborn & Chater",
      venue: "Trends in Cognitive Sciences",
      year: "2016",
      title: "✅ Bayesian Brains Without Probabilities",
      link: "/blog/paper/sanborn-2016",
      categories: ["psych/neuro", "💡"],
    },
  ];

  return (
    <MathJaxContext>
      <Header thisTitle={"Paper Notes"} returnDestination={"Blog"} />

      <main>
        <p>
          An incomplete, messy, roughly-reverse-chronological selection of notes
          on papers read. Categorisation is sometimes arbitrary.
        </p>
        <br />
        <p>
          I may add a star (&#11088;) if I liked the paper. I may add a
          lightbulb (&#128161;) if I think my notes are actually
          interesting/helpful, rather than just perfunctory remarks on whether
          they missed an Oxford comma. In general, these notes are produced for
          my own clarity of thought and ease-of-reference (believe it or not!).
        </p>
        <br />
        <p>
          Not all these papers will be properly published or peer-reviewed. I
          may notate reports or preprints or <s>lecture</s> ransom notes or
          whatever takes my fancy.
        </p>
        <br />
        <p>
          <b>PUBLISH WHEN I DONE:</b>
        </p>
        <ul>
          <li>Sanborn Bayes Wthout Probabilities</li>
          <li>Pouget Probabilistic Brains</li>
          <li>Gershman Successor Representation</li>
          <li>Niv RL in the Brain</li>
          <li>Lipton Mythos</li>
          <li>Doersch VAEs</li>
          <li>He Residual Nets</li>
          <li>Guo Calibration in NNs</li>
          <li>Hubinger 11 Proposals</li>
          <li>Zhang Rethinking Generalization</li>
          <li>Belkin Reconciling Modern ML</li>
          <li>Nakkiran Deep Double Descent</li>
          <li>Greenberg American-Type Painting</li>
          <li>Schrader Notes on Film Noir</li>
          <li>Danto The End of Art</li>
          <li>Loewenstein Mountaineering</li>
        </ul>
        <br />
        <br />
        <br />
        <h2>Belkin et al.</h2>
        <ul>
          <li>
            "The bias-variance trade-off implies that a model should balance
            underfitting and overfitting: Rich enough to express underlying
            structure in data and simple enough to avoid fitting spurious
            patterns."
          </li>
          <li>
            The classical thinking is concerned with finding the "sweet spot"
            between underfitting and overfitting. The control of the function
            class capacity may be explicit, via the choice of{" "}
            <InMath eq={"\\mathcal{H}"}></InMath> (e.g. picking the neural
            network architecture), or it may be implicit, using regularization
            (e.g. early stopping)."
          </li>
          <li>
            But modern ML routinely uses large neural nets with huge function
            class capacity and near-perfect fit to training data, and these
            networks often generalise well. This violates the classical wisdom.
          </li>
          <li>Classical wisdom is Fig 1A. New practical wisdom is Fig 1B.</li>
          <img
            style={{ marginLeft: "-5%", width: "110%" }}
            src={doubleDescentFigure}
            alt="doubleDescent"
          />
          <li>
            "Although the learned predictors obtained at the interpolation
            threshold typically have high risk, we show that increasing the
            function class capacity beyond this point leads to decreasing risk,
            typically going below the risk achieved at the sweet spot in the
            "classical" regime."
          </li>
          <li>"</li>
        </ul>
        <br />
        <br />
        <br />
        <div style={categoriesContainerStyle}>
          {[
            "cs/ai",
            "bio/med",
            "society",
            "phil",
            "psych/neuro",
            "art/lit",
            "math/phys",
            "⭐",
            "💡",
          ].map((cat) => (
            <div style={categoryContainerStyle}>
              <input
                type="checkbox"
                name={cat}
                style={categoryCheckboxStyle}
                onChange={(e) => handleCheckboxClick(e)}
              />
              {cat == "⭐" ? (
                <label htmlFor="">{cat} (really liked)</label>
              ) : cat == "💡" ? (
                <label htmlFor="">{cat} (well notated)</label>
              ) : (
                <label htmlFor="">{cat}</label>
              )}
            </div>
          ))}
        </div>
        <br />
        <ul style={{ listStyleType: "none" }}>
          <li
            style={{
              border: "1px solid black",
              borderRadius: "0.5rem",
              margin: "0.5rem 0",
              padding: "0.4rem",
            }}
          >
            <p>Author(s) (Venue, Year)</p>
            <b>
              <p style={{ color: "royalblue" }}>
                Example with Notes Page{" "}
                <span style={{ color: "black" }}>/</span>
              </p>
            </b>
            <b>
              <p style={{ color: "crimson" }}>Example with Brief Notes</p>
            </b>
            <p style={{ fontSize: "1.1rem" }}>Example brief notes.</p>
          </li>
          {papers.map((paper) => {
            if (
              paper.categories.some((elem) => filters.includes(elem)) ||
              filters.length == 0
            ) {
              return (
                <li
                  style={{
                    border: "0.1px solid lightgrey",
                    borderRadius: "0.5rem",
                    margin: "0.5rem 0",
                    padding: "0.4rem",
                  }}
                >
                  <p>
                    {paper.categories.includes("⭐") && "⭐"}
                    {paper.categories.includes("💡") && "💡"} {paper.authors} (
                    {paper.venue}, {paper.year})
                  </p>
                  {paper.link && !paper.brief_notes ? (
                    <b>
                      <Link to={paper.link} style={{ color: "royalblue" }}>
                        {paper.title}
                      </Link>
                    </b>
                  ) : (
                    <b>
                      <p style={{ color: "crimson" }}>{paper.title}</p>
                    </b>
                  )}
                  {paper.brief_notes && (
                    <p style={{ fontSize: "1.1rem" }}>
                      {paper.link && (
                        <span>
                          [<a href={paper.link}>URL</a>]
                        </span>
                      )}{" "}
                      {paper.brief_notes}
                    </p>
                  )}
                </li>
              );
            }
          })}
        </ul>
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default PaperNotes;
