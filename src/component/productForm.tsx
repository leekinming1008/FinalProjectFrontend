import { Field, Form, Formik, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { ProductType } from "../type/ProductType";
import ErrorMessageContainer from "./ErrorMessageContainer";
import styled from "styled-components";
import "../css/ProductForm.css";
import { CommentType } from "../type/CommentType";

const validation = Yup.object().shape({
  image: Yup.string()
    .url("Please input valid URL")
    .required("Please enter image url"),
  name: Yup.string().required("Please enter the name"),
  description: Yup.string()
    .max(1000, "The description should <= 1000 char")
    .required("Please enter the description"),
  category: Yup.string().required("Please enter the category"),
  price: Yup.number()
    .max(1000, "The price should <1000")
    .min(1, "The price should >= 1")
    .required("Please enter the product price"),
  userID: Yup.number().required("Please enter the year"),
});

const productForm = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState<ProductType>();
  const [allCategory, setAllCategory] = useState<CommentType>();
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
      console.log("Enter the get product function");
    };
    const fatchCategory = async () => {
      console.log("Enter the fatch category");
    };

    id && fatchProduct(id);
    fatchCategory();
  }, []);

  //const nav = useNavigate();

  const PreviewImageSection = styled.img`
    height: 300px;
  `;

  return (
    <Formik
      initialValues={{
        _id: "",
        image: "",
        name: "",
        description: "",
        category: "",
        price: 0,
        userID: "",
      }}
      validationSchema={validation}
      onSubmit={async (values, { resetForm }) => {
        try {
        } catch (error) {
          console.error(
            "There have error when try to create the product!",
            error
          );
        } finally {
          resetForm();
          //nav("/");
        }
      }}
    >
      {({ errors, touched, values }) => (
        <div className="container">
          <div className="text">
            {id ? "Edit Product Form" : "Add New Product Form"}
          </div>
          <Form>
            <div className="image-display form-row">
              <PreviewImageSection src={values.image} alt="invalid image url" />
            </div>
            <div className="form-row">
              <div className="input-data">
                <Field name="image" type="url" />
                {errors.image && touched.image ? (
                  <ErrorMessageContainer name="image" />
                ) : null}
                <div className="underline"></div>
                <label>Image URL</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <Field name="name" type="text" />
                {errors.name && touched.name ? (
                  <ErrorMessageContainer name="name" />
                ) : null}
                <div className="underline"></div>
                <label>Product Name</label>
              </div>
              <div className="input-data">
                <Field name="price" type="number" />
                {errors.price && touched.price ? (
                  <ErrorMessageContainer name="price" />
                ) : null}
                <div className="underline"></div>
                <label>Price</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <Field name="category" type="text" />
                {errors.category && touched.category ? (
                  <ErrorMessageContainer name="category" />
                ) : null}
                <div className="underline"></div>
                <label>Category</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <Field name="description" type="text" />
                {errors.description && touched.description ? (
                  <ErrorMessageContainer name="description" />
                ) : null}
                <div className="underline"></div>
                <label>Description</label>
              </div>
            </div>
            <SetupDefaultValue />
            <div className="form-row">
              <div className="form-row submit-btn">
                <div className="input-data">
                  <div className="inner"></div>
                  <input type="submit" value="submit" />
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default productForm;
