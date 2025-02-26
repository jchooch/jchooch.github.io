import "./styles/global.scss";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/top/Home/Home";
import About from "./pages/top/About/About";
import Blog from "./pages/top/Blog/Blog";
import CVPage from "./pages/top/CV_INACTIVE/CVPage";
import TrackingPage from "./pages/top/Tracking_INACTIVE/TrackingPage";
import Template from "./pages/blog/Template";
import Recommendations from "./pages/blog/Recommendations";
import NotFound from "./pages/top/NotFound/NotFound";
import Dev from "./pages/top/Dev/Dev";

import BlogWritingToDoPage from "./pages/blog/drafts/BlogWritingToDoPage";
import BlogInventionPerfection from "./pages/blog/drafts/BlogInventionPerfection";
import Humanism from "./pages/blog/Humanism";
import BlogLovePoetryPage from "./pages/blog/drafts/BlogLovePoetryPage";
import PaperNotes from "./pages/blog/PaperNotes";

import NoteFavouriteLyricsPage from "./pages/notes/NoteFavouriteLyricsPage";
import NoteProbabilityPage from "./pages/notes/NoteProbabilityPage";
import NoteCognitiveScienceMemorandaPage from "./pages/notes/NoteCognitiveScienceMemorandaPage/NoteCognitiveScienceMemorandaPage";
import NotePaperNotesPage from "./pages/notes/NotePaperNotesPage";
import BJJResources from "./pages/blog/BJJResources";
import NoteFavouriteImagesPage from "./pages/notes/NoteFavouriteImagesPage";

import PaperTemplate from "./pages/blog/papers/PaperTemplate";
import PaperSanborn2016 from "./pages/blog/papers/PaperSanborn2016";
import PaperPouget2013 from "./pages/blog/papers/PaperPouget2013";
import PaperLillicrap2019 from "./pages/blog/papers/PaperLillicrap2019";
import BareTemplate from "./pages/blog/BareTemplate";

function App() {

  return (
      <HashRouter>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* TOP PAGES */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/cv" element={<CVPage />} /> */}
          {/* <Route path="/tracking" element={<TrackingPage />} /> */}
          <Route path="/dev" element={<Dev />} />
          
          {/* BLOG */}
          <Route path="/blog/template" element={<Template />} />
          <Route path="/blog/bare-template" element={<BareTemplate />} />
          <Route path="/blog/writing-to-do" element={<BlogWritingToDoPage />} />
          <Route path="/blog/invention-and-perfection" element={<BlogInventionPerfection />} />
          {/* ESSAYS */}
          <Route path="/blog/humanism" element={<Humanism />} />
          <Route path="/blog/love-poetry" element={<BlogLovePoetryPage />} />
          {/* EVERGREENS */}
          <Route path="/blog/papers" element={<PaperNotes />} />
          <Route path="/blog/recommendations" element={<Recommendations />} />
          {/* PAPER NOTES */}
          <Route path="/blog/paper/template" element={<PaperTemplate />}/>
          <Route path="/blog/paper/sanborn-2016" element={<PaperSanborn2016 />} />
          <Route path="/blog/paper/pouget-2013" element={<PaperPouget2013 />} />
          <Route path="/blog/paper/lillicrap-2019" element={<PaperLillicrap2019 />}/>

          {/* NOTES */}
          <Route path="/notes/probability" element={<NoteProbabilityPage />} />
          <Route path="/notes/cognitive-science-memoranda" element={<NoteCognitiveScienceMemorandaPage />} />
          <Route path="/notes/favourite-images" element={<NoteFavouriteImagesPage />} />
          <Route path="/blog/bjj-resources" element={<BJJResources />} />
          <Route path="/notes/favourite-lyrics" element={<NoteFavouriteLyricsPage />} />          

          {/* NOT FOUND */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
