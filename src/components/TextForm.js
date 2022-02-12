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
            props.showAlert("Clear text!", "success");
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
                    <textarea id='myBox' className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#2a344f':'white', color: props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
                    </div>
                    <button className='btn btn-primary mx-2' onClick={handleupclick}>Convert to Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleloclick}>Convert to Lowercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
                    <button className='btn btn-primary mx-2' onClick={handleCopy}>copy text</button>
                    <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove extra spaces</button>
                </div>
                <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
                    <h1>Your text summary</h1>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
                </div>
            </>
        );
    }

