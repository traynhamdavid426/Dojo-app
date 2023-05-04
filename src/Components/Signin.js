import React, {useState} from "react";


const Signin =(props) => {
   
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div >
            <h2>Sign in</h2>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@email.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Sign In</button>
            </form>
            <button  onClick={() => props.onFormSwitch('signup')}>Don't have an account? Signup here.</button>
</div>)}

export default Signin;