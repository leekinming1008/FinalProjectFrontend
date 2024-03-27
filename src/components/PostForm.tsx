import "./form.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createPost } from "../api/postApi";
import { CategoryType } from "../types/categoryType";
import { useEffect, useState } from "react";
import { getAllCategory } from "../api/categoryApi";
import { userStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const { userID } = userStore();
  const [allCategory, setAllCategory] = useState<CategoryType[]>([]);
  const nav = useNavigate();
  useEffect(() => {
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
    location.reload;
  }, []);

  const formik = useFormik({
    initialValues: {
      image: "",
      description: "",
      category: "",
      userID: userID,
    },
    validationSchema: Yup.object({
      image: Yup.string().url("Must be a valid URL"),
      description: Yup.string()
        .matches(
          /^(?!.*\s{2,})[A-Za-z0-9() -]+$/,
          "Must be letters, dashes, numbers, spaces or the forllowing special characters: - ()"
        )
        .required("Required"),
      category: Yup.string()
        .matches(
          /^(?!.*\s{2,})[A-Za-z0-9() -]+$/,
          "Must be letters, dashes, numbers, spaces or the forllowing special characters: - ()"
        )
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Submitted values:", values);
      try {
        const response = await createPost(values);
        console.log("Product added successfully", response.data);
      } catch (err) {
        console.error("Failed to add Product", err);
      } finally {
        resetForm({});
        nav("/");
      }
    },
  });
  return (
    <>
      <div className="card">
        <div className="header">
          <h1>Add Post</h1>
        </div>
        <form action="#" method="post" onSubmit={formik.handleSubmit}>
          <div className="input-field image-link">
            <input
              type="url"
              id="image"
              name="image"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.image}
              required
              placeholder=" "
            ></input>
            {formik.touched.image && formik.errors.image ? (
              <div className="requirement-message">{formik.errors.image}</div>
            ) : null}
            <label htmlFor="image">Image Link:</label>
          </div>

          <div className="input-field">
            <input
              type="text"
              id="description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              required
              pattern="^(?!.*\s{2,})[A-Za-z0-9() -]+$"
              placeholder=" "
            ></input>
            {formik.touched.description && formik.errors.description ? (
              <div className="requirement-message">
                {formik.errors.description}
              </div>
            ) : null}
            <label htmlFor="description">Description:</label>
          </div>

          <div className="input-field">
            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
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
          </div>

          <div className="button_container">
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostForm;
