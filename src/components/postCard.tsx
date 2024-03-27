// import { Link } from "react-router-dom";

interface PostCardProps {
  image: string;
  userID: string;
  description: string;
}

export default function postCard({
  image,
  userID,
  description,
}: PostCardProps) {
  return (
    <div className="card">
      <img className="image" src={image}></img>
      <div className="info">
        <p className="userID">{userID}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
