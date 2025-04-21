import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import NeutralBox from "../../../components/NeutralBox/NeutralBox";

import Chart from "chart.js/auto";
import React from "react";

function BlogScratchpad() {
  class ChartJSPlot extends React.Component {
    chart = null;

    componentDidMount() {
      const ctx = document.getElementById("chartjs-canvas");

      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: Array.from({ length: 100 }, (_, i) => i / 10),
          datasets: [
            {
              label: "Sine",
              data: Array.from({ length: 100 }, (_, i) => Math.sin(i / 10)),
              borderColor: "red",
              fill: false,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            x: { title: { display: true, text: "x" } },
            y: { title: { display: true, text: "y" } },
          },
        },
      });
    }

    componentWillUnmount() {
      if (this.chart) {
        this.chart.destroy();
      }
    }

    render() {
      return <canvas id="chartjs-canvas" width={300} height={200} />;
    }
  }

  return (
    <>
      <Header thisTitle={"Scratchpad"} returnDestination={"Blog"} />

      <main>
        <NeutralBox>
          <h2>Testing Small Graphs</h2>
          <ChartJSPlot></ChartJSPlot>
        </NeutralBox>
        <NeutralBox>
          <h2>Poems</h2>
          <p>
            The image of the idea of you, i cant see her hair, i cant see her
            hands, i cant see her legs, i cant see her at all, the image of the
            idea laugs, and sprints when i run
          </p>
          <NeutralBox>
            <p>
              <b>Marrow</b>
            </p>
            <p>Sorrow fills my hollow.</p>
            <p>Can I borrow a tomorrow?</p>
            <p>Shall I —</p>
            <p>Fill another rufous barrow?</p>
            <p>Shall I —</p>
            <p>Redeem this acid marrow?</p>
          </NeutralBox>
          {/* <NeutralBox>
            <p>
              <b>Less Is More</b>
            </p>
            <p>Less is more. Don't you know?</p>
            <p>Or are you the infovore,</p>
            <p>Slobbering to grow?</p>
            <p>INCOMPLETE</p>
          </NeutralBox> */}
          <NeutralBox>
            <p>
              <b>S/Madness</b>
            </p>
            <p>My hollow slow–drips with sorrow.</p>
            {/* <p>Can I swallow this horror?</p> */}
            <p>Can I borrow a tomorrow?</p>
            <p>Shall I handle,</p>
            <p>Or out this brief candle?</p>
            <p>Shall I —</p>
            <p>Fill another rufous barrow?</p>
            <p>Shall I —</p>
            <p>Redeem this acid marrow?</p>
            <br />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Steep-down gulfs on all sides round,</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Darkness visible through ether of cloud,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;All told by an idiot, told by an idiot,
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;How now brown cow, how now brown cow?</p>
            <br />
            <p>No, no, remember: breathe. We're OK —</p>
            <p>Why don't we just... survive another day?</p>
          </NeutralBox>
          <NeutralBox>
            <p>
              <b>Concupiscence (after Dickinson)</b>
            </p>
            <p>I am a thing with nethers —</p>
            <p>That outrage my soul —</p>
            <p>I've thrummed the words, but lost the tune —</p>
            <p>Will it sing at all?</p>
          </NeutralBox>
          <NeutralBox>
            <p>
              <b>(1)</b>
            </p>
            <p>Yep, I like her —</p>
            <p>Nobody else.</p>
            <p>Well, I like others too,</p>
            <p>But just 'cause it's "good for my health".</p>
          </NeutralBox>
          <NeutralBox>
            <p>
              <b>(2)</b>
            </p>
            <p>Delicate hallucinations,</p>
            <p>Of the back of her head,</p>
            <p>All across Fulham.</p>
            <p>She laughs, and she sprints when I run.</p>
          </NeutralBox>
          <NeutralBox>
            <p>
              <b>(3)</b>
            </p>
            <p>They —there— don't charm like She does.</p>
            <p>They —there— won't float like She does.</p>
            <p>I —here— can't feel like He did.</p>
            <p>But I'm here — more than He was.</p>
          </NeutralBox>
          <NeutralBox>
            <p>
              <b>(4)</b>
            </p>
            <p>I will see a diamond ring.</p>
            <p>They will share a kiss on the platform.</p>
            <p>I will see young parents and younger children.</p>
            <p>She will begin to move on.</p>
            <br />
            <p>Friends will talk of their loves.</p>
            <p>I will walk the same streets.</p>
            <p>Pigeons will recall me to doves.</p>
            <p>I will cry myself to sleep.</p>
          </NeutralBox>
          <NeutralBox>
            <p>
              <b>(5)</b>
            </p>
            <p>Akrasia,</p>
            <p>Lazier and lazier,</p>
            <p>Hazier and hazier,</p>
            <p>A failure.</p>
          </NeutralBox>
          <NeutralBox>
            <p>
              <b>(6)</b>
            </p>
            <p>My mind is dappled</p>
            <p>With holes.</p>
            <p>A spirit used to be,</p>
            <p>In place of those holes in me.</p>
          </NeutralBox>
          <NeutralBox>
            <p>
              <b>(7)</b>
            </p>
            <p>Hours, fugitive, like vapour.</p>
            <p>Powers dreamt of, on paper.</p>
            <p>A great mass imposing on a taper.</p>
            {/* <p>How often "I'll do it later"?</p> */}
          </NeutralBox>
          <NeutralBox>
            <p>
              <b>(8)</b>
            </p>
            <p>Much wisdom</p>
            <p>I’ve relearnt</p>
            <p>For myself.</p>
            <p>Am I wiser?</p>
            <br />
            <p>How many days</p>
            <p>Must I wait</p>
            <p>For what I've learnt</p>
            <p>To finally take?</p>
          </NeutralBox>
          <NeutralBox>
            <p>
              <b>(9)</b>
            </p>
            <p>Glass etched with each our names,</p>
            <p>Glass shone through with candle flames,</p>
            <p>Glass reflecting unselved smiles,</p>
            <p>Glass vitrified of years and miles.</p>
            <br />
            <p>A beautiful image, a shattered frame —</p>
            <p>Glass therefrom cuts again, again, again.</p>
          </NeutralBox>
          <NeutralBox>
            <p>
              <b>(10)</b>
            </p>
            <p>I suck —</p>
            <p>A glowing hedge,</p>
            <p>To give an edge,</p>
            <p>Or play one,</p>
            <p>Or take one off.</p>
            <br />
            <p>Hedging is a partial death,</p>
            <p>Playing, a sooner none.</p>
            <p>My aim is neither —</p>
            <p>A slow, rippling one.</p>
            <br />
            <p>Light, heat, suck.</p>
          </NeutralBox>
          <NeutralBox>
            <p>
              <b>(11)</b>
            </p>
            <p>I stare into her eyes</p>
            <p>In empty space.</p>
            <p>Out of empty space,</p>
            <p>Those soft eyes stare back.</p>
            <p>Should I mistake the sun on my face</p>
            <p>For the love in her gaze?</p>
            <p>Should I mistake the small joy in my days</p>
            <p>For the possibility of grace?</p>
          </NeutralBox>
        </NeutralBox>
        <NeutralBox>
          <h2>Some Short Poems I Love</h2>

          <NeutralBox>
            <p>
              <b>
                <a href="https://www.poetryfoundation.org/poems/45090/sonnet-29-when-in-disgrace-with-fortune-and-mens-eyes">
                  Sonnet 29
                </a>
              </b>
              , <i>William Shakespeare</i>
            </p>
            <p>When, in disgrace with fortune and men’s eyes,</p>
            <p>I all alone beweep my outcast state,</p>
            <p>And trouble deaf heaven with my bootless cries,</p>
            <p>And look upon myself and curse my fate,</p>
            <p>Wishing me like to one more rich in hope,</p>
            <p>Featured like him, like him with friends possessed,</p>
            <p>Desiring this man’s art and that man’s scope,</p>
            <p>With what I most enjoy contented least;</p>
            <p>Yet in these thoughts myself almost despising,</p>
            <p>Haply I think on thee, and then my state,</p>
            <p>(Like to the lark at break of day arising</p>
            <p>From sullen earth) sings hymns at heaven’s gate;</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; For thy sweet love remembered such wealth
              brings
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; That then I scorn to change my state with
              kings.
            </p>
          </NeutralBox>

          <NeutralBox>
            <p>
              <b>
                <a href="https://www.poetryfoundation.org/poetrymagazine/poems/17345/at-melvilles-tomb">
                  At Melville's Tomb
                </a>
              </b>
              , <i>Hart Crane</i>
            </p>
            <p></p>
            <p>Often beneath the wave, wide from this ledge</p>
            <p>The dice of drowned men’s bones he saw bequeath</p>
            <p>An embassy. Their numbers as he watched,</p>
            <p>Beat on the dusty shore and were obscured.</p>
            <br />
            <p>And wrecks passed without sound of bells,</p>
            <p>The calyx of death’s bounty giving back</p>
            <p>A scattered chapter, livid hieroglyph,</p>
            <p>The portent wound in corridors of shells.</p>
            <br />
            <p>Then in the circuit calm of one vast coil,</p>
            <p>Its lashings charmed and malice reconciled,</p>
            <p>Frosted eyes there were that lifted altars;</p>
            <p>And silent answers crept across the stars.</p>
            <br />
            <p>Compass, quadrant and sextant contrive</p>
            <p>No farther tides ... High in the azure steeps</p>
            <p>Monody shall not wake the mariner.</p>
            <p>This fabulous shadow only the sea keeps.</p>
          </NeutralBox>

          <NeutralBox>
            <p>
              <b>
                <a href="https://www.poetryfoundation.org/poems/46565/ozymandias">
                  Ozymandias
                </a>
              </b>
              , <i>Percy Bysshe Shelley</i>
            </p>
            <p>I met a traveller from an antique land,</p>
            <p>Who said — "Two vast and trunkless legs of stone</p>
            <p>Stand in the desert. . . . Near them, on the sand,</p>
            <p>Half sunk a shattered visage lies, whose frown,</p>
            <p>And wrinkled lip, and sneer of cold command,</p>
            <p>Tell that its sculptor well those passions read</p>
            <p>Which yet survive, stamped on these lifeless things,</p>
            <p>The hand that mocked them, and the heart that fed;</p>
            <p>And on the pedestal, these words appear:</p>
            <p>My name is Ozymandias, King of Kings;</p>
            <p>Look on my Works, ye Mighty, and despair!</p>
            <p>Nothing beside remains. Round the decay</p>
            <p>Of that colossal Wreck, boundless and bare</p>
            <p>The lone and level sands stretch far away.”</p>
          </NeutralBox>

          <NeutralBox>
            <p>
              <b>
                <a href="https://www.poetryfoundation.org/poetrymagazine/poems/12675/in-a-station-of-the-metro">
                  In a Station of the Metro
                </a>
              </b>
              , <i>Ezra Pound</i>
            </p>
            <p>The apparition of these faces in the crowd:</p>
            <p>Petals on a wet, black bough.</p>
          </NeutralBox>

          <NeutralBox>
          <p>
              <b>
                <a href="https://www.poetryfoundation.org/poetrymagazine/browse?volume=64&issue=5&page=30">
                  The Sick Nought
                </a>
              </b>
              , <i>Randall Jarrell</i>
            </p>
          </NeutralBox>
        </NeutralBox>

        <NeutralBox>
          <h2>Sources of Good Information</h2>
          <p>
            <i>An Admonitory Note-to-Self</i>
          </p>
          <br />

          <p>
            I find it hard to track what I want to read across many platforms,
            whilst also ensuring that I generally consume the things I actually
            want to consume (rather than be distracted by things which are
            superficially satisfying but not deeply nourishing). The following
            is the list of sources I draw from each day to do a little morning
            reading. I have a small program which picks 3 random sources each
            morning, and I read an article from each. This does not keep me
            up-to-date on the news, nor does it necessarily force me to focus on
            what is important or what other people are talking about. But it
            keeps my morning reading fairly broad and consistently quite
            high-quality, which I really enjoy.
          </p>
          <br />

          <div style={{ backgroundColor: "aliceblue", padding: "1rem" }}>
            <p>🧊 Frozen</p>
            <p>🔖 Substack</p>
            <p>💰 Paywalled</p>
            <br />
            <p>WRITING</p>
            <ul>
              <li>
                <b>CATEGORIES</b>: General, Current Affairs / Politics /
                Economics, Science / Technology, Art / Culture / Literature,
                Philosophy / Psychology, Wonky, Edgy, Techy, Indie, Bloggy,
                Artsy
              </li>
              <li>🚨🚨🚨🚨🚨🚨</li>
              <li>
                <a href="https://aeon.co/">Aeon</a>
              </li>
              <li>
                <a href="https://www.the-american-interest.com/">
                  American Interest 🧊
                </a>
              </li>
              <li>
                <a href="https://prospect.org/">American Prospect</a>
              </li>
              <li>
                <a href="https://arstechnica.com/">Ars Technica</a>
              </li>
              <li>
                <a href="https://press.asimov.com/articles">Asimov Press</a>
              </li>
              <li>
                <a href="https://apnews.com/">Associated Press</a>
              </li>
              <li>
                <a href="https://asteriskmag.com/">Asterisk</a>
              </li>
              <li>
                <a href="https://www.theatlantic.com/">Atlantic</a>
              </li>
              <li>
                <a href="https://www.bbc.com/news">BBC News</a>
              </li>
              <li>
                <a href="https://www.bloomberg.com/uk">Bloomberg</a>
              </li>
              <li>
                <a href="https://www.bostonreview.net/">Boston Review</a>
              </li>
              <li>
                <a href="https://www.thebureauinvestigates.com/">
                  Bureau of Investigate Journalism
                </a>
              </li>
              <li>
                <a href="https://theconversation.com/global">Conversation</a>
              </li>
              <li>
                <a href="https://www.culturedmag.com/">Cultured</a>
              </li>
              <li>
                <a href="https://www.dazeddigital.com/">Dazed</a>
              </li>
              <li>
                <a href="https://www.dw.com/en/">Deutsche Welt</a>
              </li>
              <li>
                <a href="https://www.dissentmagazine.org/">Dissent</a>
              </li>
              <li>
                <a href="https://distill.pub/">Distill 🧊</a>
              </li>
              <li>
                <a href="https://www.economist.com/">Economist</a>
              </li>
              <li>
                <a href="https://www.edge.org/">Edge 🧊</a>
              </li>
              <li>
                <a href="https://www.euronews.com/">Euronews</a>
              </li>
              <li>
                <a href="https://faroutmagazine.co.uk/">Far Out</a>
              </li>
              <li>
                <a href="https://www.ft.com/">Financial Times</a>
              </li>
              <li>
                <s>FiveThirtyEight</s>
              </li>
              <li>
                <a href="https://www.foreignaffairs.com/">Foreign Affairs</a>
              </li>
              <li>
                <a href="https://foreignpolicy.com/">Foreign Policy</a>
              </li>
              <li>
                <a href="https://www.france24.com/en/">France 24</a>
              </li>
              <li>
                <a href="https://future.com/">Future (a16z)</a>
              </li>
              <li>
                <a href="https://thegradient.pub/">Gradient</a>
              </li>
              <li>
                <a href="https://www.theguardian.com/">Guardian</a>
              </li>
              <li>
                <a href="https://harpers.org/">Harper's</a>
              </li>
              <li>
                <a href="https://inference-review.com/articles">
                  Inference Review 🧊
                </a>
              </li>
              <li>
                <a href="https://www.theinformation.com/">Information</a>
              </li>
              <li>
                <a href="https://www.interviewmagazine.com/">Interview</a>
              </li>
              <li>
                <a href="https://hedgehogreview.com/">Hedgehog Review</a>
              </li>
              <li>
                <a href="https://lareviewofbooks.org/">LA Review of Books</a>
              </li>
              <li>
                <a href="https://www.laphamsquarterly.org/">
                  Lapham's Quarterly
                </a>
              </li>
              <li>
                <a href="https://www.lawfaremedia.org/">Lawfare</a>
              </li>
              <li>
                <a href="https://www.lrb.co.uk/">London Review of Books</a>
              </li>
              <li>
                <a href="https://www.themarginalian.org/">Marginalian</a>
              </li>
              <li>
                <a href="https://thereader.mitpress.mit.edu/">
                  MIT Press Reader
                </a>
              </li>
              <li>
                <a href="https://www.technologyreview.com/">
                  MIT Technology Review
                </a>
              </li>
              <li>
                <a href="https://monocle.com/">Monocle</a>
              </li>
              <li>
                <a href="https://www.nplusonemag.com/">n+1</a>
              </li>
              <li>
                <a href="https://nautil.us/">Nautilus</a>
              </li>
              <li>
                <a href="https://www.thenewatlantis.com/">New Atlantis</a>
              </li>
              <li>
                <a href="https://www.newstatesman.com/">New Statesman</a>
              </li>
              <li>
                <a href="https://www.nybooks.com/">New York Review of Books</a>
              </li>
              <li>
                <a href="https://www.nytimes.com/">New York Times</a>
              </li>
              <li>
                <a href="https://www.newyorker.com/">New Yorker</a>
              </li>
              <li>
                <a href="https://www.noemamag.com/">Noēma</a>
              </li>
              <li>
                <a href="https://ourculturemag.com/">Our Culture</a>
              </li>
              <li>
                <a href="https://www.palladiummag.com/">Palladium</a>
              </li>
              <li>
                <a href="https://www.thephilosopher1923.org/articles">
                  Philosopher
                </a>
              </li>
              <li>
                <a href="https://philosophynow.org/">Philosophy Now</a>
              </li>
              <li>
                <a href="https://www.poetryfoundation.org/">
                  Poetry Foundation
                </a>
              </li>
              <li>
                <a href="https://thepointmag.com/">Point</a>
              </li>
              <li>
                <a href="https://www.politico.eu/">Politico</a>
              </li>
              <li>
                <a href="https://www.propublica.org/">ProPublica</a>
              </li>
              <li>
                <a href="https://www.project-syndicate.org/">
                  Project Syndicate
                </a>
              </li>
              <li>
                <a href="https://www.prospectmagazine.co.uk/">Prospect</a>
              </li>
              <li>
                <a href="https://psyche.co/">Psyche</a>
              </li>
              <li>
                <a href="https://publicdomainreview.org/">
                  Public Domain Review
                </a>
              </li>
              <li>
                <a href="https://www.quantamagazine.org/">Quanta Magazine</a>
              </li>
              <li>
                <a href="https://quillette.com/">Quillette</a>
              </li>
              <li>
                <a href="https://www.reuters.com/">Reuters</a>
              </li>
              <li>
                <a href="https://www.rollingstone.com/">Rolling Stone</a>
              </li>
              <li>
                <a href="https://www.the-scientist.com/">Scientist</a>
              </li>
              <li>
                <a href="https://www.smithsonianmag.com/">Smithsonian</a>
              </li>
              <li>
                <a href="https://www.statnews.com/">STAT News</a>
              </li>
              <li>
                <a href="https://undark.org/">Undark</a>
              </li>
              <li>
                <a href="https://unherd.com/">UnHerd</a>
              </li>
              <li>
                <a href="https://www.theverge.com/">Verge</a>
              </li>
              <li>
                <a href="https://www.vox.com/">Vox</a>
              </li>
              <li>
                <a href="https://www.wsj.com/">Wall Street Journal</a>
              </li>
              <li>
                <a href="https://www.washingtonpost.com/">Washington Post</a>
              </li>
              <li>
                <a href="https://www.wired.com/">WIRED</a>
              </li>
              <li>
                <a href="https://worksinprogress.co/">Works in Progress</a>
              </li>
              <li>🔖🔖🔖 Substack 🔖🔖🔖</li>
              <ul>
                <li>
                  <a href="https://importai.substack.com/">ImportAI</a>
                </li>
                <li>
                  <a href="https://thegradientpub.substack.com/">Gradient</a>
                </li>
                <li>
                  <a href="">One Useful Thing</a>
                </li>
                <li>
                  <a href="">Open Letters, from Anne Applebaum</a>
                </li>
                <li>
                  <a href="https://www.overcomingbias.com/archive">
                    Overcoming Bias
                  </a>
                </li>
                <li>
                  <a href="">Palindrome</a>
                </li>
                <li>
                  <a href="">Paul Krugman</a>
                </li>
                <li>
                  <a href="https://www.persuasion.community/">Persuasion</a>
                </li>
                <li>
                  <a href="">Pragmatic Engineer</a>
                </li>
                <li>
                  <a href="">Programmable Mutter</a>
                </li>
                <li>
                  <a href="">Python Coding Stack</a>
                </li>
                <li>
                  <a href="">Razib Khan's Unsupervised Learning</a>
                </li>
                <li>
                  <a href="">Rob Henderson</a>
                </li>
                <li>
                  <a href="">Roots of Progress</a>
                </li>
                <li>
                  <a href="">Rough Diamonds</a>
                </li>
                <li>
                  <a href="">Sam Harris</a>
                </li>
                <li>
                  <a href="">ScienceDaily</a>
                </li>
                <li>
                  <a href="">SemiAnalysis</a>
                </li>
                <li>
                  <a href="">Silver Bulletin</a>
                </li>
                <li>
                  <a href="">Slow Boring</a>
                </li>
                <li>
                  <a href="">The Salt</a>
                </li>
                <li></li>
                <li></li>
              </ul>
              <li>🚨🚨🚨🚨🚨🚨</li>
            </ul>
          </div>

          <br />
          <div style={{ backgroundColor: "honeydew", padding: "1rem" }}>
            <p>PODCASTS</p>
            <ul>
              <li>Making Sense</li>
              <li>Mindscape</li>
              <li>The Ezra Klein Show</li>
              <li>The Rest Is Politics</li>
            </ul>
          </div>
          <div style={{ backgroundColor: "cornsilk", padding: "1rem" }}>
            <p>YOUTUBE</p>
            <ul>
              <li>Amanpour and Company</li>
            </ul>
          </div>
          <div style={{ backgroundColor: "lavenderblush", padding: "1rem" }}>
            <p>EXAMPLE</p>
          </div>
          <div style={{ backgroundColor: "whitesmoke", padding: "1rem" }}>
            <p>EXAMPLE</p>
          </div>
        </NeutralBox>
      </main>

      <Footer />
    </>
  );
}

export default BlogScratchpad;
