import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";

const Setlists = () => {
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams();
    const [setlistsData, setSetlistsData] = useState(null);
  
    const artistId = params.id;
    console.log(artistId)
  
    useEffect(() => {
      fetch(`/artist/setlists/${artistId}`)
        .then((res) => res.json())
        .then((res) => {
            setSetlistsData(res.data);
            setIsLoading(false);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [artistId]);
  
    // console.log(setlistsData.setlist[0].id);
   
    if (isLoading) {
        return <StyledLoader/>;
    }    

return (
    <div>
<p>{setlistsData.setlist[0].id}</p>
<p>{setlistsData.setlist[0].eventDate}</p>
    </div>
)
}
 
export default Setlists;


const StyledLoader = styled(ScaleLoader)`
color: "#36d7b7";
`;