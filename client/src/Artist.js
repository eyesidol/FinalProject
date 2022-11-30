import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Artist = () => {
    const artistId = useParams()
    const [artistData, setArtistData] = useState(null)

// console.log(artistId.id)

    useEffect(() => {
        fetch(`/artist/${artistId.id}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            setArtistData(data.data);
            // console.log(artistData)
          });
      }, [artistId]);

    return (
        <div>
            ARTIST HERE
        </div>
      );
}
 
export default Artist;