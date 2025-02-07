import React, { useState } from "react";
import { generateId, getNewExpirationTime } from './utils/Utilities';

export function AddThoughtForm(props) {

  const [text, setText] = useState('');
  
  const handleTextChange = ({target}) => { 
    const newText = target.value;
    setText(newText);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(text.trim() === ''){
      alert('Vous devez entrer quelque chose !');
    }
    let thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    }
    props.addThought(thought);
    setText('');
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
