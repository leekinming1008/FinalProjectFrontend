import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CommentForm from "./components/commentForm";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CommentForm targetUserID="testingUserID" />
  </React.StrictMode>
);
