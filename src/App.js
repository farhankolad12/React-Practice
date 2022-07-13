import "./App.css";
import React, { useEffect, useState } from "react";
import Img from "./components/Img";
import Button from "./components/Button";

function App() {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(true);
  const colors = ["red", "yellow", "blue", "green"];

  const getImg = async () => {
    setLoading(true);
    const res = await fetch("https://source.unsplash.com/400x400/?random");
    setImg(res.url);
    setLoading(false);
  };

  useEffect(() => {
    getImg();
  }, []);

  return (
    <div className="App">
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <Img
            url={img}
            color={colors[Math.floor(Math.random() * colors.length)]}
          />
          <Button onClick={getImg} />
        </div>
      )}
    </div>
  );
}

export default App;
