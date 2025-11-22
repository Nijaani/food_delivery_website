import React from "react";
import "./Navbar.css";
import {assets} from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  
    return (
    <div className = "navbar">
      <img src = {assets.logo} alt = "logo" className = "logo"/>
       <ul className = "navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>  {/* If menu is "home" → add class "active" */}
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</li>
        <li  onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact Us</li>
       </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="cart" className="cart-icon"/>
            <div class="search-icon">
               <img src={assets.basket_icon} alt="cart" className="cart-icon"/>
            <div className= "dot"></div>
          
            </div>
             <button>Sign-In</button>
        </div>

    </div>
  )
}
   
export default Navbar;