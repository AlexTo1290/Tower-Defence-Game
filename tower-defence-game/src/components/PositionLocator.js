/**
 * Finds the [x, y] position relative to the viewport based on the [x, y] position on the canvas
 * @param {*} x the x position on the canvas
 * @param {*} y the y position on the canvas 
 * @returns the corresponding [x, y] position on the window
 */
export function getPosition(x, y, viewport) {
    return [getXPosition(x, viewport), getYPosition(y, viewport)];
}

/**
 * Finds the x position relative to the viewport based on the x position on the canvas
 * @param {*} x the x position on the canvas 
 * @returns the corresponding x position on the window
 */
export function getXPosition(x, viewport) {
    return (x * ( (viewport.width) / 45 ) );
}

/**
 * Finds the y position relative to the viewport based on the y position on the canvas
 * @param {*} y the xyposition on the canvas 
 * @returns the corresponding y position on the window
 */
export function getYPosition(y, viewport) {
    return (y * ( (viewport.width) / 45 ) );
}

/**
 * 
 * @param {*} size the size of the object on the canvas
 * @param {*} viewport viewport of the canvas
 * @returns the scale of the object based on the viewport size
 */
export function getScale(size, viewport) {
    return ( (size * viewport.width) / 45)
}
