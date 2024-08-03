import styled from "styled-components";
import { useFetchBooking } from "./useFetchBooking.js";
import Loader from "../SpinnerFull.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalWindow from "../../ModalWindow.jsx";
import { useAuthProvider } from "../../context/authContext.jsx";
import { getReviewByUser } from "../../services/apiReviews.js";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 1.5rem;
  padding: 2.5rem;
  overflow-x: auto;
`;

const Empty = styled.div`
  font-size: 2rem;
  padding: 2rem;
  font-weight: 400;

  & span {
    font-weight: 700;
    text-decoration: none;
    color: var(--color-medium-green);
  }

  & span:hover {
    cursor: pointer;
    color: var(--color-dark-green);
  }
`;

const TableHeading = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-medium-green);
  border-bottom: 1px solid #ccc;
  text-align: left;
  padding: 10px;
  &:nth-child(5) {
    text-align: center;
  }
`;

const Row = styled.div`
  display: contents;
`;

const Col = styled.div`
  font-size: 1.7rem;
  font-weight: 400;
  text-align: left;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  &:nth-child(5) {
    text-align: center;
  }

  &:nth-child(5):hover {
    text-decoration: underline;
    cursor: pointer;
    color: var(--color-dark-green);
  }
`;

function Bookings() {
  const navigate = useNavigate();

  // get currently logged in user
  const { user } = useAuthProvider();
  const userId = user?.data?.doc?._id;

  const [showModal, setShowModal] = useState(false);
  const [reviewData, setReviewData] = useState(null);

  const headings = [
    "Booked Tour",
    "Booking Id",
    "Payment",
    "Duration",
    "Action",
  ];

  async function handleReviewClick(tourId) {
    const res = await getReviewByUser(tourId, userId);
    setShowModal(!showModal);
    setReviewData({ tourId, res });
  }

  // custom hook for fetching all the bookings of user
  const { data: { data: bookings = [] } = {}, isPending } = useFetchBooking();

  if (isPending) return <Loader />;

  return (
    <>
      {bookings.length > 0 ? (
        <Container>
          {headings.map((heading, i) => (
            <TableHeading key={i}>{heading}</TableHeading>
          ))}

          {bookings.map((booking) => {
            return (
              <Row key={booking._id}>
                <Col>{booking.tour.name}</Col>
                <Col>{booking.orderId.slice(6)}</Col>
                <Col>{booking.paid ? "Paid" : "Pending"}</Col>
                <Col>{booking.tour.duration} Days</Col>
                <Col onClick={() => handleReviewClick(booking.tour._id)}>
                  Write Tour Review
                </Col>
              </Row>
            );
          })}
        </Container>
      ) : (
        <Empty>
          We couldn&apos;t find any bookings associated with your account.
          Please explore our available tours to plan your next adventure{" "}
          <span onClick={() => navigate("/tours")}>here</span>.
        </Empty>
      )}

      {showModal && (
        <ModalWindow reviewData={reviewData} setShowModal={setShowModal} />
      )}
    </>
  );
}

export default Bookings;
