import styled from "styled-components";
import Pagination from "../ui/Pagination.jsx";
import PageHeader from "../ui/PageHeader.jsx";
import useFetchTours from "../ui/Tours/useFetchTours.js";
import TourCard from "../ui/Tours/TourCard.jsx";
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const TourContainer = styled.div`
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 2rem;
  gap: 3rem; */
  padding: 2rem 8rem 0 8rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  grid-gap: 5rem;
`;

function Tours() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "price"; // price low to high

  const page = searchParams.get("page") || 1; // price low to high

  const { data: tours = {}, isPending: isFetching } = useFetchTours(sort, page);

  if (isFetching) console.log("data is fetching....");

  const docNum = tours.totalDoc || 0;

  return (
    <Container>
      <PageHeader />
      <TourContainer>
        {tours?.data?.doc.map((tour, i) => (
          <TourCard tour={tour} key={i} />
        ))}
      </TourContainer>
      <Pagination docNum={docNum} />
    </Container>
  );
}

export default Tours;
