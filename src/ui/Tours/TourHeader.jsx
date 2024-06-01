import styled from "styled-components";
import tourImg from "../../assets/img/nat-6.jpg";

const ImgContainer = styled.div`
  width: 100%;
  height: 22rem;
  background-image: linear-gradient(
      to right bottom,
      var(--light-gradient-light-green),
      var(--light-gradient-dark-green)
    ),
    url(${tourImg});
  background-size: contain;
  background-position: top;
  clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
`;

function TourHeader() {
  return <ImgContainer />;
}

export default TourHeader;
