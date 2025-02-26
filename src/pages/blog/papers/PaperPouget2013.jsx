import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { MathJaxContext } from "better-react-mathjax";
import InMath from "../../../components/InMath/InMath";
import OutMath from "../../../components/OutMath/OutMath";

function PaperPouget2013() {
  const quoteStyle = {
    // backgroundColor: "aliceblue",
    backgroundColor: "whitesmoke",
    borderRadius: "1rem",
    padding: "0.2rem",
    color: "darkBlue",
  };

  const meStyle = {
    backgroundColor: "whitesmoke",
    color: "purple",
  };

  const questionStyle = {
    color: "crimson",
  };

  return (
    <MathJaxContext>
      <Header
        thisTitle={"Notes on Pouget et al. (2013)"}
        returnDestination={"Paper Notes"}
      />

      <main>
        <h3 style={{ marginBottom: "0" }}>
          Pouget et al. (<i>Nature Neuroscience</i>, 2013)
        </h3>
        <h1>Probabilistic Brains: Knowns and Unknowns</h1>
        <p style={{ fontSize: "1.2rem" }}>
          [<a href="/papers/pouget2013.pdf">PDF</a>,{" "}
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
          <li>Their thoughts.</li>
          <li style={meStyle}>My thoughts.</li>
          <li style={quoteStyle}>"Their words."</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>
            "Mach and Helmholtz were among the first to apply [the idea of
            probabilistic inference] to sensory perception, but strong
            experimental evidence in support of this notion has emerged only
            over the last two decades. These experiments have shown that human
            behavior is highly consistent with probabilistic reasoning not only
            in the sensory domain, but also in the motor and cognitive domains."
          </li>
          <li>
            There is an increasing number of neural theories of probabilistic
            inference.
          </li>
          <li>E.g. in multisensory integration:</li>
          <ul>
            <li>
              Example: Ernst & Banks (2002) looked at how humans estimate the
              width of an object by looking and touching it.
            </li>
            <li>
              If humans integrate sensory cues according to their estimated
              reliability, we would expect:
            </li>
            <OutMath
              eq={
                "p(w | w_{visual}, w_{tactile}) = \\frac{p(w_v, w_t | w) p(w)}{p(w_v, w_t)} = \\frac{p(w_v|w) p(w_t|w) p(w)}{p(w_v, w_t)}"
              }
            ></OutMath>
            <li>
              The second equality holds assuming the visual and tactile noises
              are independent.
            </li>
            <li>
              Assuming <InMath eq={"w_v"}></InMath> and{" "}
              <InMath eq={"w_t"}></InMath> are unbiased estimators of{" "}
              <InMath eq={"w"}></InMath> with Gaussian noise and the prior{" "}
              <InMath eq={"p(w)"}></InMath> is flat, then the posterior{" "}
              <InMath eq={"p(w | w_v, w_t)"}></InMath> will be Gaussian, with
              mean and variance:
            </li>
            <OutMath
              eq={
                "\\mu_{vt} = \\frac{1/\\sigma^2_v}{1/\\sigma^2_v + 1/\\sigma^2_t} w_v + \\frac{1/\\sigma^2_t}{1/\\sigma^2_v + 1/\\sigma^2_t} w_t"
              }
            ></OutMath>
            <OutMath
              eq={
                "\\sigma^2_{vt} = \\frac{\\sigma^2_v \\sigma^2_t}{\\sigma^2_v + \\sigma^2_t}"
              }
            ></OutMath>
            <li>
              We can see <InMath eq={"\\mu_{vt}"}></InMath> is a compromise
              between the mean obtained from vision and the mean obtained from
              touch, but weighted by the inverse of the variance (that is, the
              precision) of each cue
            </li>
            <li></li>
          </ul>
          <li></li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />

        <ul>
          <li>
            We can reference a variable <InMath eq={"y"} /> inline or write an
            inline equation, such as <InMath eq={"y = x + 2"}></InMath>.
          </li>
          <li>
            We can also write a non-inline/block equation, such as:{" "}
            <OutMath
              eq={
                "V(x) = \\max_{a \\in \\Gamma (x)} \\{ F(x, a) + \\beta V(T(x, a)) \\}"
              }
            ></OutMath>
          </li>
        </ul>
        {/* <br />
        <br />
        <br />
        <br />
        <b>RANDOM NOTES</b>
        <ul>
          <li>
            <i>Me</i>
          </li>
          <li>
            I find I still benefit a lot from reading writings that I think are
            crap.
          </li>
          <li>
            So I hope, in the least, that I might in the same way shock and
            irritate you to such an extent that you write something much better
            somewhere else (and please send it to me if you do!).
          </li>
          <li>What is perplexity?</li>
          <li>I need to write:</li>
          <ul>
            <li>One small, well-designed SWE project</li>
            <li>One small, well-written custom ML demo</li>
            <li>Three quick, lightly-researched blogposts (e.g. 1hr)</li>
            <li>One longer, deeply-researched blogpost (e.g. 10hrs)</li>
            <li>Notes on 10 more papers (2 phil, 5 ML, 1 psych, 2 neuro)</li>
            <ul>
              <li>2 phil: Forrester, Wilkinson</li>
              <li>5 ML: Lipton, Hase, Goodfellow, Pearl, </li>
              <li>1 psych: Baddeley, Rescorla</li>
              <li>2 neuro: Mumford, Dayan, Barto</li>
              <li>2 bio: Turkheimer, </li>
            </ul>
          </ul>
        </ul> */}
        <br />
        <br />
        <br />
        <br />
        <b>Are desires interdependent?</b>
        <p>
          <i>Cushman & Paul (2016)</i>
        </p>
        <ul>
          <li>
            Do transformative experiences widely affect every aspect of us, or
            do they only affect a particular part of us which thereafter
            cascades?{" "}
          </li>
          <li>
            We can consider two types of transformative experience (h/f TE):
            epistemic and personal (not mutually exclusive).
          </li>
          <ul>
            <li>
              <b>Epistemic</b> TEs involve <b>beliefs</b>.
            </li>
            <li>
              <b>Personal</b> TEs involve <b>desires</b>.
            </li>
          </ul>
          <li>
            C&P don't dispute that some TEs are widely affecting (like a
            hurricane).
          </li>
          <li>
            C&P want to focus on whether small TEs can cascade into big TEs
            ("the spark model").
          </li>
          <ul>
            <li style={quoteStyle}>
              "Can a small, local change to one belief eventually cause a
              cascade of widespread belief revision? And can a small, local
              change to one desire eventually cause a similar cascade of
              widespread preference revision?"
            </li>
          </ul>
          <li style={quoteStyle}>
            "Notice that the metaphor matters: a small spark can only transform
            a wide landscape if just the right kind of fuel is arranged in just
            the right way; ten pieces of kindling touching one another can spark
            a chain reaction, but ten pieces of kindling each separated by an
            inch cannot. Our question, then, is whether our beliefs and ours
            desires are typically arranged the right way, like kindling that
            touches."
          </li>
          <li>
            Beliefs seem to have this structure. Detective novels depend on
            belief cascades in their denouements. Philosophers study belief
            cascades.
          </li>
          <ul>
            <li style={meStyle}>
              # See belief holism, Quine (1976), Davidson (1984), ...
            </li>
          </ul>
          <li>What about desires?</li>
          <li>
            Many of our desires are intrinsic (non-instrumental) but
            conditional, e.g. food is rewarding when we are hungry.
          </li>
          <ul>
            <li>
              (While they may be instrumental in an evolutionary sense, they are
              not in a cognitive sense.)
            </li>
            <li>
              In psychology, "desire" is associated with our capacity for reward
              learning and decision-making.
            </li>
          </ul>
          <li>
            We also experience instrumental value, e.g. restaurants are
            rewarding <i>because</i> food is rewarding.
          </li>
          <li>
            While intrinsic desires are not interdependent, instrumental desires
            will be. So the spark model might apply if an intrinsic desire which
            is related to many instrumental desires is transformed.
          </li>
          <li>
            So, is it appropriate to describe humans as having "instrumental
            desires"?
          </li>
          <li>
            We can imagine instrumental value being implemented in two ways:
          </li>
          <ul>
            <li>
              <b>Fast</b>: instrumental values are calculated on-the-fly based
              on expected intrinsic rewards. E.g. wanting to take a particular
              street to get to a restaurant.
            </li>
            <li>
              <b>Slow</b>: instrumental values are encoded via stable
              associations lasting long periods of time. E.g. wanting money.
            </li>
            <li style={meStyle}>JCC: I think these examples are BAD.</li>
          </ul>
          <li>
            It doesn't make sense to describe fast instrumental values as
            "desires", whereas it does make more sense to describe slow
            instrumental values as such.
          </li>
          <ul>
            <li style={meStyle}>JCC: I DISAGREE.</li>
          </ul>
          <li>
            Instrumental values are more likely to be interdependent if they are
            slow, rather than fast.
          </li>
          <li>So how common are slow vs fast instrumental values?</li>
          <li>
            Two lines of research suggest humans store slow instrumental values
            via cached representations:
          </li>
          <ul>
            <li>
              In reinforcement learning, the learning of "secondary reinforcers"
              is a case of cached values.
            </li>
            <li>
              In the psychology of planning, multi-level abstraction is a case
              of cached value. Whenever hierarchical abstraction is employed,
              values can be cached to avoid combinatorial explosion. E.g. I can
              cache the average value of tying a knot (even though its precise
              value may depend on context and method) and reuse the goal "tie a
              knot" across many contexts – e.g. tying shoes or wrapping a
              present.
            </li>
          </ul>
          <li>All such caching serves computational efficiency.</li>
          <li>
            We should expect such caching to result in desire interdependence.
          </li>
          <li style={quoteStyle}>
            "If the concept of desire extended only to those things that we find
            intrinsically rewarding, it is not apparent why change to any one
            source of intrinsic reward would rationally require change to any
            other source of intrinsic reward. In contrast to this picture,
            however, the concept of desire extends to many cases of instrumental
            value. It is perfectly natural to say that a person desires money, a
            car, a home in a good school district, more exercise, an extra week
            of paid vacation or, say, tenure. If a person suddenly desired all
            of these things less (or more), this might well be a substantial
            enough revision to core aspects of their preferences that it would
            constitute a “personally transformative experience”. Yet, none of
            these desires is a plausible candidate for intrinsic reward. Rather,
            our desire for each of these things is like a form of “cached value”
            representation—an enduring representation of instrumental value
            designed to enable computationally efficient planning. And, because
            these desires are instrumental, they also depend on other desires.
            In other words, many of our desires are interdependent. The value of
            money must change in lockstep with any change to the rewarding
            things we buy with it. This property of interdependence opens the
            possibility of spark-like personal transformative experiences—those
            in which a relatively small, surgical adjustment of one aspect of
            our preferences has a ripple effect, rationally compelling the
            revision of many other aspects of our preferences."
          </li>
          <li>
            Paul (2014) has argued that TEs are especially complex when they are
            both epistemic and personal, i.e. involving a change in values which
            we cannot even imagine or understand. Some actions remain to us, but
            they may be unusual: "Relying on expert testimony; estimating
            utilities with a very high degree of uncertainty; flipping a coin."
          </li>
          <li></li>
          <li style={meStyle}>
            Think more about extremely-strong conditional values: we can frame
            love of children in this way, no? Our values are already <i>in</i>{" "}
            us even before they have manifested. The question is whether it is
            rational for us to make decisions on the basis of such latent
            values, before they feel real. Well, these conditional values often
            have a different structure than it might seem if we think about
            their activation as a process of transformation. E.g. a
            transformation perspective on having children might be: before
            having children I couldn't imagine giving up so much of my lifestyle
            to accommodate a child, but after having children it hardly feels
            like a choice and I wouldn't have it any other way. A latent
            conditional perspective on having children, on the other hand, might
            be: I have always felt that children are precious and should be
            cared for even at great cost, and this was evident in my appraisal
            of other parents and in my general concern for the wellbeing of
            children, so it was perfectly consistent with my values that having
            children entailed huge personal sacrifices. The latter perspective
            almost suggests that what is transformed in the case of children is
            not always preferences or values themselves, but, much more
            practically speaking, one's life. And whenever one's life changes
            dramatically, accounting for the change in value is bound to be
            difficult even if one's values remain stable. So we may be able to
            describe TEs in terms of changing values, but we may just as well
            describe them in terms of conditional values which depend heavily on
            the state of the world, making large life changes computationally
            intractable to evaluate exhaustively, making reliance on
            possibly-brittle heuristics necessary, e.g. "having children is one
            of life's most meaningful experiences".
          </li>
        </ul>
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default PaperPouget2013;
