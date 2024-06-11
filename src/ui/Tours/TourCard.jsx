import styled from "styled-components";
import TourHeader from "./TourHeader.jsx";
import TourSummary from "./TourSummary.jsx";
import TourFooter from "./TourFooter.jsx";
import { format, parseISO } from "date-fns";

const StyledTourCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  width: 37rem;
`;

function TourCard({ tour }) {
  const {
    name,
    id: TourId,
    summary,
    startLocation: { description },
    startDates,
    price,
    ratingsAverage,
    maxGroupSize,
    ratingsQuantity,
    locations,
    difficulty,
    duration,
    imageCover: tourCover,
  } = tour;

  // converting date format from 2021-04-25T09:00:00.000Z to MMMM yyyy
  // Parse the date string into a Date object
  const dateObj = parseISO(startDates[0]);
  // Format the date to "June 2021"
  const date = format(dateObj, "MMMM yyyy");

  return (
    <StyledTourCard>
      <TourHeader imageurl={tourCover} />
      <TourSummary
        name={name}
        summary={summary}
        difficulty={difficulty}
        duration={duration}
        stops={locations.length}
        maxGroupSize={maxGroupSize}
        startingDate={date}
        description={description}
      />
      <TourFooter
        ratingsAverage={ratingsAverage}
        ratingsQuantity={ratingsQuantity}
        price={price}
        TourId={TourId}
      />
    </StyledTourCard>
  );
}

export default TourCard;
