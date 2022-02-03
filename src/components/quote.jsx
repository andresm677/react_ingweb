import React from 'react';

function Quote({quote}) {
    console.log(quote);
  return <div className='quote-container'>
  <p className='quote'>{quote.content}</p>
  <div className='author'>
      <p>{quote.author}</p>
  </div>
  </div>
}

export default Quote;
