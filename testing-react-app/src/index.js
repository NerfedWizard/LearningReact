import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
// import Author from './Author';

const PlusOne = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
        console.log(counter);
    }
    return <div className="App-header">
        <div className="permanent-font">
            <p>This is a counter Wahoo!!!!  _{counter}</p>
            <button onClick={increment} > INCREMENT</button>
        </div>
    </div>
}


ReactDOM.render(<PlusOne />, document.getElementById('root'));