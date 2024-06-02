import styled from "styled-components";
import TourSummary from "../ui/Tours/TourSummary.jsx";
import TourFooter from "../ui/Tours/TourFooter.jsx";
import TourHeader from "../ui/Tours/TourHeader.jsx";
import Pagination from "../ui/Pagination.jsx";
import PageHeader from "../ui/PageHeader.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

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
    padding-top: 2rem;
    gap: 3rem;
  `;

  return (
    <Container>
      <PageHeader />
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
      <Pagination />
    </Container>
  );
}

export default Tours;
