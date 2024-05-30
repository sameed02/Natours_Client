import styled from "styled-components";

function Header() {
  const StyledHeader = styled.header`
    height: 8rem;
    background-color: var(--color-grey-3);
    color: var(--color-grey-1);
  `;
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
