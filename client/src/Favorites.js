import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";
import { useAuth0 } from "@auth0/auth0-react";
import Map from "./Map";

const Favorites = () => {
  const [setlists, setSetlists] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, isAuthenticated } = useAuth0();


  useEffect(() => {
    fetch(`/get-favorites`)
      .then((res) => res.json())
      .then((res) => {
        setSetlists(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);



  if (isLoading) {
    return <StyledLoader />;
  }
  return (
  <div>
{setlists.map((item)=>{

  if(item.data.user === user.nickname) {
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
    <Map lat={item.data.setlistData.venue.city.coords.lat} lng={item.data.setlistData.venue.city.coords.long}/>
  </StyledBody>
)}

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