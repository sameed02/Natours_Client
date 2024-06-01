import styled from "styled-components";
import avatar from "../../assets/img/avatar.jpg";

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
  return (
    <StyledUserAvatar>
      <Avatar src={avatar} alt="user img"></Avatar>
      <span>Sameed Ahmad</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
