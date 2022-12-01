import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";

const Favorites = () => {
  const [setlists, setSetlists] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/get-favorites`)
      .then((res) => res.json())
      .then((res) => {
        setSetlists(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(setlists);

  if (isLoading) {
    return <StyledLoader />;
  }
  return (
  <div>
{setlists.map((item)=>{
  
return (
  <StyledBody>
  <p>{item.data.setlistData.eventDate}</p>
  <p>{item.data.setlistData.venue.name}</p>
  <p>{item.data.setlistData.artist.name}</p>
  <ol>
          {item.data.setlistData.sets.set[0].song.map((item) => {
            return (
              <li>
                {item.name} {item.info}
              </li>
            );
          })}
        </ol>
  </StyledBody>
)

})}

  </div>
  );
};

export default Favorites;

const StyledLoader = styled(ScaleLoader)`
  color: "#36d7b7";
`;

const StyledBody = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  margin: 8px;
`;