import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Artist = () => {
  const params = useParams();
  const [artistData, setArtistData] = useState(null);

  const artistId = params.id;
  // console.log(artistId)

  useEffect(() => {
    fetch(`/artist/${artistId}`)
      .then((res) => res.json())
      .then((res) => {
        setArtistData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [artistId]);

  console.log(artistData);

  return (
  <div>
    {artistData && 
    <h1>{artistData.name}</h1>
}
    </div>
    );
};

export default Artist;


