import "./styles/global.scss";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/top/HomePage/HomePage";
import AboutPage from "./pages/top/AboutPage/AboutPage";
import BlogsPage from "./pages/top/BlogsPage/BlogsPage";
import NotesPage from "./pages/top/NotesPage/NotesPage";
import CVPage from "./pages/top/CVPage/CVPage";
import TrackingPage from "./pages/top/TrackingPage/TrackingPage";
import BlogTemplatePage from "./pages/blogs/BlogTemplatePage";
import NoteTemplatePage from "./pages/notes/NoteTemplatePage";
import NoteRecommendationsPage from "./pages/notes/NoteRecommendationsPage";
import NotFoundPage from "./pages/top/NotFoundPage/NotFoundPage";

import BlogWritingToDoPage from "./pages/blogs/BlogWritingToDoPage";
import BlogInventionPerfectionPage from "./pages/blogs/BlogInventionPerfectionPage";

import NoteProbabilityPage from "./pages/notes/NoteProbabilityPage";
import NoteCognitiveScienceMemorandaPage from "./pages/notes/NoteCognitiveScienceMemorandaPage/NoteCognitiveScienceMemorandaPage";

function App() {

  // const pwNumbers = [99, 104, 48, 48, 99, 104, 107, 33, 105, 116, 104, 38, 107, 33, 110];
  // const pwString = pwNumbers.map(code => String.fromCharCode(code)).join("");

  return (
      <HashRouter>
        <Routes>
          {/* HOMEPAGE */}
          <Route path="/" element={<HomePage />} />

          {/* TOP PAGES */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/cv" element={<CVPage />} />
          {/* <Route path="/tracking" element={<TrackingPage />} /> */}

          {/* BLOGS */}
          <Route path="/blogs/template" element={<BlogTemplatePage />} />
          <Route path="/blogs/writing-to-do" element={<BlogWritingToDoPage />} />
          <Route path="/blogs/invention-and-perfection" element={<BlogInventionPerfectionPage />} />

          {/* NOTES */}
          <Route path="/notes/template" element={<NoteTemplatePage />} />
          <Route path="/notes/probability" element={<NoteProbabilityPage />} />
          <Route path="/notes/recommendations" element={<NoteRecommendationsPage />} />
          <Route path="/notes/cognitive-science-memoranda" element={<NoteCognitiveScienceMemorandaPage />} />

          {/* NOT FOUND */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
