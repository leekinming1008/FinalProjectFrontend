import { styled } from "styled-components";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getProduct } from "../api/productApi";
import { ProductType } from "../types/productType";
import './Home.css';

const HomePageHeader = styled.h1`
  .Title-No {
    font-size: 30px;
    line-height: 40px;
    font-weight: 600;
    font-family: "Lato", sans-serif;
    text-align: center;
    margin: 0px;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .Title-Yes {
    font-size: 30px;
    font-weight: 600;
    font-family: "Lato", sans-serif;
    margin-top: 35px;
    text-align: center;
    margin-bottom: -40px;
  }
`;

const ProductSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-end;
  align-items: center;
  left: 50%;
`;

/*

Check if Wishlist is working, if not please fix it!
Check if Wishlist is working, if not please fix it!
Check if Wishlist is working, if not please fix it!
Check if Wishlist is working, if not please fix it!

*/

const WishList = () => {
  const [WishListProducts, setWishListProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchWishList = async (id: string) => {
      if (!id) {
        console.error("Product ID is undefined");
        return; // Exit the function if id is undefined
      }
      try {
        const response = await getProduct(id);
        setWishListProducts((prevOrderItems) => [
          ...prevOrderItems,
          response.data,
        ]);
      } catch (err) {
        console.error("Error fetching products: ", err);
      }
    };
    const WishListList = localStorage.getItem("WishList");
    const WishListListJSON: string[] = WishListList
      ? JSON.parse(WishListList)
      : null;
    WishListListJSON &&
      WishListListJSON.forEach((productId) => {
        fetchWishList(productId);
      });
  }, []);
  return (
    <div className="w3-content" style={{maxWidth:"2000px", marginTop:"60px", display:"block"}}>
      <div className="Top-Banner-Container-Desktop">
        <img src="../assets/Top-Banner-Desktop.jpg" alt="" className="Top-Banner-Image" />
      </div>
      <div className="Top-Banner-Container-Mobile">
        <img src="../assets/Top-Banner-Mobile.jpg" alt="" className="Top-Banner-Image" />
      </div>
      <div className="About-Us-Container">
        <div className="About-Us-Info">
          <div>
            <HomePageHeader>
              {WishListProducts.length != 0
                ? <div className="Title-Yes">This is all your products in your Wish List:</div>
                : <div className="Title-No">You don't have any Wish List products yet,<br />please add a product from our store...</div> }
            </HomePageHeader>
            <ProductSection>
              {WishListProducts.map((productItem) => (
                <ProductCard
                  key={productItem._id}
                  id={productItem._id}
                  image={productItem.image}
                  title={productItem.name}
                  description={productItem.description}
                  price={productItem.price}
                  category={productItem.category}
                />
              ))}
            </ProductSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;