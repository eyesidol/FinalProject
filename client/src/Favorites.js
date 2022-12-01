import { useParams } from "react-router-dom";
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
  return <div>CONTENT HERE</div>;
};

export default Favorites;

const StyledLoader = styled(ScaleLoader)`
  color: "#36d7b7";
`;
