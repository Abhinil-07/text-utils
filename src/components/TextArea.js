import { useRef, useState } from "react"
import React from 'react'




export default function TextArea(props) {
    const nameInput = useRef(null)
    const [text, setText] = useState('');

    const handleOnChange = (event) =>{
        // console.log("on change triggered")
        setText(event.target.value)
    }

    const handleUpperCase = () =>{
        console.log("HandleUpperCase triggered")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLowerCase = () =>{
        console.log("HandleLowerCase triggered")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }

    const handleCopy = () => {
        // var text = nameInput.current.value
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        
    }
    return (
        <>
            
            <div className="mb-3"  style ={{color: (props.mode==='light'?"black":"white") }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor: (props.mode==='light'?"white":"black"),color: (props.mode==='light'?"black":"white") }} id="mybox" rows="8" ref ={nameInput}  >
                 {text}
                </textarea>

                <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleUpperCase}>Convert to Uppercase</button>  
                <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleLowerCase}>Convert to Lowercase</button>
                {/* <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button> */}
                
            </div>

            <div className="container my-3" style ={{color: (props.mode==='light'?"black":"white") }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes Read</p>
            </div>
        </>
    )
}
