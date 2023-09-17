import "./styles/global.scss";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/top/HomePage/HomePage";
import AboutPage from "./pages/top/AboutPage/AboutPage";
import BlogsPage from "./pages/top/BlogsPage/BlogsPage";
import NotesPage from "./pages/top/NotesPage/NotesPage";
import TrackingPage from "./pages/top/TrackingPage/TrackingPage";
import BlogTemplatePage from "./pages/blogs/BlogTemplatePage";
import NoteTemplatePage from "./pages/notes/NoteTemplatePage";
import NoteRecommendationsPage from "./pages/notes/NoteRecommendationsPage";
import NotFoundPage from "./pages/top/NotFoundPage/NotFoundPage";

import NoteProbabilityPage from "./pages/notes/NoteProbabilityPage";

function App() {
  return (
      <HashRouter>
        <Routes>
          {/* HOMEPAGE */}
          <Route path="/" element={<HomePage />} />

          {/* TOP PAGES */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/notes" element={<NotesPage />} />
          {/* <Route path="/tracking" element={<TrackingPage />} /> */}

          {/* BLOGS */}
          <Route path="/blogs/template" element={<BlogTemplatePage />} />

          {/* NOTES */}
          <Route path="/notes/template" element={<NoteTemplatePage />} />
          <Route path="/notes/probability" element={<NoteProbabilityPage />} />
          <Route path="/notes/recommendations" element={<NoteRecommendationsPage />} />

          {/* NOT FOUND */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
