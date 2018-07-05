let sequence = [1, 4, 2.3, 3.14, 9, 3475, 3, 3, 54, 60, 0.1, -3.3];

export function minMax(arr) {
    // IMPLEMENT THE minMax FUNCTION HERE!!
    const resp = arr;
    resp.sort((a, b) => a - b);
    return {
        min: resp[0],
        max: resp[resp.length - 1],
    };
}

sequence = [1, 4, 2.3, 3.14, 9, 3475, 3, 3, 54, 60, 0.1, -3.3];

export function minMaxMultiple(arr, size) {
    // IMPLEMENT THE minMaxMultiple FUNCTION HERE!!
    const resp = arr;
    resp.sort((a, b) => a - b);
    return {
        min: resp.slice(0, size),
        max: resp.slice(resp.length - size, resp.length),
    };
}
