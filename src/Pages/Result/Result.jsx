import React, {useState, useEffect} from 'react';
import './Result.css';

const Result = ({ results, data, onReset}) => {
    return (
        <div className='result-div'>
            <div className="result-content">
                <h3 className='result-topic'>Your Result</h3>
                <button className='play_again' onClick={onReset}>Play Again</button>
            </div>
        </div>
    )
}

export default Result;
