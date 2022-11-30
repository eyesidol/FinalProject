import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Setlists = () => {
    const params = useParams();
    const [setlistsData, setSetlistsData] = useState(null);
  
    const artistId = params.id;
    console.log(artistId)
  
    useEffect(() => {
      fetch(`/artist/setlists/${artistId}`)
        .then((res) => res.json())
        .then((res) => {
            setSetlistsData(res);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [artistId]);
  
    console.log(setlistsData);
    
return (
    <div>

    </div>
)
}
 
export default Setlists;