import React,{useState} from 'react'
import useUndo from 'use-undo';

export default function Utilities(props) {

const HandlerUp=()=>{
   let NewText = text.toUpperCase();
   setText(NewText)
   document.title="Uper Case";

   
}
const HandlerLo=()=>{
    let NewText = text.toLowerCase();
    setText(NewText)
    document.title="Lower Case";
        
 }

 const HandlerClear=()=>{
    let NewText =("");
    setText(NewText)
        
 }

 const HandlerCopy=()=>{
   var text = document.getElementById("utilities")
   text.select();
   navigator.clipboard.writeText(text.value)
   
        
 }

 const HandlerExtraSpace=()=>{
 let newText = text.split(/[ ]+/)
 setText(newText.join(" "))
  
       
}

const ShowAlert= (message,type)=>{
  setalert({
    msg:message,
    type:type
  })

}




 const Handler=(e)=>{
     setText(e.target.value);
 }
    const [text,setText] = useState("")
    const [alert, setalert] = useState(null) 
    
    
    return (
        <>

        <div className="container">
                
  
        <div className="form-group">
            <h1> Analyze the paragraph</h1>

           <div className="alert alert-warning alert-dismissible fade show" role="alert">
          {props.alert.type}This is alert{props.alert.message}
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
         
          <textarea className="form-control"  value={text} id="utilities" onChange={Handler}  rows="8"> </textarea>
          <button type="button" className="btn btn-primary mx-2" onClick={HandlerUp} >Capital letter</button>
          <button type="button" className="btn btn-primary mx-2" onClick={HandlerLo} >Small letter</button>
          <button type="button" className="btn btn-primary mx-2" onClick={HandlerClear} >Clear</button>
          <button type="button" className="btn btn-primary mx-2" onClick={HandlerCopy} >Copy text</button>
          <button type="button" className="btn btn-primary" onClick={HandlerExtraSpace} >Remove Extra Spaces</button>

        
      

          {/* <p>You clicked {presentCount} times</p> */}
    
      {/* <button key="undo" onClick={undoCount} disabled={!canUndo}>
        undo
      </button>{" "}
      <button key="redo" onClick={redoCount} disabled={!canRedo}>
        redo
      </button>
      <button key="reset" onClick={() => resetCount(0)}>
        reset to 0
      </button> */}

        </div>
      
                  </div>

                  <div className="container my-4">
                      <h2>Summary of your paragraph </h2>
                      <p> <b>{text.split(" ").length}</b> words and <b> {text.length}</b> Characters in your paragraph </p>
                      <p>{0.008 * text.split(" ").length} minutes takes to read the paragraph</p>
                      <h3>Preview  </h3>
                      <p>{text}</p>
                  </div>

                  </>
    )
}
