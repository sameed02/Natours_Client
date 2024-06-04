const getTours = async (sort, page) => {
  const response = await fetch(
    `http://127.0.0.1:3000/api/v1/tours?sort=${sort}&limit=3&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export { getTours };
