import styled from "styled-components";
import { useLogoutUser } from "./userAuthLogout.js";

const Btn = styled.button`
  font-size: 1.6rem;
  font-weight: 300;
  padding: 1.4rem 3rem;
  border-radius: 10rem;
  text-transform: uppercase;
  transition: all 0.4s;
  border: none;
  cursor: pointer;
  background-color: var(--color-medium-green);
  color: var(--color-grey-1);

  &:hover {
    background-color: var(--color-dark-green);
  }
`;

function Logout() {
  const { mutate: mutateLogout, isPending } = useLogoutUser();

  const handleLogout = () => {
    mutateLogout();
  };

  return (
    <Btn onClick={handleLogout} disabled={isPending}>
      Logout
    </Btn>
  );
}

export default Logout;
