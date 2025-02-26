import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import StatsBox from "../../../components/StatsBox/StatsBox";
import AsideBox from "../../../components/AsideBox/AsideBox";
import { MathJaxContext, MathJax } from "better-react-mathjax";

function BlogLovePoetryPage() {
  return (
    <MathJaxContext>
      <Header thisTitle={"Why I Love Poetry"} returnDestination={"Blog"} />

      {/* <StatsBox
        words={"?"}
        time={"?"}
        status={
          ""
        }
        tags={[]}
      /> */}

      <main>
        {/* <h2>Table of Contents</h2>
        <ul>
          <li>Introduction</li>
          <li>Argument</li>
          <li>Conclusion</li>
          <li>Appendix: Maths Examples</li>
        </ul> */}
        <h2></h2>
        <p>Why do we appreciate poetry?</p>
        <ul>
          <li>Sensation</li>
          <ul>
            <li>How does it sound?</li>
            <li>Shape in space, time, and mouth</li>
            <li>Like in speeches.</li>
          </ul>
          <li>Figuration</li>
          <ul>
            <li>Like in films, novels</li>
            <li>
              Figuration allows us to think by analogy, to understand the
              conceptual schemas of others (what they experience and
              similar/dissimilar), allows the author to contrapose and to
              engender synchronicity.
            </li>
          </ul>
          <li>Attention</li>
          <ul>
            <li>
              If we trust a writer, they can induce us to attend to something
              profound. Focus is valuable.
            </li>
            <li>Like in films, novels</li>
          </ul>
        </ul>
        <br />
        <p>
          Read (perform!) poems aloud, and (ideally) at least twice in
          succession.
        </p>
        <p>
          See how the words feel in your mouth. Play with them. Pronounce them
          in different ways. Experiment with timing and stress. Like plays
          awaiting interpretation, poems on the page exist in superposition,
          even moreso than novels or films.
        </p>
        <p>Eccentric structure is a distraction.</p>
        <p>Contemporary poetry is riskier.</p>
        <p>Archaic or abstruse poetry should never be a starting point.</p>
        <p>Short poetry is more hit-and-miss, often less powerful.</p>
        <p>
          Narrative or argument need not be the focus of art. Open your senses.
        </p>
        <p>Read a lot of poems to find what you like.</p>
        <br />
        <h2>A Few Unsolicited Recommendations</h2>
        <p>
          These are some of my favourite poems, which I have chosen to represent
          a wide range of poets, times, styles, and subjects, and which I think
          others are likely to enjoy too. I will keep the list short as I'm less
          well read in verse than I'd like to be.
        </p>
        <br />
        <p style={{ fontWeight: "bold", color: "grey" }}>
          Put in chronological order.
        </p>
        <div style={{ border: "solid black 1px" }}>
          <p>
            <b>In a Station of the Metro – Ezra Pound</b> [
            <a href="https://www.poetryfoundation.org/poetrymagazine/poems/12675/in-a-station-of-the-metro">
              pf
            </a>
            ]
          </p>
          <p>The apparition of these faces in the crowd:</p>
          <p>Petals on a wet, black bough.</p>
        </div>
        <div style={{ border: "solid black 1px" }}>
          <p>
            <b>Ozymandias – Percy Bysshe Shelley</b> [
            <a href="https://www.poetryfoundation.org/poems/46565/ozymandias">
              pf
            </a>
            ]
          </p>
          <p>
            I met a traveller from an antique land,
            <br />
            Who said—“Two vast and trunkless legs of stone <br />
            Stand in the desert. . . . Near them, on the sand, <br />
            Half sunk a shattered visage lies, whose frown, <br />
            And wrinkled lip, and sneer of cold command, <br />
            Tell that its sculptor well those passions read <br />
            Which yet survive, stamped on these lifeless things, <br />
            The hand that mocked them, and the heart that fed; <br />
            And on the pedestal, these words appear: <br />
            My name is Ozymandias, King of Kings; <br />
            Look on my Works, ye Mighty, and despair! <br />
            Nothing beside remains. Round the decay <br />
            Of that colossal Wreck, boundless and bare <br />
            The lone and level sands stretch far away.”
          </p>
        </div>
        <div style={{ border: "solid black 1px" }}>
          <p>
            <b>Sonnet 29 – William Shakespeare</b> [<a href="">pf</a>]
          </p>
          <p>
            When, in disgrace with fortune and men’s eyes, <br />
            I all alone beweep my outcast state, <br />
            And trouble deaf heaven with my bootless cries, <br />
            And look upon myself and curse my fate, <br />
            Wishing me like to one more rich in hope, <br />
            Featured like him, like him with friends possessed, <br />
            Desiring this man’s art and that man’s scope, <br />
            With what I most enjoy contented least;
            <br />
            Yet in these thoughts myself almost despising,
            <br />
            Haply I think on thee, and then my state, <br />
            (Like to the lark at break of day arising <br />
            From sullen earth) sings hymns at heaven’s gate; <br />
            &nbsp;&nbsp;&nbsp;&nbsp; For thy sweet love remembered such wealth
            brings <br />
            &nbsp;&nbsp;&nbsp;&nbsp; That then I scorn to change my state with
            kings.
          </p>
        </div>
        <div style={{ border: "solid black 1px" }}>
          <p>
            <b>"Hope" is the thing with feathers (254) – Emily Dickinson</b> [
            <a href="https://www.poetryfoundation.org/poetrymagazine/poems/12675/in-a-station-of-the-metro">
              pf
            </a>
            ]
          </p>
          <p>
            “Hope” is the thing with feathers - <br />
            That perches in the soul - <br />
            And sings the tune without the words - <br />
            And never stops - at all - <br />
            <br />
            And sweetest - in the Gale - is heard - <br />
            And sore must be the storm - <br />
            That could abash the little Bird <br />
            That kept so many warm - <br />
            <br />
            I’ve heard it in the chillest land - <br />
            And on the strangest Sea - <br />
            Yet - never - in Extremity, <br />
            It asked a crumb - of me.
          </p>
        </div>
        <div style={{ border: "solid black 1px" }}>
          <p>
            <b>I felt a Funeral, in my Brain (340) – Emily Dickinson</b> [
            <a href="https://www.poetryfoundation.org/poetrymagazine/poems/12675/in-a-station-of-the-metro">
              pf
            </a>
            ]
          </p>
          <p>
            I felt a Funeral, in my Brain, <br />
            And Mourners to and fro <br />
            Kept treading - treading - till it seemed <br />
            That Sense was breaking through - <br />
            <br />
            And when they all were seated, <br />
            A Service, like a Drum - <br />
            Kept beating - beating - till I thought <br />
            My mind was going numb - <br />
            <br />
            And then I heard them lift a Box <br />
            And creak across my Soul <br />
            With those same Boots of Lead, again, <br />
            Then Space - began to toll, <br />
            <br />
            As all the Heavens were a Bell, <br />
            And Being, but an Ear, <br />
            And I, and Silence, some strange Race, <br />
            Wrecked, solitary, here - <br />
            <br />
            And then a Plank in Reason, broke, <br />
            And I dropped down, and down - <br />
            And hit a World, at every plunge, <br />
            And Finished knowing - then -
          </p>
        </div>
        <div style={{ border: "solid black 1px" }}>
          <p>
            <b>Ozymandias – Percy Bysshe Shelley</b> [
            <a href="https://www.poetryfoundation.org/poetrymagazine/poems/12675/in-a-station-of-the-metro">
              pf
            </a>
            ]
          </p>
          <p>...</p>
        </div>
        <div style={{ border: "solid black 1px" }}>
          <p>
            <b>Ozymandias – Percy Bysshe Shelley</b> [
            <a href="https://www.poetryfoundation.org/poetrymagazine/poems/12675/in-a-station-of-the-metro">
              pf
            </a>
            ]
          </p>
          <p>...</p>
        </div>
        <div style={{ border: "solid black 1px" }}>
          <p>
            <b>Ozymandias – Percy Bysshe Shelley</b> [
            <a href="https://www.poetryfoundation.org/poetrymagazine/poems/12675/in-a-station-of-the-metro">
              pf
            </a>
            ]
          </p>
          <p>...</p>
        </div>
        <ul>
          <li>I Sing the Body Electric, Walt Whitman</li>
          <li>Emily Dickinson</li>
          <li>Elizabeth Bishop</li>
          <li>BLACK</li>
          <li>Check poetry self-tracking</li>
          <li>Check The Portable Atheist</li>
          <li>ARAB</li>
          <ul>
            <li>Omar Khayyam</li>
          </ul>
          <li>Rumi</li>
          <li>ASIAN</li>
          <li>AUSTRALASIAN</li>
          <li>SLAVIC</li>
          <li>DIFFERENT MOVEMENTS</li>
          <ul>
            <li>Modernism, Romanticism, Beatniks, ?</li>
          </ul>
          <li>ANGLO-AMERICAN</li>
          <li>EUROPEAN</li>
          <li>MALE</li>
          <li>FEMALE</li>
          <li>GAY</li>
          <li>LESBIAN</li>
          <li>YOUNG</li>
          <li>OLD</li>
          <li>DIFFERENT CENTURIES</li>
          <ul>
            <li>
              10th, 11th, 12th, 13th, 14th, 15th, 16th, 17th, 18th, 19th, 20th,
              21st
            </li>
          </ul>
          <li>Shakespeare sonnets</li>
          <li>FOREIGN</li>
          <li>ZEN KOANS</li>
          <li>EPICS</li>
          <li>SAD</li>
          <li>HAPPY</li>
          <li>STRANGE</li>
          <li>VERY SHORT</li>
          <ul>
            <li>Petals on a wet black bough</li>
          </ul>
          <li></li>
        </ul>

        <br />
        <h4>Collections</h4>
        <ul>
          <li>Howard Bloom</li>
          <li>Poems to Memorise</li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default BlogLovePoetryPage;
