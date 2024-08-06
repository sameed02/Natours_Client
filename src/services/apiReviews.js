import { getTour } from "./apiTours.js";

export async function createReviews({ tourId, rating, review }) {
  /* http://localhost:3000/api/v1/tours/${tourId}/reviews */
  try {
    const res = await fetch(
      `https://natours-bay.vercel.app/api/v1/tours/${tourId}/reviews`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating, review }),
      }
    );

    if (!res.ok) {
      throw new Error("unable to create a review!");
    }
  } catch (err) {
    throw new Error(err);
  }
}

export async function getReviewByUser(tourId, userId) {
  try {
    // tour id
    const { data: tour } = await getTour(tourId);

    //currentUserId
    const [reviewByCurrUser] = tour.doc.reviews.filter(
      (review) => review.user._id === userId
    );

    if (reviewByCurrUser) {
      return { status: "success", review: reviewByCurrUser };
    } else {
      return { status: "fail", review: null };
    }
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateReview({ rating, review, reviewId }) {
  /* http://localhost:3000/api/v1/reviews/${reviewId} */

  try {
    const res = await fetch(
      `https://natours-bay.vercel.app/api/v1/reviews/${reviewId}`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating, review }),
      }
    );

    console.log(res);

    if (!res.ok) {
      throw new Error("Review could not be updated, Try Again !");
    }

    const updatedReview = await res.json();

    return updatedReview;
  } catch (err) {
    throw new Error(err);
  }
}
