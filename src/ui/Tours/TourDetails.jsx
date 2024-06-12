import { useFetchTour } from "./useFetchTour.js";

function TourDetails() {
  const { data = {}, isPending } = useFetchTour();

  if (isPending) {
    console.log("loading...");
  }

  const tour = data?.data?.doc;

  return (
    <div>
      <h1>{tour?.name}</h1>
    </div>
  );
}

export default TourDetails;
