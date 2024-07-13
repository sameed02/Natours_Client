import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 1.5rem;
  padding: 2.5rem;
  overflow-x: auto;
`;

const TableHeading = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-medium-green);
  border-bottom: 1px solid #ccc;
  text-align: left;
  padding: 10px;
  &:nth-child(6) {
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

  &:nth-child(6) {
    text-align: center;
  }

  &:nth-child(6):hover {
    text-decoration: underline;
    cursor: pointer;
    color: var(--color-dark-green);
  }
`;

function Bookings() {
  const headings = [
    "Booked Tour",
    "Booking Id",
    "Payment",
    "Starting Date",
    "Ending Date",
    "Action",
  ];

  const rows = [
    [
      "The Forest Hiker",
      "pay_212AGFB43LKH",
      "Paid",
      "15-07-24",
      "22-07-24",
      "Write Tour Review",
    ],
    [
      "The Mountain Climber",
      "pay_213AGFB44LKH",
      "Pending",
      "20-07-24",
      "27-07-24",
      "Write Tour Review",
    ],
    [
      "The River Runner",
      "pay_214AGFB45LKH",
      "Paid",
      "25-07-24",
      "01-08-24",
      "Write Tour Review",
    ],
  ];

  function handleReviewClick() {
    console.log("clicked");
  }

  return (
    <Container>
      {headings.map((heading, i) => (
        <TableHeading key={i}>{heading}</TableHeading>
      ))}

      {rows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((col, colIndex) => (
            <Col
              key={colIndex}
              onClick={() => colIndex === 5 && handleReviewClick()}
            >
              {col}
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default Bookings;
