import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import AsideBox from "../../components/AsideBox/AsideBox";
import NeutralBox from "../../components/NeutralBox/NeutralBox";
import Footer from "../../components/Footer/Footer";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import LastUpdated from "../../components/LastUpdated/LastUpdated";

function Recommendations() {
  const olStyle = {
    marginLeft: "2rem",
  };

  return (
    <MathJaxContext>
      <Header thisTitle={"Recommendations"} returnDestination={"Blog"} />
      <LastUpdated lastUpdated="~March 2025" />

      <main>
        <p>
          I've been helplessly influenced by media of all sorts. I'm recording
          things which I've found particularly affecting – and which I recommend
          to others – below, in the hopes that others will find them useful or
          interesting or enriching or beautiful (and so as to partially
          exculpate me in so far as my views are accidental plagiarisms, as I'm
          sure they are). These lists are quite incomplete, but I will try to
          only expand them slowly and carefully.
        </p>
        <br />
        <p>
          Wilde called criticism "the record of one's own soul" and "the only
          civilised form of autobiography". If lists of recommendations are the
          lowest form of criticism, maybe these lists will intimate something of
          my own soul.
        </p>
        {/* 
        <br />
        <p>
          The lists are arranged into a few categories:{" "}
          <span style={{ color: "#0074D9" }}>Web</span>,{" "}
          <span style={{ color: "#FF851B" }}>Literature</span>,{" "}
          <span style={{ color: "#2ECC40" }}>Screen</span>,{" "}
          <span style={{ color: "#FF4136" }}>Music</span>,{" "}
          <span style={{ color: "#B10DC9" }}>Podcasts/Radio</span>, and{" "}
          <span style={{ color: "#FFD700" }}>Education</span>.
        </p> */}

        <AsideBox title={"Notes, especially on recommended artworks."}>
          <ul>
            <li>
              These are things that I've consumed and loved or found affecting.
              I have really tried to be selective. These tend to be at the
              intersection of what I consider to be great and what I personally
              love. Especially noisy lists are labelled with ⚠, and should be
              taken with a <i>bucket</i> of salt.
            </li>
            <li>
              I'm wary that some of my recommendations will be very obvious. I'm
              not too shy about this. In the domain of art, I think that
              putative "great artworks", e.g. the films of{" "}
              <a href="https://en.wikipedia.org/wiki/Akira_Kurosawa">
                Kurosawa
              </a>{" "}
              or the music of{" "}
              <a href="https://en.wikipedia.org/wiki/The_Beatles">
                The Beatles
              </a>
              , are almost always <i>actually amazing</i>, even if personal
              taste still provides degrees of freedom. Much of the value of art
              is in its ability to illustrate new ways of thinking, feeling,
              perceiving, and understanding, which can have objective aspects. I
              think most people should spend more time consuming classic works
              and less time on recent works.
            </li>
            <li>
              Hopefully, my more unusual inclusions will point people to good
              work they would not find otherwise and my more commonplace
              inclusions will provide valuable reminders!
            </li>
            <li>
              I think I've consumed relatively many films, books, etc.
              Nonetheless, I have obviously consumed a vanishing proportion of
              what's out there, so the following lists are also biased by what I
              happen to have been exposed to.
            </li>
            <ul>
              <li>
                E.g. I suspect I should read and could love{" "}
                <a href="https://en.wikipedia.org/wiki/Anna_Karenina">
                  Anna Karenina
                </a>{" "}
                or{" "}
                <a href="https://en.wikipedia.org/wiki/Madame_Bovary">
                  Madame Bovary
                </a>
                .
              </li>
              <li>
                E.g. I suspect I should watch and could love{" "}
                <a href="https://en.wikipedia.org/wiki/An_Autumn_Afternoon">
                  An Autumn Afternoon
                </a>{" "}
                or{" "}
                <a href="https://en.wikipedia.org/wiki/In_the_Mood_for_Love">
                  In the Mood for Love
                </a>
                .
              </li>
              {/* <li>
                E.g. I suspect I should watch and could love{" "}
                <a href="https://en.wikipedia.org/wiki/The_Sopranos">
                  The Sopranos
                </a>{" "}
                or{" "}
                <a href="https://en.wikipedia.org/wiki/Deadwood_(TV_series)">
                  Deadwood
                </a>
                .
              </li> */}
              <li>
                E.g. I suspect I should listen to and could love{" "}
                <a href="https://en.wikipedia.org/wiki/Voodoo_(D%27Angelo_album)">
                  Voodoo
                </a>{" "}
                or{" "}
                <a href="https://en.wikipedia.org/wiki/Tapestry_(Carole_King_album)">
                  Tapestry
                </a>
                .
              </li>
              <li>... But I have not.</li>
            </ul>
            <li>
              If you think you know of something I might love enough to
              recommend to others, please let me know! See the page footer for
              ways you can reach me.
            </li>
          </ul>
        </AsideBox>

        {/* <NeutralBox recCat={"web"}>
          <h2>
            <span style={{ color: "#0074D9" }}>Web</span>: Fora
          </h2>
          <ul>
            <li>
              <a href="https://www.lesswrong.com/">LessWrong</a> [science,
              philosophy, rationality, ethics, artificial intelligence]
            </li>
            <li>
              <a href="https://forum.effectivealtruism.org/">
                Effective Altruism Forum
              </a>{" "}
              [philosophy, ethics, global priorities, philanthropy]
            </li>
            <li>
              <a href="https://progressforum.org/">Progress Forum</a> [progress
              studies, economics, history, technology]
            </li>
            <li>
              <a href="https://www.alignmentforum.org/">Alignment Forum</a>{" "}
              [artificial intelligence, AI safety]
            </li>
            <li>
              <a href="https://news.ycombinator.com/">Hacker News</a>{" "}
              [technology]
            </li>
          </ul>
        </NeutralBox> */}

        {/* <li><a href="https://meaningness.com/">Meaningness</a> &#124; David Chapman</li> */}
        {/* <li><a href="http://blog.sigfpe.com/">A Neighbourhood of Infinity</a></li> */}
        {/* <NeutralBox recCat={"web"}>
          <h2>
            <span style={{ color: "#0074D9" }}>Web</span>: Blogs and Newsletters
          </h2>

          <ul>
            <li>
              <a href="https://waitbutwhy.com/archive">Wait But Why</a> &#124;
              Tim Urban
            </li>
            <li>
              <a href="https://rootsofprogress.org/">The Roots of Progress</a>{" "}
              &#124; Jason Crawford
            </li>
            <li>
              <a href="https://www.themarginalian.org/">The Marginalian</a>{" "}
              &#124; Maria Popova
            </li>
            <li>
              <a href="https://www.overcomingbias.com/">Overcoming Bias</a>{" "}
              &#124; Robin Hanson
            </li>
            <li>
              <a href="https://gwern.net/">Gwern</a> &#124; Gwern Branwen
            </li>
            <li>
              <a href="https://lilianweng.github.io/">Lil'Log</a> &#124; Lilian
              Weng
            </li>
            <li>
              <a href="https://marginalrevolution.com/">Marginal Revolution</a>{" "}
              &#124; Tyler Cowen, Alex Tabarrok
            </li>
            <li>
              <a href="https://meltingasphalt.com/">Melting Asphalt</a> &#124;
              Kevin Simler
            </li>
            <li>
              <a href="https://scottaaronson.blog/">Shtetl-Optimized</a> &#124;
              Scott Aaronson
            </li>
            <li>
              <a href="https://bounded-regret.ghost.io/">Bounded Regret</a>{" "}
              &#124; Jacob Steinhardt
            </li>
            <li>
              <a href="http://m-phi.blogspot.com/">M-Phi</a> &#124; Richard
              Pettigrew
            </li>
            <li>
              &#123; <a href="https://slatestarcodex.com/">Slate Star Codex</a>,{" "}
              <a href="https://astralcodexten.substack.com/">
                Astral Codex Ten
              </a>{" "}
              &#125; &#124; Scott Alexander
            </li>
            <li>
              <a href="https://bjlkeng.io/">Bounded Rationality</a> &#124; Brian
              Keng
            </li>
            <li>...</li>
          </ul>
        </NeutralBox> */}

        {/* <NeutralBox recCat={"web"}>
                    <h2><span style={{color:"#0074D9"}}>Web</span>: Publications</h2>
                    <ul>
                        <li><a href="https://distill.pub/">Distill</a></li>
                        <li><a href="https://thegradient.pub/">The Gradient</a></li>
                        <li><a href="https://www.quantamagazine.org/">Quanta Magazine</a></li>
                        <li><a href="https://www.the-scientist.com/">The Scientist</a></li>
                        <li><a href="https://aeon.co/">Aeon</a></li>
                        <li><a href="https://informationisbeautiful.net/">Information Is Beautiful</a></li>
                    </ul>
                </NeutralBox> */}

        {/* <NeutralBox recCat={"web"}>
          <h2>
            <span style={{ color: "#0074D9" }}>Web</span>: References
          </h2>
          <ul>
            <li>
              <a href="https://plato.stanford.edu/contents.html">
                Stanford Encyclopedia of Philosophy
              </a>
            </li>
            <li>
              <a href="https://arbital.com/">Arbital</a>
            </li>
            <li>
              <a href="https://ourworldindata.org/">Our World in Data</a>
            </li>
            <li>KHAN ACADEMY</li>
                        <li>SCIENCE DAILY</li>
            <li><a href="https://brilliant.org/wiki/best/">Brilliant Wiki</a></li>
            <li>INVESTOPEDIA</li>
                        <li>QUILLETTE</li>
                        <li>https://medium.com/curious/5-amazing-websites-you-need-to-save-to-satiate-your-curious-mind-f6f1a857d9da</li>
                        <li>https://www.maketecheasier.com/best-intellectual-websites/</li>
                        <li>https://medium.com/curious/9-amazing-online-sources-that-will-fulfill-your-intellectual-cravings-9928d7142a0c</li>
                        <li>https://observer.com/2015/10/33-websites-that-will-make-you-a-genius/</li>
                        <li><a href="https://conceptually.org/concepts">Conceptually</a></li>
                        <li>https://www.lifewire.com/best-reference-online-3482477</li>
                        <li>https://www.similarweb.com/top-websites/reference-materials/</li>
                        <li>https://www.searchenginewatch.com/2005/01/04/the-best-online-reference-sites/</li>
                        <li>https://www.libraryjournal.com/story/best-free-reference-sources</li>
                        <li>https://libguides.salemstate.edu/referencesources</li>
          </ul>
        </NeutralBox> */}

        {/* <NeutralBox recCat={"web"}>
                    <h2><span style={{color:"#0074D9"}}>Web</span>: Catalogues</h2>
                    <ul>
                        <li><a href="https://philarchive.org/browse/all">PhilArchive</a></li>
                        <li><a href="https://www.cochrane.org/evidence">Cochrane Library</a></li>
                    </ul>
                </NeutralBox> */}

        {/* <NeutralBox recCat={"web"}>
                    <h2><span style={{color:"#0074D9"}}>Web</span>: Other</h2>
                    <ul>
                        <li></li>
                    </ul>
                </NeutralBox> */}

        <NeutralBox recCat={"lit"}>
          <h2>
            <span style={{ color: "#FF851B" }}>Literature</span>: Fiction
          </h2>
          <p>
            I began writing the list below based on what popped into my head and
            what I could see on my shelf... and then I realised this task is
            absolutely hopeless. So I gave up. Still, I highly recommend
            everything below. You can also check out my{" "}
            <a href="https://www.goodreads.com/user/show/23882279-joe">
              Goodreads
            </a>
            .
          </p>
          <br />
          <ol style={olStyle}>
            <li>
              (2015){" "}
              <b>
                <i>A Little Life</i>
              </b>
              , Hanya Yanagihara
            </li>
            <li>
              (2014-2018){" "}
              <b>
                <i>The Outline Trilogy</i>
              </b>
              , Rachel Cusk
            </li>
            <li>
              (2011){" "}
              <b>
                <i>The Pale King</i>
              </b>
              , David Foster Wallace
            </li>
            <li>
              (2010){" "}
              <b>
                <i>Freedom</i>
              </b>
              , Jonathan Franzen
            </li>
            <li>
              (2009){" "}
              <b>
                <i>Wolf Hall</i>
              </b>
              , Hilary Mantel
            </li>
            <li>
              (2000){" "}
              <b>
                <i>White Teeth</i>
              </b>
              , Zadie Smith
            </li>
            <li>
              (1997){" "}
              <b>
                <i>Underworld</i>
              </b>
              , Don DeLillo
            </li>
            <li>
              (1996){" "}
              <b>
                <i>Infinite Jest</i>
              </b>
              , David Foster Wallace
            </li>
            {/* <li>(1994) <b><i>Permutation City</i></b>, Greg Egan</li> */}
            <li>
              (1993){" "}
              <b>
                <i>A Suitable Boy</i>
              </b>
              , Vikram Seth
            </li>
            <li>
              (1979-1992){" "}
              <b>
                <i>The Hitchhiker's "Trilogy"</i>
              </b>
              , Douglas Adams
            </li>
            <li>
              (1966){" "}
              <b>
                <i>The Crying of Lot 49</i>
              </b>
              , Thomas Pynchon
            </li>
            <li>
              (1962){" "}
              <b>
                <i>A Clockwork Orange</i>
              </b>
              , Anthony Burgess
            </li>
            <li>
              (1960){" "}
              <b>
                <i>The Violent Bear It Away</i>
              </b>
              , Flannery O'Connor
            </li>
            <li>
              (1954-1955){" "}
              <b>
                <i>The Lord of the Rings</i>
              </b>
              , J. R. R. Tolkien
            </li>
            <li>
              (1952){" "}
              <b>
                <i>Wise Blood</i>
              </b>
              , Flannery O'Connor
            </li>
            <li>
              (1949){" "}
              <b>
                <i>Nineteen Eighty-Four</i>
              </b>
              , George Orwell
            </li>
            <li>
              (1928){" "}
              <b>
                <i>Orlando</i>
              </b>
              , Virginia Woolf
            </li>
            <li>
              (1927){" "}
              <b>
                <i>To the Lighthouse</i>
              </b>
              , Virginia Woolf
            </li>
            <li>
              (1925){" "}
              <b>
                <i>Mrs. Dalloway</i>
              </b>
              , Virginia Woolf
            </li>
            <li>
              (1922){" "}
              <b>
                <i>Ulysses</i>
              </b>
              , James Joyce
            </li>
            <li>
              (1919){" "}
              <b>
                <i>My Man Jeeves</i>
              </b>
              , P. G. Wodehouse
            </li>
            <li>
              (1916){" "}
              <b>
                <i>A Portrait of the Artist as a Young Man</i>
              </b>
              , James Joyce
            </li>
            <li>
              (1903){" "}
              <b>
                <i>The Call of the Wild</i>
              </b>
              , Jack London
            </li>
            <li>
              (1899){" "}
              <b>
                <i>Heart of Darkness</i>
              </b>
              , Joseph Conrad
            </li>
            <li>
              (1880){" "}
              <b>
                <i>The Brothers Karamazov</i>
              </b>
              , Fyodor Dostoyevsky
            </li>
            <li>
              (1872){" "}
              <b>
                <i>Middlemarch</i>
              </b>
              , George Eliot
            </li>
            <li>
              (1869){" "}
              <b>
                <i>War and Peace</i>
              </b>
              , Leo Tolstoy
            </li>
            <li>
              (1866){" "}
              <b>
                <i>Crime and Punishment</i>
              </b>
              , Fyodor Dostoyevsky
            </li>
            <li>
              (1865){" "}
              <b>
                <i>Alice's Adventures in Wonderland</i>
              </b>
              , Lewis Carroll
            </li>
            <li>
              (1864){" "}
              <b>
                <i>Notes from the Underground</i>
              </b>
              , Fyodor Dostoyevsky
            </li>
            <li>
              (1862){" "}
              <b>
                <i>Fathers and Sons</i>
              </b>
              , Ivan Turgenev
            </li>
            <li>
              (1851){" "}
              <b>
                <i>Moby-Dick</i>
              </b>
              , Herman Melville
            </li>
            <li>
              (1847){" "}
              <b>
                <i>Wuthering Heights</i>
              </b>
              , Emily Brontë
            </li>
            <li>
              (1817){" "}
              <b>
                <i>Persuasion</i>
              </b>
              , Jane Austen
            </li>
            <li>
              (1813){" "}
              <b>
                <i>Pride and Prejudice</i>
              </b>
              , Jane Austen
            </li>
          </ol>
        </NeutralBox>
        {/* <li>The Outline Trilogy &#124; Rachel Cusk</li> */}
        {/* <li>Mason & Dixon &#124; Thomas Pynchon</li> */}
        {/* <li>Jane Eyre &#124; Charlotte Brontë</li> */}

        {/* <NeutralBox recCat={"lit"}>
          <h2>
            <span style={{ color: "#FF851B" }}>Literature</span>: Short Fiction
          </h2>
          <ul>
            <li>Dubliners &#124; James Joyce</li>
            <li>The Things They Carried &#124; Tim O'Brien</li>
            <li>&#123; * &#125; &#124; Anton Chekhov</li>
            <li>&#123; * &#125; &#124; Herman Melville</li>
          </ul>
        </NeutralBox> */}

        {/* <li>WALTER ISAACSON</li> */}
        {/* <li>BOSWELL ON DR JOHNSON</li> */}
        <NeutralBox recCat={"lit"}>
          <h2>
            <span style={{ color: "#FF851B" }}>Literature</span>: Biography
          </h2>
          <ol style={olStyle}>
            <li>
              (2023){" "}
              <b>
                <i>Parfit</i>
              </b>
              , David Edmonds
            </li>
            <li>
              (2023){" "}
              <b>
                <i>Politics on the Edge</i>
              </b>
              , Rory Stewart
            </li>
            <li>
              (2020){" "}
              <b>
                <i>Frank Ramsey</i>
              </b>
              , Cheryl Misak
            </li>
            <li>
              (2018){" "}
              <b>
                <i>Churchill</i>
              </b>
              , Andrew Roberts
            </li>
            <li>
              (2017){" "}
              <b>
                <i>Leonardo da Vinci</i>
              </b>
              , Walter Isaacson
            </li>
            <li>
              (2016){" "}
              <b>
                <i>The Undoing Project</i>
              </b>
              , Michael Lewis
            </li>
            <li>
              (2015){" "}
              <b>
                <i>On the Move</i>
              </b>
              , Oliver Sacks
            </li>
            <li>
              (2009-2011){" "}
              <b>
                <i>My Struggle</i>
              </b>
              , Karl Ove Knausgård
            </li>
            <ul>
              <li>Read first two so far.</li>
            </ul>
            <li>
              (2006){" "}
              <b>
                <i>In Search of Memory</i>
              </b>
              , Eric Kandel
            </li>
            <li>
              (2003){" "}
              <b>
                <i>Benjamin Franklin</i>
              </b>
              , Walter Isaacson
            </li>
            <li>
              (1996){" "}
              <b>
                <i>Virginia Woolf</i>
              </b>
              , Hermione Lee
            </li>
            <li>
              (1974){" "}
              <b>
                <i>The Power Broker</i>
              </b>
              , Robert Caro
            </li>
            <li>
              (1933){" "}
              <b>
                <i>Down and Out in Paris and London</i>
              </b>
              , George Orwell
            </li>
            {/* <li>The Benn Diaries &#124; Tony Benn</li> */}
          </ol>
        </NeutralBox>

        {/* <NeutralBox recCat={"lit"}>
                    <h2><span><span style={{color:"#FF851B"}}>Literature</span></span>: Compilations</h2>
                    <ul>
                        <li>ESSAYS</li>
                        (2007) Cultural Amnesia, Clive James
                        <ul>
                            <li>I promise the content is better than the title.</li>
                        </ul>
                        <li>(2007) <b><i>The Portable Atheist</i></b>, ed. Christopher Hitchens</li>
                        <li>Essais &#124; Michel de Montaigne</li>
                        <li>Mortal Questions &#124; Thomas Nagel</li>
                        <li>Against Interpretation and Other Essays &#124; Susan Sontag</li>
                        <li>Self-Reliance and Other Essays &#124; Ralph Waldo Emerson</li>
                    </ul>
                </NeutralBox> */}

        <NeutralBox recCat={"lit"}>
          <h2>
            <span style={{ color: "#FF851B" }}>Literature</span>: Non-Fiction
          </h2>

          <p>
            I began writing the list below based on what popped into my head and
            what I could see on my shelf... and then I realised this task is
            absolutely hopeless. So I gave up. Still, I highly recommend
            everything below. You can also check out my{" "}
            <a href="https://www.goodreads.com/user/show/23882279-joe">
              Goodreads
            </a>
            .
          </p>
          <br />
          <ol style={olStyle}>
            <li>
              (2023){" "}
              <b>
                <i>Humanly Possible</i>
              </b>
              , Sarah Bakewell
            </li>
            <li>
              (2022){" "}
              <b>
                <i>What We Owe the Future</i>
              </b>
              , William MacAskill
            </li>
            <li>
              (2021){" "}
              <b>
                <i>What Makes Us Smart</i>
              </b>
              , Sam Gershman
            </li>
            <li>
              (2020){" "}
              <b>
                <i>How Innovation Works</i>
              </b>
              , Matt Ridley
            </li>
            <li>
              (2020){" "}
              <b>
                <i>The Precipice</i>
              </b>
              , Toby Ord
            </li>
            <li>
              (2020){" "}
              <b>
                <i>The WEIRDest People in the World</i>
              </b>
              , Joseph Henrich
            </li>
            <li>
              (2020){" "}
              <b>
                <i>Why We're Polarized</i>
              </b>
              , Ezra Klein
            </li>
            <li>
              (2018){" "}
              <b>
                <i>Enlightenment Now</i>
              </b>
              , Steven Pinker
            </li>
            <li>
              (2018){" "}
              <b>
                <i>Whiteshift</i>
              </b>
              , Eric Kaufmann
            </li>
            <li>
              (2017){" "}
              <b>
                <i>The Color of Law</i>
              </b>
              , Richard Rothstein
            </li>
            <li>
              (2016){" "}
              <b>
                <i>Evicted</i>
              </b>
              , Matthew Desmond
            </li>
            <li>
              (2015){" "}
              <b>
                <i>Doing Good Better</i>
              </b>
              , William MacAskill
            </li>
            <li>
              (2015){" "}
              <b>
                <i>The Secret of Our Success</i>
              </b>
              , Joseph Henrich
            </li>
            <li>
              (2015){" "}
              <b>
                <i>Strangers Drowning</i>
              </b>
              , Larissa MacFarquhar
            </li>
            <li>
              (2015){" "}
              <b>
                <i>Our Kids</i>
              </b>
              , Robert Putnam
            </li>
            <li>
              (2014){" "}
              <b>
                <i>Consciousness and the Brain</i>
              </b>
              , Stanislas Dehaene
            </li>
            <li>
              (2014){" "}
              <b>
                <i>How to Measure Anything</i>
              </b>
              , Douglas Hubbard
            </li>
            <li>
              (2014){" "}
              <b>
                <i>Political Order and Political Decay</i>
              </b>
              , Francis Fukuyama
            </li>
            <li>
              (2014){" "}
              <b>
                <i>Superintelligence</i>
              </b>
              , Nick Bostrom
            </li>
            <li>
              (2014){" "}
              <b>
                <i>Waking Up</i>
              </b>
              , Sam Harris
            </li>
            <li>
              (2013){" "}
              <b>
                <i>Quantum Computing Since Democritus</i>
              </b>
              , Scott Aaronson
            </li>
            <li>
              (2012){" "}
              <b>
                <i>Coming Apart</i>
              </b>
              , Charles Murray
            </li>
            <li>
              (2012){" "}
              <b>
                <i>Far From the Tree</i>
              </b>
              , Andrew Solomon
            </li>
            <li>
              (2012){" "}
              <b>
                <i>Why Nations Fail</i>
              </b>
              , Daron Acemoglu and James Robinson
            </li>
            <li>
              (2011){" "}
              <b>
                <i>The Beginning of Infinity</i>
              </b>
              , David Deutsch
            </li>
            <li>
              (2011){" "}
              <b>
                <i>The Better Angels of Our Nature</i>
              </b>
              , Steven Pinker
            </li>
            {/* <li>(2011) <b><i>Evolution: A View from the 21st Century</i></b>, James Shapiro</li> */}
            <li>
              (2011){" "}
              <b>
                <i>The Origins of Political Order</i>
              </b>
              , Francis Fukuyama
            </li>
            <li>
              (2011){" "}
              <b>
                <i>Thinking, Fast and Slow</i>
              </b>
              , Daniel Kahneman
            </li>
            <li>
              (2010){" "}
              <b>
                <i>At Home</i>
              </b>
              , Bill Bryson
            </li>
            <li>
              (2010){" "}
              <b>
                <i>The Emperor of All Maladies</i>
              </b>
              , Siddhartha Mukherjee
            </li>
            <li>
              (2009){" "}
              <b>
                <i>The Dead Hand</i>
              </b>
              , David Hoffman
            </li>
            <li>
              (2009){" "}
              <b>
                <i>Life Ascending</i>
              </b>
              , Nick Lane
            </li>
            <li>
              (2008){" "}
              <b>
                <i>The Annotated Turing</i>
              </b>
              , Charles Petzold
            </li>
            <li>
              (2007){" "}
              <b>
                <i>A History of Modern Britain</i>
              </b>
              , Andrew Marr
            </li>
            <li>
              (2007){" "}
              <b>
                <i>The Stuff of Thought</i>
              </b>
              , Steven Pinker
            </li>
            <li>
              (2005){" "}
              <b>
                <i>Team of Rivals</i>
              </b>
              , Doris Kearns Goodwin
            </li>
            <li>
              (2004){" "}
              <b>
                <i>What Is Thought?</i>
              </b>
              , Eric Baum
            </li>
            <li>
              (2002){" "}
              <b>
                <i>Foundations of Language</i>
              </b>
              , Ray Jackendoff
            </li>
            <li>
              (2001){" "}
              <b>
                <i>The Metaphysical Club</i>
              </b>
              , Louis Menand
            </li>
            <li>
              (2001){" "}
              <b>
                <i>The Noonday Demon</i>
              </b>
              , Andrew Solomon
            </li>
            <li>
              (2000){" "}
              <b>
                <i>Bowling Alone</i>
              </b>
              , Robert Putnam
            </li>
            {/* <li>(2000) <b><i>How to Read and Why</i></b>, Harold Bloom</li> */}
            <li>
              (1999){" "}
              <b>
                <i>Code</i>
              </b>
              , Charles Petzold
            </li>
            <li>
              (1998){" "}
              <b>
                <i>Shakespeare: The Invention of the Human</i>
              </b>
              , Harold Bloom
            </li>
            <li>
              (1997){" "}
              <b>
                <i>The Fabric of Reality</i>
              </b>
              , David Deutsch
            </li>
            <li>
              (1997){" "}
              <b>
                <i>Guns, Germs, and Steel</i>
              </b>
              , Jared Diamond
            </li>
            <li>
              (1997){" "}
              <b>
                <i>How the Mind Works</i>
              </b>
              , Steven Pinker
            </li>
            <li>
              (1997){" "}
              <b>
                <i>The Symbolic Species</i>
              </b>
              , Terrence Deacon
            </li>
            <li>
              (1996){" "}
              <b>
                <i>The Conscious Mind</i>
              </b>
              , David Chalmers
            </li>
            <li>
              (1994){" "}
              <b>
                <i>The Language Instinct</i>
              </b>
              , Steven Pinker
            </li>
            <li>
              (1993){" "}
              <b>
                <i>The Flight of the Garuda</i>
              </b>
              , Keith Dowman
            </li>
            <li>
              (1992){" "}
              <b>
                <i>The Lever of Riches</i>
              </b>
              , Joel Mokyr
            </li>
            {/* <li>(1990) <b><i>The Organization of Learning</i></b>, Randy Gallistel</li> */}
            <li>
              (1989){" "}
              <b>
                <i>Seeing Voices</i>
              </b>
              , Oliver Sacks
            </li>
            <li>
              (1989){" "}
              <b>
                <i>Studies in the Way of Words</i>
              </b>
              , Paul Grice
            </li>
            <li>
              (1985){" "}
              <b>
                <i>The Man Who Mistook His Wife For A Hat</i>
              </b>
              , Oliver Sacks
            </li>
            <li>
              (1984){" "}
              <b>
                <i>The Evolution of Cooperation</i>
              </b>
              , Robert Axelrod
            </li>
            <li>
              (1984){" "}
              <b>
                <i>Reasons and Persons</i>
              </b>
              , Derek Parfit
            </li>
            <li>
              (1981){" "}
              <b>
                <i>After Virtue</i>
              </b>
              , Alasdair MacIntyre
            </li>
            <li>
              (1980){" "}
              <b>
                <i>Naming and Necessity</i>
              </b>
              , Saul Kripke
            </li>
            <li>
              (1979){" "}
              <b>
                <i>Gödel, Escher, Bach</i>
              </b>
              , Douglas Hofstadter
            </li>
            <li>
              (1976){" "}
              <b>
                <i>The Selfish Gene</i>
              </b>
              , Richard Dawkins
            </li>
            <li>
              (1975){" "}
              <b>
                <i>Against Method</i>
              </b>
              , Paul Feyerabend
            </li>
            <li>
              (1973){" "}
              <b>
                <i>Awakenings</i>
              </b>
              , Oliver Sacks
            </li>
            <li>
              (1973){" "}
              <b>
                <i>The Gulag Archipelago</i>
              </b>
              , Alexander Solzhenitseyn
            </li>
            <li>
              (1967){" "}
              <b>
                <i>The Peregrine</i>
              </b>
              , J. A. Baker
            </li>
            <li>
              (1964){" "}
              <b>
                <i>Why We Can't Wait</i>
              </b>
              , Martin Luther King Jr.
            </li>
            <li>
              (1962){" "}
              <b>
                <i>The Structure of Scientific Revolutions</i>
              </b>
              , Thomas Kuhn
            </li>
            <li>
              (1961){" "}
              <b>
                <i>On Having No Head</i>
              </b>
              , Douglas Harding
            </li>
            <li>
              (1960){" "}
              <b>
                <i>The Strategy of Conflict</i>
              </b>
              , Thomas Schelling
            </li>
            <li>
              (1960){" "}
              <b>
                <i>Word and Object</i>
              </b>
              , Willard Van Orman Quine
            </li>
            <li>
              (1955){" "}
              <b>
                <i>Fact, Fiction, and Forecast</i>
              </b>
              , Nelson Goodman
            </li>
            {/* <li>(1953) <b><i>From a Logical Point of View</i></b>, Willard Van Orman Quine</li> */}
            <li>
              (1953){" "}
              <b>
                <i>Philosophical Investigations</i>
              </b>
              , Ludwig Wittgenstein
            </li>
            <li>
              (1950){" "}
              <b>
                <i>The Story of Art</i>
              </b>
              , E. H. Gombrich
            </li>
            <li>
              (1942){" "}
              <b>
                <i>Capitalism, Socialism, and Democracy</i>
              </b>
              , Joseph Schumpeter
            </li>
            <li>
              (1936){" "}
              <b>
                <i>How to Win Friends and Influence People</i>
              </b>
              , Dale Carnegie
            </li>
            <li>
              (1890){" "}
              <b>
                <i>The Principles of Psychology</i>
              </b>
              , William James
            </li>
            <li>
              (1886){" "}
              <b>
                <i>Beyond Good and Evil</i>
              </b>
              , Friedrich Nietzsche
            </li>
            <li>
              (1881){" "}
              <b>
                <i>Daybreak</i>
              </b>
              , Friedrich Nietzsche
            </li>
            <li>
              (1874){" "}
              <b>
                <i>The Methods of Ethics</i>
              </b>
              , Henry Sidgwick
            </li>
            <li>
              (1859){" "}
              <b>
                <i>On Liberty</i>
              </b>
              , John Stuart Mill
            </li>
            <li>
              (1859){" "}
              <b>
                <i>On the Origin of Species</i>
              </b>
              , Charles Darwin
            </li>
            <li>
              (1840){" "}
              <b>
                <i>Democracy in America</i>
              </b>
              , Alexis de Tocqueville
            </li>
            <li>
              (1776){" "}
              <b>
                <i>The Wealth of Nations</i>
              </b>
              , Adam Smith
            </li>
            <li>
              (1759){" "}
              <b>
                <i>The Theory of Moral Sentiments</i>
              </b>
              , Adam Smith
            </li>
            <li>
              (1739){" "}
              <b>
                <i>A Treatise of Human Nature</i>
              </b>
              , David Hume
            </li>
            <li>
              (426){" "}
              <b>
                <i>The City of God</i>
              </b>
              , Augustine of Hippo
            </li>
            <li>
              (400){" "}
              <b>
                <i>Confessions</i>
              </b>
              , Augustine of Hippo
            </li>
            {/* <li>Siddhartha Mukherjee</li>
            <li>Ed Yong</li>
            <li>Elizabeth Kolbert</li>
            <li>Rachel Carson</li>
            <li>Primo Levi</li>
            <li>AR Luria</li>
            <li>Sean Carroll</li>
            <li>Carl Sagan</li>
            <li>Bill Bryson</li>
            <li>Yuval Noah Harari</li>
            <li>Matt Ridley</li>
            <li>David Reich</li>
            <li>Carl Zimmer</li>
            <li>Richard Dawkins</li>
            <li>Simone Weil</li>
            <li>Stephen Jay Gould</li> */}
          </ol>
        </NeutralBox>

        {/* <NeutralBox recCat={"lit"}>
          <h2>
            <span style={{ color: "#FF851B" }}>Literature</span>: Drama
          </h2>
          <ul>
            <li>&#123; * &#125; &#124; William Shakespeare</li>
            <li>&#123; * &#125; &#124; Sophocles</li>
            <li>
              &#123;The Leenane Trilogy, The Aran Trilogy, The Pillowman &#125;
              &#124; Martin McDonagh
            </li>
            <li>Who's Afraid of Virginia Woolf? &#124; Edward Albee</li>
            <li>
              &#123; The Crucible, Death of a Salesman &#125; &#124; Arthur
              Miller
            </li>
            <li>
              &#123; Arcadia, Rosencrantz and Guildenstern Are Dead &#125;
              &#124; Tom Stoppard
            </li>
            <li>...</li>
          </ul>
        </NeutralBox> */}
        {/* <p>
            <i>
              Comparing drama on the stage and on the page is a difficult
              business. Great plays can be staged poorly, just as extraordinary
              shows can perhaps come from fairly ordinary scripts. So one almost
              has to maintain different lists: drama-as-text and drama-as-show.
              But, of course, the chief problem with shows is their
              ephemerality. Nonetheless, some of the best shows I have seen,
              that I can recall, were:
            </i>
          </p>
          <ul>
            <li>The Picture of Dorian Gray, with Sarah Snook</li>
            <li>The Burnt City, Punchdrunk</li>
            <li>...?</li>
          </ul> */}
        {/* <li>Hedda Gabler &#124; Henrik Ibsen</li> */}

        {/* <NeutralBox recCat={"lit"}>
          <h2>
            <span style={{ color: "#FF851B" }}>Literature</span>: Verse
          </h2>
          <ul>
            <li>
              <b>Epic</b>
            </li>
            <ul>
              <li>Paradise Lost &#124; John Milton</li>
              <li> &#123;The Iliad, The Odyssey &#125; &#124; Homer</li>
              <li>The Divine Comedy &#124; Dante Alighieri</li>
            </ul>
            <li>Emily Dickinson</li>
            <li>William Wordsworth</li>
            <li>Elizabeth Bishop</li>
            <li>Alfred Tennyson</li>
            <li>William Shakespeare</li>
            <li>W. B. Yeats</li>
            <li>Percy Bysshe Shelley</li>
            <li>W. H. Auden</li>
            <li>Walt Whitman</li>
            <li>John Betjeman</li>
            <li>...</li>
          </ul>
        </NeutralBox> */}

        {/* <NeutralBox recCat={"lit"}>
          <h2>
            <span style={{ color: "#FF851B" }}>Literature</span>: Technical
          </h2>
          <ul>
            <li>
              <b>Biology</b>
            </li>
            <ul>
              <li>
                <a href="http://book.bionumbers.org/">
                  Cell Biology by the Numbers
                </a>{" "}
                &#124; Milo & Phillips
              </li>
            </ul>
            <li>
              <b>Neuroscience / Cognitive Science / Psychology</b>
            </li>
            <ul>
              <li>Principles of Neural Science &#124; Kandel et al.</li>
              <li>
                Explorations in Parallel Distributed Processing &#124;
                McClelland et al.
              </li>
              <li>
                Computational Theories and Their Implementation in the Brain
                &#124; Vaina & Passingham
              </li>
              <li>Theoretical Neuroscience &#124; Dayan & Abbott</li>
              <li>
                Mathematical Foundations of Neuroscience &#124; Terman &
                Ermentrout
              </li>
              <ul>
                <li>
                  Only thereafter, move on to:{" "}
                  <a href="https://neuronaldynamics.epfl.ch/online/index.html">
                    Neuronal Dynamics
                  </a>{" "}
                  &#124; Gerstner et al.
                </li>
              </ul>
            </ul>
            <li>
              <b>Philosophy</b>
            </li>
            <ul>
              <li>
                <a href="https://jonathanweisberg.org/pdf/open-handbook-of-formal-epistemology.pdf">
                  The Open Handbook of Formal Epistemology
                </a>{" "}
                &#124; Pettigrew & Weisberg
              </li>
            </ul>
            <li>
              <b>Artificial Intelligence / Computer Science</b>
            </li>
            <ul>
              <li>
                <a href="https://www.deeplearningbook.org/">Deep Learning</a>{" "}
                &#124; Goodfellow et al.
              </li>
              <li>Reinforcement Learning &#124; Sutton & Barto</li>
            </ul>
          </ul>
        </NeutralBox> */}
        {/* <li>Information Theory, Inference, and Learning Algorithms &#124; David MacKay</li> */}
        {/* <li>Principles of Cognitive Neuroscience &#124; Dale Purves et al. </li> */}
        {/* <li>Probability Theory: The Logic of Science &#124; E. T. Jaynes</li> */}
        {/* LOGIC? MATHS? STATS? CS? PHIL? ARTS? BIO? */}

        <NeutralBox recCat={"scr"}>
          <h2>
            <span style={{ color: "#2ECC40" }}>Screen</span>: Narrative Films
          </h2>
          <p style={{ fontSize: "1.1rem" }}>
            <i>101 of my favourite films, as of March 2024.</i>
          </p>
          <br />
          <ol style={olStyle}>
            <li>
              (2023) <b>Past Lives</b>, Celine Song
            </li>
            <li>
              (2021) <b>Boiling Point</b>, Philip Barantini
            </li>
            <li>
              (2020) <b>Nomadland</b>, Chloé Zhao
            </li>
            <li>
              (2019) <b>A Hidden Life</b>, Terrence Malick
            </li>
            <li>
              (2019) <b>Parasite</b>, Bong Joon Ho
            </li>
            <li>
              (2018) <b>The Favourite</b>, Yorgos Lanthimos
            </li>
            <li>
              (2017) <b>Dunkirk</b>, Christopher Nolan
            </li>
            <li>
              (2017) <b>Get Out</b>, Jordan Peele
            </li>
            <li>
              (2017) <b>Phantom Thread</b>, Paul Thomas Anderson
            </li>
            <li>
              (2017) <b>Three Billboards Outside Ebbing, Missouri</b>, Martin
              McDonagh
            </li>
            {/* <li>(2015) <b>45 Years</b>, Andrew Haigh</li> */}
            {/* <li>(2015) <b>Mad Max: Fury Road</b>, George Miller</li> */}
            <li>
              (2015) <b>The Revenant</b>, Alejandro Iñárritu
            </li>
            {/* <li>(2014) <b>Calvary</b>, John Michael McDonagh</li> */}
            <li>
              (2014) <b>Force Majeure</b>, Ruben Östlund
            </li>
            <li>
              (2014) <b>Gone Girl</b>, David Fincher
            </li>{" "}
            {/* next */}
            <li>
              (2014) <b>The Grand Budapest Hotel</b>, Wes Anderson
            </li>
            <li>
              (2013) <b>12 Years a Slave</b>, Steve McQueen
            </li>
            <li>
              (2013) <b>Her</b>, Spike Jonze
            </li>
            <li>
              (2013) <b>Under the Skin</b>, Jonathan Glazer
            </li>
            <li>
              (2011) <b>Crazy, Stupid, Love</b>, Glenn Ficarra and John Requa
            </li>
            <li>
              (2011) <b>Drive</b>, Nicolas Winding Refn
            </li>
            <li>
              (2011) <b>Melancholia</b>, Lars von Trier
            </li>
            <li>
              (2011) <b>The Tree of Life</b>, Terrence Malick
            </li>
            <li>
              (2010) <b>Inception</b>, Christopher Nolan
            </li>
            <li>
              (2008) <b>In Bruges</b>, Martin McDonagh
            </li>
            <li>
              (2008) <b>Synecdoche, New York</b>, Charlie Kaufman
            </li>
            <li>
              (2007) <b>No Country for Old Men</b>, Joel and Ethan Coen
            </li>
            <li>
              (2007) <b>There Will Be Blood</b>, Paul Thomas Anderson
            </li>
            <li>
              (2007) <b>Zodiac</b>, David Fincher
            </li>
            <li>
              (2006) <b>The Departed</b>, Martin Scorsese
            </li>
            <li>
              (2005) <b>The New World</b>, Terrence Malick
            </li>
            <li>
              (2004) <b>Eternal Sunshine of the Spotless Mind</b>, Michel Gondry
            </li>
            <li>
              (2004) <b>Shaun of the Dead</b>, Edgar Wright
            </li>
            <li>
              (2003) <b>Lost in Translation</b>, Sofia Coppola
            </li>
            <li>
              (2001) <b>Mulholland Dr.</b>, David Lynch
            </li>
            <li>
              (2001) <b>Training Day</b>, Antoine Fuqua
            </li>
            <li>
              (2000) <b>Crouching Tiger, Hidden Dragon</b>, Ang Lee
            </li>{" "}
            {/* next */}
            <li>
              (2000) <b>Memento</b>, Christopher Nolan
            </li>
            <li>
              (1999) <b>Beau Travail</b>, Claire Denis
            </li>
            <li>
              (1999) <b>The Matrix</b>, The Wachowskis
            </li>
            <li>
              (1999) <b>Notting Hill</b>, Roger Michell
            </li>
            <li>
              (1998) <b>Saving Private Ryan</b>, Steven Spielberg
            </li>
            <li>
              (1998) <b>The Thin Red Line</b>, Terrence Malick
            </li>
            <li>
              (1996) <b>Fargo</b>, Joel and Ethan Coen
            </li>
            <li>
              (1995) <b>Casino</b>, Martin Scorsese {/* next */}
            </li>
            <li>
              (1995) <b>Heat</b>, Michael Mann
            </li>
            <li>
              (1993) <b>Groundhog Day</b>, Harold Ramis
            </li>
            <li>
              (1994) <b>Pulp Fiction</b>, Quentin Tarantino
            </li>
            <li>
              (1992) <b>Reservoir Dogs</b>, Quentin Tarantino
            </li>
            <li>
              (1990) <b>Goodfellas</b>, Martin Scorsese
            </li>
            <li>
              (1986) <b>Blue Velvet</b>, David Lynch
            </li>
            <li>
              (1986) <b>She's Gotta Have It</b>, Spike Lee
            </li>
            <li>
              (1985) <b>Brazil</b>, Terry Gilliam
            </li>
            <li>
              (1985) <b>The Color Purple</b>, Steven Spielberg
            </li>
            <li>
              (1982) <b>Fitzcarraldo</b>, Werner Herzog
            </li>
            <li>
              (1980) <b>Raging Bull</b>, Martin Scorsese
            </li>
            <li>
              (1979) <b>Apocalypse Now</b>, Francis Ford Coppola
            </li>
            <li>
              (1979) <b>Monty Python's Life of Brian</b>, Terry Jones
            </li>
            <li>
              (1977) <b>Annie Hall</b>, Woody Allen
            </li>
            <li>
              (1976) <b>Network</b>, Sidney Lumet
            </li>
            <li>
              (1976) <b>Taxi Driver</b>, Martin Scorsese
            </li>
            <li>
              (1975) <b>Barry Lyndon</b>, Stanley Kubrick
            </li>
            <li>
              (1974) <b>The Godfather Part II</b>, Francis Ford Coppola{" "}
              {/* next */}
            </li>
            <li>
              (1973) <b>The Long Goodbye</b>, Robert Altman
            </li>
            <li>
              (1972) <b>Aguirre, the Wrath of God</b>, Werner Herzog
            </li>
            <li>
              (1974) <b>The Godfather</b>, Francis Ford Coppola
            </li>
            <li>
              (1972) <b>Last Tango in Paris</b>, Bernardo Bertolucci
            </li>
            <li>
              (1968) <b>2001: A Space Odyssey</b>, Stanley Kubrick
            </li>
            <li>
              (1968) <b>Once Upon a Time in the West</b>, Sergio Leone
            </li>
            <li>
              (1967) <b>Playtime</b>, Jacques Tati
            </li>
            <li>
              (1966) <b>Blow-Up</b>, Michelangelo Antonioni
            </li>
            <li>
              (1966) <b>Persona</b>, Ingmar Bergman
            </li>
            <li>
              (1964) <b>Dr. Strangelove</b>, Stanley Kubrick
            </li>
            <li>
              (1963) <b>8&frac12;</b>, Federico Fellini
            </li>
            <li>
              (1962) <b>Lawrence of Arabia</b>, David Lean
            </li>
            <li>
              (1960) <b>The Apartment</b>, Billy Wilder
            </li>
            <li>
              (1960) <b>L'Avventura</b>, Michelangelo Antonioni
            </li>
            <li>
              (1960) <b>La Dolce Vita</b>, Federico Fellini
            </li>
            <li>
              (1959) <b>North by Northwest</b>, Alfred Hitchcock
            </li>
            <li>
              (1959) <b>The 400 Blows</b>, François Truffaut
            </li>
            <li>
              (1959) <b>Some Like It Hot</b>, Billy Wilder
            </li>
            <li>
              (1957) <b>12 Angry Men</b>, Sidney Lumet
            </li>
            <li>
              (1957) <b>Throne of Blood</b>, Akira Kurosawa
            </li>
            <li>
              (1954) <b>Rear Window</b>, Alfred Hitchcock
            </li>
            <li>
              (1954) <b>Seven Samurai</b>, Akira Kurosawa
            </li>
            <li>
              (1954) <b>Voyage to Italy</b>, Roberto Rossellini
            </li>
            <li>
              (1953) <b>Tokyo Story</b>, Yasujirō Ozu
            </li>
            <li>
              (1952) <b>Ikiru</b>, Akira Kurosawa
            </li>
            <li>
              (1952) <b>Singin' in the Rain</b>, Gene Kelly and Stanley Donen
            </li>
            {/* <li>
              (1949) <b>Late Spring</b>, Yasujirō Ozu
            </li> */}
            <li>
              (1949) <b>The Third Man</b>, Carol Reed
            </li>
            <li>
              (1948) <b>Bicycle Thieves</b>, Vittorio De Sica
            </li>
            <li>
              (1948) <b>The Red Shoes</b>, Michael Powell and Emeric Pressburger
            </li>
            <li>
              (1945) <b>Rome, Open City</b>, Roberto Rossellini
            </li>
            <li>
              (1941) <b>Citizen Kane</b>, Orson Welles
            </li>
            <li>
              (1940) <b>The Great Dictator</b>, Charlie Chaplin
            </li>
            <li>
              (1939) <b>Wuthering Heights</b>, William Wyler
            </li>
            <li>
              (1931) <b>M</b>, Fritz Lang
            </li>
            <li>
              (1931) <b>City Lights</b>, Charlie Chaplin
            </li>
            <li>
              (1928) <b>October: Ten Days That Shook the World</b>, Sergei
              Eisenstein and Grigori Aleksandrov
            </li>
            <li>
              (1927) <b>Metropolis</b>, Fritz Lang
            </li>
            <li>
              (1926) <b>The General</b>, Buster Keaton
            </li>
            <li>
              (1922) <b>Cops</b>, Buster Keaton
            </li>{" "}
            {/* next */}
            <li>
              (1920) <b>Neighbors</b>, Buster Keaton
            </li>{" "}
            {/* next */}
          </ol>
          {/* David Lynch: Mulholland Drive, Eraserhead? */}
          {/* Paisan? */}
          {/* Duck Soup? */}
          {/* The Deer Hunter? */}
          {/* Billy Wilder: Sunset Blvd., Double Indemnity? */}
          {/* Ran? */}
          {/* Collateral? */}
          {/* La Grande Illusion? */}
          {/* Safdie Brothers? */}
          {/* Ari Aster: Midsommar, Hereditary, Beau Is Afraid? */}
          {/* Robert Eggers: The Witch, The Lighthouse? */}
        </NeutralBox>

        <NeutralBox recCat={"scr"}>
          <h2>
            <span style={{ color: "#2ECC40" }}>Screen</span>: Documentary Films
          </h2>
          <ol style={olStyle}>
            <li>
              (2022){" "}
              <b>The Fire Within: A Requiem for Katia and Maurice Krafft</b>,
              Werner Herzog
            </li>
            <li>
              (2012) <b>The Act of Killing</b>, Joshua Oppenheimer
            </li>
            <li>
              (2003) <b>Touching the Void</b>, Kevin Macdonald
            </li>
            <li>
              (2002) <b>Bowling for Columbine</b>, Michael Moore
            </li>
            <li>
              (2000) <b>The Gleaners and I</b>, Agnès Varda
            </li>
            <li>
              (1998) <b>The Last Days</b>, James Moll
            </li>
            <li>
              (1985) <b>Shoah</b>, Claude Lanzmann
            </li>
            <li>
              (1977) <b>Pumping Iron</b>, George Butler and Robert Fiore
            </li>
            {/* <li>
                <a href="https://en.wikipedia.org/wiki/Hearts_of_Darkness:_A_Filmmaker%27s_Apocalypse">
                  Hearts of Darkness: A Filmmaker's Apocalypse
                </a>{" "}
                | George Hickenlooper, Fax Bahr, Eleanor Coppola
              </li> */}
            {/* <li>
                <a href="https://en.wikipedia.org/wiki/The_Fog_of_War">
                  The Fog of War
                </a>{" "}
                | Errol Morris
              </li> */}
            {/* <li>
                <a href="https://en.wikipedia.org/wiki/Hoop_Dreams">
                  Hoop Dreams
                </a>{" "}
                | Steve James
              </li> */}
          </ol>
        </NeutralBox>

        {/* <NeutralBox recCat={"scr"}>
                    <h2><span style={{color:"#2ECC40"}}>Screen</span>: Serials</h2>
                    <ul>
                        <li>Hannibal &#124; Bryan Fuller</li>
                        <li>The Wire &#124; David Simon</li>
                        <li>House &#124; David Shore</li>
                        <li>&#123; Breaking Bad, Better Call Saul &#125; &#124; Vince Gilligan</li>
                        <li>Twin Peaks &#124; David Lynch, Mark Frost</li>
                        <ul>
                            <li>And maybe, relatedly: <br /> Desperate Housewives &#124; Marc Cherry </li>
                        </ul>
                        <li>Black Books &#124; Graham Linehan</li>
                        <li>Fawlty Towers &#124; John Cleese, Connie Booth</li>
                        <li>Rick and Morty &#124; Justin Roiland, Dan Harmon</li>
                        <li>Blackadder &#124; Richard Curtis</li>
                        <li>The Show About the Show &#124; Caveh Zahedi</li>
                    </ul>
                </NeutralBox> */}

        {/* <NeutralBox recCat={"scr"}>
          <h2>
            <span style={{ color: "#2ECC40" }}>Screen</span>: Game Shows
          </h2>
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/8_Out_of_10_Cats_Does_Countdown">
                8 Out of 10 Cats Does Countdown
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Have_I_Got_News_for_You">
                Have I Got News for You
              </a>{" "}
              &#124; Harry Thompson, Jimmy Mulville
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/QI">QI</a> &#124; John
              Lloyd
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Would_I_Lie_to_You%3F_(game_show)">
                Would I Lie To You?
              </a>{" "}
              &#124; Peter Holmes
            </li>
          </ul>
        </NeutralBox> */}

        {/* <NeutralBox recCat={"scr"}>
                    <h2><span style={{color:"#2ECC40"}}>Screen</span>: Comedy Sketches</h2>
                    <ul>
                        <li>KEY & PEELE: GAY WEDDING, ...</li>
                        <li>THE DAY TODAY: WAR, ...</li>
                        <li>FUNNY OR DIE: TOYS R ME, ...</li>
                        <li>FRY AND LAURIE: ...</li>
                        <li>ROWAN ATKINSON: ...</li>
                        <li>TWO RONNIES: ...</li>
                        <li>MITCHELL AND WEBB: ...</li>
                        <li>TIM ROBINSON: THE MAN, VR DAD, GAME NIGHT (ROY DONK), ...</li>
                    </ul>
                </NeutralBox> */}

        {/* <NeutralBox recCat={"scr"}>
                    <h2><span style={{color:"#2ECC40"}}>Screen</span>: Comedians</h2>
                    <ul>
                        <li>I worship them all...</li>
                        <li>Bo Burnham</li>
                        <li>Tim Minchin</li>
                        <li>Bill Burr</li>
                        <li>Sarah Silverman</li>
                        <li>George Carlin</li>
                        <li>Steve Martin</li>
                        <li>Rodney Dangerfield</li>
                        <li>Bill Hicks</li>
                        <li>Richard Pryor</li>
                        <li>Robin Williams</li>
                        <li>Bill Bailey</li>
                        <li>Alan Davies</li>
                        <li>Don Rickles</li>
                        <li>Lenny Bruce</li>
                        <li>Norm Macdonald</li>
                        <li>Joan Rivers</li>
                        <li>Garry Shandling</li>
                    </ul>
                </NeutralBox> */}

        <NeutralBox recCat={"mus"}>
          <h2>
            <span style={{ color: "#FF4136" }}>Music</span>: Albums
          </h2>
          <ol style={olStyle}>
            <li>
              (2021) <b>Crawler</b>, Idles
            </li>
            <li>
              (2019) <b>ANIMA</b>, Thom Yorke
            </li>
            {/* <li>(2019) <b>Wasteland, Baby!</b>, Hozier</li> */}
            <li>
              (2018) <b>Joy as an Act of Resistance</b>, Idles
            </li>
            <li>
              (2016) <b>Blackstar</b>, David Bowie
            </li>
            <li>
              (2015) <b>At Least for Now</b>, Benjamin Clementine
            </li>
            <li>
              (2015) <b>To Pimp a Butterfly</b>, Kendrick Lamar
            </li>
            <li>
              (2014) <b>Caustic Love</b>, Paolo Nutini
            </li>
            {/* <li>(2014) <b>Hozier</b>, Hozier</li> */}
            <li>
              (2013) <b>AM</b>, Arctic Monkeys
            </li>
            <li>
              (2013) <b>Holy Fire</b>, Foals
            </li>
            <li>
              (2012) <b>An Awesome Wave</b>, Alt-J
            </li>
            <li>
              (2010) <b>Heligoland</b>, Massive Attack
            </li>
            <li>
              (2010) <b>My Beautiful Dark Twisted Fantasy</b>, Kanye West
            </li>
            {/* <li>(2010) <b>Recovery</b>, Eminem</li> */}
            <li>
              (2008) <b>The Seldom Seen Kid</b>, Elbow
            </li>
            <li>
              (2007) <b>In Rainbows</b>, Radiohead
            </li>
            <li>
              (2006) <b>Back to Black</b>, Amy Winehouse
            </li>
            <li>
              (2006) <b>The Eraser</b>, Thom Yorke
            </li>
            <li>
              (2006) <b>FutureSex/LoveSounds</b>, Justin Timberlake
            </li>
            <li>
              (2006) <b>Whatever People Say I Am, That's What I'm Not</b>,
              Arctic Monkeys
            </li>
            <li>
              (2004) <b>Hopes and Fears</b>, Keane
            </li>
            <li>
              (2004) <b>Madvillainy</b>, MF Doom and Madlib
            </li>
            {/* <li>(2003) <b>Hail to the Thief</b>, Radiohead</li> */}
            <li>
              (2002) <b>The Eminem Show</b>, Eminem
            </li>
            <li>
              (2001) <b>Amnesiac</b>, Radiohead
            </li>
            <li>
              (2001) <b>Drukqs</b>, Aphex Twin
            </li>
            <li>
              (2000) <b>Hybrid Theory</b>, Linkin Park
            </li>
            <li>
              (2000) <b>Kid A</b>, Radiohead
            </li>
            <li>
              (1997) <b>OK Computer</b>, Radiohead
            </li>
            <li>
              (1995) <b>The Bends</b>, Radiohead
            </li>
            <li>
              (1995) <b>...I Care Because You Do</b>, Aphex Twin
            </li>
            <li>
              (1995) <b>(What's the Story) Morning Glory?</b>, Oasis
            </li>
            <li>
              (1994) <b>The Downward Spiral</b>, Nine Inch Nails
            </li>
            <li>
              (1994) <b>Dummy</b>, Portishead
            </li>
            <li>
              (1994) <b>Grace</b>, Jeff Buckley
            </li>
            <li>
              (1994) <b>Illmatic</b>, Nas
            </li>
            <li>
              (1994) <b>Ready to Die</b>, The Notorious B.I.G.
            </li>
            <li>
              (1992) <b>Rage Against the Machine</b>, Rage Against the Machine
            </li>
            <li>
              (1991) <b>Metallica</b>, Metallica
            </li>
            <li>
              (1991) <b>Nevermind</b>, Nirvana
            </li>
            <li>
              (1984) <b>Hatful of Hollow</b>, The Smiths
            </li>
            <li>
              (1983) <b>Apollo: Atmospheres and Soundtracks</b>, Brian Eno
            </li>
            <li>
              (1983) <b>Speaking in Tongues</b>, Talking Heads
            </li>
            <li>
              (1980) <b>Back in Black</b>, AC/DC
            </li>
            <li>
              (1980) <b>Remain in Light</b>, Talking Heads
            </li>
            <li>
              (1979) <b>Breakfast in America</b>, Supertramp
            </li>
            <li>
              (1979) <b>The Wall</b>, Pink Floyd
            </li>
            <li>
              (1977) <b>Bat Out of Hell</b>, Meatloaf
            </li>
            <li>
              (1977) <b>Rumours</b>, Fleetwood Mac
            </li>
            <li>
              (1975) <b>Wish You Were Here</b>, Pink Floyd
            </li>
            <li>
              (1974) <b>Crime of the Century</b>, Supertramp
            </li>
            <li>
              (1973) <b>The Dark Side of the Moon</b>, Pink Floyd
            </li>
            <li>
              (1971) <b>IV</b>, Led Zeppelin
            </li>
            <li>
              (1971) <b>Blue</b>, Joni Mitchell
            </li>
            <li>
              (1971) <b>Hunky Dory</b>, David Bowie
            </li>
            <li>
              (1971) <b>What's Going On</b>, Marvin Gaye
            </li>
            <li>
              (1968) <b>Astral Weeks</b>, Van Morrison
            </li>
            <li>
              (1967) <b>Sgt. Pepper's Lonely Hearts Club Band</b>, The Beatles
            </li>
            <li>
              (1966) <b>Pet Sounds</b>, The Beach Boys
            </li>
            <li>
              (1965) <b>I Put A Spell On You</b>, Nina Simone
            </li>
            {/* Tom Waits */}
            {/* Red Hot Chili Peppers? */}
            {/* Highway 61 Revisited */}
            {/* Shock Value, Timbaland? */}
            {/* Untrue, Burial */}
            {/* Injury Reserve? Death Grips? */}
            {/* Unknown Pleasures, Joy Division? */}
            {/* The Dock of the Bay, Otis Redding? */}
            {/* Max Richter? Floating Points? Instrumental? Four Tet? */}
            {/* White Pony, Deftones */}
            {/* Sonny Stitt? MIA? The Smile? */}
            {/* Beastie Boys? Beth Gibbons? */}
            {/* I'm New Here, Gil Scott-Heron? */}
            {/* Led Zeppelin? Eric Clapton? Young Fathers? */}
            {/* Go Further in Lightness, Gang of Youths? */}
            {/* Random Access Memories? */}
            {/* Operation: Doomsday, MF Doom */}
            {/* The Low End Theory, A Tribe Called Quest */}
            {/* Tapestry, Carole King */}
            {/* Overgrown, James Blake? */}
            {/* Mm..Food, MF Doom */}
            {/* After the Gold Rush, Neil Young */}
            {/* Horses, Patti Smith */}
            {/* Hotel California, The Eagles */}
            {/* REM? UNKLE? */}
            {/* Lauryn Hill, ‘The Miseducation of Lauryn Hill’ */}
            {/* Disintegration, The Cure */}
            {/* The Queen Is Dead, The Smiths */}
            {/* Innervisions, Stevie Wonder */}
            {/* The Blueprint, Jay Z */}
            {/* Graceland, Paul Simon */}
            {/* Michael Jackson */}
            {/* Are You Experienced, The Jimi Hendrix Experience */}
            {/* A Love Supreme, John Coltrane */}
            {/* Bitches Brew, Miles Davis */}
            {/* Kind of Blue, Miles Davis */}
            {/* Paul's Boutique, Beastie Boys */}
            {/* Aquemini, OutKast */}
            {/* I Never Loved a Man the Way I Love You, Aretha Franklin */}
            {/* Born Like This, MF Doom */}
            {/* Homogenic, Björk */}
            {/* The Joshua Tree, U2 */}
            {/* Enter the Wu-Tang (36 Chambers), Wu-Tang Clan */}
            {/* <li>Ritual Spirit, Massive Attack</li> */}
            {/* <li>Goodbye Yellow Brick Road, Elton John</li> */}
            {/* <li><i>Tame Impala? Floating Points? Beatles? Mingus? Davis?</i></li>
                        <li>Portishead<li>
                        <li>Doolittle &#124; Pixies</li>
                        <li>&#123; Complete and Unbelievable, The Dock of the Bay &#125; &#124; Otis Redding</li>
                        <li>To Pimp A Butterfly &#124; Kendrick Lamar</li>
                        <li>Random Access Memories &#124; Daft Punk</li>
                        <li>Kintsugi &#124; Death Cab for Cutie</li>
                        <li>Mingus Mingus Mingus Mingus Mingus &#124; Charles Mingus</li>
                        <li>&#123; ...I Care Because You Do, Drukqs &#125; &#124; Aphex Twin</li> */}
          </ol>
        </NeutralBox>

        <NeutralBox recCat={"mus"}>
          <h2>
            <span style={{ color: "#FF4136" }}>Music</span>: Artists
          </h2>
          <ul style={{marginLeft:"0.5rem"}}>
            <li>
              Pink Floyd, The Beatles, Led Zeppelin, Queen, Talking Heads, ...
            </li>
            <li>
              Nina Simone, Amy Winehouse, Otis Redding, Paolo Nutini, Hozier,
              Joni Mitchell, Van Morrison, ...
            </li>
            <li>
              Radiohead, Jeff Buckley, Thom Yorke, Portishead, Tricky, Alt-J,
              ...
            </li>
            <li>
              Bee Gees, Elton John, Stevie Wonder, Supertramp, David Bowie,
              Michael Jackson, ...
            </li>
            <li>
              Massive Attack, Brian Eno, Aphex Twin, Flying Lotus, Tame Impala,
              Floating Points, Four Tet, ...
            </li>
            <li>
              Wu Tang Clan, Eminem, Nas, MF Doom, Notorious BIG, Kanye West,
              Kendrick Lamar, Aesop Rock, Beastie Boys, ...
            </li>
            <li>Linkin Park, Audioslave, IDLES, Foals, Gang of Youths, ...</li>
            <li>
              Arctic Monkeys, Elbow, Red Hot Chili Peppers, Keane, Young
              Fathers, Oasis, ...
            </li>
          </ul>
        </NeutralBox>
        {/* Björk? */}

        {/* <h2><span style={{color:"#FF4136"}}>Music</span>: Songs</h2>
                <ul>
                    <li>All I Want, Joni Mitchell</li>
                    <li>Both Sides Now, Joni Mithcell</li>
                    <li>Lately, Stevie Wonder</li>
                    <li>Armchairs, Andrew Bird</li>
                </ul> */}

        <NeutralBox recCat={"pod"}>
          <h2>
            <span style={{ color: "#B10DC9" }}>Podcasts/Radio</span>
          </h2>
          <ul style={{ marginLeft: "0.5rem" }}>
            <li>
              <b>Making Sense</b> &#124; Sam Harris {/* general */}
            </li>
            <li>
              <b>Mindscape</b> &#124; Sean Carroll {/* science, philosophy */}
            </li>
            <li>
              <b>Conversations with Tyler</b> &#124; Tyler Cowen {/* general */}
            </li>
            <li>
              <b>The 80,000 Hours Podcast</b> &#124; Rob Wiblin{" "}
              {/* philosophy, technology, philanthropy */}
            </li>
            <li>
              <b>Dwarkesh Podcast</b> &#124; Dwarkesh Patel
            </li>
            <li>
              <b>In Our Time</b> (BBC Radio 4) &#124; Melvyn Bragg{" "}
              {/* general */}
            </li>
            <li>
              <b>The Inquiry</b> (BBC World Service) {/* current affairs */}
            </li>
            <li>
              <b>The Daily</b> (New York Times) &#124; Barbaro & Tavernise
            </li>
            <li>
              <b>The Ezra Klein Show</b> (New York Times) &#124; Ezra Klein{" "}
              {/* general */}
            </li>
            <li>
              <b>Brain Inspired</b> &#124; Paul Middlebrooks{" "}
              {/* neuroscience, artificial intelligence */}
            </li>
            <li>
              <b>After On</b> &#124; Rob Reid {/* technology */}
            </li>
            <li>
              <b>The Partially Examined Life</b> &#124; Linsenmayer et al.{" "}
              {/* philosophy, literature */}
            </li>
            <li>
              <b>Very Bad Wizards</b> &#124; Sommers & Pizarro{" "}
              {/* philosophy, psychology, literature, film */}
            </li>
            <li>
              <b>Cinema of Meaning</b> &#124; Flight & van der Linden{" "}
              {/* film */}
            </li>
            <li>
              <b>Desert Island Discs</b> (BBC Radio 4) &#124; Lauren Laverne{" "}
              {/* music */}
            </li>
            {/* <li>
              <b>Intelligence Squared</b> debates
            </li> */}
            {/* <li>
              <b>Philosophy Bites</b> &#124; Edmonds & Warburton philosophy
            </li> */}
            <li>
              <b>Cognitive Revolution</b> &#124; Cody Kommers{" "}
              {/* neuroscience, psychology, academia */}
            </li>
            <li>
              <b>Uncommon Knowledge</b> (Hoover Institution) &#124; Peter
              Robinson {/* politics, history, economics */}
            </li>
            {/* <li>
              <b>Training Beta</b> &#124; Neely Quinn rock climbing
            </li> */}
            <li>
              <b>The Dissenter</b> &#124; Ricardo Lopes{" "}
              {/* science, philosophy, society */}
            </li>
            <li>
              <b>The Rest Is Politics</b> &#124; Stewart & Campbell
            </li>
            <li>
              <b>The Future of Life Podcast</b> &#124; Gus Docker
            </li>
          </ul>
        </NeutralBox>

        {/* <NeutralBox recCat={"edu"}>
          <h2>
            <span style={{ color: "#FFD700" }}>Education</span>
          </h2>
          <ul>
            <li>
              <b>Coursera</b>
            </li>
            <ul>
              <li>
                <a href="https://www.coursera.org/specializations/machine-learning-introduction">
                  Machine Learning
                </a>{" "}
                &#124; Andrew Ng &#124; Stanford
              </li>
              <li>
                <a href="https://www.coursera.org/specializations/deep-learning?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA_deep-learning_deeplearning-ai_FTCOF_specializations_country-UK-country-GB&campaignid=19970507700&adgroupid=154882314224&device=c&keyword=andrew%20ng%20deep%20learning%20course&matchtype=b&network=g&devicemodel=&adposition=&creativeid=654977645500&hide_mobile_promo&gclid=Cj0KCQjwx5qoBhDyARIsAPbMagAOnKbIvdOWltDmZOm5CQiqL9HiI0IblIdOX1eNPS1KpUlA6X953QcaAg1qEALw_wcB">
                  Deep Learning Specialization
                </a>{" "}
                &#124; Andrew Ng &#124; deeplearning.ai
              </li>
            </ul>
            <li>
              <b>MIT OpenCourseWare</b>
            </li>
            <ul>
              <li>
                <a href="https://ocw.mit.edu/courses/9-13-the-human-brain-spring-2019/">
                  The Human Brain
                </a>{" "}
                &#124; Nancy Kanwisher &#124; MIT
              </li>
              <li>
                <a href="https://ocw.mit.edu/courses/21l-011-the-film-experience-fall-2013/">
                  The Film Experience
                </a>{" "}
                &#124; David Thorburn &#124; MIT
              </li>
              <li>
                Calculus Revisited [
                <a href="https://ocw.mit.edu/courses/res-18-006-calculus-revisited-single-variable-calculus-fall-2010/">
                  univariate
                </a>
                ] [
                <a href="https://ocw.mit.edu/courses/res-18-007-calculus-revisited-multivariable-calculus-fall-2011/">
                  multivariate
                </a>
                ] &#124; Herb Gross &#124; MIT
              </li>
              <li>
                <a href="https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/">
                  Linear Algebra
                </a>{" "}
                &#124; Gilbert Strang &#124; MIT
              </li>
            </ul>
            <li>
              <b>EdX</b>
            </li>
            <ul>
              <li>
                <a href="https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science?webview=false&campaign=CS50%27s+Introduction+to+Computer+Science&source=edx&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fcs50">
                  CS50
                </a>{" "}
                &#124; David Malan &#124; Harvard
              </li>
              <li>Probability &#124; Joseph Blitzstein &#124; Harvard</li>
              <li>
                &#123;{" "}
                <a href="https://www.edx.org/learn/computer-programming/ecole-polytechnique-federale-de-lausanne-neuronal-dynamics?index=product&queryID=ebb73c4947530ed98df980787faf3a28&position=4&results_level=first-level-results&term=epfl+neuroscience&objectID=course-907185f6-0f8e-4e58-9099-4521428a4712&campaign=Neuronal+Dynamics&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch">
                  Neuronal Dynamics
                </a>
                ,{" "}
                <a href="https://www.edx.org/learn/biology-life-sciences/ecole-polytechnique-federale-de-lausanne-computational-neuroscience-neuronal-dynamics-of-co?index=product&queryID=ebb73c4947530ed98df980787faf3a28&position=1&results_level=first-level-results&term=epfl+neuroscience&objectID=course-d9db31e0-a833-427b-b2f3-77b5b926cf13&campaign=Computational+Neuroscience%3A+Neuronal+Dynamics+of+Cognition&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch">
                  Computational Neuroscience
                </a>{" "}
                &#125; &#124; Wulfram Gerstner &#124; EPFL
              </li>
            </ul>
            <li>
              <b>The Great Courses</b>
            </li>
            <ul>
              <li>Literary Modernism &#124; Jeffrey Perl</li>
              <li>The Story of Human Language &#124; John McWhorter</li>
              <li>What Darwin Didn't Know &#124; Scott Solomon</li>
              <li>
                Masterworks of Early 20th-Century Literature &#124; David
                Thorburn
              </li>
              <li>
                A History of the US Economy in the 20th Century &#124; Timothy
                Taylor
              </li>
            </ul>
            <li>
              <b>YouTube</b>
            </li>
            <ul>
              <li>
                <a href="https://www.youtube.com/playlist?list=PLyGKBDfnk-iDVpUGSR_GlDmQrZOS0Lk6k">
                  Functional MRI Bootcamp
                </a>{" "}
                &#124; Rebecca Saxe &#124; MIT
              </li>
              <li>
                <a href="https://www.youtube.com/playlist?list=PLzWd5Ny3vW3R_1YqkqneW99MaJvmYXg11">
                  The Analytic Tradition
                </a>{" "}
                &#124; Daniel Bonevac &#124; UT Austin
              </li>
            </ul>
            <li>
              <b>Other</b>
            </li>
            <ul>
              <li>Practical Deep Learning for Coders &#124; fast.ai</li>
            </ul>
          </ul>
        </NeutralBox> */}
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default Recommendations;
