import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./App.css";
import Quote from './components/quote';
function App() {
    const [quote, setQuote] = useState({});
    useEffect(async() => {
        const {data} = await axios.get("https://api.quotable.io/random",)
        const {content, author} = data;
        
        setQuote({content, author})
        
    },[])
    console.log(quote);
  return <div className='container'>
      <Quote quote={quote} />
      
  </div>;
}

export default App;
