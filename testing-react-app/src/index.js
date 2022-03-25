import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
// import axios from 'axios';
// import Author from './Author';

const PlusOne = () => {
    const [counter, setCounter] = useState(0);
    const axios = require('axios');
    const [data, setData] = useState([]);
    const [quote, setQuote] = useState([]);
    async function GetQuotes() {
        increment();
        const ident = "ID" + counter;
        let result = await axios.get(`/api/quote/${ident}`);

        setData(result.data);
        console.log(ident);
        setQuote(JSON.stringify(data, ['quoteAuthor', 'quoted', 'quoteCategory'], 4));
        console.log(data);
    }
    const increment = () => {
        setCounter(counter + 1);
        console.log(counter);
    }
    return <div className="App-header">
        <div className="permanent-font">
            <p>And Now I have quotes!!!</p>
            <li>{quote}</li>
            <button onClick={GetQuotes} > INCREMENT</button>
        </div>
    </div>
}



ReactDOM.render(<PlusOne />, document.getElementById('root'));