import React, {useState,useEffect,Component} from 'react';



// export default class Form extends Component{

// render(){
//     return (
//         <div>
//             <h1> USE EFFECT HOOKS IN REACT  JS</h1>
//         </div>
//     );
// }

// }
const Form = () =>{
const [Count,Setcount]=useState(1)
useEffect(()=>{
    console.warn(Count)
},[])
    return(

        <div>
           <h1>USE EFFECT HOOKS IN REACT  JS {Count}</h1>  
           <button onClick={()=>{Setcount(Count+1)}}> INCREMENT</button>
           </div>
    );
};


export default Form;