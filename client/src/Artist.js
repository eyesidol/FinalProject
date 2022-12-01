import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";

const Artist = () => {
    const [isLoading, setIsLoading] = useState(true)
  const params = useParams();
  const [artistData, setArtistData] = useState(null);

  const artistId = params.id;
  // console.log(artistId)

  useEffect(() => {
    fetch(`/artist/${artistId}`)
      .then((res) => res.json())
      .then((res) => {
        setArtistData(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [artistId]);

  console.log(artistData);

  if (isLoading) {
    return <StyledLoader/>;
}

  return (
  <div>
    {artistData && 
    <h1>{artistData.name}</h1>
}
    </div>
    );
};

export default Artist;


const StyledLoader = styled(ScaleLoader)`
color: "#36d7b7";
`;


