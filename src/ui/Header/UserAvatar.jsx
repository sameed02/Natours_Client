import styled from "styled-components";
import avatar from "../../assets/img/avatar.jpg";
import { useAuthProvider } from "../../context/authContext.jsx";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.6rem;
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-3);
`;

function UserAvatar() {
  const { user } = useAuthProvider();

  return (
    <StyledUserAvatar>
      <Avatar src={avatar} alt="user img"></Avatar>
      <span>{user?.data?.doc?.name}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
