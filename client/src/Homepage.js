import styled from "styled-components";

const Homepage = ({ Profile, Searchbar }) => {
  return (
    <StyledHomepage>
      <Searchbar />
      ToDO: add youtube videos to artist page , add discography to artis page,
      add spoitfy playlist link to setlist, add ticketmaster sutff for shows at
      City, shows by artist. Also use ticketmaskter to pull artist.
      SONG INFO IN SETLIST CONDITIONAL RENDER
    </StyledHomepage>
  );
};

export default Homepage;

const StyledHomepage = styled.div`
  display: flex;
  flex-direction: column;
`;
