import { Field, Form, Formik, useFormikContext } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import "./form.css";
import ErrorMessageContainer from "./ErrorMessageContainer";
import { ProductType } from "../types/productType";
import { editProduct, getProduct, addProduct } from "../api/productApi";
import { getAllCategory } from "../api/categoryApi";
import { CategoryType } from "../types/categoryType";

const userID = "testing user id";

const validation = Yup.object().shape({
  image: Yup.string()
    .url("Please input valid URL")
    .required("Please enter image url"),
  name: Yup.string().required("Please enter the name"),
  description: Yup.string()
    .max(1000, "The description should <= 1000 char")
    .required("Please enter the description"),
  category: Yup.string().required("The category is required"),
  price: Yup.number()
    .max(1000, "The price should <1000")
    .min(1, "The price should >= 1")
    .required("Please enter the product price"),
});

const PreviewImageSection = styled.img`
  height: 300px;
`;

const ProductForm = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState<ProductType>();
  const [allCategory, setAllCategory] = useState<CategoryType[]>([]);
  const SetupDefaultValue = () => {
    const { values, resetForm } = useFormikContext<ProductType>();
    useEffect(() => {
      Object.assign(values, currentProduct);
      resetForm();
    }, []);
    return null;
  };

  useEffect(() => {
    const fatchProduct = async (id: string) => {
      try {
        const response = await getProduct(id);
        if (response.status == 200) {
          setCurrentProduct(response.data.data);
        }
      } catch (err) {
        console.log("Have error during the fatch product process", err);
      }
    };
    const fatchCategory = async () => {
      try {
        const response = await getAllCategory();
        if (response.status == 200) {
          setAllCategory(response.data.category);
        }
      } catch (err) {
        console.error("Have error during the fatch category process", err);
      }
    };
    fatchCategory();
    id && fatchProduct(id);
    location.reload;
  }, []);
  // const nav = useNavigate();

  return (
    <Formik
      initialValues={{
        _id: "",
        image: "",
        name: "",
        description: "",
        category: "",
        price: 0,
        userID: userID,
      }}
      validationSchema={validation}
      onSubmit={async (values, { resetForm }) => {
        try {
          var response;
          if (id) {
            response = await editProduct(id, values);
            if (response?.status == 201) {
              alert("You have successfully edit the product!! :)");
            }
          } else {
            response = await addProduct(values);
            if (response?.status == 201) {
              alert("You have successfully add the product!! :)");
            }
          }
        } catch (error) {
          console.error(
            "There have error when try to create the product!",
            error
          );
        } finally {
          resetForm();
          // nav("/");
        }
      }}
    >
      {({ errors, touched, values, handleChange }) => (
        <div className="card">
          <div className="header">
            <h1>{id ? "Edit Product Form" : "Add New Product Form"}</h1>
          </div>

          <Form>
            <div className="image-display form-row">
              <PreviewImageSection src={values.image} alt="invalid image url" />
            </div>
            <div className="input-field">
              <Field name="image" type="url" id="image" />
              {errors.image && touched.image ? (
                <ErrorMessageContainer name="image" />
              ) : null}
              <label>Image URL</label>
            </div>
            <div className="input-field">
              <Field name="name" type="text" />
              {errors.name && touched.name ? (
                <ErrorMessageContainer name="name" />
              ) : null}
              <label>Product Name</label>
            </div>
            <div className="input-field">
              <select
                name="category"
                value={values.category}
                onChange={handleChange}
              >
                <option value="" label="Select a category">
                  Select a category{" "}
                </option>
                {allCategory.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category && touched.category ? (
                <ErrorMessageContainer name="category" />
              ) : null}
              <label>Category</label>
            </div>
            <div className="input-field">
              <Field name="price" type="number" />
              {errors.price && touched.price ? (
                <ErrorMessageContainer name="price" />
              ) : null}
              <label>Price</label>
            </div>

            <div className="input-field">
              <Field name="description" type="text" />
              {errors.description && touched.description ? (
                <ErrorMessageContainer name="description" />
              ) : null}
              <label>Description</label>
            </div>
            <SetupDefaultValue />
            <div className="button_container">
              <input type="submit" value="submit" />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ProductForm;
