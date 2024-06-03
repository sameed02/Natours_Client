import styled from "styled-components";
import Logo from "./Logo.jsx";
import UserAvatar from "./UserAvatar.jsx";

const StyledHeader = styled.header`
  height: 8rem;
  background-color: var(--color-grey-3);
  color: var(--color-grey-1);
  padding: 1rem 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <UserAvatar />
    </StyledHeader>
  );
}

export default Header;
