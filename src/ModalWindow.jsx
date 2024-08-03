import styled from "styled-components";
import FormContainer from "./ui/FormContainer.jsx";
import { FormHeading } from "./ui/FormHeading.jsx";
import FormInput from "./ui/FormInput.jsx";
import FormLabel from "./ui/FormLabel.jsx";
import Backdrop from "./ui/Backdrop.jsx";
import { useForm } from "react-hook-form";
import FormError from "./ui/FormError.jsx";
import { useCreateReviews } from "./ui/Reviews/useCreateReviews.js";
import { useUpdateReview } from "./ui/Reviews/useUpdateReviews.js";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StyledForm = styled.form`
  & > :not(.rating-stars):not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const FormBtn = styled.button`
  font-size: 1.6rem;
  font-weight: 300;
  padding: 1.4rem 3rem;
  border-radius: 10rem;
  text-transform: uppercase;
  transition: all 0.4s;
  border: none;
  cursor: pointer;
  background-color: var(--color-medium-green);
  color: var(--color-grey-1);

  &:hover {
    background-color: var(--color-dark-green);
  }
`;

function ModalWindow({ reviewData, setShowModal }) {
  // getting review data of user
  const { tourId, res } = reviewData;

  //setting intial value for rating
  const [rating, setRating] = useState(res?.review?.rating || 0);

  //initializing react-hook-form-library
  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      review: res?.review?.review || "",
    },
  });
  const { errors } = formState;

  // this functions gets rating value from Rating component
  const handleRating = (rate) => {
    setRating(rate);
  };

  // custom hook for creating or updating reviews
  const { mutate, isPending } = useCreateReviews();
  const { mutateUpdateReview, isUpdatingReview } = useUpdateReview();

  async function handleReview(data) {
    const reviewId = res?.review?._id;
    const { review } = data;

    // if review already exists then update review
    if (res.status === "success") {
      mutateUpdateReview({ rating, review, reviewId });

      // if review doesn't exist then create review
    } else if (res.status === "fail") {
      mutate({ tourId, rating, review });
    }

    // close modal window if review we aren't updating or creating review
    if (!isPending || !isUpdatingReview) {
      setShowModal(false);
    }
  }

  return (
    <>
      <Backdrop onClick={() => setShowModal(false)} />
      <FormContainer
        $position="fixed"
        $top="40%"
        $left="50%"
        $transform="translate(-50%, -50%)"
      >
        <StyledForm noValidate onSubmit={handleSubmit(handleReview)}>
          <FormHeading>Create Review</FormHeading>

          <FormLabel>Your Rating </FormLabel>

          <Rating
            className="rating-stars"
            onClick={handleRating}
            onPointerEnter={onpointerenter}
            onPointerLeave={onpointerleave}
            onPointerMove={onpointermove}
            initialValue={rating}
            fillColorArray={[
              "#f17a45",
              "#f19745",
              "#f1a545",
              "#f1b345",
              "#f1d045",
            ]}
            allowFraction={true}
            allowHover={true}
            transition={true}
          />

          <FormLabel>Add a written review</FormLabel>
          <FormInput
            type="text"
            placeholder="what did you like or dislike?"
            disabled={isPending || isUpdatingReview}
            {...register("review", {
              required: "review cannot be empty",
              minLength: {
                value: 10,
                message: "Review must be at least 10 characters long",
              },

              maxLength: {
                value: 100,
                message: "Review must be smaller than 100 characters",
              },
            })}
          />
          {errors?.review?.message && (
            <FormError>{errors.review.message}</FormError>
          )}

          <FormBtn>{res.status === "success" ? "Update" : "Submit"}</FormBtn>
        </StyledForm>
      </FormContainer>
    </>
  );
}

export default ModalWindow;
