import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Sidebar from "./SideNav/Sidebar.jsx";
import Hero from "./Hero.jsx";
import styled from "styled-components";
import Login from "../authentication/Login.jsx";

const StyledContainer = styled.div`
  height: calc(100vh - 6rem);

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 30rem 1fr;
`;

const StyledOutletContainer = styled.div`
  overflow: auto;
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
              <Sidebar />

              <StyledOutletContainer>
                <Outlet />
              </StyledOutletContainer>
            </StyledContainer>
          )}
        </>
      )}
    </>
  );
}

export default AppLayout;
