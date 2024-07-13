const getBooking = async () => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/bookings/bookingByUserId`,
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
