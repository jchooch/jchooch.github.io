import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { MathJaxContext } from "better-react-mathjax";
import InMath from "../../../components/InMath/InMath";
import OutMath from "../../../components/OutMath/OutMath";

function PaperSanborn2016() {
  const quoteStyle = {
    backgroundColor: "aliceblue",
    borderRadius: "1rem",
    padding: "0.2rem",
  };

  const meStyle = {
    color: "purple"
  }

  const questionStyle = {
    color: "crimson"
  }

  return (
    <MathJaxContext>
      <Header
        thisTitle={"Notes on Sanborn & Chater (2016)"}
        returnDestination={"Paper Notes"}
      />

      <main>
        <h3 style={{ marginBottom: "0" }}>
          Sanborn & Chater (<i>Trends in Cognitive Sciences</i>, 2016)
        </h3>
        <h1>Bayesian Brains Without Probabilities</h1>
        <p style={{ fontSize: "1.2rem" }}>
          [<a href="/papers/sanborn2016.pdf">PDF</a>,{" "}
          <a href="https://www.sciencedirect.com/science/article/pii/S1364661316301565">
            Journal
          </a>
          ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; key=[their thoughts,{" "}
          <span style={quoteStyle}>"their words"</span>,{" "}
          <span style={meStyle}>my thoughts</span>]
        </p>
        <br />
        <h4>Notes</h4>
        <ul>
          <li>
            Bayesian models are widespread – intuitive physics, causal learning,
            perception, motor control, language – but humans are not good at
            probabilistic reasoning. How can this be?
          </li>
          <li>
            Answer: our Bayesian brains don't represent probabilities but act as
            Bayesian samplers. With finite samples, samplers will reproduce
            probabilistic reasoning errors, e.g. the unpacking effect, base-rate
            neglect, conjunction fallacy.{" "}
          </li>
          <ul>
            <li style={quoteStyle}>
              "... models that operate well in complex domains actually predict
              probabilistic reasoning errors in simple domains"
            </li>
            <li>Unpacking effect: "being a lawyer" believed less likely than "being a tax, corporate, patent, or other type of lawyer"</li>
            <li style={meStyle}>Base-rate neglect: "having disease given positive test" believed more likely than "not having disease given positive test", despite low disease incidence (low base-rate).</li>
            <li>Conjunction fallacy: "being a lawyer" believed less likely than "being a lawyer and well-educated".</li>
          </ul>
          <li>
            We know that Bayesian brains can't be analytically and exhaustively
            Bayesian, because even simple domains are intractable. Even small
            image spaces are too large.
          </li>
          <ul>
            <li style={meStyle}>
              First, it's intractable to represent detailed probability
              distributions.
            </li>
            <ul>
              <li style={quoteStyle}>
                "A crude indication of this is that the number of real numbers
                required to encode the joint probability distribution over{" "}
                <InMath eq={"n"} /> binary variables grows exponentially with{" "}
                <InMath eq={"2^n"} />, quickly exceeding the capacity of any
                imaginable physical storage system."
              </li>
            </ul>
            <li style={meStyle}>
              Second, it's intractable to marginalise over large hypothesis
              spaces.
            </li>
            <ul>
              <li style={meStyle}>
                Recall a discrete Bayesian update:{" "}
                <OutMath
                  eq={
                    "Pr(H_i|E) = \\frac{Pr(E|H_i) Pr(H_i)}{Pr(E)} = \\frac{Pr(E|H_i) Pr(H_i)}{\\sum_j Pr(E|H_j)Pr(H_j)}"
                  }
                />
                The likelihood of the evidence <InMath eq={"Pr(E)"} /> must be
                computed for each hypothesis in a partition (indexed by{" "}
                <InMath eq={"j"} />) of the hypothesis space.{" "}
              </li>
            </ul>
          </ul>
          <li style={quoteStyle}>
            "Yet Bayesian computational models often must represent vast data
            spaces, such as the space of possible images or speech waves; and
            effectively infinite hypothesis spaces, such as the space of
            possible scenes or sentences."
          </li>
          <li>
            Interesting table on properties of Bayesian samplers vs ideal
            Bayesians:
          </li>
          <ul>
            <li>
              <table>
                <tr>
                  <td
                    style={{
                      border: "1px solid grey",
                      padding: "0.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Property
                  </td>
                  <td
                    style={{
                      border: "1px solid grey",
                      padding: "0.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Ideal Bayesian
                  </td>
                  <td
                    style={{
                      border: "1px solid grey",
                      padding: "0.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Bayesian Sampler
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Strictly follows laws of probability
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Yes
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    No (only asymptotically)
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Represents all hypotheses simultaneously in the brain
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Yes
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    No
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Is easy to generate examples
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Yes (requires sampler)
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Yes
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Can find all likely hypotheses, even if surprising
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Yes
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    No
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Can evaluate relative probabilities of far-apart or
                    incommensurable hypotheses
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Yes
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    No
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Is more effective in "small" worlds compared to large
                    context-rich worlds
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Yes
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    No
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Produces stochastic and autocorrelated behaviour
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    No
                  </td>
                  <td style={{ border: "1px solid grey", padding: "0.5rem" }}>
                    Yes
                  </td>
                </tr>
              </table>
            </li>
          </ul>
          <li>
            Sampling is the answer to intractability. Sampling doesn't require
            the whole distribution, but can work just with relative, local
            probabilities. [HOW?]
          </li>
          <ul>
            <li>
              This matches our experience: if we are asked to think of the
              frequencies of words matching the pattern "-----n-" in a novel, we
              find it very difficult, but if we are told "nothing" matches, we
              can immediately see that "nothing" is more likely than "capping",
              and we can also then come up with other similar examples using
              "ing" like "sitting", "singing", etc. Thus we explore the
              distribution via sampling.
            </li>
            <li>
              This example comes from Kahneman & Tversky, and they described
              this as evidence of a human <i>availability heuristic</i>. This is
              similar to the sampling perspective: we test examples, but which
              examples are most easily generated can be biased. E.g. unpacking
              can be biasing.
            </li>
          </ul>
          <li>
            Since sampling can miss peaks of probability, it produces reasoning
            errors.
          </li>
          <ul>
            <li>
              Unpacking can be biasing, e.g. I can unpack "being a lawyer" as
              "being a tax, corporate, or other lawyer" or as "being a human
              rights, family, or other lawyer". Quite different parts of the
              distribution, perhaps.
            </li>
            <li>
              Conjunction can also be biasing, by making it easier to generate
              samples of high or low probability. E.g. in the "-----n-" case
              above: it is not clear what the relative probability of "-----n-"
              is, because swapping characters has an unclear effect. But the
              relative probability of "----ing" seems like it could be quite
              high, because swapping characters here seems to break the pattern.
              E.g. "----nng", "----iag", and "----idg" will not fit any word.
            </li>
            <ul>
              <li style={meStyle}>
                There are obviously many such common word fragments in English,
                e.g. "----ed", "---ate", "-ight", etc.
              </li>
            </ul>
            <li>
              Peaks can also be far apart, so sampling may get stuck in one part
              of the distribution or samples from two distant parts of a
              distribution may be incomparable. This problem cannot be solved
              via normalization, because normalization constants are often
              intractable (estimating the probability mass in unsampled regions
              is impossible). This problem of incomparability leads to base-rate
              neglect.
            </li>
            <ul>
              <li style={quoteStyle}>
                "Interestingly, accuracy is improved in base-rate neglect
                studies when a causal link is provided between the individual
                events [55,56], and experiencing outcomes together weakens
                conjunc- tion fallacies [57] – we can interpret these studies as
                providing a link that allows a Bayesian sampler to traverse
                between the two regions to combine probabilities meaningfully."
              </li>
            </ul>
          </ul>
          <li>
            Bayesian sampling explains (to some extent) both the{" "}
            <i>stochasticity</i> and <i>autocorrelation</i> typical of human
            memory, decision-making, perception, language, and motor control.
            E.g. in memory, autocorrelation can be seen in priming/"anchoring
            and adjustment".
          </li>
          <li style={quoteStyle}>
            "Sampling algorithms often have tuning parameters which are chosen
            to minimize autocorrelation and to better explore multiple peaks. Of
            course the best settings of these tuning parameters are not known in
            advance, but they can be learned by drawing ‘warm-up’ samples to get
            a sense of what the distribution is like. Interestingly, there is
            behavioral evidence for this. Participants given ‘clumpier’ reward
            distributions in a 2D computer foraging task later behaved as if
            ‘tuned’ to clumpier distributions in semantic space in a
            word-generations task. This suggests that there is a general
            sampling process that people adapt to the properties of the
            probability distributions that they face [78–80]."
          </li>
          <li style={quoteStyle}>
            "The sampling viewpoint also fits with current thinking in
            computational neuroscience, where an influential proposal is that
            transitions between brain states correspond to sampling from a
            probability distribution [26,27,81,82] or multiple samples are
            represented simultaneously (e.g., using particle filters [83–86])."
          </li>
          <li>
            Neural networks (e.g. Boltzmann machines, deep belief networks) can
            also be used for representing and sampling from probability
            distributions.
          </li>
          <ul>
            <li style={quoteStyle}>
              "However, the probabilities of configurations of output features
              are not known. Instead, samples from the total probability
              distribution are generated by randomly initializing the output
              variables; and conditional samples are generated by fixing some of
              the output variables to particular values and sampling the
              remaining variables. [...] As with human performance, these
              networks readily sample highly complex probability distributions,
              but can only calculate explicit probabilities with difficulty."
            </li>
          </ul>
          <li>Outstanding questions:</li>
          <ul>
            <li style={quoteStyle}>"Is sampling sequential or parallel?"</li>
            <li style={quoteStyle}>"How is sampling neurally implemented?"</li>
            <li style={quoteStyle}>"How are autocorrelated samples integrated?"</li>
            <li style={quoteStyle}>"Does autocorrelation of samples reduce over trials as the brain becomes tuned to particular tasks?"</li>
            <li style={quoteStyle}>"Are samples drawn from the correct complex probability distribution or is the distribution simplified first? Variational approximations can be used to simplify complex probability distributions at the cost of a loss of accuracy."</li>
            <li>How does sampling enable counterfactual/causal reasoning?</li>
            <li style={quoteStyle}>"How far can we simulate sampling in ‘other minds’ to infer what other people are thinking?"</li>
            <li style={quoteStyle}>"How far does sampling explain stochastic behavior in humans and non-human animals?"</li>
          </ul>
        </ul>
        <br />
        <h4>Questions</h4>
        <ul style={questionStyle}>
          <li>See Sanborn & Chater's questions above.</li>
          <li>How do humans generate samples? </li>
          <ul>
            <li>
              If samples are generated via the stochasticity of neurons, then
              what is the basis of the encoding of the probability
              distributions?
            </li>
            <li>
              I.e. what cellular/molecular mechanisms affect the stochasicity of
              neurons?
            </li>
            <li>
              And how are probability distributions represented across/within
              neurons?
            </li>
            <li>
              How do changes in individual neuronal stochasticity affect
              sampling from population-encoded distributions?
            </li>
          </ul>
          <li>How do humans evaluate relative probabilities?</li>
          <ul>
            <li>How is this implemented neurally?</li>
          </ul>
        </ul>
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default PaperSanborn2016;
