import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Sidebar from "./SideNav/Sidebar.jsx";
import Hero from "./Hero.jsx";
import styled from "styled-components";
import Login from "../authentication/Login.jsx";

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 6rem);
`;

const StyledMain = styled.main`
  display: flex;
  flex-grow: 1;
  min-height: 0;
`;

const StyledOutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  flex-grow: 1;
  overflow: auto;
  /* justify-content: space-between; */
  padding: 0 1rem;
`;

function AppLayout() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {isHomePage && <Hero />}

      {!isHomePage && (
        <>
          {isLoginPage && <Login />}

          {!isLoginPage && (
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
      )}
    </>
  );
}

export default AppLayout;
