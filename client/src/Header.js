import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({ LoginButton, LogoutButton }) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <StyledHeader>
      <StyledLogo to="/" end>
        Encore
      </StyledLogo>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <LogoutButton />}
      {isAuthenticated && (
        <StyledNavLink to="/favorites" end>
          Favorites
        </StyledNavLink>
      )}
      {isAuthenticated && (
        <StyledNavLink to="/profile" end>
          Profile
        </StyledNavLink>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  color: red;
  height: 100px;
  border-bottom: 1px solid #7375b6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled(NavLink)`
  text-decoration: none;
  width: 160px;
  margin: 2px;
  padding: 3px;
  font-size: 70px;
  font-family: "Lalezar", cursive;
  color: #2fe1b9;
`;

const StyledNavLink = styled(NavLink)`
  background-color: #161748;
  border: 2px solid #f95d9b;
  text-decoration: none;
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
