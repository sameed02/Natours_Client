const getBooking = async () => {
  /* http://localhost:3000/api/v1/bookings/bookingByUserId */
  try {
    const response = await fetch(
      `https://natours-bay.vercel.app/api/v1/bookings/bookingByUserId`,
      { credentials: "include" }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};

export { getBooking };
