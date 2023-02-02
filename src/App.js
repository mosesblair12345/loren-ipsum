import React, { useState } from "react";
import data from "./data";
function App() {
  const initialText = data[0];
  const [count, setCount] = useState(0);
  const [text, setText] = useState([initialText]);
  const handleChange = (event) => {
    setCount(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>Tired of boring loren ipsum?</h3>
      <form onSubmit={handleSubmit} className="loren-form">
        <label htmlFor="ammount">Paragraphs: </label>
        <input
          type="number"
          id="ammount"
          name="ammount"
          onChange={handleChange}
          value={count}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="loren-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
