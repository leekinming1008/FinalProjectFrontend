//import React from 'react'
import PostForm from "../components/PostForm";
import LoginForm from "../components/loginForm";
import ProductForm from "../components/productForm";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="page_container">
        {/* <LoginForm /> */}
        <ProductForm />
      </div>
    </>
  );
};

export default LoginPage;
