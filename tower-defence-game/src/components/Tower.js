import GameObject from "./GameObject";
import { useThree } from "@react-three/fiber"
import { getXPosition, getYPosition, getScale } from "./PositionLocator";

function Tower({position, interactable, ...props}) {
    const { viewport } = useThree();

    return(<GameObject name="tower" position={position} size={ 1 } isVisible={true} type={"player"} {...props}>
        <mesh position={[getXPosition(position[0], viewport), getYPosition(position[1], viewport), 0]} scale={ getScale(1, viewport) }>
            <planeGeometry />
            <meshStandardMaterial color="red" />
        </mesh>
    </GameObject>);
}

export default Tower;