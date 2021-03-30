import React from 'react';
//Import the React Libary 

//Our arrow function 
const Third = () => {
    const date = new Date().toLocaleDateString();
    return (
        <div>
            <p>This componet was created on: {date} </p>
        </div>
    );
}

//Export to use the 'Third' componet in our App.js file
export default Third;