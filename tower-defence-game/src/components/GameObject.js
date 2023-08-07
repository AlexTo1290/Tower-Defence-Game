import { useRef } from "react";

/**
 * Creates an object in the game. Examples would be towers, background tiles, enemies, etc.
 * @param name the name of the project
 * @param position the position of the object on the canvas, in the format [x, y]
 * @children holds the child components
 * @isVisible holds a boolean to whether the object is visible on the canvas
 * @type holds a string stating whether the object is an "Enemy, Tower, etc"
 */
function GameObject({name, position, size, children, isVisible, type, iteractable, ...props}) {
    const ref = useRef();

    if (isVisible) {
        return children;
    }
}

export default GameObject;