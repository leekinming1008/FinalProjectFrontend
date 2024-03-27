import { useState, useEffect } from "react";
import { getAllProducts, getProductByCategory } from "../api/productApi";
import ProductCard from "../components/ProductCard";
import { ProductType } from "../types/productType";
import styled from "styled-components";
import "../components/Navbar.css";
import "./Home.css";
import { List, ListItem } from "@mui/material";
import { CategoryType } from "../types/categoryType";
import { getAllCategory } from "../api/categoryApi";

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
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const getProducts = await getAllProducts();
        setProducts(getProducts.data.data);
        const getCategories = await getAllCategory();
        setCategories(getCategories.data.category);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleOnclick = async (categoryID?: string) => {
    const fatchProduct = async () => {
      try {
        const getProducts = await getAllProducts();
        setProducts(getProducts.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const fatchProductByCate = async (categoryID: string) => {
      try {
        const getProducts = await getProductByCategory(categoryID);
        setProducts(getProducts.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (categoryID == "") {
      fatchProduct();
    } else if (categoryID) {
      fatchProductByCate(categoryID);
    }
  };

  return (
    <>
      <div
        className="w3-content"
        style={{ maxWidth: "2000px", marginTop: "60px", display: "block" }}
      >
        <div className="Top-Banner-Container-Desktop">
          <img
            src="../assets/Top-Banner-Desktop.jpg"
            alt=""
            className="Top-Banner-Image"
          />
        </div>
        <div className="Top-Banner-Container-Mobile">
          <img
            src="../assets/Top-Banner-Mobile.jpg"
            alt=""
            className="Top-Banner-Image"
          />
        </div>
        <div className="Content-Container">
          <div className="sidebar">
            <button
              className="dropdown-Categories"
              onClick={(event) => {
                if (
                  document.getElementsByClassName("dropdown-container")[0].style
                    .display == "block"
                ) {
                  document.getElementsByClassName(
                    "dropdown-container"
                  )[0].style.display = "none";
                } else {
                  document.getElementsByClassName(
                    "dropdown-container"
                  )[0].style.display = "block";
                }
              }}
            >
              Categories
              <i className="fa fa-caret-down"></i>
            </button>
            <List className="dropdown-container">
              <ListItem
                key="Select all categories"
                value=""
                onClick={() => handleOnclick("")}
              >
                Select all categories
              </ListItem>
              {categories.map((category) => (
                <ListItem
                  key={category._id}
                  value={category._id}
                  onClick={() => handleOnclick(category._id)}
                >
                  {category.name}
                </ListItem>
              ))}
            </List>
            <div className="Ads-Container">
              <div className="Ad-Box">AD 1</div>
              <div className="Ad-Box">AD 2</div>
              <div className="Ad-Box">AD 3</div>
            </div>
          </div>
          <div className="Main-Content">
            <div className="Mobile-Nav-Container">
              <div className="dropdown-Mobile" style={{ float: "left" }}>
                <button onClick={() => {}} className="dropbtn1">
                  Categories
                  <i
                    className="fa fa-caret-down"
                    style={{
                      fontSize: "24px",
                      paddingTop: "1px",
                      paddingLeft: "30px",
                    }}
                  ></i>
                </button>
                <div
                  id="myDropdown1"
                  className="dropdown-content1"
                  style={{ left: 0 }}
                >
                  <a href="#">Clothes</a>
                  <a href="#">Home Decor</a>
                  <a href="#">Toys & Games</a>
                  <a href="#">Phones & Gadgets</a>
                </div>
              </div>
              <div className="filter-Mobile" style={{ float: "right" }}>
                <button onClick={() => {}} className="dropbtn2">
                  <img
                    src="../assets/Filter-Icon.png"
                    alt=""
                    style={{
                      height: "20px",
                      float: "left",
                      paddingTop: "1px",
                      paddingRight: "7px",
                    }}
                  />
                  Filter
                </button>
                <div
                  id="myDropdown2"
                  className="dropdown-content2"
                  style={{ right: 0 }}
                >
                  <a href="#">By Price</a>
                  <a href="#">By Newest</a>
                </div>
              </div>
            </div>
            <ProductSection>
              {products &&
                products.map((product) => (
                  <ProductCard
                    key={product._id}
                    _id={product._id}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    category={product.category}
                    userID=""
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
