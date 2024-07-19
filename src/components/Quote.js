import React from 'react';

function  Quote(props){
  
    return(
        <div className="quote">
            <p className="quote-text">{props.quote}</p>
            <p className="quote-author">{props.author}</p>
        </div>
    );
     
}
export default Quote;