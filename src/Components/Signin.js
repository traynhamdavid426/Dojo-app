import React, {useState} from "react";


const Signin =() => {
   
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleInput =(e) =>{
        e.preventDefault(); // prevents page reloading.
        console.log(email)}
        
    
    return(<div>
     <form onSubmit={handleInput}>
   <div>  <label for='email:'>email</label>
<input type="email" value={email} placeholder="youremail@emailprovider.com"/></div>

<div>  <label for='password:'>password</label>
<input type="password" value={password} placeholder="*****"/></div>
<div><button type="submit">
Log in
</button></div>
 </form>

 <button >Dont have an account? Sign up here!</button>
</div>)}

export default Signin;