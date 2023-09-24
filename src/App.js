import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    getSuggestions();
  }, [value]);
  const getSuggestions = async () => {
    const data = await fetch(
      "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        value
    );
    const json = await data.json();
    console.log(json);
    setData(json[1]);
  };
  return (
    <div className="App">
      <input
        type="string"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "100%" }}
      />
      <div style={{ width: "100%", border: "1px solid gray", height: "auto" }}>
        {data.map((x) => {
          return (
            <h3
              onClick={() => {
                setValue(x);
              }}
            >
              {x}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
