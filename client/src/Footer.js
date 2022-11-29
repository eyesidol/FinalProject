import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return ( 
        <StyledFooter>
            <StyledNavLink to="/" end>Home</StyledNavLink>
            <StyledNavLink to="/test-page" end>TEST</StyledNavLink>
            <StyledNavLink to="/637fba077c90d52c79a59a70" end>MONGO ITEM</StyledNavLink>
        </StyledFooter>
     );
}
 
export default Footer;

const StyledFooter = styled.div `
width: 100%;
color: red;
height: 100px;
`

const StyledNavLink = styled(NavLink)`
background-color: blue;
border: 2px solid green;
`