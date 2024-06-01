import styled from "styled-components";
import TourSummary from "../ui/Tours/TourSummary.jsx";
import TourFooter from "../ui/Tours/TourFooter.jsx";
import TourHeader from "../ui/Tours/TourHeader.jsx";

const TourCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  max-width: 35rem;
`;

function Tours() {
  const TourContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 4rem 0;
    gap: 3rem;
  `;
  return (
    <TourContainer>
      <TourCard>
        <TourHeader />
        <TourSummary />
        <TourFooter />
      </TourCard>

      <TourCard>
        <TourHeader />
        <TourSummary />
        <TourFooter />
      </TourCard>
      <TourCard>
        <TourHeader />
        <TourSummary />
        <TourFooter />
      </TourCard>
      <TourCard>
        <TourHeader />
        <TourSummary />
        <TourFooter />
      </TourCard>
    </TourContainer>
  );
}

export default Tours;
