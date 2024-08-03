import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  backdrop-filter: blur(3px); /* Apply blur effect */
  z-index: 102; /* Ensure it's behind the modal but above other content */
`;

export default Backdrop;
