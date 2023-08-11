export const increment = function(value: number) {
    return value + 1;
}

export const decrement = function(value: number) {
    // Prevent decrementing below 0
    if(value <= 0) {
        return 0;
    }
    return value - 1;
}
