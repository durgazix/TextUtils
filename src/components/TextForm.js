import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    const newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success");
  }

  const handleLoClick = ()=>{
    const newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success");
  }

  const handleClearClick = ()=>{
    const newText = " "
    setText(newText)
    props.showAlert("Clear Text", "success");
  }

  const handleCapitalizeClick = () => {
    const newText = text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setText(newText);
    props.showAlert("Converted to Capitalized Text", "success");
  }

  const handleTrimClick = () => {
    const newText = text.trim();
    setText(newText);
    props.showAlert("Sentences are trimmed", "success");
  }

  const handleReplaceClick = (searchValue, newValue) => {
    const newText = text.replace(new RegExp(searchValue, 'g'), newValue);
    setText(newText);
    props.showAlert("Character Replaced", "success");
  }

  const handleReverseClick = () => {
    const newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Converted to Reversed Text", "success");
  }
  

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value)
  }
  const [text, setText] = useState("Enter text here : ")
  return (
    <>
    <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
        <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick}>Capitalized Text</button>
        <button className="btn btn-primary mx-2" onClick={handleTrimClick}>Trim Text</button>
        <button className="btn btn-primary mx-2" onClick={handleReplaceClick}>Replace Char</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleReverseClick}>Reverse Text</button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary </h2>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here : "}</p>
    </div>
    </>
  )
}
