import React, { useState } from 'react';




function Textform(props){
    const [text, setText] = useState("")

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        let upperCase = text.toUpperCase();
        setText(upperCase)
    }
    const handleLowClick=()=>{
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
    }
    const clearText=()=>(
        setText("")
    )
    return(
        <>
        <div className="container">
            <div class="mb-3 my-2">
            <h1>{props.heading}</h1>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='enter your text here' value={text} onChange={handleOnChange}></textarea>
            </div>
            <button type="button" class="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" class="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button type="button" class="btn btn-primary mx-1 my-1" onClick={clearText}>Clear text</button>
        </div>
        <div className="container">
            <h2>text summary</h2>
            <p>{text.split(" ").filter((element)=>element.length !== 0).length} words and {text.length} characters</p>
            <p>approx {0.008 * text.length} minutes to read</p>
            <h2>Text Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

export default Textform;