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
background-color: white;
border: 2px solid black;

text-decoration: none;
width: 160px;
margin: 2px;
padding: 3px;
font-size: 20px;

&:link {
    text-decoration: none;
    color: black;
}

&:visited {
  text-decoration: none;
  color: black;
}

&:hover {
    background-color: lightgrey;
    color:teal;
    border-radius: 10px;
}

&.active{
    color:teal;
}
`