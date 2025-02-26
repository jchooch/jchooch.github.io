import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import youtubeIcon from "../../assets/icons/youtube.png";
import bjjFanaticsIcon from "../../assets/icons/bjj-fanatics.png";

function BJJResources() {
  const ytIconStyle = {
    height: "2rem",
    marginTop: "-0.5rem",
    position: "relative",
    left: "0.2rem",
    top: "0.4rem",
  };

  const bjjfIconStyle = {
    height: "1.5rem",
  };

  const subHeadStyle = {
    marginTop: "0.8rem",
  };

  return (
    <>
      <Header
        thisTitle={"Brazilian Jiu-Jitsu Resources"}
        returnDestination={"Blog"}
      />

      <main>
        <p style={{ color: "grey" }}>–– Last Updated: 2024-08-30 ––</p>
        <br />
        <p>
          I haven't been training in Brazilian jiu-jitsu (BJJ) for long, but
          it's a wonderful sport (about which I may write more some other time)
          with an amazing culture of detailed instructional materials. Many
          instructionals are expensive, but many are free online. I have mostly
          consumed free materials thus far but both paid and free materials have
          increased my rate of progress significantly. I share some resources
          below which I recommend, as well as a few which I haven't consumed but
          which look good and are more obscure. These materials have helped me
          in BJJ and submission grappling broadly, so they include wrestling and
          judo resources, both gi (🥋) and no-gi (🎽).
        </p>
        <br />
        <h2>Free Instructors I Recommend</h2>
        <ul>
          <li>Mostly Jiu-Jitsu</li>
          <ul>
            <li>
              <b>Lachlan Giles</b> | Absolute MMA
              <a href="https://www.youtube.com/channel/UCVX5F9uZyzzSI9juQRp_2Hw">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>{" "}
              &nbsp;&nbsp;(and <a href="https://submeta.io/">Submeta</a>)
            </li>
            <li>
              <b>Andre Galvao</b> | ATOS Jiu-Jitsu
              <a href="https://www.youtube.com/channel/UC2uvUWTuQXq1k5DOZhzJ8VQ">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
            <li>
              <b>Giancarlo Bodoni</b> |
              <a href="https://www.youtube.com/channel/UCMviEKWzEJPQ5RQUcDys7_A">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
            <li>
              <b>Brian Peterson</b> | Teach Me Grappling
              <a href="https://www.youtube.com/channel/UC8X1oaFtxTGGAueI-sWE4Mg">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
            <li>
              <b>Rob Biernacki</b> | BJJ Concepts
              <a href="https://www.youtube.com/@bjjconcepts-robbiernacki2342">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>{" "}
              / RVV BJJ{" "}
              <a href="https://www.youtube.com/@RVVBJJ">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>{" "}
              / Stephan Kesting
              <a href="https://www.youtube.com/@StephanKesting">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
            <li>
              <b>Keenan Cornelius</b> |{" "}
              <a href="https://www.youtube.com/@fritzdagger">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>{" "}
              / Legion AJJ
              <a href="https://www.youtube.com/@legionajj">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
            <li>
              <b>Jordan Preisinger</b> | Jordan Teaches Jiujitsu
              <a href="https://www.youtube.com/c/jordanteachesjiujitsu">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
            <li>
              <b>Firas Zahabi</b> | Tristar Gym
              <a href="https://www.youtube.com/@CoachZahabi/featured">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
            <li>
              <b>Jake Luigi</b> | Less Impressed More Involved BJJ{" "}
              <a href="https://www.youtube.com/@LIMIBJJ">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
            {/* <li>Robert Degle?</li> */}
            <li>
              <b>Tum Voorn</b> | Energia Martial Arts{" "}
              <a href="https://www.youtube.com/c/EnergiaMartialArts">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
          </ul>
          <li style={{ marginTop: "0.5rem" }}>Mostly Judo and Wrestling</li>
          <ul>
          <li>
              <b>Justin Flores</b> | JFLO Academy{" "}
              <a href="https://www.youtube.com/@JFLOJUDO/featured">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
            <li>
              <b>Max Schneider</b> | onejudoka{" "}
              <a href="https://www.youtube.com/@onejudoka/featured">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
            <li>
              <b>Shintaro Higashi</b> |{" "}
              <a href="https://www.youtube.com/@Shigashi84">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
            <li>
              <b>Cary Kolat</b> |{" "}
              <a href="https://www.youtube.com/@KOLATCOM/featured">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>
            </li>
          </ul>
          {/* <li>Brian Glick?</li> */}
          {/* <li>Ash Williams?</li> */}
        </ul>
        <br />
        <br />
        <h2>Series I Recommend</h2>
        <p style={{ marginTop: "-1rem" }}>
          <i>In vague order of priority...</i>
        </p>
        <ul>
          <li style={subHeadStyle}>
            <b>General</b>
          </li>
          <ul>
            <li>
              🥋🎽 How To Suck As Little As Possible
              <a href="https://www.youtube.com/playlist?list=PLNbZ1gPk7zqzbiFjpMlzIEVZAGROJ6G4C">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>{" "}
              | Rob Biernacki, Rory van Vliet{" "}
            </li>
          </ul>
          <li style={subHeadStyle}>
            <b>Positional Escapes</b>
          </li>
          <ul>
            <li>
              🥋🎽 Fundamentals of BJJ Escapes Gi & No-Gi{" "}
              <a href="https://bjjfanatics.com/products/fundamentals-of-brazilian-jiu-jitsu-escapes-gi-no-gi-by-lachlan-giles">
                <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
              </a>{" "}
              | Lachlan Giles
            </li>
            <li>
              🎽 Don't Be Finished: Edging Yourself Out of Danger{" "}
              <a href="https://bjjfanatics.com/products/dont-be-finished-edging-yourself-out-of-danger-by-craig-jones">
                <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
              </a>{" "}
              | Craig Jones
            </li>
            <li>
              🎽 A New Philosophy of Positional Escapes (New Wave Jiu-Jitsu){" "}
              <a href="https://bjjfanatics.com/products/new-wave-jiu-jitsu-a-new-philosophy-of-positional-escapes-by-john-danaher?_pos=1&_sid=375ebf4c4&_ss=r">
                <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
              </a>{" "}
              | John Danaher
            </li>
          </ul>
          <li style={subHeadStyle}>
            <b>Standup</b>
          </li>
          <ul>
            <li>
              🎽 BJJ Wrestling Plan
              <a href="https://www.youtube.com/channel/UCtAKJuOmKVP9VJMcE0BeSDA/playlists">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>{" "}
              | Richard Salamone
            </li>
          </ul>
          <li style={subHeadStyle}>
            <b>Guard Retention</b>
          </li>
          <ul>
            <li>
              🥋 Guard Retention (Go Further Faster){" "}
              <a href="https://bjjfanatics.com/products/guard-retention-bjj-fundamentals-go-further-faster-by-john-danaher">
                <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
              </a>{" "}
              | John Danaher
            </li>
          </ul>
          <li style={subHeadStyle}>
            <b>Guard Passing</b>
          </li>
          <ul>
            <li>
              🥋 Passing the Guard (Go Further Faster){" "}
              <a href="https://bjjfanatics.com/products/passing-the-guard-bjj-fundamentals-go-further-faster-by-john-danaher">
                <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
              </a>{" "}
              | John Danaher
            </li>
            <li>
              🥋 Ultimate Pressure Passing
              <a href="https://www.youtube.com/playlist?list=PL_VsCEq3pngwPXmGmN7JbBZ6EQhVskcsB">
                <img style={ytIconStyle} src={youtubeIcon} />
              </a>{" "}
              | Rafael Lovato Jr.
            </li>
            <li>
              🎽 Systematically Attacking the Guard &#123; 1.0{" "}
              <a href="https://bjjfanatics.com/products/systematically-attacking-the-guard-by-gordon-ryan">
                <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
              </a>{" "}
              , 2.0{" "}
              <a href="https://bjjfanatics.com/products/systematically-attacking-the-guard-2-0-by-gordon-ryan">
                <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
              </a>{" "}
              &#125; | Gordon Ryan
            </li>
          </ul>
          <li style={subHeadStyle}>
            <b>Open Guard</b>
          </li>
          <ul>
            <li>
              🥋 Open Guard (Go Further Faster){" "}
              <a href="https://bjjfanatics.com/products/open-guard-bjj-fundamentals-go-further-faster-by-john-danaher">
                <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
              </a>{" "}
              | John Danaher
            </li>
            <ul>
              <li style={{ color: "red" }}>
                N.B. Basically a full <i>half</i> of this series is preoccupied
                with sumi gaeshi and seated hiza guruma sweeps. In my opinion,
                this is an excessive fixation here, so move quickly through it.
              </li>
            </ul>
          </ul>
          <li style={subHeadStyle}>
            <b>Half Guard</b>
          </li>
          <ul>
            <li>
              🎽 The Half Guard Anthology{" "}
              <a href="https://bjjfanatics.com/products/the-half-guard-anthology-by-lachlan-giles">
                <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
              </a>{" "}
              | Lachlan Giles
            </li>
          </ul>
          <li style={subHeadStyle}>
            <b>Dynamic Pinning</b>
          </li>
          <ul>
            <li>
              🎽 Power Ride{" "}
              <a href="">
                <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
              </a>{" "}
              | Craig Jones
            </li>
          </ul>
          <li style={subHeadStyle}>
            <b>Leg Entanglements</b>
          </li>
          <ul>
            <li>
              🎽 Leglocks (Enter the System){" "}
              <a href="https://bjjfanatics.com/products/leglocks-enter-the-system-by-john-danaher">
                <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
              </a>{" "}
              | John Danaher
            </li>
          </ul>
        </ul>

        <ul>
          {/* <li>
            <b>Gordon Ryan Guard Pass Study</b>
            <a href="https://www.youtube.com/playlist?list=PLNbZ1gPk7zqzg_uEY8Jc_k-bKFpsBsosz">
              <img style={ytIconStyle} src={youtubeIcon} />
            </a>{" "}
            | Rory van Vliet
          </li> */}
          {/* <li>
            <b>Gracie Barra Fundamentals Curriculum</b>{" "}
            <a href="https://www.youtube.com/playlist?list=PL_VsCEq3pngzQOYjchX6U6ah8dia80eC0">
              <img style={ytIconStyle} src={youtubeIcon} />
            </a>
          </li> */}
          {/* <li>
            <b>Gracie Barra Advanced Curriculum</b>{" "}
            <a href="https://www.youtube.com/playlist?list=PL_VsCEq3pngwZ7V9Cx6-Nvl1N0e-DDt6L">
              <img style={ytIconStyle} src={youtubeIcon} />
            </a>
          </li> */}
          {/* <li>
            <b>Infinite Jiu-Jitsu</b>{" "}
            <a href="https://www.youtube.com/playlist?list=PL_VsCEq3pngwa4G3Wd9w_LIq1cASoRCg2">
              <img style={ytIconStyle} src={youtubeIcon} />
            </a>{" "}
            | Carlos Machado
          </li> */}
          {/* <li>
            <b>Wrestling</b>{" "}
            <a href="https://www.youtube.com/playlist?list=PL_VsCEq3pngwPPmQsEzQrWT3hBuUJBUF5">
              <img style={ytIconStyle} src={youtubeIcon} />
            </a>{" "}
            | Sergei Beloglazov
          </li> */}
          {/* <li>
            <b>Course</b>{" "}
            <a href="">
              <img style={ytIconStyle} src={youtubeIcon} />
            </a>{" "}
            | Instructor
          </li> */}
          {/* <li>
            <b>Wrestle Up</b>{" "}
            <a href="https://bjjfanatics.com/products/nicky-ryans-wrestle-up-series-by-nicky-ryan">
              <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
            </a>{" "}
            | Nicky Ryan
          </li> */}
          {/* <li>
            <b>The Triangle Machine</b>{" "}
            <a href="https://bjjfanatics.com/products/the-triangle-machine-by-craig-jones">
              <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
            </a>{" "}
            | Craig Jones
          </li> */}
          {/* <li><b>Systematically Attacking the Guard</b> <a href="https://bjjfanatics.com/products/systematically-attacking-the-guard-by-gordon-ryan"><img style={bjjfIconStyle} src={bjjFanaticsIcon} /></a> | Gordon Ryan</li> */}
          {/* <li><b>BJJ Fundamentals – Go Further Faster</b> <a href="https://bjjfanatics.com/collections/all/products/go-further-faster-bundle-by-john-danher"><img style={bjjfIconStyle} src={bjjFanaticsIcon} /></a> | John Danaher</li> */}
          {/* <li>
            <b>Winning Mat Wrestling, Vol. 1{" "}
            <a href="https://bjjfanatics.com/blogs/news/winning-mat-wrestling-nick-gwiazdowski-vol-1">
              <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
            </a>{" "}
            , Vol. 2{" "}
            <a href="https://bjjfanatics.com/blogs/news/winning-mat-wrestling-nick-gwiazdowski-vol-2">
              <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
            </a></b>
            | Nick Gwiazdowski
          </li> */}
          {/* <li>
            <b>Course</b>{" "}
            <a href="">
              <img style={bjjfIconStyle} src={bjjFanaticsIcon} />
            </a>{" "}
            | Marcelo Garcia?
          </li> */}
        </ul>
        <br />
        <p>
          Feel free to send me other suggestions via &#8600; Twitter (
          <a href="https://twitter.com/TallBart/status/1683468537015435268">
            "X"
          </a>
          ).
        </p>
      </main>

      <Footer />
    </>
  );
}

export default BJJResources;
