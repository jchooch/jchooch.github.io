import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./CVPage.scss";
import gmailIcon from "../../../assets/cv/gmail.png";
import githubIcon from "../../../assets/cv/github.png";
import linkedinIcon from "../../../assets/cv/linkedin.png";

function CVPage() {
  return (
    <>
      <Header thisTitle={"CV"} />

      <main>
        <button
          className="download-btn"
          onClick={() => {
            console.log("Tried to download PDF.");
          }}
        >
          Download PDF
        </button>

        <section className="cv">
          <div className="top">
            <div className="top__header">
              <h1>Joe Choo-Choy</h1>
              <p className="pod">&#128293; &nbsp; SWE, ML, science</p>
            </div>
            <p>
              <b>
                I'm an aspiring software engineer and researcher, attentive to
                detail and strategically-minded.{" "}
              </b>
              I'm broadly-interested and open-minded in the short-term. I have
              previous experience in developing data analysis software in a
              research environment, as well as ever-expanding full-stack skills
              gained since my undergraduate degree.
              <b>
                {" "}
                I'm excited for an opportunity to prove myself, to develop my
                skills, and to learn about an organisation deeply.
              </b>
            </p>
            {/* <p>Research:</p>
            <p>
              I’m an aspiring researcher in computational neuroscience /
              cognitive science.
            </p>
            <p>
              <b>Experience:</b>
            </p>
            <p>
              I have recently worked on data-constrained recurrent neural
              network models of zebrafish vision, but am interested in pursuing
              work of many sorts.
            </p>
            <p>
              I'm interested in a wide variety of problems in cognitive science.
            </p>
            <p>
              <b>Interests:</b>
            </p>
            <ul>
              <li>
                ML safety: adversarial robustness, mechanistic interpretability,
                human conceptual alignment, ...
              </li>
              <li>
                Mechanistic control: attention, working memory, cognitive
                coordination, large-scale brain models, cognitive architectures,
                ...
              </li>
              <li>
                Neural algorithms: biological credit assignment, predictive
                coding, ...
              </li>
              <li>
                Rational analysis: resource rationality, inductive and
                approximation biases, Bayesian models of cognition, ...
              </li>
              <li>
                Cognitive models constrained both by cytoarchitecture and
                psychology
              </li>
              <li>GOFAI</li>
              <li>
                Cognitive psychology of humans and of simple ANNs (learning
                dynamics, representational analysis, etc.)
              </li>
              <li>Developmental neurobiology</li>
              <li>Philosophy of psychology/neuroscience</li>
              <li>Human neuroimaging</li>
              <li>
                Complex single-neuron models (e.g., with active dendrites)
              </li> 
            </ul>*/}

            {/* <p>I recently left my role as a research associate in Duke’s Neurobiology department, where I worked as a computationalist applying deep learning to problems in systems neuroscience, as I have grown increasingly resolute to pursue AI research. I am especially interested in work in AI that promises to make general systems safe and beneficial. Much of my education has been in computational neuroscience and biomedical engineering, but I have more recently studied SOTA deep learning more seriously, as well as surveyed safety-relevant research agendas, and am confident I can contribute to the increasingly pressing problems of ML safety. I’m strongly motivated by effective altruism, and think that the ML safety course could allow me to do directly impactful work on a much shorter timeline than otherwise possible.</p> */}
          </div>
          <div className="loci">
            <p className="locus">London, UK</p>
            <div className="locus">
              <p>joechoochoy</p>
              <a href="mailto:joechoochoy@gmail.com">
                <img className="locus__icon" src={gmailIcon} alt="gmail" />
              </a>
            </div>
            <div className="locus">
              <p>jchooch</p>
              <a href="https://github.com/jchooch">
                <img className="locus__icon" src={githubIcon} alt="github" />
              </a>
            </div>
            <div className="locus">
              <p>joechoochoy</p>
              <a href="https://www.linkedin.com/in/joe-choo-choy/">
                <img
                  className="locus__icon"
                  src={linkedinIcon}
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div className="skills__level">
              <div className="skills__level-top">
                <p className="level-text">
                  <i>
                    <b>Familiar</b>
                  </i>{" "}
                  (days, weeks)
                </p>
                <div className="bar">
                  <div className="bar__progress bar__progress--low"></div>
                </div>
              </div>
              <p>MySQL, C++, ...</p>
              <p>
                Express, Jest, React Testing Library, Tensorflow, Axios, ...
              </p>
            </div>
            <div className="skills__level">
              <div className="skills__level-top">
                <p className="level-text">
                  <i>
                    <b>Comfortable</b>
                  </i>{" "}
                  (months)
                </p>
                <div className="bar">
                  <div className="bar__progress bar__progress--med"></div>
                </div>
              </div>
              <p>Typescript, C, R, Java, ...</p>
              <p>
                React, React Router, NextJS, Node, Pytorch, SKLearn, Pandas, ...
              </p>
            </div>
            <div className="skills__level">
              <div className="skills__level-top">
                <p className="level-text">
                  <i>
                    <b>Fluent</b>
                  </i>{" "}
                  (years)
                </p>
                <div className="bar">
                  <div className="bar__progress bar__progress--high"></div>
                </div>
              </div>
              <p>Python, Javascript, MATLAB, Bash, HTML, CSS, ...</p>
              <p>Git, Sass, Numpy, Matplotlib, ...</p>
            </div>
          </div>
          <div className="experience">
            <h2>Experience</h2>
            <ul>
              <li>
                <p className="pod">
                  Research Assistant, Naumann Lab, Duke Neurobiology (Sep 2021 –
                  Sep 2022)
                </p>
              </li>
              <ul>
                <li>
                  Lab focuses on: whole-brain zebrafish calcium imaging, online
                  data analysis, development and individual differences,
                  circuits neuroscience, ...
                </li>
                <li>
                  I worked on a project modelling neurons in the zebrafish
                  pretectum (visual cortex-analogue) using (calcium imaging)
                  data-constrained recurrent neural networks (RNNs). I wrote
                  MATLAB and Python code to train ensembles of RNNs with various
                  custom regularisation techniques, as well as to visualise and
                  analyse weight, activity, and error dynamics.
                </li>
              </ul>
              <li>
                <p className="pod">
                  Teaching Assistant, Deep Learning, Neuromatch Academy (Aug
                  2021, Aug 2022)
                </p>
              </li>
              <ul>
                <li>
                  3+ week intensive deep learning summer school, with peer
                  programming in PyTorch and varied topics, e.g. optimisation,
                  regularisation, convolutional neural networks, recurrent
                  neural networks, attention/transformers, unsupervised
                  learning, generative models, reinforcement learning, ...
                </li>
                <li>
                  I led tutorial groups of ~10 undergraduate and graduate
                  students through programming tutorials for ~6 hours per day, 5
                  days a week, explaining complex topics clearly.
                </li>
              </ul>
              <li>
                <p className="pod">
                  Research Assistant, Heaton Lab, Duke Molecular Genetics &
                  Microbiology <br /> (Jun 2019 - Jun 2020)
                </p>
              </li>
              <ul>
                <li>Lab focuses on: virology, immunology, vaccinology.</li>
                <li>
                  I worked on a project attempting to discover immunological
                  phenotypes (in mice) associated with unannotated-ORF products
                  (of putative (li)ncRNAs) in the human translatome. My work was
                  mostly cleaning, preprocessing, analysis and visualisation of
                  Ribo/RNA-Seq data from ribosome footprinting experiments,
                  using many tools including Cufflinks, DE-Seq, SAMTools, and
                  Bowtie.
                </li>
                <li>
                  I also learnt basic molecular biology and mammalian cell
                  culture techniques.
                </li>
              </ul>
            </ul>
          </div>
          <div className="education">
            <h2>Education</h2>
            <ul>
              <li>
                <p className="pod">
                  Machine Learning Safety Scholar, Center for AI Safety (Jun -
                  Aug 2023)
                </p>
              </li>
              <ul>
                <li>
                  An 8-week course on machine learning safety, with readings and
                  programming assignments across various topics, including
                  adversarial robustness, monitoring and interpretability,
                  alignment, systemic safety engineering, and existential risk.
                </li>
              </ul>
              <li>
                <p className="pod">
                  Software Engineering Bootcamp, BrainStation (Mar - Jun 2023)
                </p>
              </li>
              <li>
                <p className="pod">
                  Computational Biology B.S., Duke University (2021)
                </p>
              </li>
              <ul>
                <li>
                  <u>Primary areas of study:</u> computer science, neuroscience,
                  bioengineering.
                </li>
                <li>
                  <u>
                    Relevant coursework (<i>graduate-level</i>):
                  </u>{" "}
                  Data Structures & Algorithms, Probability & Statistical
                  Inference, Mathematical Probability, Intro Data Science,
                  Discrete Math, Neurobiological Data Analysis, Machine
                  Learning, Statistical Learning & Inference,{" "}
                  <i>Computational Sequence Biology</i>,{" "}
                  <i>Computational Structural Biology</i>,{" "}
                  <i>Theoretical Neuroscience</i>,{" "}
                  <i>Computational Neuroengineering</i>,{" "}
                  <i>Formal Epistemology</i>.
                </li>
              </ul>
              <li>
                <p className="pod">
                  Computational Neuroscience Course, Neuromatch Academy (Jul
                  2020)
                </p>
                <ul>
                  <li>
                    3+ week intensive computational neuroscience summer school,
                    with peer programming in Python and varied topics, e.g.
                    neuronal dynamics / Hodgkin-Huxley models, drift-diffusion
                    models, generalised linear models, optimal control /
                    reinforcement learning, elementary deep learning, causal
                    inference, ...
                  </li>
                  <li>
                    Project on decoding and encoding models of behaviour in
                    mouse sensory areas using open dataset from Stringer et al.
                    (<i>Nature</i>, 2019).
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="horizontal-line"></div>
          <div className="publications">
            <h3>Publications</h3>
            <ul>
              <li>
                Jacobs, <b>Choo-Choy</b>, Loring, Dunn, & Naumann (2022)
                Predicting connectivity of motion-processing neurons with
                recurrent neural networks.{" "}
                <i>Computational and Systems Neuroscience (COSYNE)</i>.
              </li>
            </ul>
          </div>
          <div className="misc-learning">
            <h3>Miscellaneous Formative Learning</h3>
            <ul>
              <li>
                <b>Computational Psychiatry Course, ETH Zurich (Sep 2020)</b>
              </li>
              <ul>
                <li>
                  7-day full-time course on various topics in computational
                  psychiatry. I attended workshops on variational Bayes and
                  active inference.
                </li>
              </ul>
              <li>
                <b>MOOCs</b>
              </li>
              <ul>
                <li>Machine Learning, Stanford, Coursera</li>
                <li>Deep Learning Specialization, deeplearning.ai, Coursera</li>
                <li>Practical Deep Learning for Coders, fast.ai</li>
                <li>
                  AGI Safety Fundamentals (Alignment track), BlueDot Impact
                </li>
                <li>Computational Neuroscience, U Washington, Coursera</li>
                <li>Cellular Mechanisms of Brain Function, EPFL, EdX</li>
                <li>The Multi-Scale Brain, EPFL, EdX</li>
                <li>Simulation Neuroscience, EPFL, EdX</li>
                <li>Bioinformatics Specialization, UC San Diego, Coursera</li>
                <li>The Missing Semester of Your CS Education, MIT</li>
              </ul>
            </ul>
          </div>
          <div className="volunteering">
            <h3>Volunteering</h3>
            <ul>
              <li>
                <b>Effective Altruism Duke</b>
              </li>
              <ul>
                <li>Board Member (2017-2018)</li>
                <li>Co-President (2018-2021)</li>
              </ul>
              <li>
                <b>Duke Philosophy Society</b>
              </li>
              <ul>
                <li>Co-President (2017-2018, 2020)</li>
                <li>President (2019)</li>
              </ul>
              <li>
                <b>One for the World Duke</b>
              </li>
              <ul>
                <li>Researcher (Jul - Aug 2020)</li>
              </ul>
            </ul>
          </div>
          {/* <div className="scrap"></div> */}
          {/* <p className="endnote">Written in JSX, CSS/Sass</p> */}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CVPage;
