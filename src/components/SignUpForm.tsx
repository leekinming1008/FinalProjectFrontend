import "./form.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      emailAddress: "",
      password: "",
      phone: "",
      address: "",
      wishList: [],
    },
    validationSchema: Yup.object({
      emailAddress: Yup.string().email().required("Required"),
      password: Yup.string()
        .matches(
          /^[a-zA-Z0-9!@#$%^&*()_+=[\]{}|;:,.<>?/\\~-]*$/,
          "Must not have space."
        )
        .required("Required"),
      name: Yup.string()
        .matches(
          /^[a-zA-Z]+(?: [a-zA-Z]+)*(?: Jr\.| Sr\.| II| III| IV)?$/,
          "Must not have space."
        )
        .required("Required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Must not have space.")
        .required("Required"),
      address: Yup.string()
        .matches(/^.$/, "Must not have space.")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Submitted values:", values);
      try {
        const response = await createUser(values);
        console.log("Sign Up successfully", response.data);
        navigate("/login");
      } catch (err) {
        console.error("Sign Up failed", err);
      } finally {
        resetForm({});
      }
    },
  });
  return (
    <>
      <form action="#" method="post" onSubmit={formik.handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            required
            pattern="^[a-zA-Z]+(?: [a-zA-Z]+)*(?: Jr\.| Sr\.| II| III| IV)?$"
            placeholder=" "
          ></input>
          {formik.touched.name && formik.errors.name ? (
            <div className="requirement-message">{formik.errors.name}</div>
          ) : null}
          <label htmlFor="name">Name:</label>
        </div>

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
            <div className="requirement-message">{formik.errors.password}</div>
          ) : null}
          <label htmlFor="password">Password:</label>
        </div>

        <div className="input-field">
          <input
            type="number"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            required
            pattern="^\d{10}$"
            placeholder=" "
          ></input>
          {formik.touched.phone && formik.errors.phone ? (
            <div className="requirement-message">{formik.errors.phone}</div>
          ) : null}
          <label htmlFor="phone">Phone:</label>
        </div>

        <div className="input-field">
          <input
            type="text"
            id="address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            required
            pattern="^.$"
            placeholder=" "
          ></input>
          {formik.touched.address && formik.errors.address ? (
            <div className="requirement-message">{formik.errors.address}</div>
          ) : null}
          <label htmlFor="address">Address:</label>
        </div>
        <div className="button_container">
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
