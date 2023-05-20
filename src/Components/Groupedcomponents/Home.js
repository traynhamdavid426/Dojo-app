import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import '../Styles/Home.css'


const Home =() => {
    
    return(
    
    <div className=" homestyle">




<nav>
    <NavLink to ='about'>About us</NavLink>
    <NavLink to ='signup/in'>Signup/in</NavLink>
    <NavLink to ='classes'>Classes</NavLink>
    <NavLink to ='instructors'>Instructors</NavLink>
    <NavLink to ='contact'>Reach Out</NavLink>

</nav>
<h1>Reemerge MMA("we dont sink, we swim").</h1>

<Outlet/>




</div>)}

export default Home;