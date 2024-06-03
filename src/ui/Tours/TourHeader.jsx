import styled from "styled-components";

const ImgContainer = styled.div`
  width: 100%;
  height: 22rem;
  background-image: linear-gradient(
      to right bottom,
      var(--light-gradient-light-green),
      var(--light-gradient-dark-green)
    ),
    url(${(props) => props.$imageurl});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
`;

function TourHeader({ imageurl }) {
  return <ImgContainer $imageurl={`/tourCover/${imageurl}`} />;
}

export default TourHeader;
