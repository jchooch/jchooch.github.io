import { Link } from "react-router-dom";
import aboutPhoto from "../../../assets/joe.jpeg";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./About.scss";
import blueBelt from "../../../assets/icons/blue-belt.svg";
import carabiner from "../../../assets/icons/carabiner.png";

function About() {
  const blueBeltStyle = {
    height: "2.5rem",
    margin: "25rem 0 0 0"
  }
  const carabinerStyle = {
    height: "2.5rem",
    margin: "25rem 0 0 1rem"
  }

  return (
    <>
      <Header thisTitle={"About"} />

      <main className="about-main">
        <img src={aboutPhoto} class="about-main__photo" alt="joe" />
        <div className="about-main__bio">
          <p>TBD...</p>
          {/* <p>Hi, you've found my place on the web.</p>
          <br />
          <p>
            This is primarily supposed to be a place for me to develop my
            thoughts on various problems which interest me. I've been influenced
            by a huge number of blogs myself, and
            think that blogging represents the best of the web. (You can find
            links to blogs I recommend among my Recommendations.)
          </p>
          <br />
          <p>...</p>
          <br />
          <p>...</p>
          <br />
          <p>...</p>
          <br />
          <p>I'm often preoccupied by cognitive and brain science. I love these fields because I think they are highly consilient: they seem connected to everything. I have found the sciences of mind to be a key junction in the (my) web of unified knowledge, where one simultaneously finds: the arts, the formal sciences and the natural sciences; computational dryware and biological wetware; nature and nurture; reality and representation; technology and the human soul. In no other discipline have I felt closer to so many others. Another way to put this is that in neuroscience and cognitive science one finds many of the most profound, permeating concepts in all of science (and beyond): information, computation, control, communication, learning, evolution, logic, probability, prediction, inference, reward, and on and on. Grasping these concepts better seems to help with understanding everything else. So perhaps cognitive science is my deepest interest.</p>
          <br />
          <p>
            I just finished my undergraduate degree in Systems Biology at Duke
            University, which ended up being a mix of computational biology and
            neuroscience. I am currently working at the Naumann Lab in the
            Neurobiology department at Duke. I hope to pursue graduate study in
            computational neuroscience or cognitive science soon.
          </p>
          <br />
          <p>
            I used to be interested, primarily, in philosophy and psychology,
            and those interests have carried over. I am still often preoccupied
            by the philosophy of language, philosophy of science, formal
            epistemology, as well as by effective altruism and related ethical
            issues.
          </p>
          <br />
          <p>
            My neuroscientific and psychological interests have become more and
            more cognition-oriented over time, as I've come to see cognition or
            intelligence as the chief miracle of mind. I don't think it's wrong
            to say that much of emotion and personality are cognitive, so that
            the problems of affective neuroscience seem to me either entangled
            with the problems of cognitive neuroscience or relatively easy once
            the problems of cognitive neuroscience have been solved. In so far
            as human nature remains a mystery, I think the mystery of successful
            cognition is the greatest portion.
          </p>
          <br />
          <p>
            Besides my academic interests, I also love rock/alpine climbing and
            jiu jitsu, literature of all sorts, comedy, film, and all the usual
            good things in life.
          </p> */}
          <img style={blueBeltStyle} src={blueBelt} />
          <img style={carabinerStyle} src={carabiner} />
        </div>
      </main>

      <Footer home={true}/>
    </>
  );
}

export default About;

{
  /* <main class="about-main">
        <img src="../assets/photo_1.jpeg" class="about-main__photo" alt="coat">
        <div class="about-main__text">
            
            
        </div>
    </main> */
}
