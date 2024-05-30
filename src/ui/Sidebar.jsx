import styled from "styled-components";

function Sidebar() {
  const StyledSidebar = styled.div`
    background-image: linear-gradient(
      to right bottom,
      var(--gradient-light-green),
      var(--gradient-dark-green)
    );
    flex: 0 0 15%;
  `;
  return <StyledSidebar>Sidebar</StyledSidebar>;
}

export default Sidebar;
