import GameObject from "./GameObject";
import { useThree } from "@react-three/fiber"
import { getXPosition, getYPosition, getScale } from "./PositionLocator";

function PathStart({position, direction, ...props}) {
    const { viewport } = useThree();

    return(<GameObject name="path" position={position} size={ 1 } isVisible={true} type={"path"} {...props}> 
            <mesh position={[getXPosition(position[0], viewport), getYPosition(position[1], viewport), 0]} scale={ getScale(1.2, viewport) }> 
                <planeGeometry />
                <meshToonMaterial color="darkgrey" />
            </mesh>
    </GameObject>);
}

export default PathStart;