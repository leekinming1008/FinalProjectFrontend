import "./UserPage.css";

/* 

CODE CALLING ALL THE PRODUCTS OF THE SELLER
CODE CALLING ALL THE PRODUCTS OF THE SELLER
CODE CALLING ALL THE PRODUCTS OF THE SELLER

*/

const UserPage = () => {
  return (
    <div className="w3-content" style={{ maxWidth:"2000px", marginTop:"60px", display:"block" }}>
      <div className="User-Page-Container-Desktop">
        <img src="img/User-Page-Top-Banner-Desktop.jpg" alt="" className="User-Page-Banner" />
      </div>
      <div className="User-Page-Container-Mobile">
        <img src="img/User-Page-Top-Banner-Mobile.jpg" alt="" className="User-Page-Banner" />
      </div>
      <div className="User-Page-Container">
        <div className="User-Page-Products">
            <center><h1>The products of the seller will be load here</h1></center>
        </div>
      </div>
    </div>
  )
}

export default UserPage