//import React from 'react'
import "./LoginPage.css";
import LoginForm from "../components/LoginForm";
import PostForm from "../components/PostForm";

const LoginPage = () => {
  return (
    <>
      <div className="page_container">
        <div className="card">
          <div className="header">
            <h1>Login</h1>
          </div>
          <div className="form_container">
            {/* <LoginForm /> */}
            <PostForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
