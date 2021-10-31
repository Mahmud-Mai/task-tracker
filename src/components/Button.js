import React from 'react'

const Button = () => {
    const onClick =() => {
        console.log('clicked')
    }
    return( 
    <button onClick={onClick} className="btn">Add</button>
)}

export default Button
