import SignUpForm from "../components/SignUpForm";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="page_container">
        <div className="card">
          <div className="header">
            <h1>Sign Up</h1>
          </div>
          <div className="form_container">
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
