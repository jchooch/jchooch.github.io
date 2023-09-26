import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import AsideBox from "../../components/AsideBox/AsideBox";
import NeutralBox from "../../components/NeutralBox/NeutralBox";
import Footer from "../../components/Footer/Footer";
import { MathJaxContext, MathJax } from "better-react-mathjax";

function NoteRecommendationsPage() {
    return (
        <MathJaxContext>
            <Header thisTitle={"Recommendations"} returnDestination={"Notes"}/>

            <main>
                <p>I've been helplessly influenced by media of all sorts. I'm recording things which I've found particularly affecting – and which I recommend to others – below, in the hopes that others will find them useful or interesting or enriching or beautiful and so as to exculpate me in so far as my views are accidental plagiarisms, as they so often are. These lists are quite incomplete, but I will try to only expand them slowly and carefully.</p>
                <br />
                <p>Wilde famously called criticism "the record of one's own soul" and "the only civilised form of autobiography". I like to think of <i>lists of recommendations</i> as the lowest and least civilised form of autobiography. Hopefully, on balance, that makes them worthwhile, even if only just.</p>
                <br />
                <p>The lists are arranged into a few categories: <span style={{color:"#0074D9"}}>Web</span>, <span style={{color:"#FF851B"}}>Literature</span>, <span style={{color:"#2ECC40"}}>Screen</span>, <span style={{color:"#FF4136"}}>Music</span>, <span style={{color:"#B10DC9"}}>Podcasts/Radio</span>, and <span style={{color:"#FFD700"}}>Education</span>.</p>
                
                <AsideBox title={"Notes, especially on recommended artworks."}>
                    <ul>
                        <li>These are things that I've consumed and loved or found affecting. I have really tried to be selective. These tend to be at the intersection of what I consider to be great and what I personally love. Especially noisy lists are labelled with ⚠, and should be taken with a <i>bucket</i> of salt.</li>
                        <li>I'm wary that some of my recommendations will be very obvious. I'm not too shy about this. In the domain of art, I think that putative "great artworks", e.g. the films of <a href="https://en.wikipedia.org/wiki/Akira_Kurosawa">Kurosawa</a> or the music of <a href="https://en.wikipedia.org/wiki/The_Beatles">The Beatles</a>, are almost always <i>actually amazing</i>, even if personal taste still provides degrees of freedom. Much of the value of art is in its ability to illustrate new ways of thinking, feeling, perceiving, and understanding, which can have objective aspects. I think we should all spend more time consuming classic works and less time on recent works.</li>
                        <li>Hopefully, my more unusual inclusions will point people to good work they would not find otherwise and my more commonplace inclusions will frustrate people enough to spur them on in exploration!</li>
                        <li>I think I've consumed relatively many films, books, etc. Nonetheless, I have obviously consumed a vanishing proportion of what's out there, so the following lists are also biased by what I happen to have been exposed to.</li>
                        <ul>
                            <li>E.g. I suspect I should watch and could love <a href="https://en.wikipedia.org/wiki/Tokyo_Story">Tokyo Story</a> or <a href="https://en.wikipedia.org/wiki/Beau_Travail">Beau Travail</a>.</li>
                            <li>E.g. I suspect I should watch and could love <a href="https://en.wikipedia.org/wiki/The_Sopranos">The Sopranos</a> or <a href="https://en.wikipedia.org/wiki/Deadwood_(TV_series)">Deadwood</a>.</li>
                            <li>E.g. I suspect I should read and could love <a href="https://en.wikipedia.org/wiki/Anna_Karenina">Anna Karenina</a> or <a href="https://en.wikipedia.org/wiki/Madame_Bovary">Madame Bovary</a>.</li>
                            <li>E.g. I suspect I should listen to and could love <a href="https://en.wikipedia.org/wiki/Voodoo_(D%27Angelo_album)">Voodoo</a> or <a href="https://en.wikipedia.org/wiki/Tapestry_(Carole_King_album)">Tapestry</a>.</li>
                        </ul>
                        <li>If you think you know of something I might love enough to recommend to others, please let me know! See the page footer for ways you can reach me.</li>
                    </ul>
                </AsideBox>

                <NeutralBox recCat={"web"}>
                    <h2><span style={{color:"#0074D9"}}>Web</span>: Fora</h2>
                    <ul>
                        <li><a href="https://www.lesswrong.com/">LessWrong</a></li>
                        <li><a href="https://forum.effectivealtruism.org/">Effective Altruism Forum</a></li>
                        <li><a href="https://progressforum.org/">Progress Forum</a></li>
                        <li><a href="https://www.alignmentforum.org/">Alignment Forum</a></li>
                        <li><a href="https://news.ycombinator.com/">Hacker News</a></li>
                    </ul>
                </NeutralBox>  

                <NeutralBox recCat={"web"}>
                    <h2><span style={{color:"#0074D9"}}>Web</span>: Blogs and Newsletters</h2>
                    <ul>
                        <li><a href="https://waitbutwhy.com/archive">Wait But Why</a> &#124; Tim Urban</li>
                        <li><a href="https://rootsofprogress.org/">The Roots of Progress</a> &#124; Jason Crawford</li>
                        {/* <li><a href="http://blog.sigfpe.com/">A Neighbourhood of Infinity</a></li> */}
                        <li><a href="https://www.themarginalian.org/">The Marginalian</a> &#124; Maria Popova</li>
                        <li><a href="https://www.overcomingbias.com/">Overcoming Bias</a> &#124; Robin Hanson</li>
                        <li><a href="https://gwern.net/">Gwern &#124; Gwern Branwen</a></li>
                        {/* <li><a href="https://meaningness.com/">Meaningness</a> &#124; David Chapman</li> */}
                        <li><a href="https://lilianweng.github.io/">Lil'Log</a> &#124; Lilian Weng</li>
                        <li><a href="https://marginalrevolution.com/">Marginal Revolution</a> &#124; Tyler Cowen, Alex Tabarrok</li>
                        <li><a href="https://meltingasphalt.com/">Melting Asphalt</a> &#124; Kevin Simler</li>
                        <li><a href="https://scottaaronson.blog/">Shtetl-Optimized</a> &#124; Scott Aaronson</li>
                        <li><a href="https://bounded-regret.ghost.io/">Bounded Regret</a> &#124; Jacob Steinhardt</li>
                        <li><a href="http://m-phi.blogspot.com/">M-Phi</a> &#124; Richard Pettigrew</li>
                        <li>&#123; <a href="https://slatestarcodex.com/">Slate Star Codex</a>, <a href="https://astralcodexten.substack.com/">Astral Codex Ten</a> &#125; &#124; Scott Alexander</li>
                        <li><a href="https://bjlkeng.io/">Bounded Rationality</a> &#124; Brian Keng</li>
                        <li>...</li>
                    </ul>
                </NeutralBox>                

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

                <NeutralBox recCat={"web"}>
                    <h2><span style={{color:"#0074D9"}}>Web</span>: References</h2>
                    <ul>
                        <li><a href="https://plato.stanford.edu/contents.html">Stanford Encyclopedia of Philosophy</a></li>
                        <li><a href="https://arbital.com/">Arbital</a></li>
                        <li><a href="https://ourworldindata.org/">Our World in Data</a></li>
                        {/* <li>KHAN ACADEMY</li>
                        <li>SCIENCE DAILY</li> */}
                        {/* <li><a href="https://brilliant.org/wiki/best/">Brilliant Wiki</a></li> */}
                        {/* <li>INVESTOPEDIA</li>
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
                        <li>https://libguides.salemstate.edu/referencesources</li> */}
                    </ul>
                </NeutralBox>

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
                    <h2><span style={{color:"#FF851B"}}>Literature</span>: Fiction</h2>
                    <ul>
                        <li>&#123; Ulysses, A Portrait of the Artist as a Young Man &#125; &#124; James Joyce</li>
                        <li>Wise Blood &#124; Flannery O'Connor</li>
                        <li>Permutation City &#124; Greg Egan</li>
                        {/* <li>The Call of the Wild &#124; Jack London</li> */}
                        <li>Moby Dick &#124; Herman Melville</li>
                        <li>My Man Jeeves &#124; P. G. Wodehouse</li>
                        <li>&#123; Infinite Jest, The Pale King &#125; &#124; David Foster Wallace</li>
                        <li>The Hitchhiker's Trilogy &#124; Douglas Adams</li>
                        <li>The Outline Trilogy &#124; Rachel Cusk</li>
                        <li>Middlemarch &#124; George Eliot</li>
                        <li>Jane Eyre &#124; Charlotte Brontë</li>
                        <li>Alice's Adventures in Wonderland &#124; Lewis Carroll</li>
                        <li>&#123; Crime and Punishment, The Brothers Karamazov, Notes from the Underground &#125; &#124; Fyodor Dostoyevsky</li>
                        <li>...</li>
                    </ul>
                </NeutralBox>
                
                <NeutralBox recCat={"lit"}>
                    <h2><span style={{color:"#FF851B"}}>Literature</span>: Short Fiction</h2>
                    <ul>
                        <li>Dubliners &#124; James Joyce</li>
                        <li>The Things They Carried &#124; Tim O'Brien</li>
                        <li>&#123; ... &#125; &#124; Anton Chekhov</li>
                    </ul>
                </NeutralBox>
                
                <NeutralBox recCat={"lit"}>
                    <h2><span style={{color:"#FF851B"}}>Literature</span>: Biography</h2>
                    <ul>
                        {/* <li>WALTER ISAACSON</li> */}
                        {/* <li>BOSWELL ON DR JOHNSON</li> */}
                        <li>Parfit &#124; David Edmonds</li>
                        <li>Frank Ramsey &#124; Cheryl Misak</li>
                        <li>The Undoing Project &#124; Michael Lewis</li>
                        <li>My Struggle &#124; Karl Ove Knausgård</li>
                        <ul>
                            <li>I've only read the first two volumes so far.</li>
                        </ul>
                        <li>On the Move &#124; Oliver Sacks</li>
                        <li>The Benn Diaries &#124; Tony Benn</li>
                        <li>In Search of Memory &#124; Eric Kandel</li>
                    </ul>
                </NeutralBox>
                
                {/* <NeutralBox recCat={"lit"}>
                    <h2><span><span style={{color:"#FF851B"}}>Literature</span></span>: Compilations</h2>
                    <ul>
                        <li>ESSAYS</li>
                        <li>The Portable Atheist &#124; Christopher Hitchens</li>
                        <ul>
                            <li>I promise the content is better than the title.</li>
                        </ul>
                        <li>Essais &#124; Michel de Montaigne</li>
                        <li>Mortal Questions &#124; Thomas Nagel</li>
                        <li>Against Interpretation and Other Essays &#124; Susan Sontag</li>
                        <li>Self-Reliance and Other Essays &#124; Ralph Waldo Emerson</li>
                    </ul>
                </NeutralBox> */}
                
                <NeutralBox recCat={"lit"}>
                    <h2><span style={{color:"#FF851B"}}>Literature</span>: Non-Fiction</h2>
                    <ul>
                        <li><b>Maths, Physics</b></li>
                        <ul>
                            <li>Quantum Computing Since Democritus &#124; Scott Aaronson</li>
                            <li>&#123; The Beginning of Infinity, The Fabric of Reality &#125; &#124; David Deutsch</li>
                            <li>How to Measure Anything &#124; Douglas Hubbard</li>
                        </ul>
                        <li><b>Cognitive/Computer Science, AI, Linguistics</b></li>
                        <ul>
                            <li>What Is Thought? &#124; Eric Baum</li>
                            <li>Superintelligence &#124; Nick Bostrom</li>
                            <li>The Alignment Problem &#124; Brian Christian</li>
                            <li>Gödel, Escher, Bach &#124; Douglas Hofstadter</li>
                            <li>&#123; Code, The Annotated Turing &#125; &#124; Charles Petzold</li>
                            <li>&#123; The Stuff of Thought, The Language Instinct &#125; &#124; Steven Pinker</li>
                        </ul>
                        <li><b>Self-Help, Spirituality</b></li>
                        <ul>
                            <li>How to Win Friends and Influence People &#124; Dale Carnegie</li>
                            <li>The Flight of the Garuda &#124; Keith Dowman</li>
                            <li>On Having No Head &#124; Douglas Harding</li>
                            <li>Waking Up &#124; Sam Harris</li>
                        </ul>
                        <li><b>Neuroscience, Psychology, Psychiatry</b></li>
                        <ul>
                            <li>Consciousness and the Brain &#124; Stanislas Dehaene</li>
                            <li>The Symbolic Species &#124; Terrence Deacon</li>
                            <li>The Organization of Learning &#124; C. Randy Gallistel</li>
                            <li>What Makes Us Smart &#124; Sam Gershman</li>
                            <li>The Principles of Psychology &#124; William James</li>
                            <li>How the Mind Works &#124; Steven Pinker</li>
                            <li>&#123; The Man Who Mistook His Wife For A Hat, Awakenings, An Anthropologist on Mars, Hallucinations, Seeing Voices &#125; &#124; Oliver Sacks</li>
                            <li>&#123; The Noonday Demon, Far From the Tree &#125; &#124; Andrew Solomon</li>
                        </ul>
                        <li><b>Biology, Medicine</b></li>
                        <ul>
                            <li>The Evolution of Cooperation &#124; Robert Axelrod</li>
                            <li>The Selfish Gene &#124; Richard Dawkins</li>
                            <li>Evolution: A View from the 21st Century &#124; James Shapiro</li>
                        </ul>
                        <li><b>Philosophy, Theology, Religion</b></li>
                        <ul>
                            <li>&#123; Confessions, The City of God &#125; &#124; Augustine of Hippo</li>
                            <li>The Conscious Mind &#124; David Chalmers</li>
                            <li>Against Method &#124; Paul Feyerabend</li>
                            <li>Fact, Fiction, and Forecast &#124; Nelson Goodman</li>
                            <li>Studies in the Way of Words &#124; Paul Grice</li>
                            <li>A Treatise of Human Nature &#124; David Hume</li>
                            <li>&#123; Doing Good Better, What We Owe the Future &#125; &#124; William MacAskill</li>
                            <li>After Virtue &#124; Alasdair MacIntyre</li>
                            <li>&#123; Beyond Good and Evil, Daybreak &#125; &#124; Friedrich Nietzsche</li>
                            <li>The Precipice &#124; Toby Ord</li>
                            <li>Reasons and Persons &#124; Derek Parfit</li>
                            <li>&#123; Word and Object, From a Logical Point of View &#125; &#124; Willard Van Orman Quine</li>
                            <li>The Methods of Ethics &#124; Henry Sidgwick</li>
                            <li>&#123; Tractatus Logico-Philosophicus, Philosophical Investigations &#125; &#124; Ludwig Wittgenstein</li>
                        </ul>
                        <li><b>History, Anthropology, Social Science</b></li>
                        <ul>
                            <li>Guns, Germs, and Steel &#124; Jared Diamond</li>
                            <li>&#123; The Origins of Political Order, Political Order and Political Decay &#125; &#124; Francis Fukuyama</li>
                            <li>&#123; The Secret of Our Success, The WEIRDest People in the World &#125; &#124; Joseph Henrich</li>
                            <li>The Dead Hand &#124; David Hoffman</li>
                            <li>Why We're Polarized &#124; Ezra Klein</li>
                            <li>&#123; The History of Modern Britain, The Making of Modern Britain, A History of the World &#125; &#124; Andrew Marr</li>
                            <li>Coming Apart &#124; Charles Murray</li>
                            <li>&#123; The Better Angels of Our Nature, Englightenment Now &#125; &#124; Steven Pinker</li>
                            <li>&#123; Bowling Alone, Our Kids &#125; &#124; Robert Putnam</li>
                            <li>The Strategy of Conflict &#124; Thomas Schelling</li>
                            <li>Capitalism, Socialism, and Democracy &#124; Joseph Schumpeter</li>
                        </ul>
                        <li><b>Literature, Journalism, Humanities</b></li>
                        <ul>
                            <li>&#123; The Sinner and the Saint, The Most Dangerous Book &#125; &#124; Kevin Birmingham</li>
                            <li>&#123; Shakespeare: The Invention of the Human, How to Read and Why &#125; &#124; Harold Bloom</li>
                            <li>Cultural Amnesia &#124; Clive James</li>
                            <li>Strangers Drowning &#124; Larissa MacFarquhar</li>
                        </ul>
                    </ul>
                </NeutralBox>
                
                <NeutralBox recCat={"lit"}>
                    <h2><span style={{color:"#FF851B"}}>Literature</span>: Drama</h2>
                    <ul>
                        <li>&#123; ... &#125; &#124; William Shakespeare</li>
                        <li>&#123;The Leenane Trilogy, The Aran Trilogy, The Pillowman &#125; &#124; Martin McDonagh</li>
                        <li>Who's Afraid of Virginia Woolf? &#124; Edward Albee</li>
                        <li>Death of a Salesman &#124; Arthur Miller</li>
                        <li>&#123; Arcadia, Rosencrantz and Guildenstern Are Dead &#125; &#124; Tom Stoppard</li>
                        <li>...</li>
                    </ul>
                </NeutralBox>
                
                <NeutralBox recCat={"lit"}>
                    <h2><span style={{color:"#FF851B"}}>Literature</span>: Verse</h2>
                    <ul>
                        <li><b>Epic</b></li>
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
                </NeutralBox>
                
                <NeutralBox recCat={"lit"}>
                    <h2><span style={{color:"#FF851B"}}>Literature</span>: Technical</h2>
                    <ul>
                        {/* <li>Information Theory, Inference, and Learning Algorithms &#124; David MacKay</li> */}
                        {/* <li>Probability Theory: The Logic of Science &#124; E. T. Jaynes</li> */}
                        <li><a href="https://jonathanweisberg.org/pdf/open-handbook-of-formal-epistemology.pdf">The Open Handbook of Formal Epistemology</a> &#124; Richard Pettigrew, Jonathan Weisberg</li>
                        <li><a href="http://book.bionumbers.org/">Cell Biology by the Numbers</a> &#124; Ron Milo, Rob Phillips</li>
                        <li>Explorations in Parallel Distributed Processing &#124; James McClelland et al.</li>
                        <li><a href="https://www.deeplearningbook.org/">Deep Learning</a> &#124; Ian Goodfellow et al.</li>
                        <li>Principles of Neural Science &#124; Eric Kandel et al.</li>
                        <li>Mathematical Foundations of Neuroscience &#124; David Terman, Bard Ermentrout</li>
                        <ul>
                            <li>Only thereafter, move on to: <a href="https://neuronaldynamics.epfl.ch/online/index.html">Neuronal Dynamics</a> &#124; Wulfram Gerstner et al.</li>
                        </ul>
                        {/* <li>Principles of Cognitive Neuroscience &#124; Dale Purves et al. </li> */}
                        <li>Theoretical Neuroscience &#124; Peter Dayan, Larry Abbott</li>
                        <li>Reinforcement Learning &#124; Richard Sutton, Andrew Barto</li>
                        <li>Computational Theories and Their Implementation in the Brain &#124; Lucia Vaina, Richard Passingham</li>
                    </ul>
                </NeutralBox>

                <NeutralBox recCat={"scr"}>
                    <h2><span style={{color:"#2ECC40"}}>Screen</span>: Films</h2>
                    <ul>
                        <li>&#123; 2001: A Space Odyssey, Dr. Strangelove, Barry Lyndon &#125; &#124; Stanley Kubrick</li>
                        <li>&#123; There Will Be Blood, Phantom Thread, Punch-Drunk Love &#125; &#124; Paul Thomas Anderson</li>
                        <li>&#123; The Thin Red Line, The Tree of Life, A Hidden Life &#125; &#124; Terrence Malick</li>
                        <li>&#123; Rear Window, North by Northwest &#125; &#124; Alfred Hitchcock</li>
                        <li>&#123; In Bruges; Three Billboards Outside Ebbing, Missouri &#125; &#124; Martin McDonagh</li>
                        <ul>
                            <li>Related, and fantastic: &#123; Calvary, The Forgiven &#125; &#124; John Michael McDonagh</li>
                        </ul>
                        <li>Eternal Sunshine of the Spotless Mind &#124; Michel Gondry</li>
                        <li>Parasite &#124; Bong Joon-ho</li>
                        <li>Synecdoche, New York &#124; Charlie Kaufman</li>
                        <li>&#123; Reservoir Dogs, Pulp Fiction, Inglourious Basterds, Once Upon A Time In Hollywood &#125; &#124; Quentin Tarantino</li>
                        <li>Singin' in the Rain &#124; Gene Kelly, Stanley Donen</li>
                        <li>The Matrix &#124; The Wachowskis</li>
                        <li>Citizen Kane &#124; Orson Welles</li>
                        <li>&#123; The Godfather (I, II), Apocalypse Now (Final Cut) &#125; &#124; Francis Ford Coppola</li>
                        <li>&#123; Memento, Inception, Dunkirk &#125; &#124; Christopher Nolan</li>
                        <li>The Grand Budapest Hotel, The French Dispatch &#124; Wes Anderson</li>
                        <li>Brazil &#124; Terry Gilliam</li>
                        <li>Her &#124; Spike Jonze</li>
                        <li>&#123; Ikiru, Seven Samurai, Throne of Blood &#125; &#124; Akira Kurosawa</li>
                        <li>8 1/2 &#124; Federico Fellini</li>
                        <li>&#123; Aguirre, Wrath of God; Fitzcarraldo &#125; &#124; Werner Herzog</li>
                        <li>The Apartment &#124; Billy Wilder</li>
                        <li>The Revenant &#124; Alejandro Iñárritu</li>
                        <li>&#123; Prisoners &#125; &#124; Denis Villeneuve</li>
                        <li>&#123; Fargo, No Country for Old Men &#125; &#124; Coen Brothers</li>
                        <li>Once Upon A Time in the West &#124; Sergio Leone</li>
                        {/* The Big Lebowski? ^ */}
                        <li>&#123; Mean Streets, Taxi Driver, Raging Bull, Gangs of New York, The Departed, Goodfellas &#125; &#124; Martin Scorsese</li>
                        {/* <li>Drive &#124; Nicolas Winding Refn</li> */}
                        <li>...</li>
                        {/* David Lynch? Blue Velvet, Mulholland Drive, Eraserhead */}
                        {/* Bergman's Persona? */}
                        {/* Moonlight? */}
                        {/* The Third Man? */}
                        {/* The General? */}
                        {/* Documentaries? Touching the Void */}
                        {/* Mad Max: Fury Road? */}
                        {/* Paisan? */}
                        {/* Get Out? */}
                        {/* Duck Soup? */}
                        {/* The Deer Hunter? */}
                        {/* Double Indemnity? */}
                        {/* Ran? */}
                        {/* Metropolis? */}
                        {/* Heat? Collateral? */}
                        {/* Sunset Blvd.? */}
                        {/* The Good, the Bad and the Ugly? The Dollars Trilogy? */}
                        {/* La Grande Illusion? */}
                        {/* Lawrence of Arabia? */}
                        {/* La dolce vita? */}
                        {/* Some Like It Hot? */}
                        {/* Ridley Scott? Blade Runner? */}
                        {/* The 400 Blows? Bicycle Thieves? */}
                        {/* <li>SAFDIE BROTHERS?</li> */}
                        {/* <li>HORROR? ARI ASTER? THE WITCH? THE LIGHTHOUSE? MIDSOMMAR?</li>              */}
                    </ul>
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

                <NeutralBox recCat={"scr"}>
                    <h2><span style={{color:"#2ECC40"}}>Screen</span>: Game Shows</h2>
                    <ul>
                        <li><a href="https://en.wikipedia.org/wiki/8_Out_of_10_Cats_Does_Countdown">8 Out of 10 Cats Does Countdown</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Have_I_Got_News_for_You">Have I Got News for You</a> &#124; Harry Thompson, Jimmy Mulville</li>
                        <li><a href="https://en.wikipedia.org/wiki/QI">QI</a> &#124; John Lloyd</li>
                        <li><a href="https://en.wikipedia.org/wiki/Would_I_Lie_to_You%3F_(game_show)">Would I Lie To You?</a> &#124; Peter Holmes</li>
                    </ul>
                </NeutralBox>

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
                    <h2><span style={{color:"#FF4136"}}>Music</span>: Albums</h2>
                    <ul>
                        <li>&#123; OK Computer OKNOTOK, Kid Amnesiae, Hail to the Thief, In Rainbows, A Moon Shaped Pool &#125; &#124; Radiohead</li>
                        <ul>
                            <li>OKNOTOK and Kid Amnesiae are cheating, I know... but I can't resist.</li>
                        </ul>
                        <li>Grace &#124; Jeff Buckley</li>
                        <li>Hopes & Fears &#124; Keane</li>
                        <li>&#123; Remain in Light, Speaking in Tongues &#125; &#124; Talking Heads</li>
                        <li>FutureSex/LoveSounds &#124; Justin Timberlake</li>
                        <li>Back to Black &#124; Amy Winehouse</li>
                        <li>IV &#124; Led Zeppelin</li>
                        <li>&#123; Heligoland, Ritual Spirit &#125; &#124; Massive Attack</li>
                        <li>&#123; The Wall, Wish You Were Here, The Dark Side of the Moon &#125; &#124; Pink Floyd</li>
                        <li>&#123; Crawler, Joy as an Act of Resistance. &#125; &#124; IDLES</li>
                        <li>Holy Fire &#124; Foals</li>
                        <li>An Awesome Wave &#124; Alt-J</li>
                        <li>Caustic Love &#124; Paolo Nutini</li>
                        <li>I Put A Spell On You &#124; Nina Simone</li>
                        <li>&#123; The Eminem Show, Recovery &#125; &#124; Eminem</li>
                        <li>&#123; Hunky Dory, Blackstar &#125; &#124; David Bowie</li>
                        <li>&#123; Breakfast in America, Crime of the Century &#125; &#124; Supertramp</li>
                        <li>...</li>
                        {/* <li><i>Tame Impala? Floating Points? Beatles? Mingus? Davis?</i></li>
                        <li>Doolittle &#124; Pixies</li>
                        <li>&#123; Complete and Unbelievable, The Dock of the Bay &#125; &#124; Otis Redding</li>
                        <li>To Pimp A Butterfly &#124; Kendrick Lamar</li>
                        <li>Random Access Memories &#124; Daft Punk</li>
                        <li>Kintsugi &#124; Death Cab for Cutie</li>
                        <li>Rumours &#124; Fleetwood Mac</li>
                        <li>Mingus Mingus Mingus Mingus Mingus &#124; Charles Mingus</li>
                        <li>&#123; ...I Care Because You Do, Drukqs &#125; &#124; Aphex Twin</li> */}
                    </ul>
                </NeutralBox>

                <NeutralBox recCat={"mus"}>
                    <h2><span style={{color:"#FF4136"}}>Music</span>: Artists</h2>
                    <ul>
                        <li>Very, very, very difficult.</li>
                        <ul>
                            <li>Pink Floyd, The Beatles, Led Zeppelin, Queen, Talking Heads, ...</li>
                            <li>Nina Simone, Amy Winehouse, Otis Redding, Paolo Nutini, Hozier, Joni Mitchell, Van Morrison, ...</li>
                            <li>Radiohead, Jeff Buckley, Thom Yorke, Portishead, Tricky, Alt-J, ...</li>
                            <li>Bee Gees, Elton John, Stevie Wonder, Supertramp, David Bowie, Michael Jackson, ...</li>
                            <li>Massive Attack, Brian Eno, Aphex Twin, Flying Lotus, Tame Impala, Floating Points, Four Tet, ...</li>
                            <li>Wu Tang Clan, Eminem, Nas, MF Doom, Notorious BIG, Kanye West, Kendrick Lamar, Aesop Rock, ...</li>
                            <li>Linkin Park, Audioslave, IDLES, Foals, Gang of Youths, ...</li>
                            <li>Arctic Monkeys, Elbow, Red Hot Chili Peppers, Keane, Young Fathers, ...</li>
                        </ul>
                    </ul>
                </NeutralBox>

                {/* <h2><span style={{color:"#FF4136"}}>Music</span>: Songs</h2>
                <ul>
                    <li>TBD...</li>
                </ul> */}

                <NeutralBox recCat={"pod"}>
                    <h2><span style={{color:"#B10DC9"}}>Podcasts/Radio</span></h2>
                    <ul>
                        <li>Making Sense &#124; general &#124; Sam Harris</li>
                        <li>The Ezra Klein Show &#124; general &#124; Ezra Klein</li>
                        <li>Conversations with Tyler &#124; general &#124; Tyler Cowen</li>
                        <li>In Our Time (BBC Radio 4) &#124; general &#124; Melvyn Bragg</li>
                        <li>After On &#124; technology &#124; Rob Reid</li>
                        <li>Mindscape &#124; science, philosophy &#124; Sean Carroll</li>
                        <li>Intelligence Squared &#124; debates</li>
                        <li>The Inquiry (BBC World Service) &#124; current affairs</li>
                        <li>80,000 Hours &#124; philosophy, philanthropy, careers &#124; Rob Wiblin</li>
                        <li>Philosophy Bites &#124; philosophy &#124; Nigel Warburton, David Edmonds</li>
                        <li>The Partially Examined Life &#124; philosophy, literature &#124; Linsenmayer et al.</li>
                        <li>Very Bad Wizards &#124; philosophy, psychology, art &#124; Tamler Sommers, David Pizarro</li>
                        <li>Cognitive Revolution &#124; neuroscience, psychology, academia &#124; Cody Kommers</li>
                        <li>Brain Inspired &#124; neuroscience, AI &#124; Paul Middlebrooks</li>
                        <li>Uncommon Knowledge &#124; politics, history, economics &#124; Peter Robinson</li>
                        <li>Desert Island Discs &#124; music &#124; Lauren Laverne</li>
                        <li>Training Beta &#124; rock climbing &#124; Neely Quinn</li>
                    </ul>
                </NeutralBox>
                
                <NeutralBox recCat={"edu"}>
                    <h2><span style={{color:"#FFD700"}}>Education</span></h2>
                    <ul>
                        <li><b>Coursera</b></li>
                        <ul>
                            <li><a href="https://www.coursera.org/specializations/machine-learning-introduction">Machine Learning</a> &#124; Andrew Ng &#124; Stanford</li>
                            <li><a href="https://www.coursera.org/specializations/deep-learning?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA_deep-learning_deeplearning-ai_FTCOF_specializations_country-UK-country-GB&campaignid=19970507700&adgroupid=154882314224&device=c&keyword=andrew%20ng%20deep%20learning%20course&matchtype=b&network=g&devicemodel=&adposition=&creativeid=654977645500&hide_mobile_promo&gclid=Cj0KCQjwx5qoBhDyARIsAPbMagAOnKbIvdOWltDmZOm5CQiqL9HiI0IblIdOX1eNPS1KpUlA6X953QcaAg1qEALw_wcB">Deep Learning Specialization</a> &#124; Andrew Ng &#124; deeplearning.ai</li>
                        </ul>
                        <li><b>MIT OpenCourseWare</b></li>
                        <ul>
                            <li><a href="https://ocw.mit.edu/courses/9-13-the-human-brain-spring-2019/">The Human Brain</a> &#124; Nancy Kanwisher &#124; MIT</li>
                            <li><a href="https://ocw.mit.edu/courses/21l-011-the-film-experience-fall-2013/">The Film Experience</a> &#124; David Thorburn &#124; MIT</li>
                            <li>Calculus Revisited [<a href="https://ocw.mit.edu/courses/res-18-006-calculus-revisited-single-variable-calculus-fall-2010/">univariate</a>] [<a href="https://ocw.mit.edu/courses/res-18-007-calculus-revisited-multivariable-calculus-fall-2011/">multivariate</a>] &#124; Herb Gross &#124; MIT</li>
                            <li><a href="https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/">Linear Algebra</a> &#124; Gilbert Strang &#124; MIT</li>
                        </ul>
                        <li><b>EdX</b></li>
                        <ul>
                            <li><a href="https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science?webview=false&campaign=CS50%27s+Introduction+to+Computer+Science&source=edx&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fcs50">CS50</a> &#124; David Malan &#124; Harvard</li>
                            <li>Probability &#124; Joseph Blitzstein &#124; Harvard</li>
                            <li>&#123; <a href="https://www.edx.org/learn/computer-programming/ecole-polytechnique-federale-de-lausanne-neuronal-dynamics?index=product&queryID=ebb73c4947530ed98df980787faf3a28&position=4&results_level=first-level-results&term=epfl+neuroscience&objectID=course-907185f6-0f8e-4e58-9099-4521428a4712&campaign=Neuronal+Dynamics&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch">Neuronal Dynamics</a>, <a href="https://www.edx.org/learn/biology-life-sciences/ecole-polytechnique-federale-de-lausanne-computational-neuroscience-neuronal-dynamics-of-co?index=product&queryID=ebb73c4947530ed98df980787faf3a28&position=1&results_level=first-level-results&term=epfl+neuroscience&objectID=course-d9db31e0-a833-427b-b2f3-77b5b926cf13&campaign=Computational+Neuroscience%3A+Neuronal+Dynamics+of+Cognition&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch">Computational Neuroscience</a> &#125; &#124; Wulfram Gerstner &#124; EPFL</li>
                        </ul>
                        <li><b>The Great Courses</b></li>
                        <ul>
                            <li>Literary Modernism &#124; Jeffrey Perl</li>
                            <li>The Story of Human Language &#124; John McWhorter</li>
                            <li>What Darwin Didn't Know &#124; Scott Solomon</li>
                            <li>Masterworks of Early 20th-Century Literature &#124; David Thorburn</li>
                            <li>A History of the US Economy in the 20th Century &#124; Timothy Taylor</li>
                        </ul>
                        <li><b>YouTube</b></li>
                        <ul>
                            <li><a href="https://www.youtube.com/playlist?list=PLyGKBDfnk-iDVpUGSR_GlDmQrZOS0Lk6k">Functional MRI Bootcamp</a> &#124; Rebecca Saxe &#124; MIT</li>
                            <li><a href="https://www.youtube.com/playlist?list=PLzWd5Ny3vW3R_1YqkqneW99MaJvmYXg11">The Analytic Tradition</a> &#124; Daniel Bonevac &#124; UT Austin</li>
                        </ul>
                        <li><b>Other</b></li>
                        <ul>
                            <li>Practical Deep Learning for Coders &#124; fast.ai</li>
                        </ul>
                    </ul>
                </NeutralBox>

            </main>

            <Footer />
        </MathJaxContext>
    );
}

export default NoteRecommendationsPage;