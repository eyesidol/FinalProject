import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";

const Setlist = () => {
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams();
    const [setlistData, setSetlistData] = useState(null);
  
    const setlistId = params.id;
    console.log(setlistId)
  
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
    
// console.log(setlistData.artist.name)
// console.log(setlistData.venue.name)
// console.log(setlistData.venue.city.name)
// console.log(setlistData.venue.city.state)
// console.log(setlistData.tour.name)
// console.log(setlistData.sets.set[0].song[1].name)

if (isLoading) {
    return <StyledLoader/>;
}
    return (  
        <StyledBody>
            <p>Artist: {setlistData.artist.name}</p>
            <p>Venue: {setlistData.venue.name}</p>
            <p>City: {setlistData.venue.city.name}, {setlistData.venue.city.state}</p>
            <p>Tour: {setlistData.tour.name}</p>
            <p>Setlist</p>
            <ol>
                <li>
{setlistData.sets.set[0].song[0].name}
                </li>
                <li>
{setlistData.sets.set[0].song[1].name}
                </li>
                <li>
{setlistData.sets.set[0].song[2].name}
                </li>
                <li>
{setlistData.sets.set[0].song[3].name}
                </li>
                <li>
{setlistData.sets.set[0].song[4].name}
                </li>
                <li>
{setlistData.sets.set[0].song[5].name}
                </li>
                <li>
{setlistData.sets.set[0].song[6].name}
                </li>
                <li>
{setlistData.sets.set[0].song[7].name}
                </li>
                <li>
{setlistData.sets.set[0].song[8].name}
                </li>
                <li>
{setlistData.sets.set[0].song[9].name}
                </li>
                <li>
{setlistData.sets.set[0].song[10].name}
                </li>
                <li>
{setlistData.sets.set[0].song[11].name}
                </li>
                
            </ol>

        </StyledBody>
    );
}
 
export default Setlist;

const StyledBody = styled.div `
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 400px;
margin: 8px;
`

const StyledLoader = styled(ScaleLoader)`
color: "#36d7b7";
`;