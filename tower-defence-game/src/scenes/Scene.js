import { UseFrame } from "@react-three/fiber";
import Grass from "../components/Grass";
import Path from "../components/Path";
import { useState, useEffect } from "react";

function Scene({mapString, mapWidth, mapHeight, ...props}) {
    const [map, setMap] = useState([]);

    useEffect(() => {
        //Runs only on the first render
        
        // creating background
        

        // reading the map
        let mapArr = mapString.split("/");
        mapArr.reverse();

        let mapObjArr = [];

        let paths = [];

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
                        paths.push([j - widthMidpoint, i - heightMidpoint])
                }
            }   

            mapObjArr.push(currentObjRow);
        }

        for (let i=0; i < paths.length; i++) {
            mapObjArr.push(mapObjArr.push(<Path position={[paths[i][0], paths[i][1]]} />));
        }

        setMap(mapObjArr);
    }, []);

    let mapOneDimension = [].concat(...map);

    return (
        map
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