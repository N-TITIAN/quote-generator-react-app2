import React from "react";

function NewQuoteButton({ fetchNewQuote }) {
  return (
    <button className="quote-button" onClick={fetchNewQuote}>
      New Quote
    </button>
  );
}
export default NewQuoteButton;