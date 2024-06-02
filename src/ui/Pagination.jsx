import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-grey-1);
  font-size: 1.7rem;
  margin-top: 2rem;
  padding: 1.5rem 3rem;
`;

const PaginationBtnContaier = styled.div`
  display: flex;
  gap: 4rem;
`;

const PaginationBtn = styled.button`
  font-size: 1.7rem;
  font-weight: 300;
  color: var(--color-grey-1);
  padding: 1rem 1.5rem;
  background-color: var(--color-medium-green);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-dark-green);
  }
`;

function Pagination() {
  return (
    <StyledPagination>
      <p>
        Showing <strong>1</strong> to <strong>10</strong> of <strong>24</strong>{" "}
        results
      </p>

      <PaginationBtnContaier>
        <PaginationBtn>Prev</PaginationBtn>
        <PaginationBtn>Next</PaginationBtn>
      </PaginationBtnContaier>
    </StyledPagination>
  );
}

export default Pagination;
