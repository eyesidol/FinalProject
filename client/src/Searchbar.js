import { useState } from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Searchbar = () => {
  // const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState(null);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    fetch(`/search/artist/${encodeURI(value)}`)
      .then((res) => res.json())
      .then((res) => {
        setSearch(res.data);
        //   setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(search);
  return (
    <div>
      <p>Enter an artist name to view setlists</p>
      <div>
        <button onClick={handleSubmit}>Search</button>{" "}
        <input
          type="text"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          // onKeyDown={(ev) => {
          //     if (ev.key === 'Enter') {
          //         handleSelect(ev.target.value);
          //     }
          // }}
        />
      </div>
      {search === undefined && <p>No Artists Found</p>}
      {search && (
        <div>
          {search.artist.map((item) => {
            return (
              <div>
                <StyledArtistNavlink to={`/artist/setlists/${item.mbid}`} end>
                  {item.name}
                </StyledArtistNavlink>
                <p>{item.disambiguation}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;

const StyledArtistNavlink = styled(NavLink)`
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
