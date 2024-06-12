import styled from "styled-components";

const TourImgDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 85vh;
  background-size: cover;
  background-position: top;
  background-image: linear-gradient(
      to right bottom,
      var(--light-gradient-light-green),
      var(--light-gradient-dark-green)
    ),
    url(${(props) => props.$imageurl});
  clip-path: polygon(0 0, 100% 0, 100% 55vh, 0 85%);
  padding: 0 -10px;
`;

const TourHeadingDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 5rem;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-grey-1);
  line-height: 1.5;
  text-align: center;

  transform: translate(0, -50%);

  & span {
    display: block;

    padding: 0.5rem 1.75rem;
    background-image: linear-gradient(
      to bottom right,
      rgba(125, 213, 111, 0.85),
      rgba(40, 180, 135, 0.85)
    );
  }
`;

const HeadingDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-top: -5rem;

  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;

  transform: translate(0, -50%);

  & div {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--color-grey-1);
  }
`;

export { TourImgDetail, TourHeadingDetail, HeadingDescription };
