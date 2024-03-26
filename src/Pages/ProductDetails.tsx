import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../api/productApi";
import { ProductType } from "../types/productType";
import { BeatLoader } from "react-spinners";
import "./ProductDetails.css";

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
            <center>
              {/* <button onClick={() => setModalOpen(true)}>Update Product</button> */}
              <button className="Button-Styling" onClick={() => {}}>
                {/* Delete Product */}
                {isLoading ? <p>Adding to Cart...</p> : <p>Add to Cart</p>}
              </button>
              <div></div>
              <button className="Button-Styling" onClick={() => {}}>
                {/* Edit Product */}
                {isLoading ? <p>Wish List...</p> : <p>Wish List</p>}
              </button>
            </center>
          </div>
        </>
      ) : (
        <BeatLoader color="#36d7b7" />
      )}
    </>
  );
};

export default ProductDetail;
