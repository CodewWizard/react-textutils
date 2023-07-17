import React, {useState} from 'react';

export default function TextForm(props){
  const [text, setText] = useState("");

  const handleOnChange =(event)=>{
    // alert("change");
    setText(event.target.value);
    
  }

  const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase has been enabled!", "success")
  }
  const handleLowClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lowercase has been enabled!", "success")
    
  }

  const reset =()=>{
    setText("");
    props.showAlert("Clear!", "success")
  }
  
  return(
    <>
      <div className={`container bg-${props.bg} text-${props.bg==='dark'?'light':'dark'}`}>
      <h1>TextForm</h1>
        
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
        <button className="btn btn-primary mx-2" onClick={reset}>
        Clear
      </button>
        <p className='my-2'>{text.split(" ").length} words and length of text is {text.length}</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter text to Preview"}</p>
        </div>
    </>
  )
}