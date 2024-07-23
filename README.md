# Dynamic Quote Generator React App
Live link : https://quote-generator-react-app-dynamic.netlify.app/

import React, { useState, useEffect } from 'react';
import NewQuoteButton from './components/NewQuoteButton';
import Quote from './components/Quote';

const API_URL = 'https://api.quotable.io/random'; // Replace with your desired API URL

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
      // Handle errors gracefully (e.g., display an error message)
    }
  };

  useEffect(() => {
    fetchQuote(); // Fetch a quote on component mount
  }, []); // Empty dependency array for fetching only on mount

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote Generator with React</h1>
        <Quote quote={quote} author={author} />
        <NewQuoteButton onClick={fetchQuote} />
      </header>
    </div>
  );
}

export default App;


function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const fetchNewQuote = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const randomQuote = data[Math.floor(Math.random() * data.length)]; // Select a random quote
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
      // Implement error handling (e.g., display an error message)
    } finally {
      setIsLoading(false); // Set loading state to false after fetching or error
    }
  };

  useEffect(() => {
    fetchNewQuote(); // Fetch a quote on component mount
  }, []); // Empty dependency array for fetching only on mount

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote Generator with React</h1>
        {isLoading ? (
          <p>Loading quote...</p> // Display loading indicator while fetching
        ) : (
          <>
            <Quote quote={quote} author={author} />
            <NewQuoteButton onClick={fetchNewQuote} />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
Use code with caution.

Improvements:

Error Handling: The fetchNewQuote function now includes a more robust error handling mechanism. It checks the response status and throws an error if it's not OK. You can extend this to display user-friendly error messages.
Loading State: A new state variable isLoading is introduced to manage the loading state of the quote. While fetching, the code displays a "Loading quote..." message.
Code Structure: The code is forma