import styled from "styled-components";

const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  padding: 15px 40px;
  background-color: var(--color-medium-green);
  font-size: 2rem;
  color: var(--color-white);
  border-radius: 100px;
  transition: all 0.2s;
  border: none;
  margin: -20rem auto 0 auto;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    background-color: var(--color-dark-green);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); // 1st value: offset in X direction, 2nd: offset in Y direction, 3rd: Blur, 4th: color
  }
`;

function BtnPrimary() {
  return <StyledBtn>Book Now</StyledBtn>;
}

export default BtnPrimary;

/* animation: ${moveInBottom} 0.5s ease-out 0.75; */
