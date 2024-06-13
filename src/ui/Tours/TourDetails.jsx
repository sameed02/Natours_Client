import styled from "styled-components";
import { useFetchTour } from "./useFetchTour.js";
import {
  HeadingDescription,
  TourHeadingDetail,
  TourImgDetail,
} from "./TourImgDetail.jsx";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineUser,
} from "react-icons/hi";

const TourDetailsBox = styled.div`
  padding: 2rem 0 0 2rem;
  margin: 0 -1rem;
  overflow-y: auto;
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
  background-color: #f7f7f7;
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

function TourDetails() {
  const { data = {}, isPending } = useFetchTour();

  if (isPending) {
    console.log("loading...");
  }

  const tour = data?.data?.doc;
  const imageurl = tour?.imageCover;

  /* (tour?.name ?? "") is same as const name = tour?.name || ""; The ?? is called "nullish coalescing operator." It allows you to provide a default value when dealing with potentially null or undefined values. It works similarly to the || operator */
  const [first, second, third] = (tour?.name ?? "").split(" ");

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
              People <span>15</span>
            </div>
            <div>
              <HiOutlineStar />
              Rating <span>4.8/5</span>
            </div>
            <div>
              <HiOutlineTrendingUp />
              Difficulty <span>medium</span>
            </div>
            <div>
              <HiOutlineCalendar />
              Next Date <span>June 2021</span>
            </div>
          </OverviewStat>
        </TourOverview>

        <TourOverviewDetail>
          <h2>About the Sea Explorer</h2>
          <p>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p>
            Irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </TourOverviewDetail>
      </Tourdescription>
    </TourDetailsBox>
  );
}

export default TourDetails;
