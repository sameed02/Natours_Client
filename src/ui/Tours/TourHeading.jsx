import styled from "styled-components";

const HeadingPrimary = styled.div`
  position: absolute;
  color: var(--color-white);
  text-transform: uppercase;
  background-image: linear-gradient(
    to bottom right,
    rgba(125, 213, 111, 0.85),
    rgba(40, 180, 135, 0.85)
  );
  line-height: 1;
  padding: 1.5rem;
  font-size: 2.75rem;
  font-weight: 300;
  left: 49rem;

  & span {
    display: block;
    position: absolute;
    padding: 1.5rem;
    line-height: 1;
    font-size: 2.75rem;
    font-weight: 300;
    background-image: linear-gradient(
      to bottom right,
      rgba(125, 213, 111, 0.85),
      rgba(40, 180, 135, 0.85)
    );
    left: -2.8rem;
  }
`;

function TourHeading() {
  return (
    <HeadingPrimary>
      The Sea <span>Explorer</span>
    </HeadingPrimary>
  );
}

export default TourHeading;
