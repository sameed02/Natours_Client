import styled from "styled-components";
import heroImage from "../assets/img/hero.jpg";
import logoWhite from "/public/logoWhite.png";

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
  transform: translate(
    -50%,
    -50%
  ); // this translate is in relation to the element itself.
`;

const HeroHeading = styled.h1`
  color: var(--color-white);
  text-transform: uppercase;
`;

const HeroHeadingPrimary = styled.span`
  display: block;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 35px;
  margin-right: -35px; // letter-spacing property also adds that space AFTER the last letter, So, in hero box we're centering the box, but not the text, because it has an extra 35px to the right, thus being the text more to the left side than it should. so we are adding negative margin to center the text
`;
const HeroHeadingSub = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 17.4px;
  margin-right: -17.4px;
`;

function Hero() {
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
      </HeroBox>
    </StyledHero>
  );
}

export default Hero;
