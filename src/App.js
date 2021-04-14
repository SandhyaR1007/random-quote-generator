import "./styles.css";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import colors from "./colors";

export default function App() {
  let rand = 0;
  const [display, setDisplay] = useState({
    content: "Believe It",
    author: "Naruto Uzumaki"
  });

  const [rang, setRang] = useState("");
  const [data, setData] = useState({});

  try {
    useEffect(() => {
      setTimeout(() => {
        fetch("https://api.quotable.io/random")
          .then((res) => res.json())
          .then((json) => setData(json));
      }, 0.7);
    });
  } catch (error) {
    console.log(error);
  }

  const displaySetter = () => {
    rand = Math.floor(Math.random() * 10);
    setRang(colors[rand]);
    setDisplay(data);
  };

  return (
    <div className="App">
      <Helmet>
        <style>{`body { background-color:${rang} ; }`}</style>
      </Helmet>
      <div className="card" style={{ color: `${rang}` }}>
        <div>
          <h3>
            <span className="comma">“</span>
            {display.content}
          </h3>
          <i>
            <p style={{ textAlign: "right", fontSize: "1rem" }}>
              -{display.author}
            </p>
          </i>
          <div className="btn-div">
            <input
              type="button"
              style={{ backgroundColor: `${rang}` }}
              onClick={displaySetter}
              className="btn"
              value="new quote"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
