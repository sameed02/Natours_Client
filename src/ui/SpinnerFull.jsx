import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 5px solid rgba(85, 197, 122, 0.2);
  border-top: 5px solid #55c57a;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  animation: ${spin} 3s linear infinite;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(176, 186, 195, 0.2);
  backdrop-filter: blur(5px);
  z-index: 99999;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};

export default Loader;
