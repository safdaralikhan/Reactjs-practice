
import './App.css';
import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

import Home from  "./components/Home";
import About from  "./components/About";
import Contactus from  "./components/Contactus";
import Services from  "./components/Services";
import Form from  "./components/Form";
import Formsubmit from  "./components/Formsubmit";
import Formvalidation from  "./components/Formvalidation";
import Maplisting from  "./components/Maplistitng";
import Styleinreact from  "./components/Styleinreact";
import CallApi from  "./components/CallApi";
import Reactportal from "./components/Reactportal"
import Ref from "./components/Ref"
import Bootstrap from "./components/Bootstrap"
import ErrorBoundary from "./components/ErrorBoundary"
import Purecomponenet from "./components/Purecomponenet"
import Jwttoken from "./components/Jwttoken"
import Uncontrolcomponent from "./components/Uncontrolcomponent"
import Uploadfile from "./components/Uploadfile"
import Utilities from "./components/Utilities"
import FileUpload from "./components/FileUpload"
import LoginForm from "./components/LoginForm"
import Alert from "./components/Alert"






















function App(props) {
  return (
    <div className="App">
      {/* <Utilities alert="this is alert"/> */}
     
     <Router>
       <ul>
         <li><Link to="/" >Home</Link> </li>
         <li><Link to="/About">About</Link> </li>
         <li><Link to="/Contactus">Contactus</Link> </li>
         <li><Link to="/Services">Services</Link> </li>
         <li><Link to= "/Form"> Form </Link></li>
         <li><Link to= "/Formsubmit"> Formsubmit </Link></li>
         <li><Link to= "/Formvalidation"> Formvalidation </Link></li>
         <li><Link to= "/Maplisting"> Maplisting </Link></li>
         <li><Link to= "/Styleinreact"> Styleinreact </Link></li>
         <li><Link to= "/CallApi"> CallApi </Link></li>
         <li><Link to= "/Reactportal"> Reactportal </Link></li>
         <li><Link to= "/Ref"> Ref </Link></li>
         <li><Link to= "/Bootstrap"> Bootstrap </Link></li>
         <li><Link to= "/ErrorBoundary"> ErrorBoundary </Link></li>
         <li><Link to= "/Purecomponenet"> Purecomponenet </Link></li>
         <li><Link to= "/Jwttoken"> JwtToken </Link></li>
         <li><Link to= "/Uncontrolcomponent"> Uncontrolcomponent </Link></li>
         <li><Link to= "/Uploadfile">Uploadfile</Link></li>
         <li><Link to= "/Utilities">Utilities</Link></li>
         <li><Link to= "/FileUpload">FileUpload</Link></li>
         <li><Link to= "/LoginForm">LoginForm</Link></li>
         <li><Link to= "/Alert">Alert</Link></li>










         








       </ul>
       <Route path="/" exact>
         <Home/>

       </Route>
       <Route path="/Contactus">
         <Contactus/>

       </Route>
       <Route path="/Services">
         <Services/>

       </Route>
       <Route path="/About">
         <About/>

       </Route>

       <Route path="/Form">
         <Form/>

       </Route>
       <Route path="/Formsubmit">
         <Formsubmit/>

       </Route>
       <Route path="/Formvalidation">
         <Formvalidation/>

       </Route>
       <Route path="/Maplisting">
         <Maplisting/>

       </Route>
       <Route path="/Styleinreact">
         <Styleinreact/>

       </Route>
       <Route path="/CallApi">
         <CallApi/>

       </Route>
       <Route path="/Reactportal">
         <Reactportal/>

       </Route>
       <Route path="/Ref">
         <Ref/>

       </Route>
       <Route path="/Bootstrap">
         <Bootstrap/>

       </Route>
       <Route path="/ErrorBoundary">
         <ErrorBoundary/>

       </Route>
       <Route path="/Purecomponenet">
         <Purecomponenet/>

       </Route>
       <Route path="/Jwttoken">
         <Jwttoken/>

       </Route>
       <Route path="/Uncontrolcomponent">
         <Uncontrolcomponent/>

       </Route>
       <Route path="/Uploadfile">
         <Uploadfile/>

       </Route>
       <Route path="/Utilities">
        <strong><Utilities alert={alert}/></strong> 

       </Route>
       <Route path="/FileUpload">
         <FileUpload/>

       </Route>

       <Route path="/LoginForm">
         <LoginForm/>

       </Route>

       <Route path="/Alert">
         <Alert/>

       </Route>
       
      
     </Router>
    </div>
 
 );

}

export default App;
