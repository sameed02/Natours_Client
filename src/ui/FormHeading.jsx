import styled from "styled-components";

export const FormHeading = styled.h2`
  font-size: ${(props) => props.$fontSize || "2.2rem"};
  font-weight: ${(props) => props.$fontWeight || "700"};
  letter-spacing: ${(props) => props.$letterSpacing || "0.1rem"};
  line-height: ${(props) => props.$lineHeight || "1.3"};
  margin-bottom: ${(props) => props.$marginBottom || "3.5rem"} !important;
  background-image: linear-gradient(to right, #7dd56f, #28b487);
  background-clip: text;
  color: transparent;
`;
