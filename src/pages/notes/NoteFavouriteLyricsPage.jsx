import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function NoteFavouriteLyricsPage() {
  return (
    <>
      <Header thisTitle={"My Favourite Lyrics"} returnDestination={"Notes"} />

      <main>
        <p>
          I'm one of those people who really values song lyrics. I used to
          memorise all my favourite songs, and for me it was an important way to
          become acquainted with a song. Naturally, it's hard to disentangle
          words from music, so I'm content with the word "lyrics" here, which
          allows for their beauty being in their sung quality as well as their
          mere silent literary quality if such a thing even exists.
        </p>
        <br />
        <h2>
          My list (always preliminary, always noisy, in no particular order)
        </h2>
        <ul>
          <li>Both Sides Now &#124; Joni Mitchell</li>
          <li>Lately &#124; Stevie Wonder</li>
          <li>My Way &#124; Frank Sinatra</li>
          <li>That Funny Feeling &#124; Bo Burnham</li>
          <li>How Much A Dollar Cost &#124; Kendrick Lamar</li>
          {/* <li>She Has No Time &#124; Keane</li> */}
          <li>Videotape &#124; Radiohead</li>
          <li>Armchairs &#124; Andrew Bird</li>
          <li>I Wish I Knew How It Would Feel To Be Free &#124; Nina Simone</li>
          <li>Dawn Chorus &#124; Thom Yorke</li>
          <li>Hurt &#124; Trent Reznor</li>
          <li>How To Save A Life &#124; The Fray</li>
          <li>Subterranean Homesick Blues &#124; Bob Dylan</li>
          <li>Hallelujah &#124; Leonard Cohen</li>
          <li>...</li>
        </ul>
        <br />
        <p>
          Since many of these songs are among my favourite songs of all time,
          this may become part of a larger list of my favourite songs at some
          point.
        </p>
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

export default NoteFavouriteLyricsPage;
