import React, {useState} from 'react';

export default function TextForm(props) {

        const handleupclick = () => {
            console.log("Uppercase was clicked" +text);
            let newText = text.toUpperCase();
            settext(newText);
            props.showAlert("Converted to uppercase!", "success");
        }
        const handleloclick = () => {
            console.log("Uppercase was clicked" +text);
            let newText = text.toLowerCase();
            settext(newText);
            props.showAlert("Converted to lowercase!", "success");
        }

        const handleOnChange = (event) => {
            console.log("On change");
            settext(event.target.value);
        }
        const handleClearClick = () => {
            let newText = '';
            settext(newText)
            props.showAlert("Text Cleared!", "success");
        }
        const handleCopy = () => {
            var text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied to clipboard!", "success");
        }
        const handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/);
            settext(newText.join(" "))
            props.showAlert("Extra spaces removed!", "success");
        }

        const [text, settext] = useState('');
        return (
            <>
                <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                    <textarea id='myBox' className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'rgb(41 55 95)':'white', color: props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
                    </div>
                    <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleupclick}>Convert to Uppercase</button>
                    <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleloclick}>Convert to Lowercase</button>
                    <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear text</button>
                    <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>copy text</button>
                    <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove extra spaces</button>
                </div>
                <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
                    <h1>Your text summary</h1>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
                </div>
            </>
        );
    }

