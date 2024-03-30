import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "./form.css";
import ErrorMessageContainer from "./ErrorMessageContainer";
import { createComment } from "../api/commentApi";
import { userStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";

const validation = Yup.object().shape({
  comment: Yup.string().required("Please enter message"),
});

interface CommentFormProps {
  targetUserID: string;
}

const CommentForm = ({ targetUserID }: CommentFormProps) => {
  const { userID } = userStore();
  const nav = useNavigate();
  return (
    <Formik
      initialValues={{
        targetUserID: targetUserID,
        sourceUserID: userID,
        comment: "",
      }}
      validationSchema={validation}
      onSubmit={async (values, { resetForm }) => {
        try {
          const response = await createComment(values);
          if (response?.status == 201) {
            alert("You have successfully create the comment!! :)");
          }
        } catch (error) {
          console.error(
            "There have error when try to create the product!",
            error
          );
        } finally {
          resetForm();
          nav("/");
        }
      }}
    >
      {({ errors, touched }) => (
        <div className="card">
          <div className="header">
            <h1>Add New Comment</h1>
          </div>

          <Form>
            <div className="input-field" id="full_width">
              <Field as="textarea" name="comment" type="text" id="area" />
              {errors.comment && touched.comment ? (
                <ErrorMessageContainer name="comment" />
              ) : null}
              <label>Comment</label>
            </div>
            <div className="button_container">
              <input type="submit" value="submit" />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default CommentForm;
