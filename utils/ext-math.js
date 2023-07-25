
export function randomRange(inMin, exMax) {
    return Math.floor(Math.random() * (exMax - inMin) + inMin);
}

export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}