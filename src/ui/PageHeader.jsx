import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem 0 4rem;
`;

const Select = styled.select`
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-grey-2);
  border: 1px solid var(--color-medium-green);
  outline: none;

  &:focus {
    border: 2px solid var(--color-medium-green);
  }
`;

const Option = styled.option``;

function PageHeader() {
  const [sortBy, setSortBy] = useState("price");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    searchParams.set("sort", sortBy);
    setSearchParams(searchParams);
  }, [sortBy, searchParams, setSearchParams]);

  return (
    <PageContainer>
      <h1>All Tours</h1>
      <Select value={sortBy} onChange={handleSortChange}>
        <Option value="price">Sort by Price (low first)</Option>
        <Option value="-price">Sort by Price (high first)</Option>
        <Option value="-ratingsAverage">Sort by Rating (high first)</Option>
        <Option value="ratingsAverage">Sort by Rating (low first)</Option>
      </Select>
    </PageContainer>
  );
}

export default PageHeader;
