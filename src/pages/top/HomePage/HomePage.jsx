import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Buffer } from "buffer";
import axios from "axios";
import qs from "qs";
// require('dotenv').config();
// import 'dotenv/config';
// var Buffer = require('buffer/').Buffer
import homePhoto from "../../../assets/joe.jpeg";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./HomePage.scss";
import spotifyIcon from "../../../assets/icons/spotify.png";

function HomePage() {
  const [likedSongs, setLikedSongs] = useState([]);
  const [accessToken, setAccessToken] = useState(undefined);
  const [numberSongs, setNumberSongs] = useState(5);
  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const getAccess = async () => {
    try {
      console.log("Trying to access.");
      const data = qs.stringify({ grant_type: "client_credentials" });
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        data,
        {
          headers: {
            Authorization:
              "Basic " +
              new Buffer.from(client_id + ":" + client_secret).toString(
                "base64"
              ),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
      setAccessToken(response.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async (accessToken) => {
    try {
      console.log("Trying to get data.");
      const likePlaylistID = "5eRDUqx4cFvLwWNCc7Z8zG";
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${likePlaylistID}`,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data.tracks.items);
      setLikedSongs(response.data.tracks.items);
    } catch (error) {
      console.log(error);
    }
  };

  if (!accessToken) {
    getAccess();
  }

  if (likedSongs.length == 0) {
    getData(accessToken);
  }

  return (
    <>
      <Header thisTitle={""} />

      <main className="home-main">
        <img src={homePhoto} className="home-main__photo" alt="joe" />
        <div className="home-main__welcome">
          <p>Hi, there. You must be lost! Me too...</p>
          <br />
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/blogs">Blogs</Link>
          </p>
          <p>
            <Link to="/notes">Notes</Link>
          </p>
          {/*   <p>
                  <Link to="/tracking">Tracking</Link>
                </p>
                <p>
                  <a href="">Research</a>
                </p>
                <p>
                  <a href="">Publications</a>
                </p> */}
          <br />
          <p>This site is new, and a work-in-progress.</p>
          <br />
          <br />
          <br />
        </div>
        <div style={{ marginTop: "3rem", width: "60%" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={spotifyIcon}
              style={{ height: "2rem", margin: "-0.5rem 0.5rem 0.5rem 0" }}
            />
            <p>Recently Liked Songs <span style={{fontSize:"0.8rem"}}>(experimental)</span></p>
            <div
              style={{
                backgroundColor: "#1DB954",
                borderRadius: "50%",
                height: "2rem",
                marginLeft: "auto",
                position: "relative",
                textAlign: "center",
                top: "-0.2rem",
                width: "2rem",
              }}
            >
              <p
                style={{ marginTop: "0.3rem" }}
                onClick={() => {
                  setNumberSongs(3);
                }}
              >
                <b>3</b>
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#1DB954",
                borderRadius: "50%",
                height: "2rem",
                marginLeft: "0.2rem",
                position: "relative",
                textAlign: "center",
                top: "-0.2rem",
                width: "2rem",
              }}
            >
              <p
                style={{ marginTop: "0.3rem" }}
                onClick={() => {
                  setNumberSongs(5);
                }}
              >
                <b>5</b>
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#1DB954",
                borderRadius: "50%",
                height: "2rem",
                marginLeft: "0.2rem",
                position: "relative",
                textAlign: "center",
                top: "-0.2rem",
                width: "2rem",
              }}
            >
              <p
                style={{ marginTop: "0.3rem" }}
                onClick={() => {
                  setNumberSongs(10);
                }}
              >
                <b>10</b>
              </p>
            </div>
          </div>
          {/* <p style={{fontSize:"1rem"}}>Doesn't actually work (Spotify API = &#128169;), so is just random likes.</p> */}

          {shuffleArray(likedSongs)
            .slice(0, numberSongs)
            .map((songObject) => {
              return (
                <div
                  key={songObject.track.id}
                  style={{
                    backgroundColor: "#191414",
                    border: "solid #1DB954 0.3rem",
                    borderRadius: "0.5rem",
                    color: "#FFFFFF",
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "1.1rem",
                    justifyContent: "left",
                    marginBottom: "0.3rem",
                    padding: "0.5rem",
                  }}
                >
                  <a href={songObject.track.external_urls.spotify}>
                    <img
                      src={songObject.track.album.images[2].url}
                      style={{ borderRadius: "1rem", height: "4rem" }}
                    />
                  </a>
                  <div style={{ marginLeft: "1rem" }}>
                    <p>
                      <b>{songObject.track.name}</b>{" "}
                      {songObject.track.preview_url && (
                        <a
                          href={songObject.track.preview_url}
                          style={{ color: "#1DB954" }}
                        >
                          <span>&#9658;</span>
                        </a>
                      )}
                    </p>
                    <p>
                      {songObject.track.artists
                        .map((artist) => artist.name)
                        .join(", ")}
                    </p>
                    <p>
                      <i>{songObject.track.album.name}</i> (
                      {songObject.track.album.release_date.slice(0, 4)})
                    </p>
                  </div>
                </div>
              );
            })}
          <a
            href="https://open.spotify.com/playlist/5eRDUqx4cFvLwWNCc7Z8zG?si=ae748d3225a747d6"
            style={{ color: "#1DB954" }}
          >
            <p
              style={{
                fontSize: "3rem",
                lineHeight: "2rem",
                marginBottom: "2rem",
                marginTop: "-0.5rem",
                textAlign: "center",
              }}
            >
              ...
            </p>
          </a>
        </div>
        {/* <iframe
          src="https://open.spotify.com/embed/playlist/5eRDUqx4cFvLwWNCc7Z8zG?utm_source=generator&theme=0"
          frameborder="0"
          width="100%"
          height="152"
          loading="lazy"
        /> */}
        {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5eRDUqx4cFvLwWNCc7Z8zG?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"  /> */}
      </main>

      <Footer home={true} />
    </>
  );
}

export default HomePage;
