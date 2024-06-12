const getTours = async (sort, page) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/tours/?sort=${sort}&limit=3&page=${page}`,
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

const getTour = async (tourId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/tours/${tourId}`,
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

export { getTours, getTour };
