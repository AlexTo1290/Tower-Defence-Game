import { useState } from "react";
import GameObject from "./GameObject";
import { useThree } from "@react-three/fiber"
import { getXPosition, getYPosition, getScale } from "./PositionLocator";
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { extend } from '@react-three/fiber';

extend({ TextGeometry });

function TowerSelectButton({position, ...props}) {
    const { viewport } = useThree();
    const [isHovered, setIsHovered] = useState(false);

    function click(e) {
        console.log("hi")
    }

    return (<>
        <mesh
            onClick={click}
            onPointerOver={(e) => setIsHovered(true)}
            onPointerOut={(e) => setIsHovered(false)}
            position={position}>

            <planeGeometry args={[viewport.width/8, viewport.height/10]} />
            <meshStandardMaterial color="grey" opacity={isHovered ? 0.93 : 1} transparent/>
            
        </mesh>
    </>)
}

export default TowerSelectButton;