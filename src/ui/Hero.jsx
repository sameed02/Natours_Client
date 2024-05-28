import styled from "styled-components";
import heroImage from "../assets/img/hero.jpg";

const StyledHero = styled.div`
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

function Hero() {
  return <StyledHero>Header</StyledHero>;
}

export default Hero;
