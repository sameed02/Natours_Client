import styled from "styled-components";
import { useFetchTour } from "./useFetchTour.js";
import {
  HeadingDescription,
  TourHeadingDetail,
  TourImgDetail,
} from "./TourImgDetail.jsx";
import { HiOutlineClock, HiOutlineLocationMarker } from "react-icons/hi";

const TourDetailsBox = styled.div`
  padding: 2rem 0 0 2rem;
  margin: 0 -1rem;
  overflow-y: auto;
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
    </TourDetailsBox>
  );
}

export default TourDetails;
