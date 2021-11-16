import React from 'react'

const Button = ({ onAddBtn, showAdd, text }) => {
   
    return( 
        <button onClick={onAddBtn} className="btn">{text}</button>
)}

export default Button
