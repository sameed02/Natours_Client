import styled from "styled-components";
import { Rating } from "react-simple-star-rating";

const Container = styled.div`
  height: 35rem;
  width: 40rem;
  padding: 4rem;
  border-radius: 0.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--color-white);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.009);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  height: 4rem;
  width: 4rem;
  margin-right: 1.5rem;
  border-radius: 50%;
`;

const Username = styled.h6`
  font-size: 1.7rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const ReviewText = styled.p`
  height: 20rem;
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 2rem;

  overflow-y: auto;
`;

function Testimonial({ review }) {
  return (
    <Container>
      <Header>
        <Img src={review?.user?.photo} />
        <Username>{review?.user?.name}</Username>
      </Header>

      <ReviewText>{review?.review}</ReviewText>

      <Rating
        className="rating-stars"
        onPointerEnter={onpointerenter}
        onPointerLeave={onpointerleave}
        onPointerMove={onpointermove}
        initialValue={review?.rating}
        fillColorArray={["#f17a45", "#f19745", "#f1a545", "#f1b345", "#f1d045"]}
        readonly={true}
        allowFraction={true}
        allowHover={true}
        transition={true}
      />
    </Container>
  );
}

export default Testimonial;
