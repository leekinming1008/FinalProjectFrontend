import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../api/productApi";
import { ProductType } from "../types/productType";
import { BeatLoader } from "react-spinners";
import "./ProductDetails.css";
import { userStore } from "../store/userStore";

/*

Change Code below for Shopping Cart and Wishlist
Change Code below for Shopping Cart and Wishlist
Change Code below for Shopping Cart and Wishlist
Change Code below for Shopping Cart and Wishlist

*/

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { userID } = userStore();

  const handleDeleteProduct = () => {
    console.log("enter the delete product function");
  };
  const handleEditProduct = () => {
    console.log("enter the edit product function");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await getProduct(id);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      {product ? (
        <>
          <div className="Product-Image-Container">
            <img
              src={product.image}
              alt=""
              className="Product-Image"
              width="500"
              height="auto"
            />
          </div>
          <div className="Product-Info-Container">
            <h1 className="Product-Title">{product.name}</h1>
            <p className="Product-Description">{product.description}</p>
            <p className="Product-Price">${product.price} CAD</p>
            {product.userID._id == userID && (
              <center>
                {/* <button onClick={() => setModalOpen(true)}>Update Product</button> */}
                <button
                  className="Button-Styling"
                  onClick={handleDeleteProduct}
                >
                  {/* Delete Product */}
                  {isLoading ? <p>Delete Product...</p> : <p>Delete Product</p>}
                </button>
                <div></div>
                <button className="Button-Styling" onClick={handleEditProduct}>
                  {/* Edit Product */}
                  {isLoading ? <p>Edit Product...</p> : <p>Edit Product</p>}
                </button>
              </center>
            )}
          </div>
        </>
      ) : (
        <BeatLoader color="#36d7b7" />
      )}
    </>
  );
};

export default ProductDetail;
