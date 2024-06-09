import styled, { keyframes } from "styled-components";
import heroImage from "../assets/img/hero.jpg";
import logoWhite from "/public/logoWhite.png";
import { Link } from "react-router-dom";
import useFetchUser from "../authentication/useFetchUser.js";

/*  -------------- Animations -------------- */
const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
 
`;

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  80% {
    transform: translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

/*  -------------- Styles -------------- */
const StyledHero = styled.div`
  position: relative;
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      var(--gradient-light-green),
      var(--gradient-dark-green)
    ),
    url(${heroImage});
  background-size: cover;
  background-position: top;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 75vh,
    0 100%
  ); // works clockwise (x y) axis
`;

const ImgContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`;

const StyledImg = styled.img`
  height: 35px;
`;

const HeroBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%; // this top and left are in relation to its parent because of absolute positions and we have set its parent element as position: relative
  text-align: center;
  transform: translate(
    -50%,
    -50%
  ); // this translate is in relation to the element itself.
`;

const HeroHeading = styled.h1`
  color: var(--color-white);
  text-transform: uppercase;
  margin-bottom: 96px;
`;

const HeroHeadingPrimary = styled.span`
  display: block;
  font-size: 6rem;
  font-weight: 700;
  letter-spacing: 35px;
  margin-right: -35px; // letter-spacing property also adds that space AFTER the last letter, So, in hero box we're centering the box, but not the text, because it has an extra 35px to the right, thus being the text more to the left side than it should. so we are adding negative margin to center the text
  animation: ${moveInLeft} 1s ease-out;
`;
const HeroHeadingSub = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 17.4px;
  margin-right: -17.4px;
  animation: ${moveInRight} 1s ease-out;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 40px;
  background-color: var(--color-white);
  color: var(--color-grey-2);
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
  animation: ${moveInBottom} 0.5s ease-out 0.75;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); // 1st value: offset in X direction, 2nd: offset in Y direction, 3rd: Blur, 4th: color
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    background-color: var(--color-white);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;

function Hero() {
  const { data: user, isPending } = useFetchUser();
  if (isPending) console.log("loading...");
  return (
    <StyledHero>
      <ImgContainer>
        <StyledImg src={`${logoWhite}`} alt="Logo" />
      </ImgContainer>

      <HeroBox>
        <HeroHeading>
          <HeroHeadingPrimary>Outdoors</HeroHeadingPrimary>
          <HeroHeadingSub>is where life happens</HeroHeadingSub>
        </HeroHeading>

        <StyledLink to={`${user ? "/tours" : "/login"}`}>
          Discover our tours
        </StyledLink>
      </HeroBox>
    </StyledHero>
  );
}

export default Hero;
