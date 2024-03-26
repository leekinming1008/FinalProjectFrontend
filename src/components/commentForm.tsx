import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "../css/form.css";
import ErrorMessageContainer from "./ErrorMessageContainer";
import { createComment } from "../api/commentApi";

const userID = "testing user id";

const validation = Yup.object().shape({
  comment: Yup.string().required("Please enter message"),
});

const CommentForm = ({ targetUserID }: any) => {
  // const nav = useNavigate();

  return (
    <Formik
      initialValues={{
        _id: "",
        targetUserID: targetUserID,
        sourceUserID: userID,
        comment: "",
      }}
      validationSchema={validation}
      onSubmit={async (values, { resetForm }) => {
        try {
          const response = await createComment(values);
          if (response?.status == 201) {
            alert("You have successfully add the product!! :)");
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
      {({ errors, touched }) => (
        <div className="container">
          <div className="text">Add New Comment</div>
          <Form>
            <div className="form-row">
              <div className="input-data">
                <Field as="textarea" name="comment" type="text" />
                {errors.comment && touched.comment ? (
                  <ErrorMessageContainer name="comment" />
                ) : null}
                <div className="underline"></div>
                <label>Comment</label>
              </div>
            </div>
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

export default CommentForm;
