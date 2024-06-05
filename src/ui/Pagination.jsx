import { useSearchParams } from "react-router-dom";
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

function Pagination({ docNum }) {
  const LIMIT = 3;
  const [searchParams, setSearchParams] = useSearchParams();

  const pageCount = docNum / LIMIT;

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const prevPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    setSearchParams((searchParams) => {
      searchParams.set("page", next);
      return searchParams;
    });
  };
  const nextPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    setSearchParams((searchParams) => {
      searchParams.set("page", prev);
      return searchParams;
    });
  };

  return (
    <StyledPagination>
      <p>
        Showing <strong>{(currentPage - 1) * pageCount + 1}</strong> to{" "}
        <strong>
          {currentPage === pageCount ? docNum : currentPage * pageCount}
        </strong>{" "}
        of <strong>{docNum}</strong> results
      </p>

      <PaginationBtnContaier>
        <PaginationBtn onClick={nextPage} disabled={currentPage === 1}>
          Prev
        </PaginationBtn>
        <PaginationBtn onClick={prevPage} disabled={currentPage === pageCount}>
          Next
        </PaginationBtn>
      </PaginationBtnContaier>
    </StyledPagination>
  );
}

export default Pagination;
