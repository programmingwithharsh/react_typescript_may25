import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteApp from './QuoteApp';

const username: string = "Namrata";
const interests: string[] = ["Playing Cricket", "Watching Movies", "Podcast", "Reading Novels"];
const active: boolean = true;

const birth = {
  place: "Bangalore",
  year: 2000
};

function App() {
  return (
    <div className="App">
      <QuoteApp quotes={interests} />
    </div>
  );
}

export default App;
