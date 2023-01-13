import React,{useState} from 'react'

export default function (props) {
    const [text , setText] = useState('Enter text here');
    const handleUpClick=()=>{
        console.log("button was clicked");
        var upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted to uppercase" ,"success");
    }
    const handleLowClick=()=>{
      console.log("button was clicked");
      var upperText = text.toLowerCase();
      setText(upperText);
      props.showAlert("Converted to lowercase" ,"success");
  }
  const handleClearClick=()=>{
    console.log("button was clicked");
    var upperText = "";
    setText(upperText);
    props.showAlert("Text cleared" ,"success");
    }
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices.filter(function(voice) { return voice.name === 'Microsoft Ravi - English (India)'; })[0];
  window.speechSynthesis.speak(msg);
}
const handleCopy = ()=>{
var text = document.getElementById("exampleFormControlTextarea1");
text.select();
navigator.clipboard.writeText(text.value);
props.showAlert("Copied to clipboard" ,"success");
}
    const handleOnChange=(event)=>{
        console.log("change was made");
        setText(event.target.value);
            }
    return (
      <>
      <div style={{color:props.mode==='dark'? 'white':'black'}}>
                  <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='dark'? 'grey':'white',color:props.mode==='dark'? 'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>ToUppercase </button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}> ToLowercase </button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear </button>
<button  onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
<button  onClick={handleCopy} className="btn btn-primary mx-2 my-2">Copy text</button>
    </div>
    <div className="container my-3">
      <h1>your text summary</h1>
  <p> {text.split(" ").filter((elem)=>{ return elem.length!== 0}).length}  words , {text.length} characters</p>
  <p> {0.008*text.split(" ").length} minutes to read this text</p>
  <h2>
    Preview
  </h2>
  <p>{text}</p>
    </div>
    </div>
    </>
  )
}

// {text.charAt(text.length-1)===" "?(text.split(" ").length - 1):text.split(" ").length}