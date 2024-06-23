import styled from "styled-components";
import Logo from "./Logo.jsx";
import UserAvatar from "./UserAvatar.jsx";
import Logout from "../../authentication/Logout.jsx";

const StyledHeader = styled.header`
  grid-column: 1/3;

  ////////////////////
  height: 8rem;
  background-color: var(--color-grey-3);
  color: var(--color-grey-1);
  padding: 1rem 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;

function Header() {
  return (
    <StyledHeader>
      {<Logo />}

      <UserBox>
        <UserAvatar />
        <Logout />
      </UserBox>
    </StyledHeader>
  );
}

export default Header;
