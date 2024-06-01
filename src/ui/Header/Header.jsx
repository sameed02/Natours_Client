import styled from "styled-components";
import Logo from "./Logo.jsx";
import UserAvatar from "./UserAvatar.jsx";

function Header() {
  const StyledHeader = styled.header`
    height: 8rem;
    background-color: var(--color-grey-3);
    color: var(--color-grey-1);
    padding: 1rem 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  return (
    <StyledHeader>
      <Logo />
      <UserAvatar />
    </StyledHeader>
  );
}

export default Header;
