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
          onClick={() => { console.log("Tried to download PDF.") }}
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
          <b>I'm an aspiring full-stack software engineer, obsessed with scientific problems, attentive to detail and strategically-minded. </b>
          I'm broadly-interested and open-minded in the short-term.
          I have previous experience in developing data analysis software in a research environment, as well as ever-expanding full-stack skills gained since my undergraduate degree.
          <b> I'm excited for an opportunity to prove myself, to develop my skills, and to learn about an organisation deeply.</b>
        </p>
        <p>...</p>
        <p>I recently left my role as a research associate in Duke’s Neurobiology department, where I worked as a computationalist applying deep learning to problems in systems neuroscience, as I have grown increasingly resolute to pursue AI research. I am especially interested in work in AI that promises to make general systems safe and beneficial. Much of my education has been in computational neuroscience and biomedical engineering, but I have more recently studied SOTA deep learning more seriously, as well as surveyed safety-relevant research agendas, and am confident I can contribute to the increasingly pressing problems of ML safety. I’m strongly motivated by effective altruism, and think that the ML safety course could allow me to do directly impactful work on a much shorter timeline than otherwise possible.</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
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
            <img className="locus__icon" src={linkedinIcon} alt="linkedin" />
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
          <p>MySQL, ...</p>
          <p>Express, Jest, React Testing Library, Tensorflow, Axios, ...</p>
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
          <p>Typescript, C, C++, R, Java, ...</p>
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
          <p>Python, Javascript, Matlab, Bash, HTML, CSS, ...</p>
          <p>Git, Sass, Numpy, Matplotlib, ...</p>
        </div>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <p className="pod">
              Research Assistant, Naumann Lab, Duke Neurobiology (Sep 2021 – Sep 2022)
            </p>
          </li>
          <ul>
            <li>Lab focuses on: whole-brain zebrafish calcium imaging, online data analysis, development and individual differences, circuits neuroscience, ...</li>
            <li>Projects on: modeling of pretectum (visual cortex-analogue) using data-constrained recurrent neural networks and online connectivity estimation from calcium imaging data.</li>
          </ul>
          <li>
            <p className="pod">Teaching Assistant, Deep Learning, Neuromatch Academy (Aug 2021, 2022)</p>
          </li>
          <ul>
            <li>3+ week intensive deep learning summer school, with peer programming in PyTorch and varied topics, e.g. optimisation, regularisation, CNNs, RNNs, attention/transformers, unsupervised learning, generative models, RL, ...</li>
            <li>I led tutorial groups of ~10 undergraduate and graduate students through programming tutorials for ~6 hours per day, 5 days a week, explaining complex topics clearly.</li>
          </ul>
          <li>
            <p className="pod">Research Assistant (Jan 0000 - Jan 0000)</p>
          </li>
          <ul>
            <li>...</li>
          </ul>
          <li>
            <p className="pod">Research Assistant (Jan 0000 - Jan 0000)</p>
          </li>
          <ul>
            <li>...</li>
          </ul>
         
        </ul>
      </div>
      <div className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <p className="pod">
              Software Engineering Bootcamp, BrainStation (March - June 2023)
            </p>
          </li>
          <li>
            <p className="pod">
              Computational Biology B.S., Duke University (2021)
            </p>
          </li>
          <ul>
            <li>
              <u>Primary areas of study:</u> computer science, neuroscience, bioengineering.
            </li>
            <li>
              <u>
                Relevant coursework (<i>graduate-level</i>):
              </u>{" "}
              Data Structures & Algorithms, Probability & Statistical Inference,
              Mathematical Probability, Intro Data Science, Discrete Math,
              Neurobiological Data Analysis, Machine Learning, Statistical
              Learning & Inference, <i>Computational Sequence Biology</i>,{" "}
              <i>Computational Structural Biology</i>,{" "}
              <i>Theoretical Neuroscience</i>,{" "}
              <i>Computational Neuroengineering</i>, <i>Formal Epistemology</i>.
            </li>
          </ul>
        </ul>
      </div>
      <div className="publications">
      <h3>Publications</h3>
      <ul>
        <li></li>
      </ul>
      </div>
      <div className="volunteering">
      <h3>Volunteering</h3>
      <ul>
        <li></li>
      </ul>
      </div>
      <div className="scrap">
      <h3>SCRAP</h3>
      <ul>
        <li>Stanford’s Machine learning (Coursera)</li>
        <li>deeplearning.ai’s Deep learning Specialization (Coursera)</li>
        <li>fast.ai’s {"{"}Practical deep learning for coders, From deep learning foundations to stable diffusion{"}"}</li>
        <li>BlueDot Impact’s AGI Safety Fundamentals: Alignment</li>
        <li>UW’s Computational neuroscience (Coursera)</li>
        <li>EPFL’s {"{"}Cellular mechanisms of brain function, The multi-scale brain, Simulation neuroscience{"}"} (EdX)</li>
        <li>UCSD’s Bioinformatics Specialization</li>
        <li></li>
        <li></li>
      </ul>
      </div>
      {/* <p className="endnote">Written in JSX, CSS/Sass</p> */}
    </section>
      </main>

      <Footer />
    </>
  );
}

export default CVPage;
