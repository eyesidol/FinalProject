import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <StyledLogoutButton
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </StyledLogoutButton>
  );
};

export default LogoutButton;

const StyledLogoutButton = styled.button`
  background-color: #161748;
  border: 2px solid #f95d9b;
  text-decoration: none;
  color: #f95d9b;
  margin: 2px;
  padding: 3px;
  font-size: 20px;

  &:link {
    text-decoration: none;
    color: #f95d9b;
  }

  &:visited {
    text-decoration: none;
    color: #f95d9b;
  }

  &:hover {
    background-color: #7375b6;
    color: #f95d9b;
    border-radius: 10px;
  }

  &.active {
    color: #f95d9b;
  }
`;
