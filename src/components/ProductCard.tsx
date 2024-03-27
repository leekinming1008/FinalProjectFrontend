import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ProductType } from "../types/productType";
import styled from "styled-components";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { userStore } from "../store/userStore";
import { useEffect } from "react";
import { getWishlist } from "../api/userApi";
//import './ProductCard.css'

/*

Please update the product fields and add whatever data we need on this page
I still need to fix the design to make it look better!

*/

const Wrapper = styled.div`
  &:hover .Button-Styling {
    background-color: #111e90;
    color: #ffffff;
  }
  &:hover .Button-Styling-2 {
    background-color: #efefef;
    color: #000000;
    border: 2px solid red;
  }
`;

const handleAddRemoveFavourite = (event: React.MouseEvent) => {
  const id = event.currentTarget.getAttribute("id");
  const favouriteList = localStorage.getItem("WishList");
  const favouriteListJSON: string[] = favouriteList
    ? JSON.parse(favouriteList)
    : null;
  if (id && !favouriteListJSON) {
    localStorage.setItem("WishList", JSON.stringify([id]));
  } else if (id && favouriteListJSON) {
    if (favouriteListJSON.includes(id)) {
      favouriteListJSON.splice(favouriteListJSON.indexOf(id), 1);
      localStorage.setItem("WishList", JSON.stringify(favouriteListJSON));
      event.currentTarget.textContent = "Add to WishList";
    } else {
      favouriteListJSON.push(id);
      localStorage.setItem("WishList", JSON.stringify(favouriteListJSON));
      event.currentTarget.textContent = "Remove from WishList";
    }
  }
  location.reload();
};

const ProductCard = ({
  _id,
  name,
  price,
  description,
  image,
  category,
  userID,
}: ProductType) => {
  return (
    <Card
      sx={{
        maxWidth: 330,
        margin: "50px 16px 0px 16px",
        height: "660px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <CardMedia sx={{ height: 200 }} image={image} title={name} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            height: "60px",
            whitespace: "no-wrap",
            textoverflow: "ellipsis",
            overflow: "hidden",
            fontFamily: "Open Sans",
            fontSize: "22px",
            fontweight: "700",
            textAlign: "center",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            height: "90px",
            whitespace: "no-wrap",
            textoverflow: "ellipsis",
            overflow: "hidden",
            fontFamily: "Open Sans",
            fontSize: "16px",
            lineHeight: "22px",
          }}
        >
          {description}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: "Open Sans",
            fontSize: "30px",
            lineHeight: "36px",
            fontWeight: 700,
            color: "#dc1f06",
            width: "100%",
            textAlign: "center",
            padding: "0% 30%",
            margin: "15px 0px 5px 0px",
          }}
        >
          ${price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: "Open Sans",
            fontSize: "20px",
            lineHeight: "22px",
            fontWeight: "600",
            width: "100%",
            textAlign: "center",
            padding: "0% 25%",
          }}
        >
          {category.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: "Open Sans",
            fontSize: "20px",
            lineHeight: "22px",
            fontWeight: "600",
            width: "100%",
            textAlign: "center",
            padding: "0% 25%",
          }}
        >
          <Link to={`/UserPage/${userID._id}`}>Owner: {userID.name}</Link>
        </Typography>
      </CardContent>
      <CardActions
        sx={{ width: "160px", textAlign: "center", margin: "0px 75px" }}
      >
        <Wrapper>
          <Button
            className="Button-Styling-2"
            id={_id}
            onClick={handleAddRemoveFavourite}
            sx={{
              fontFamily: "Open Sans",
              fontSize: "13px",
              lineHeight: "20px",
              fontWeight: "500",
              width: "160px",
              textAlign: "center",
              padding: "0px",
              backgroundColor: "white",
              color: "black",
              border: "2px solid red",
            }}
          >
            {localStorage.getItem("WishList") &&
            JSON.stringify(localStorage.getItem("WishList")).includes(
              _id.toString()
            ) ? (
              <p
                style={{
                  color: "red",
                  fontWeight: 700,
                  fontSize: "15px",
                  margin: "10px 0px",
                }}
              >
                {" "}
                <IoIosHeart size={30} style={{ color: "red" }} />
                <br />
                Wish List
              </p>
            ) : (
              <p style={{ margin: "10px 0px" }}>
                <IoIosHeartEmpty size={30} style={{ color: "red" }} />
                <br />
                Add to Wish List
              </p>
            )}
          </Button>
        </Wrapper>
      </CardActions>
      <CardActions
        sx={{ width: "160px", textAlign: "center", margin: "0px 75px" }}
      >
        <Wrapper>
          <Link to={`productDetail/${_id}`}>
            <Button
              className="Button-Styling"
              size="small"
              sx={{
                fontFamily: "Open Sans",
                fontSize: "15px",
                lineHeight: "20px",
                fontWeight: "600",
                width: "160px",
                textAlign: "center",
                padding: "10px",
                backgroundColor: "#FE4931",
                color: "white",
                marginTop: "15px",
              }}
            >
              View Details
            </Button>
          </Link>
        </Wrapper>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
