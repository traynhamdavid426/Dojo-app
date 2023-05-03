import React,{useState} from "react";
import Signin from "./Signin";
import Signup from "./Signup";


const Loginform =() =>{
    
    const [currentform, setCurrentForm] = ('login');
    
    return(<div>
    
{currentform === Signin ? <Signin/> : <Signup/>} {/* checks boolean for statement. Dispays which one is true. */}

</div>)}