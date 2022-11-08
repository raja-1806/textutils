import React, { useState } from 'react';




function Textform(props){
    const [text, setText] = useState("")

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        let upperCase = text.toUpperCase();
        setText(upperCase);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowClick=()=>{
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Converted to Lowercase", "success")
    }
    const clearText=()=>{
        setText("");
        props.showAlert("Text cleared", "success")
    }
    const removeSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success")
    }
    const handleCopy = ()=>{
        let text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to clipboard", "success")
    }

    return(
        <>
        <div className="container" style = {{color : props.mode==="light"?"black":"white"}}>
            <div className="mb-3 my-2">
            <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='enter your text here' value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==="light"?"white":"#041209", color : props.mode ==="light"?"black":"white"}}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear text</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={removeSpaces}>Remove Extra Spaces</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container"style = {{color : props.mode==="light"?"black":"white"}}>
            <h2>text summary</h2>
            <p>{text.split(" ").filter((element)=>element.length !== 0).length} words and {text.length} characters</p>
            <p>approx {0.008 * text.length} minutes to read</p>
            <h2>Text Preview</h2>
            <p>{text.length>0?text:"Enter your text to preview here"}</p>
        </div>
        </>
    )
}

export default Textform;