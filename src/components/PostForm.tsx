import "./form.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createPost } from "../api/postApi";

const PostForm = () => {
  const formik = useFormik({
    initialValues: {
      image: "",
      description: "",
      category: "",
      userID: "",
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
      }
    },
  });
  return (
    <>
      <div className="header-contaner">
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

        <div className="button_container">
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </>
  );
};

export default PostForm;
