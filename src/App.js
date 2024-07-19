import "./App.css";
import NewQuoteButton from "./components/NewQuoteButton";
import Quote from "./components/Quote";
import { useState } from "react";
import { useEffect } from "react";

//array definition
const quotes = [
  {
    quote: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln",
  },
  {
    quote: "life is a spoon",
    author: " Ndifon",
  },
  {
    quote: "give up",
    author: "Titiana",
  },
  {
    quote: "pray pray",
    author: "Abraham ",
  },
];

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  //function to select random quotes
  const selectRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };
  const fetchNewQuote = () => {
    const randomQuote = selectRandomQuote();
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };
  useEffect(
    () => {
      fetchNewQuote();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote Generator with React</h1>
        <Quote quote={quote} author={author} />
        <NewQuoteButton fetchNewQuote={fetchNewQuote} />
      </header>
    </div>
  );
}

export default App;
