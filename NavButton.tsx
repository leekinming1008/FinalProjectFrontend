import Button from "@mui/material/Button";
import styled from "styled-components";

interface NavButtonProps {
  name: string;
  link: string;
}

const Wrapper = styled.div`
  &:hover .Nav-Button-Styling {
    color: #F70D1A;
    font-weight:700;
  }
`;

const NavButton = ({ name, link }: NavButtonProps) => {
  return (
    <Wrapper>
      <Button
        className="Nav-Button-Styling"
        href={link}
        key={name}
        sx={{ my: 2, color: "white", display: "block", fontSize: "17px", fontWeight: 600, padding: "1px 30px 1px 7px" }}
      >
        {name}
      </Button>
    </Wrapper>
  );
};

export default NavButton;