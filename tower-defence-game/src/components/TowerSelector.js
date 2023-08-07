import GameObject from "./GameObject";
import TowerSelectButton from "./TowerSelectButton";
import { useThree } from "@react-three/fiber"
import { getXPosition, getYPosition, getScale } from "./PositionLocator";
import { useState, useEffect } from "react";

function TowerSelector() {
    const { viewport } = useThree();
    const position = [getXPosition(19.1, viewport), 0, 0];



    console.log(viewport.width) 
    return (<>
        {/* Creating background for tower select buttons */}
        <mesh position={position}>
        
            <planeGeometry args={[viewport.width/7, viewport.height * (7/10)]} />

            <meshStandardMaterial color="deepskyblue" opacity={0.75} transparent/>
            
        </mesh>

        {/* // Creating tower select buttons */}
        <TowerSelectButton position={ [position[0], position[1] + (viewport.height * (1/4)), 1] }/>

        </>
    )
}

export default TowerSelector;