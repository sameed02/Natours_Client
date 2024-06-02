import { useState } from "react";
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
  font-weight: 700;
  color: var(--color-grey-2);
  border: 2px solid var(--color-medium-green);
  outline: none;

  &:focus {
    border-color: var(--color-dark-green);
  }
`;

const Option = styled.option``;

function PageHeader() {
  const [sortBy, setSortBy] = useState("priceLow");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <PageContainer>
      <h1>All Tours</h1>
      <Select value={sortBy} onChange={handleSortChange}>
        <Option value="priceLow">Sort by Price (low first)</Option>
        <Option value="priceHigh">Sort by Price (high first)</Option>
        <Option value="rating">Sort by Rating (high first)</Option>
        <Option value="difficulty">Sort by Difficulty (easy first)</Option>
      </Select>
    </PageContainer>
  );
}

export default PageHeader;
