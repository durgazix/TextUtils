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
    setAreButtonsDisabled(true);
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

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  }
  

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value)
    if (event.target.value.length > 0) {
      setAreButtonsDisabled(false);
    }
  }  

  const [text, setText] = useState("Enter text here : ")
  const [areButtonsDisabled, setAreButtonsDisabled] = useState(false);

  return (
    <>
    <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1 className = "my-2">{props.heading}</h1>
        <div className="form-group">
        <textarea className="form-control my-3" value = {text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {areButtonsDisabled || text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled = {areButtonsDisabled ||  text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled = {areButtonsDisabled ||  text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled = {areButtonsDisabled ||  text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleCapitalizeClick}>Capitalized Text</button>
        <button disabled = {areButtonsDisabled ||  text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleTrimClick}>Trim Text</button>
        <button disabled = {areButtonsDisabled ||  text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleReplaceClick}>Replace Char</button>
        <button disabled = {areButtonsDisabled ||  text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleReverseClick}>Reverse Text</button>
        <button disabled = {areButtonsDisabled ||  text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary </h2>
      <p>{text.split(/\s+/).filter((element)=> {return element.length !== 0}).length} words and {text.length} characters.</p>
      <p>{0.008 * text.split(" ").filter((element)=> {return element.length !== 0}).length} Minutes read</p>
      <h2>Preview</h2>
       <p>{text.length>0?text:"Nothing To Preview"}</p>
    </div>
    </>
  )
}
