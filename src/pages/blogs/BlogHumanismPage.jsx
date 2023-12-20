import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import StatsBox from "../../components/StatsBox/StatsBox";
import AsideBox from "../../components/AsideBox/AsideBox";
import { MathJaxContext, MathJax } from "better-react-mathjax";

function BlogHumanismPage() {
  return (
    <MathJaxContext>
      <Header thisTitle={"Humanism"} returnDestination={"Blogs"} />

      <StatsBox
        words={"~1085"}
        time={"~5"}
      />

      <main>
        <p>I have recently been profoundly moved by <a href="https://sarahbakewell.com/">Sarah Bakewell's</a> book <i>Humanly Possible</i>, a history of humanism in its many forms and its many originators and contributors.</p>
        <br />
        <p></p>
        <p>I can't begin to account for all the passages which affected me. I have little doubt I will reread it, hopefully many times. I recommend it very highly! The subject is such a complex and important one, and Bakewell is a wonderful expositor and integrator of the huge body of relevant writing and thought and action.</p>
        <br />
        <p>Something I wanted to share, which the book describes and contains in an appendix, is the 2022 Declaration of Modern Humanism by <a href="https://en.wikipedia.org/wiki/Humanists_International">Humanists International</a>, itself a revision of the <a href="https://humanists.international/what-is-humanism/the-amsterdam-declaration/">Amsterdam Declarations</a> of 1952 and 2002.</p>
        <br />
        <p>I hadn't come across this statement before, but HI did a very good job. I think the 2022 declaration sums up much of my worldview and ethics, and I hope others will find it equally resonant.</p>
        <br />
        <h2>Declaration of Modern Humanism</h2>

        <p><b>Humanists strive to be ethical.</b></p>
        <ul style={{listStyle:"none"}}>
            <li>We accept that morality is inherent to the human condition, grounded in the ability of living things to suffer and flourish, motivated by the benefits of helping and not harming, enabled by reason and compassion, and needing no source outside of humanity. We affirm the worth and dignity of the individual and the right of every human to the greatest possible freedom and fullest possible development compatible with the rights of others. To these ends we support peace, democracy, the rule of law, and universal legal human rights. We reject all forms of racism and prejudice and the injustices that arise from them. We seek instead to promote the flourishing and fellowship of humanity in all its diversity and individuality. We hold that personal liberty must be combined with a responsibility to society. A free person has duties to others, and we feel a duty of care to all of humanity, including future generations, and beyond this to all sentient beings. We recognise that we are part of nature and accept our responsibility for the impact we have on the rest of the natural world.</li>
        </ul>
        <br />
        <p><b>Humanists strive to be rational.</b></p>
        <ul style={{listStyle:"none"}}>
            <li>We are convinced that the solutions to the world’s problems lie in human reason, and action. We advocate the application of science and free inquiry to these problems, remembering that while science provides the means, human values must define the ends. We seek to use science and technology to enhance human well-being, and never callously or destructively.</li>
        </ul>
        <br />
        <p><b>Humanists strive for fulfillment in their lives.</b></p>
        <ul style={{listStyle:"none"}}>
            <li>We value all sources of individual joy and fulfillment that harm no other, and we believe that personal development through the cultivation of creative and ethical living is a lifelong undertaking. We therefore treasure artistic creativity and imagination and recognise the transforming power of literature, music, and the visual and performing arts. We cherish the beauty of the natural world and its potential to bring wonder, awe, and tranquility. We appreciate individual and communal exertion in physical activity, and the scope it offers for comradeship and achievement. We esteem the quest for knowledge, and the humility, wisdom, and insight it bestows.</li>
        </ul>
        <br />
        <p><b>Humanism meets the widespread demand for a source of meaning and purpose to stand as an alternative to dogmatic religion, authoritarian nationalism, tribal sectarianism, and selfish nihilism.</b></p>
        <ul style={{listStyle:"none"}}>
            <li>Though we believe that a commitment to human well-being is ageless, our particular opinions are not based on revelations fixed for all time. Humanists recognise that no one is infallible or omniscient, and that knowledge of the world and of humankind can be won only through a continuing process of observation, learning, and rethinking. For these reasons, we seek neither to avoid scrutiny nor to impose our view on all humanity. On the contrary, we are committed to the unfettered expression and exchange of ideas, and seek to cooperate with people of different beliefs who share our values, all in the cause of building a better world. We are confident that humanity has the potential to solve the problems that confront us, through free inquiry, science, sympathy, and imagination in the furtherance of peace and human flourishing. We call upon all who share these convictions to join us in this inspiring endeavor.</li>
        </ul>
        <br />
        <p>This statement cements my confidence that I am, myself, an (aspiring) humanist. What do you think?</p>
        <br />
        <h2>Appendix: "Humanism"</h2>
        <p>Can we come up with a better term than "humanism"? My short answer is: I can't think of one!</p>
        <br />
        <p>But I am always uncomfortable with the anthropocentrism of the term, with its possibly confusing connotations that "humans are all that matter" or that "humans are the most important creatures (because... we just are)". Perhaps more debatable connotations might be "we, as humans, are the measure of ourselves" or "humans <i>happen to be</i> the most important creatures <i>at the present moment</i>, in one way or another". Such statements are more plausible to me, but don't really embody the soul of humanism, and therefore don't really deserve to be at the heart of the name.</p>
        <br />
        <p>So I have always wished for a term more compatible with the importance of other living creatures, and a more open-minded term with respect to what it is we wish to preserve, e.g. a term which would be capable of encompassing aspects of transhumanism, as I think humanism (but not "humanism") already does.</p>
        <br />
        <p>"Transhumanism" itself doesn't really do it for me, because I think the point of that term is to stand in contrast with "humanism" which is taken to be overly static by transhumanists. I also think that humanism retains a sense of fallibilism which is deep in my soul (and which has been happily added to the 2022 Declaration above since its 2002 version), whereas transhumanism often loses that thread.</p>
        <br />
        <p>How do others feel about "humanism"? I would like to know.</p>
        <br />
        <p>I find the best way to understand the term is to say that it honours that which is "humane" about us. I think "humane" is a beautiful word, and I do associate it with the absolute best that humanity has to offer: wise, thoughtful, enlightened compassion. Of course, compassion and love are not unique to humans. I think animals love and show compassion. Aliens probably do/would too. But, at least on Earth, perhaps one could argue that wise, enlightened compassion is uniquely human. It is not <i>the good</i>, but moreso a notion of <i>virtue</i>, a holistic ideal. And that's okay. It's just an ideology; it doesn't have to be an analytic value theory. I can definitely get behind spreading and cultivating <i>humanity</i> of that sort.</p>
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default BlogHumanismPage;
