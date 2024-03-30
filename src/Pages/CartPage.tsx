import "../css/CartPage.css";

/* 

CODE CALLING THE PRODUCT DATA GOES HERE
CODE CALLING THE PRODUCT DATA GOES HERE
CODE CALLING THE PRODUCT DATA GOES HERE

*/

const CartPage = () => {
  return (
    <div
      className="w3-content"
      style={{
        marginTop: "60px",
        display: "block",
        padding: "30px 10px 10px 10px",
      }}
    >
      <div className="Cart-Title">Cart (1 item)</div>
      <div className="Cart-Page-Container">
        <div className="Shopping-Cart-Container">
          <div className="Shopping-Cart-Shipping">
            <img
              src="img/Shipping-Logo.png"
              alt=""
              className="Cart-Shipping-Image"
            />
            &nbsp;&nbsp;&nbsp;Shipping, arrives Thu, Mar 28
          </div>
          <div className="Shopping-Cart-Info">
            <div className="Left-Side-Cart">
              <img
                src="https://m.media-amazon.com/images/I/51mq3ujQrrL.__AC_SY300_SX300_QL70_ML2_.jpg"
                alt=""
                className="Product-Image"
                width="200"
                height="auto"
              />
            </div>
            <div className="Middle-Side-Cart">
              <h1 className="Product-Title">
                Lenovo ThinkPad T490 14.0" {/* {product.title} */}{" "}
              </h1>
            </div>
            <div className="Right-Side-Cart">
              <p className="Price">$374.99 {/* {product.price} */} </p>
            </div>
            <center>
              <button className="Button-Styling">
                <p>Delete Product</p>
              </button>
              <button className="Button-Styling">
                <p>Wish List</p>
              </button>
            </center>
          </div>
        </div>
        <div className="Shopping-Cart-Pricing">
          <center>
            <button className="Button-Styling-2">
              <p>Continue to Checkout</p>
            </button>
          </center>
          <div className="Price-Container">
            <div className="Price-Container-left">
              <b>Subtotal</b> (1 item)
              <br />
              Shipping
              <br />
              <b>Taxes</b>
              <br />
              13% HST
              <br />
              <br />
              <b>Estimated total</b>
            </div>
            <div className="Price-Container-Right">
              $374.99
              <br />
              FREE
              <br />
              $48.75
              <br />
              $48.75
              <br />
              <br />
              <div className="Pricing">$423.74</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
