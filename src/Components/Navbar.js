import React from "react";
import { Route,Routes,Link } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Groupedcomponents/Home";
import Loginform from "./Groupedcomponents/Loginform";
import Schedules from "./Groupedcomponents/Schedules";
import Aboutus from "./Aboutus";
import Classes from "./Classes";
import App from "../App";
import Instructors from "./Instructors";
import Contactus from './Contactus'
import '../Components/Styles/Nav.css'



const Navbar =() =>{return(<div>

    
    
    <header>
    <div>
<nav className="nav">
<Link to='/'>Home</Link>
<Link to='Schedules'>Schedule</Link>


</nav>
</div>
 </header>

 

 <Routes>
 <Route path='/*' element={<Home/>}/>
 <Route path = '/' element={<Home/>}>
 <Route index element ={<Aboutus/>}/>
 <Route path='signup/in' element ={<Loginform/>}/>
 <Route path='about' element ={<Aboutus/>}/>
 <Route path='classes' element ={<Classes/>}/>
 <Route path='instructors' element ={<Instructors/>}/>
 <Route path='contact' element ={<Contactus/>}/>
 </Route>

 <Route path='signup' element ={<Signup/>}/>
 <Route path='signin' element ={<Signin/>}/>
 <Route path='schedules' element ={<Schedules/>}/>

 
 </Routes>
    

</div>)}

export default Navbar;