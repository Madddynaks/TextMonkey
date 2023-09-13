import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("OnChange");
        setText(event.target.value);
    }
    const handleDownClick = (event)=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = (event)=>{
        console.log("Lowercase was clicked" + text);
        let newText = ''
        setText(newText);
    }
    const handleInverseClick = ()=>{
        console.log("Inverse was clicked" + text);
        let newText = text.split(' ').reverse().join(' ');
        setText(newText);
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <button  disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleInverseClick}>Invert Text</button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h3>
            Your text Summary
        </h3>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters.</p>
        <p>
            Average time to read this text is {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes.
        </p>
        <h3>
            Preview
        </h3>
        <p>{text.length>0?text:"Enter something to Preview"}</p>
    </div>
    </>
  )
}
