import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Buffer } from "buffer";
import axios from "axios";
import qs from "qs";
import homePhoto from "../../assets/joe.jpeg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./HomePage/HomePage.scss";
import spotifyIcon from "../../assets/icons/spotify.png";

function TodoPage() {
  const [likedSongs, setLikedSongs] = useState([]);
  const [accessToken, setAccessToken] = useState(undefined);
  const [numberSongs, setNumberSongs] = useState(5);
  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  return (
    <>
      <Header thisTitle={"TODO [non-public]"} />

      <main>
        <p style={{display: "inline-block",padding: "1rem", border: "1px solid black", borderRadius: "0.5rem"}}>
          {" "}
          <Link to="/about">About</Link>, <Link to="/blogs">Blogs</Link>,{" "}
          <Link to="/notes">Notes</Link>
        </p>
        <div
            style={{
              border: "1px solid black",
              borderRadius: "1rem",
              padding: "1rem",
              marginTop: "2rem"
            }}
          >
            <h2>Site TODOs</h2>
            <ul>
              <li>Turn Spotify widget into React component.</li>
            </ul>
          </div>
      </main>

      <Footer home={true} />
    </>
  );
}

export default TodoPage;
