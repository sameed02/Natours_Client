import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: var(--color-grey-1);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem 3rem;
`;

const FooterDetails = styled.div`
  padding: 1rem;
`;

const FooterBtn = styled(Link)`
  color: var(--color-grey-1);
  &:link,
  &:link:visited {
    text-decoration: none;
    background-color: var(--color-medium-green);
    font-size: 1.7rem;
    font-weight: 300;
    padding: 1.2rem 3rem;
    cursor: pointer;
    border-radius: 10rem;
    text-transform: uppercase;
  }
`;

function TourFooter() {
  return (
    <StyledFooter>
      <FooterDetails>
        <p>
          <strong>$497</strong> per person
        </p>
        <p>
          <strong>4.1</strong> rating (8)
        </p>
      </FooterDetails>
      <FooterBtn>Details</FooterBtn>
    </StyledFooter>
  );
}

export default TourFooter;
