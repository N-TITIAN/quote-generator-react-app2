import "./App.css";
import NewQuoteButton from "./components/NewQuoteButton";
import Quote from "./components/Quote";
import { useState } from "react";
import { useEffect } from "react";

//array definition


function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  //function to select random quotes
  const selectRandomQuote = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  };
 


  const fetchNewQuote = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      console.log(data);
       const randomQuote = selectRandomQuote(data);
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author);

    } catch (error) {
      console.error("Error fetching quote:", error);
      
    }
  };

  useEffect(() => {
    fetchNewQuote(); // Fetch a quote on component mount
  }, // eslint-disable-next-line
  []); // Empty dependency array for fetching only on mount

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
