import { Link } from "react-router-dom";
import "./Navbar.css";
import myFunction from "./Navbar";



const ResponsiveAppBar = () => {
  return (
    <>    
      <div className="w3-top">
        <div className="w3-bar w3-black w3-card w3-padding-10">
          <a className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onClick={myFunction}  title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
          <Link className="w3-bar-item w3-button w3-padding-large w3-hover-red" to="/">HOME</Link>
          <Link className="Logo-Image-Link" to="/"><img src="../assets/CantekShop-Logo.png" className="Logo-Image" /></Link>
          <img src="../assets/Cart-Icon.png" className="Cart-Icon-Image" />&nbsp;&nbsp;<Link className="w3-bar-item w3-button w3-padding-medium w3-hide-small w3-right" to="/CartPage">Cart</Link>
          <img src="../assets/Account-Icon.png" className="Account-Icon-Image" />&nbsp;&nbsp;<Link className="w3-bar-item w3-button w3-padding-medium w3-hide-small w3-right" to="/LoginPage">Account</Link>
          <Link className="w3-bar-item w3-button w3-padding-medium w3-hide-small w3-right" to="/WishList">Wish List</Link>
          <Link className="w3-bar-item w3-button w3-padding-medium w3-hide-small w3-right" to="/AboutUs">About Us</Link>
        </div>
      </div>
      <div id="navDemo" className="w3-bar-block w3-light-grey w3-hide w3-hide-large w3-hide-medium w3-top">
        <Link className="w3-bar-item w3-button-2 w3-padding-xlarge" to="/AboutUs">About Us</Link>
        <Link className="w3-bar-item w3-button-2 w3-padding-xlarge" to="/WishList">Wish List</Link>
        <Link className="w3-bar-item w3-button-2 w3-padding-xlarge" to="/LoginPage">Account</Link>
        <Link className="w3-bar-item w3-button-last w3-padding-xlarge" to="/CartPage">Cart</Link>
      </div>
    </>
  );
}

export default ResponsiveAppBar;