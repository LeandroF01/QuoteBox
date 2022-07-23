import quotes from "../json/quotes.json";
import colors from "../utils/colors";
import { useState } from "react";

const QuoteBox = () => {
  const getRAndomElements = (arr) => {
    const ramdon = Math.floor(Math.random() * arr.length);
    return arr[ramdon];
  };
  getRAndomElements(quotes);

  let cardRamdon = getRAndomElements(quotes);
  let colorsRamdon = getRAndomElements(colors);
  const [ramdonQuote, setramdonQuote] = useState(cardRamdon);
  const [ramdonColors, setramdonColors] = useState(colorsRamdon);

  const ramdonAlllQuot = () => {
    cardRamdon = getRAndomElements(quotes);
    colorsRamdon = getRAndomElements(colors);

    setramdonColors(cardRamdon);
    setramdonColors(colorsRamdon);
  };

  const objBackground = {
    background: colorsRamdon,
  };
  const objcolor = {
    color: colorsRamdon,
  };

  return (
    <section className="section__card" style={objBackground}>
      <article className="article__card">
        <article className="article__text">
          <i class="fa-solid fa-quote-left" style={objcolor}></i>
          <p className="text-quote" style={objcolor}>
            {cardRamdon.quote}
          </p>
        </article>
        <article className="article__author">
          <h2 className="author-name" style={objcolor}>
            {cardRamdon.author}
          </h2>
        </article>
        <button
          className="car-button"
          onClick={ramdonAlllQuot}
          style={objBackground}>
          <i class="fa-solid fa-angles-right"></i>
        </button>
      </article>
    </section>
  );
};

export default QuoteBox;
