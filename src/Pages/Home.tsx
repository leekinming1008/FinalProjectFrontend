import { useState, useEffect } from "react";
import { getAllProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";
import { ProductType } from "../types/productType";
import styled from "styled-components";
import "../components/Navbar.css";
import "./Home.css";

const ProductSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-end;
  align-items: center;
`;

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="w3-content" style={{maxWidth:"2000px", marginTop:"60px", display:"block"}}>
        <div className="Top-Banner-Container-Desktop">
          <img src="../assets/Top-Banner-Desktop.jpg" alt="" className="Top-Banner-Image" />
        </div>
        <div className="Top-Banner-Container-Mobile">
          <img src="../assets/Top-Banner-Mobile.jpg" alt="" className="Top-Banner-Image" />
        </div>
        <div className="Content-Container">
          <div className="sidebar">
              <button className="dropdown-Categories">Categories
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-container">
                <a href="#">Clothes</a>
                <a href="#">Home Decor</a>
                <a href="#">Toys & Games</a>
                <a href="#">Phones & Gadgets</a>
              </div>
              <a href="#FilterByPrice">Filter by Price</a>
              <a href="#FilterByNewest">Filter by Newest</a>
              
            <div className="Ads-Container">
              <div className="Ad-Box">AD 1</div>
              <div className="Ad-Box">AD 2</div>
              <div className="Ad-Box">AD 3</div>
            </div> 
          </div>
          <div className="Main-Content">
            <div className="Mobile-Nav-Container">
              <div className="dropdown-Mobile" style={{float:"left"}}>
                <button onClick={()=>{}} className="dropbtn1">Categories<i className="fa fa-caret-down" style={{fontSize:"24px", paddingTop:"1px", paddingLeft:"30px"}}></i></button>
                <div id="myDropdown1" className="dropdown-content1" style={{left:0}}>
                  <a href="#">Clothes</a>
                  <a href="#">Home Decor</a>
                  <a href="#">Toys & Games</a>
                  <a href="#">Phones & Gadgets</a>
                </div>
              </div>
              <div className="filter-Mobile" style={{float:"right"}}>
                <button onClick={()=>{}} className="dropbtn2"><img src="../assets/Filter-Icon.png" alt="" style={{height:"20px", float:"left", paddingTop:"1px", paddingRight:"7px"}} />Filter</button>
                <div id="myDropdown2" className="dropdown-content2" style={{right:0}}>
                  <a href="#">By Price</a>
                  <a href="#">By Newest</a>
                </div>
              </div>
            </div>            
            <ProductSection>
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  image={product.image}
                  title={product.name}
                  description={product.description}
                  price={product.price}
                  category={product.category}
                />
              ))}  
            </ProductSection>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
