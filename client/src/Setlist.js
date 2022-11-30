import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Setlist = () => {
    const params = useParams();
    const [setlistData, setSetlistData] = useState(null);
  
    const setlistId = params.id;
    console.log(setlistId)
  
    useEffect(() => {
      fetch(`/setlist/${setlistId}`)
        .then((res) => res.json())
        .then((res) => {
            setSetlistData(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [setlistId]);
    
console.log(setlistData.artist.name)
console.log(setlistData.venue.name)
console.log(setlistData.venue.city.name)
console.log(setlistData.venue.city.state)
console.log(setlistData.tour.name)
console.log(setlistData.sets.set[0].song[1].name)
    return (  
        <div>
            {/* <p>Artist {setlistData.name}</p>
            <p>Venue{setlistData.venue.name}</p>
            <p>City{setlistData.venue.city.name},{setlistData.venue.city.state}</p>
            <p>Tour{setlistData.tour.name}</p> */}
            <p>Setlist</p>
            <ol>
                <li>

                </li>
            </ol>

        </div>
    );
}
 
export default Setlist;