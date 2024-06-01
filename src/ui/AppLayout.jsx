import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Sidebar from "./SideNav/Sidebar.jsx";
import Hero from "./Hero.jsx";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  background-color: var(--color-grey-1);
  /* box-shadow: var(--shadow-dark); */
  min-height: 50rem;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  display: flex;
`;

const StyledOutletContainer = styled.div`
  background-color: var(--color-white);
  flex-grow: 1;
  height: 80rem;
`;

function AppLayout() {
  const location = useLocation();

  // Check if the current path is '/'
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && <Hero />}

      {!isHomePage && (
        <StyledContainer>
          <Header />

          <StyledMain>
            <Sidebar />

            <StyledOutletContainer>
              <Outlet />
            </StyledOutletContainer>
          </StyledMain>
        </StyledContainer>
      )}
    </>
  );
}

export default AppLayout;
