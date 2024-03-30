import "../css/form.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userLogin } from "../api/userApi";
import { userStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";

var isLogin = false;
var isclicked = false;

const LoginForm = () => {
  const { setUserID } = userStore();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },
    validationSchema: Yup.object({
      emailAddress: Yup.string().email().required("Required"),
      password: Yup.string()
        .matches(
          /^[a-zA-Z0-9!@#$%^&*()_+=[\]{}|;:,.<>?/\\~-]*$/,
          "Must not have space."
        )
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      isclicked = true;
      console.log("Submitted values:", values);
      try {
        const response = await userLogin(values);
        if (response.data.result == true) {
          isLogin = true;
          setUserID(response.data.userID);
          console.log("Login successfully", response.data);
          navigate("/");
        } else {
          isLogin = false;
          console.log("Login failed", response.data);
        }
      } catch (err) {
        console.error("Failed to login", err);
      } finally {
        resetForm({});
      }
    },
  });
  return (
    <>
      <div className="card">
        <div className="header">
          <h1>Login</h1>
        </div>
        <form action="#" method="post" onSubmit={formik.handleSubmit}>
          <div className="input-field">
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emailAddress}
              required
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              placeholder=" "
            ></input>
            {formik.touched.emailAddress && formik.errors.emailAddress ? (
              <div className="requirement-message">
                {formik.errors.emailAddress}
              </div>
            ) : null}
            <label htmlFor="emailAddress">Email Address:</label>
          </div>

          <div className="input-field">
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
              pattern="^[a-zA-Z0-9!@#$%^&*()_+=[\]{}|;:,.<>?/\\~-]*$"
              placeholder=" "
            ></input>
            {formik.touched.password && formik.errors.password ? (
              <div className="requirement-message">
                {formik.errors.password}
              </div>
            ) : null}
            <label htmlFor="password">Password:</label>
          </div>

          <div className="button_container">
            <input type="submit" value="Submit"></input>
          </div>
          <div className="button_container">
            <input
              type="submit"
              value="Create account"
              onClick={() => {
                navigate("/signup");
                console.log("enter the create account function");
              }}
            ></input>
          </div>
          {isclicked && !isLogin ? (
            <div className="wrong_login">Wrong Login Info</div>
          ) : null}
          {isclicked && isLogin ? (
            <div className="right_login">Login Successfully</div>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default LoginForm;
