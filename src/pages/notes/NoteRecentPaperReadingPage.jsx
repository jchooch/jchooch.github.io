import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import { useState } from "react";

function NoteRecentPaperReadingPage() {
  const ulStyle = {
    listStyle: "none",
  };
  const moStyle = {
    margin: "2rem 0 0 0",
  };
  const liStyle = {
    margin: "0.5rem 0",
    border: "0.1px solid grey",
    padding: "0.5rem",
  };
  const [open, setOpen] = useState(0);

  const stars = (numStars) => {
    if (numStars == 1) {
      return <span style={{ color: "grey" }}>★</span>;
    }
    if (numStars == 2) {
      return <span style={{ color: "lightgrey" }}>★★</span>;
    }
    if (numStars == 3) {
      return <span style={{ color: "gold" }}>★★★</span>;
    }
    return "★?";
  };

  const handleCommentsClick = (readingIndex) => {
    if (open == readingIndex) {
      setOpen(0);
    } else {
      setOpen(readingIndex);
    }
  };

  const createComments = (readingIndex, comments) => {
    if (open == readingIndex) {
      return (
        <>
          <span
            style={{ color: "blue" }}
            onClick={() => handleCommentsClick(readingIndex)}
          >
            hide
          </span>
          <br />
          <ul
            style={{ marginTop: "0.5rem" }}
            // onClick={() => handleCommentsClick(readingIndex)}
          >
            {comments.map((comment) => (
              <li style={{ color: "grey" }}>{comment}</li>
            ))}
          </ul>
        </>
      );
    } else {
      return (
        <span
          style={{ color: "blue" }}
          onClick={() => handleCommentsClick(readingIndex)}
        >
          comments
        </span>
      );
    }
  };

  return (
    <MathJaxContext>
      <Header thisTitle={"Recent Paper Reading"} returnDestination={"Notes"} />

      <main>
        <p>
          Always incomplete, but I do my best. Not everything is peer-reviewed.
          These are just papers of one sort or another which are academic or
          rigorous in style.
        </p>
        <br />
        <p>
          (This is perhaps a silly way to record this information as it
          precludes lengthier mathematical notes and is not very nicely
          formatted, but it will do for now.)
        </p>
        <br />
        <ul style={ulStyle}>
          <li
            style={{
              ...liStyle,
              border: "1px solid red",
              margin: "0 0 2rem 0",
            }}
          >
            <b>dd-mm-yyyy:</b> <a href="">Author (Year)</a> | Title |{" "}
            <i>Venue</i> | {stars(1)}/{stars(2)}/{stars(3)} |{" "}
            {createComments(10000, ["This is an example comment"])}
          </li>
          <li style={moStyle}>
            —— <b>November 2023</b> ——
          </li>
          <li style={liStyle}>
            <a href="https://arxiv.org/pdf/2309.13638.pdf">
              McCoy et al. (2023)
            </a>{" "}
            | Embers of Autoregression: Understanding Large Language
Models Through the Problem They are Trained to Solve |{" "}
            <i>Preprint (arXiv)</i> | {stars("2")} | {createComments(5, ["I would have liked to see more tests than the relatively few that were proposed, although it's a difficult thing to come up with such tests. Still, much was shown about the reasoning of LLMs with just a few: shift ciphers, reversal, Pig Latin, etc.", "Kind of impressive in its simplicity. I hope others continue this sort of work, taking the reasoning of LLMs seriously and subjecting them to cognitive psychological analysis. Although part of me does think that, since we know their architecture and training paradigm, we should be able to deduce more about their cognitive abilities without this empirical work... maybe I'm naive!"])}
          </li>
          <li style={liStyle}>
            <a href="">Golan et al. (2023)</a> | Deep neural networks are not a
            single hypothesis but a language for expressing computational
            hypotheses | <i>Preprint (PsyArXiv)</i> | {stars("2")} |{" "}
            {createComments(4, ["Very well put."])}
          </li>
          <li style={liStyle}>
            <a href="https://github.com/julianmichael/debate/blob/2023-nyu-experiments/Debate_Helps_Supervise_Unreliable_Experts.pdf">
              Michael et al. (2023)
            </a>{" "}
            | Debate Helps Supervise Unreliable Experts |{" "}
            <i>Preprint (Github)</i> | {stars("2")}
          </li>
          <li style={liStyle}>
            <a href="https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.0030229&type=printable">
              Gu & Bourne (2007)
            </a>{" "}
            | Ten Simple Rules for Graduate Students |{" "}
            <i>PLoS Computational Biology</i> | {stars(2)}
          </li>
          <li style={moStyle}>
            —— <b>October 2023</b> ——
          </li>
          <li style={liStyle}>
            {/* <b>25-10-2023:</b>{" "} */}
            <a href="https://transformer-circuits.pub/2023/interpretability-dreams/index.html#macroscopic-microscopic">
              Olah (2023)
            </a>{" "}
            | Interpretability Dreams |{" "}
            <i>Anthropic Transformer Circuits Thread</i> | {stars(2)} |{" "}
            {createComments(3, [
              "I wish the big picture was fleshed out more. What makes a MechInterp method good and how could such methods be use for control and prediction?",
            ])}
          </li>
          <li style={liStyle}>
            {/* <b>25-10-2023:</b>{" "} */}
            <a href="https://transformer-circuits.pub/2023/monosemantic-features">
              Bricken et al. (2023)
            </a>{" "}
            | Towards Monosemanticity: Decomposing Language Models with
            Dictionary Learning | <i>Anthropic Transformer Circuits Thread</i> |{" "}
            {stars(3)} |{" "}
            {createComments(2, [
              "Didactically beautiful as always from Anthropic.",
              "Superposition has seemed like a really big problem, but this is a huge step in solving it, even if it seems compute-intensive. I see superposition sandwiched between two even harder problems. The first is sort of prior to superposition, and it's the problem that lots of mechanistic intepretability is based on stimulus-driven response, and is therefore data dependent. This is obviously a problem, because we have to know which parts of the stimulus space to explore and interpret, which may not help protect us against real-world applications. And then there's a problem after you solve superposition, which is: how do you take a bunch of concepts and use them to make predictions, exert control, and infer emergent epistemics? There are many ways to construe a bunch of activated concepts as, say, a proposition, or a promise on one behaviour or another. Finding out how to use a concept dictionary to actually control and predict model behaviour is another substantive problem on its own. But I'm really excited to see how all of these problems are tackled (and to slowly catch up to how people have been solving them thus far, because I'm always behind).",
            ])}
          </li>
          <li style={liStyle}>
            {/* <b>25-10-2023:</b>{" "} */}
            <a href="https://cogsci.northwestern.edu/events/2015/BotvinickBraver15.pdf">
              Botvinick & Braver (2015)
            </a>{" "}
            | Motivation and Cognitive Control: From Behavior to Neural
            Mechanism | <i>Annual Review of Psychology</i> | {stars(2)}
          </li>
          <li style={liStyle}>
            {/* <b>24-10-2023:</b>{" "} */}
            <a href="https://core.ac.uk/download/pdf/82728884.pdf">
              Häusser (2001)
            </a>{" "}
            | Synaptic function: Dendritic democracy | <i>Current Biology</i> |
            {stars(2)} |{" "}
            {createComments(1, [
              "I was referred to the concept of this paper by a professor in undergrad, but I never read anything on it. He told us about active dendrites, I told him I wasn't surprised, and he said 'check out dendritic democracy'.",
              "I always thought this must be the case. If signals exponentially decay, then distal dendritic inputs would be essentially irrelevant, but then dendrites would in general be a huge metabolic waste. Even if interesting computations were done locally, information from them would probably never end up affecting axon potentials. So that's why I've long thought there has to be regenerative activity of some sort in any neuron with large dendrites.",
              "Hausser says there are three ways to achieve dendritic democracy:",
              "(1) distal dendrites could have more voltage-gated channels than proximal dendrites,",
              "(2) distal synapses could be stronger than proximal synapses, due to either pre- (NT quanta) or post- (receptor density) synaptic amplifications,",
              "(3) distal inputs may be more active, or more synchronised (with other distal inputs or with the target), or make more synapses with the target.",
              "Some of these seem very unlikely to me. E.g. (2) seems very unlikely in its presynaptic form, as that would require presynaptic neurons to always know where on their target neuron they are making synapses. This may sometimes be the case, but it seems like an overly-demanding scheme. Also, the version of (3) which requires neurons to make many distal synapses just seems metabolically wasteful. In general, I favour mechanisms which are totally intrinsic to the target neuron. Otherwise we have to postulate additional information being shared between neurons about distances, morphology, number of contacts, or what have you.",
            ])}
          </li>
        </ul>
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default NoteRecentPaperReadingPage;
