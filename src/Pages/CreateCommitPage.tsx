import { useParams } from "react-router-dom";
import CommentForm from "../components/commentForm";

const CreateCommentPage = () => {
  const { selecteduserID } = useParams();
  return (
    <div>
      <CommentForm targetUserID={selecteduserID} />
    </div>
  );
};

export default CreateCommentPage;
