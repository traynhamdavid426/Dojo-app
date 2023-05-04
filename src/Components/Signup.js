import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React,{useState} from "react";



const Signup =(props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email); //prevents page reloading.
    }

    return (
        <div >
            <h2>Sign up</h2>
        <form  onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('signin')}>Already have an account? Login here.</button>
</div>)}

export default Signup;

