import React from 'react'

export default function About(props) {

    let myStyle ={
        color: props.mode === "dark"?"white":"rgb(33 49 96)",
        backgroundColor: props.mode === "dark"?"rgb(33 49 96)":"white",
        borderColor: props.mode === "dark"?"white":"rgb(33 49 96)"

    }
  return (
    <div className='container'>
        <h1 style={{color: props.mode === "dark"?"white":"#2a344f"}}>About Us</h1>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header" id="headingOne">
                <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                TextUtils give you a way to analyze your text quickly and efficiently. Be it word count, character count or etc.
                </div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                </div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, exel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
