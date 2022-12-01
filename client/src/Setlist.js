import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";

const Setlist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const [setlistData, setSetlistData] = useState(null);

  const setlistId = params.id;

  useEffect(() => {
    fetch(`/setlist/${setlistId}`)
      .then((res) => res.json())
      .then((res) => {
        setSetlistData(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setlistId]);

  const addFavorite = () => {
    fetch(`/post-favorite`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ setlistData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data + "Success!");
      });
  };

  if (isLoading) {
    return <StyledLoader />;
  }
  return (
    <StyledBody>
      {setlistData && (
        <div>
          <p>Artist: {setlistData.artist.name}</p>
          <p>Venue: {setlistData.venue.name}</p>
          <p>
            City: {setlistData.venue.city.name}, {setlistData.venue.city.state}
          </p>
          <p>Date: {setlistData.eventDate}</p>
        </div>
      )}
      <p>Setlist</p>

      {setlistData.sets.set.length > 0 && (
        <ol>
          {setlistData.sets.set[0].song.map((item) => {
            return (
              <li>
                {item.name} {item.info}
              </li>
            );
          })}
        </ol>
      )}
      {setlistData && (
        <form>
          <button onClick={addFavorite}> Save Setlist</button>
        </form>
      )}
    </StyledBody>
  );
};

export default Setlist;

const StyledBody = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  margin: 8px;
`;

const StyledLoader = styled(ScaleLoader)`
  color: "#36d7b7";
`;
