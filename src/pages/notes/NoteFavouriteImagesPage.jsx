import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import { useState } from "react";
import newmanImg from "../../assets/favourite-images/newman.jpeg";

function NoteFavouriteImagesPage() {
  const [imagesPage, setImagesPage] = useState(1);

  const containerStyle = {
    backgroundColor: "black",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "row",
    padding: "0.6rem",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    width: "13rem",
  };

  const FisherYatesShuffle = (arr) => {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length - 1; i++) {
      let j = Math.floor(Math.random() * (newArr.length - i) + i);
      let swap = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = swap;
    }
    return newArr;
  };

  const splitToNChunks = (arr, n) => {
    let result = [];
    for (let i = n; i > 0; i--) {
      result.push(arr.splice(0, Math.ceil(arr.length / i)));
    }
    return result;
  };

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/e/e4/Leda_and_the_Swan_by_Jean-Leon_Gerome.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Edvard_Munch_-_The_Sun_%281911%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/38/Th%C3%ADch_Qu%E1%BA%A3ng_%C4%90%E1%BB%A9c_self-immolation.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/07/Ernst_Mach_Inner_perspective.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
    "https://upload.wikimedia.org/wikipedia/en/9/96/Bell%2C_Virginia_Woolf_.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/90/Edvard_Munch_-_The_Murderer_-_MM.M.00793_-_Munch_Museum.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Edvard_Munch_-_Murder_-_741.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b4/Pygmalion_and_Galatea_MET_DT1969.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/78/30_Doradus%2C_Tarantula_Nebula.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/NASA_Earthrise_AS08-14-2383_Apollo_8_1968-12-24.jpg",
    newmanImg,
    "https://upload.wikimedia.org/wikipedia/commons/7/70/William-Adolphe_Bouguereau_%281825-1905%29_-_Dante_And_Virgil_In_Hell_%281850%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5b/Francisco_Goya_y_Lucientes_-_Seated_Giant_-_Google_Art_Project.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d2/Paradiso_Canto_31.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/ce/Girl_with_a_Pearl_Earring.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/ea/Saint_Augustine_by_Philippe_de_Champaigne.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/IAR_alps_c1930.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/13/Brendan_Gleeson_at_the_Moet_BIFA_2014.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/Descartes-reflex.JPG",

  ];

  const half = Math.ceil(images.length / 2);
  const shuffledImages = FisherYatesShuffle(images);
  const splitShuffledImages = splitToNChunks(shuffledImages, 4);
  console.log(splitShuffledImages);

  return (
    <MathJaxContext>
      <Header
        thisTitle={"Some of My Favourite Images"}
        returnDestination={"Notes"}
      />

      <main>
        <p>These are some images which I find have made an impact on me. Some of them are photographs, some are paintings, some are scientific images, some may be of other sorts.</p>
        <br />
        <div style={containerStyle}>
          <div style={{ ...columnStyle, margin: "0 0.6rem 0 0" }}>
            {splitShuffledImages[0].map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={image}
                loading="lazy"
                style={{ marginBottom: "0.6rem", width: "100%" }}
              />
            ))}
            <h1 style={{color:"#FFFFFF",fontSize:"5rem",textAlign:"center"}}>...</h1>
          </div>
          <div style={{ ...columnStyle, margin: "0 0.6rem 0 0" }}>
            {splitShuffledImages[1].map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={image}
                loading="lazy"
                style={{ marginBottom: "0.6rem", width: "100%" }}
              />
            ))}
            <h1 style={{color:"#FFFFFF",fontSize:"5rem",textAlign:"center"}}>...</h1>
          </div>
          <div style={{ ...columnStyle, margin: "0 0.6rem 0 0" }}>
            {splitShuffledImages[2].map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={image}
                loading="lazy"
                style={{ marginBottom: "0.6rem", width: "100%" }}
              />
            ))}
            <h1 style={{color:"#FFFFFF",fontSize:"5rem",textAlign:"center"}}>...</h1>
          </div>
          <div style={{ ...columnStyle, margin: "0 0 0.6rem 0" }}>
            {splitShuffledImages[3].map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={image}
                loading="lazy"
                style={{ marginBottom: "0.6rem", width: "100%" }}
              />
            ))}
            <h1 style={{color:"#FFFFFF",fontSize:"5rem",textAlign:"center"}}>...</h1>
          </div>
        </div>
      </main>

      <Footer />
    </MathJaxContext>
  );
}

export default NoteFavouriteImagesPage;
