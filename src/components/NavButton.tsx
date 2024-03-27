import Button from "@mui/material/Button";
import styled from "styled-components";

interface NavButtonProps {
  name: string;
  link: string;
  onclick?: () => void;
}

const Wrapper = styled.div`
  &:hover .Nav-Button-Styling {
    color: #f70d1a;
    font-weight: 700;
  }
`;

const NavButton = ({ name, link, onclick }: NavButtonProps) => {
  return (
    <Wrapper>
      <Button
        onClick={onclick}
        className="Nav-Button-Styling"
        href={link}
        key={name}
        sx={{
          my: 2,
          color: "white",
          display: "block",
          fontSize: "17px",
          fontWeight: 600,
          padding: "1px 30px 1px 7px",
        }}
      >
        {name}
      </Button>
    </Wrapper>
  );
};

export default NavButton;
