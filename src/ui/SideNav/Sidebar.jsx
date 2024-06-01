import { HiOutlineCog, HiOutlineMap } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const hoverAnimation = keyframes`
  0%{
    width: 0.4rem;
  }

  100% {
    width: calc(
      100% + 16rem
    );
  }
`;

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
    color: var(--color-grey-3);
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 1.2rem 0;
    transition: all 0.3s;
    text-decoration: none;
  }

  &.active {
    color: var(--color-medium-green);
  }

  /* This works because react-router places the active class on the active NavLink */

  &.active::before {
    content: "";
    position: absolute;
    left: -8rem;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 0.4rem;
    background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
    transform: scaleY(1);
    transition: all 0.3s;
  }

  &:hover::before {
    content: "";
    position: absolute;
    left: -8rem;
    top: 0;
    bottom: 0;
    height: 100%;
    background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
    transform: scaleY(1);
    width: calc(
      100% + 16rem
    ); // to transition my psuedo element with width of my relative parent i also have to add padding here that 16rem is padding here i applied in parent to this psueudo element
    transition: all 0.3s;
    animation: ${hoverAnimation} 0.5s ease-out;
  }

  & span {
    z-index: 101;
    transition: all 0.3s;
  }

  &:hover span {
    color: var(--color-grey-1);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-3);
    transition: all 0.3s;
    z-index: 101;
  }

  &:hover svg {
    color: var(--color-grey-1);
  }

  &.active svg {
    color: var(--color-medium-green);
  }

  &.active:hover svg {
    color: var(--color-grey-1);
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
