import {
  HiOutlineCalendar,
  HiOutlineFlag,
  HiOutlineLocationMarker,
  HiOutlineUser,
} from "react-icons/hi";
import styled from "styled-components";

function TourSummary() {
  const StyledSummary = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    padding: 0 2rem;
    flex-direction: column;
    align-items: start;
    gap: 1rem;

    & h4 {
      font-size: 1.3rem;
      text-transform: uppercase;
      color: var(--color-grey-3);
      font-weight: 700;
    }

    & h3 {
      position: absolute;
      top: -12rem;
      left: 18rem;
      padding: 1rem 1.3rem;
      background-image: linear-gradient(
        to bottom right,
        rgba(125, 213, 111, 0.85),
        rgba(40, 180, 135, 0.85)
      );
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
      color: var(--color-grey-1);
      line-height: 1;
    }

    & p {
      font-size: 1.5rem;
      font-weight: 400;
      font-style: italic;
      line-height: 1.6;
    }
  `;

  const Stats = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    & div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 0.5rem;
    }

    & div svg {
      width: 2rem;
      height: 2rem;
      color: var(--color-medium-green);
    }

    & div span {
      font-size: 1.5;
    }
  `;
  return (
    <StyledSummary>
      <h3>The Northern Lights</h3>
      <h4>MEDIUM 7-DAY TOUR</h4>
      <p>Exploring the jaw-dropping US east coast by foot and by boat</p>
      <Stats>
        <div>
          <HiOutlineLocationMarker />
          <span>Miami</span>
        </div>
        <div>
          <HiOutlineCalendar />
          <span>June 2021</span>
        </div>
        <div>
          <HiOutlineFlag />
          <span>4 Stops</span>
        </div>
        <div>
          <HiOutlineUser />
          <span>15 People</span>
        </div>
      </Stats>
    </StyledSummary>
  );
}

export default TourSummary;
