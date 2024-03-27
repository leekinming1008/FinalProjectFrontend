import Button from "@mui/material/Button";
import styled from "styled-components";

interface NavButtonProps {
  name: string;
  link: string;
}

const Wrapper = styled.div`
  &:hover .Nav-Button-Styling {
    background-color: #ff0000;
    color: white;
  }
`;

const NavButtonSmaller = ({ name, link }: NavButtonProps) => {
  return (
    <Wrapper>
      <Button
        className="Nav-Button-Styling"
        href={link}
        key={name}
        sx={{ color: "black", display: "block", fontSize: "16px", fontWeight: 600, padding: "10px 100px 10px 20px"  }}
      >
        {name}
      </Button>
    </Wrapper>
  );
};

export default NavButtonSmaller;