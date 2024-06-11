import styled from "styled-components";
import logoGreen2x from "/logoGreen2x.png";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  max-height: 100%;
`;

const ImgContainer = styled.img`
  max-width: 8rem;
`;

function Logo() {
  return (
    <StyledLink to="/">
      <ImgContainer src={logoGreen2x} alt="logo" />
    </StyledLink>
  );
}

export default Logo;
