import { UseFrame } from "@react-three/fiber";
import Grass from "../components/Grass";
import Path from "../components/Path";
import PathStart from "../components/PathStart";
import PathEnd from "../components/PathEnd";
import TowerSelector from "../components/TowerSelector";
import { useState, useEffect } from "react";

function Scene({mapString, mapWidth, mapHeight, pathDirections, ...props}) {
    const [map, setMap] = useState([]);
    const [towerSelector, setTowerSelector] = useState(null);

    useEffect(() => {
        //Runs only on the first render
        
        // creating background
        

        // reading the map
        let mapArr = mapString.split("/");
        mapArr.reverse();
        
        let mapObjArr = [];

        let pathPositions = [];
        let pathStartPos = null;
        let pathEndPos = null;

        let widthMidpoint = mapWidth/2;
        let heightMidpoint = mapHeight/2;

        for (let i = 0; i < mapHeight; i++) {
            let currentRow = mapArr[i];
            let currentObjRow = [];

            for (let j = 0; j < mapWidth; j++) {
                let currentLetter = currentRow.charAt(j);

                switch (currentLetter) {
                    case "G":
                        mapObjArr.push(<Grass position={[j - widthMidpoint, i - heightMidpoint]} />);
                        break;
                    case "P":
                        // mapObjArr.push(<Path position={[j - widthMidpoint, i - heightMidpoint]} />);
                        pathPositions.push([j - widthMidpoint, i - heightMidpoint]);
                        break;
                    case "S":
                        // Start of path
                        pathStartPos = [j - widthMidpoint, i - heightMidpoint];
                        break;
                    case "E":
                        // End of path
                        pathEndPos = [j - widthMidpoint, i - heightMidpoint];
                        break;
                }
            }   

            mapObjArr.push(currentObjRow);
        }

        // Adding the path positions to the obj array
        for (let i=0; i < pathPositions.length; i++) {
            mapObjArr.push(mapObjArr.push(<Path position={[pathPositions[i][0], pathPositions[i][1]]} />));
        }
        
        // Adding the start position to the obj array
        mapObjArr.push(mapObjArr.push(<PathStart position={[pathStartPos[0], pathStartPos[1]]} />));

        // Adding the end position to the 
        mapObjArr.push(mapObjArr.push(<PathEnd position={[pathEndPos[0], pathEndPos[1]]} />));

        setMap(mapObjArr);


        // Adding the tower selector
        setTowerSelector(<TowerSelector />)

    }, []);

    let mapOneDimension = [].concat(...map);

    return (<>
            { map }
            { towerSelector }
        </>
    );

    // console.log(viewport.height)
    // return <>
    //     <mesh position={[0, 0, 0]} scale={ (viewport.width / 45) }>
    //         <planeGeometry />
    //         <meshStandardMaterial color="purple"/>
    //     </mesh>

    //     <mesh position={[(viewport.width * 2) / 45, 0, 0]} scale={ (viewport.width / 45) }>
    //         <planeGeometry />
    //         <meshStandardMaterial color="hotpink"/>
    //     </mesh>
    // </>

}

export default Scene;