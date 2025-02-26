import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

function Dev() {
  return (
    <>
      <Header thisTitle={"DEV [non-public]"} />

      <main>
        <p
          style={{
            display: "inline-block",
            padding: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",
          }}
        >
          {" "}
          <Link to="/about">About</Link>, <Link to="/blogs">Blogs</Link>,{" "}
          <Link to="/notes">Notes</Link>
        </p>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "1rem",
            padding: "1rem",
            marginTop: "2rem",
          }}
        >
          <h2>Dev Notes</h2>
          <ul>
            <li>
              New blogs are provided by new React page components, which files
              should be identified by three keywords and named as such
              "BlogOneTwoThree.jsx".
            </li>
            <li>
              New notes are provided by new React page components, which files
              should be identified by one keyword and named as such
              "NoteOne.jsx".{" "}
            </li>
            <li>
              Note to self: When you make a change to the codebase, you can't
              just push it. You have to run `npm run deploy` which will update
              the static build on the `gh-pages` git branch. Then push to Github
              and Github Pages will serve the website from that branch (but you
              can keep working on main locally). Basically, I followed the
              instructions
              [here](https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf).
            </li>
            <li>
              To serve a static asset, put it in the "/public" directory. (Don't
              forget to redeploy!) Anything in there can be with the name of the
              resource, e.g. "jchooch.github.io/Fleming.pdf". You can link to it
              with a normal anchor tag.
            </li>
            <li>
              Remember: each new Blog/Note requires 3 associated changes: import
              and route in App.jsx; import and Link in relevant list; src file
              with export statement.
            </li>
          </ul>
          <br />
          <h2>Dev TODOs</h2>
          <ul>
            <li>Turn Spotify widget into React component.</li>
          </ul>
          <br />
          <h2>Templates</h2>
          <ul>
            <li><Link to="/blog/template">Blog Template</Link></li>
            <ul>
              <li><Link to="/blog/bare-template">Bare Blog Template</Link></li>
            </ul>
            <li><Link to="/blog/paper/template">Paper Notes Template</Link></li>
          </ul>
        </div>
      </main>

      <Footer home={true} />
    </>
  );
}

export default Dev;
