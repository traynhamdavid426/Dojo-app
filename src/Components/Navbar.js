import React from "react";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Groupedcomponents/Home";
import Loginform from "./Groupedcomponents/Loginform";
import Schedules from "./Groupedcomponents/Schedules";


const Navbar =() =>{return(<div>

    
    <BrowserRouter>
    <header>
    <div>
<nav>
<Link to='/'>Home</Link>
<Link to='loginform'>Singin/up</Link>
<Link to='Schedules'>Schedule</Link>


</nav>
</div>
 </header>

 <Routes>
 <Route path='/' element ={<Home/>}/>
 <Route path='signup' element ={<Signup/>}/>
 <Route path='signin' element ={<Signin/>}/>
 <Route path='loginform' element ={<Loginform/>}/>
 <Route path='schedules' element ={<Schedules/>}/>

 
 </Routes>
    </BrowserRouter>

</div>)}

export default Navbar;