import GameObject from "./GameObject";
import { useThree } from "@react-three/fiber"
import { getXPosition, getYPosition, getScale } from "./PositionLocator";

function Grass({position, ...props}) {
    const { viewport } = useThree();

    return(<GameObject name="grass" position={position} size={ 1 } isVisible={true} type={"block"} {...props}> 
            <mesh position={[getXPosition(position[0], viewport), getYPosition(position[1], viewport), 0]} scale={ getScale(1, viewport) }> 
                <planeGeometry />
                <meshToonMaterial color="lightgreen" />
            </mesh>
    </GameObject>);
}

export default Grass;