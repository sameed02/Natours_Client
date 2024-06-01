import { HiOutlineCog, HiOutlineMap } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  color: var(--color-grey-2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 0 0 18%;
  padding: 2rem 8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1.2rem;

    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
    padding: 1.2rem 0;
    transition: all 0.3s;
    text-decoration: none;
  }

  &:hover,
  &.active {
    font-weight: 700;
    color: var(--color-medium-green);
  }

  /* This works because react-router places the active class on the active NavLink */

  &.active::before {
    content: "";
    position: absolute;
    left: -8rem;
    top: 0;
    bottom: 0;
    width: 0.4rem;
    background-color: var(--color-white);
    background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
    transition: all 0.3s;
  }

  &:hover::before {
    content: "";
    position: absolute;
    left: -8rem;
    top: 0;
    bottom: 0;
    width: 0.4rem;
    background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
    transition: all 0.3s;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
    color: var(--color-grey-3);
  }

  &:hover svg,
  &.active svg {
    color: var(--color-medium-green);
    transition: all 0.3s;
  }
`;

function Sidebar() {
  return (
    <NavList>
      <StyledNavLink to="/tours">
        <HiOutlineMap />
        <span>Tours</span>
      </StyledNavLink>
      <StyledNavLink to="/settings">
        <HiOutlineCog />
        <span>Settings</span>
      </StyledNavLink>
    </NavList>
  );
}

export default Sidebar;
