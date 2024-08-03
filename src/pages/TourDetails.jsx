import styled from "styled-components";
import { useFetchTour } from "../ui/Tours/useFetchTour.js";
import {
  HeadingDescription,
  TourHeadingDetail,
  TourImgDetail,
} from "../ui/Tours/TourImgDetail.jsx";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineUser,
} from "react-icons/hi";
import { format, parseISO } from "date-fns";
import Loader from "../ui/SpinnerFull.jsx";
import TourMap from "../ui/Tours/TourMap.jsx";
import Checkout from "../ui/Bookings/checkout.jsx";
import Testimonial from "../ui/Reviews/Testimonial.jsx";
import { useFetchBooking } from "../ui/Bookings/useFetchBooking.js";

const TourDetailsBox = styled.div`
  background-color: #f2fbf1;
`;

const Tourdescription = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -25rem;

  & h2 {
    font-size: 2.8rem;
    font-weight: 700;
    background-image: linear-gradient(to right, #7dd56f, #28b487);
    background-clip: text;
    color: transparent;
    letter-spacing: 0.1rem;
    line-height: 1.3;
    margin-bottom: 3.5rem !important;
    text-transform: uppercase;
  }

  & p:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const TourOverview = styled.div`
  padding: 25rem 8rem;
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OverviewStat = styled.div`
  & div {
    font-size: 2rem;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & div svg {
    font-size: 2.5rem;
    margin-right: 0.5rem;
    color: var(--color-medium-green);
  }

  & div span {
    font-size: 2rem;
    font-weight: 300;
    margin-left: 1rem;
  }
`;

const TourOverviewDetail = styled.div`
  padding: 25rem 8rem;
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Testimonials = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  gap: 1rem;
  padding: 4rem;
  overflow: auto;
`;

function TourDetails() {
  // custom hook for fetching all the bookings of user
  const { data: { data: bookings = [] } = {}, isPending: isFetchingBoookings } =
    useFetchBooking();

  const { data = {}, isPending } = useFetchTour();

  if (isPending || isFetchingBoookings) {
    return <Loader />;
  }

  const tour = data?.data?.doc;
  const imageurl = tour?.imageCover;

  /* (tour?.name ?? "") is same as const name = tour?.name || ""; The ?? is called "nullish coalescing operator." It allows you to provide a default value when dealing with potentially null or undefined values. It works similarly to the || operator */
  const [first, second, third] = (tour?.name ?? "").split(" ");
  const date = tour?.startDates;

  const firstDateISO = date?.[0] ? parseISO(date[0]) : null;
  const startDate = firstDateISO
    ? format(firstDateISO, "MMMM yyyy")
    : "No date available";

  return (
    <TourDetailsBox>
      <TourImgDetail $imageurl={`/tourCover/${imageurl}`}>
        <TourHeadingDetail>
          <span>
            {first} {second}
          </span>
          <span>{third}</span>
        </TourHeadingDetail>

        <HeadingDescription>
          <div>
            <HiOutlineClock />
            <span>{tour?.duration} Days</span>
          </div>
          <div>
            <HiOutlineLocationMarker />
            <span>{tour?.startLocation?.description}</span>
          </div>
        </HeadingDescription>
      </TourImgDetail>

      <Tourdescription>
        <TourOverview>
          <h2>Quick Facts</h2>
          <OverviewStat>
            <div>
              <HiOutlineUser />
              People <span>{tour?.maxGroupSize}</span>
            </div>
            <div>
              <HiOutlineStar />
              Rating <span>{tour?.ratingsAverage}/5</span>
            </div>
            <div>
              <HiOutlineTrendingUp />
              Difficulty <span>{tour?.difficulty}</span>
            </div>
            <div>
              <HiOutlineCalendar />
              Next Date <span>{startDate}</span>
            </div>
          </OverviewStat>
        </TourOverview>

        <TourOverviewDetail>
          <h2>About {tour?.name}</h2>
          <p>{tour?.description}</p>
          <p></p>
        </TourOverviewDetail>
      </Tourdescription>

      <Checkout tourId={tour?._id} bookings={bookings} />

      <TourMap locations={tour.locations} />

      <Testimonials>
        {/* {tour?.reviews.map((review) => (
          <Testimonial key={review.id} review={review} />
        ))} */}
        {tour?.reviews
          .slice()
          .reverse()
          .map((review) => (
            <Testimonial key={review.id} review={review} />
          ))}
      </Testimonials>
    </TourDetailsBox>
  );
}

export default TourDetails;
