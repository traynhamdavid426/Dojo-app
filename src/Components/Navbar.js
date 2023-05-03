import React from "react";
import { BrowserRouter,Route,Routes, NavLink as Link } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";


const Navbar =() =>{return(<div>

    
        <BrowserRouter>
        <header>
        <div>
    <nav>
        <Link to='signin'>Sign in/up</Link>
    </nav>
    </div>
    
            <Routes>
                <Route path='signup' element={<Signup/>}/>
                <Route path='signin' element={<Signin/>}/>
                

            </Routes>
            </header>
        </BrowserRouter>
    
</div>)}

export default Navbar;