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
  padding-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  grid-gap: 3rem;
`;

function Tours() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "price"; // price low to high

  const { data: tours = {}, isPending: isFetching } = useFetchTours(sort);

  if (isFetching) console.log("data is fetching....");

  return (
    <Container>
      <PageHeader />
      <TourContainer>
        {tours?.data?.doc.map((tour, i) => (
          <TourCard tour={tour} key={i} />
        ))}
      </TourContainer>
      <Pagination />
    </Container>
  );
}

export default Tours;
