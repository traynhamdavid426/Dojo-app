import React,{useState} from "react";
import Signin from "../Signin";
import Signup from "../Signup";


const Loginform =() =>{
    
    const [currentForm, setCurrentForm] = useState('signin');

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
  
    return (
      <div  id="signin">
        {
          currentForm === "signin" ? <Signin onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
        } {/* checks boolean for statement. Dispays which one is true. */}

</div>)}
export default Loginform;