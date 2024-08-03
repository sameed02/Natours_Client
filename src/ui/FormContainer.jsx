import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: ${(props) => props.$position || "static"};
  top: ${(props) => props.$top || "0"};
  left: ${(props) => props.$left || "0"};
  transform: ${(props) => props.$transform || "none"};

  max-width: ${(props) => props.$maxWidth || "55rem"};
  height: ${(props) => props.$height || ""};
  margin: ${(props) => props.$margin || "10rem auto"};
  padding: ${(props) => props.$padding || "5rem 7rem"};

  background-color: var(--color-white);
  color: var(--color-grey-2);

  box-shadow: ${(props) =>
    props.$boxShadow || "0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06)"};
  border-radius: 0.5rem;

  z-index: 103;
`;

export default FormContainer;
