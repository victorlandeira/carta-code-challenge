import { minMax, minMaxMultiple } from './index';

describe('minMax', () => {
    it('Should return the greater and the smaller Number in a given an Array of Numbers', () => {
        let arr = [1, 2, 3];
        expect(minMax(arr)).toEqual({
            min: 1,
            max: 3,
        });

        arr = [54, -18, 183];
        expect(minMax(arr)).toEqual({
            min: -18,
            max: 183,
        });

        arr = [3];
        expect(minMax(arr)).toEqual({
            min: 3,
            max: 3,
        });
    });
});

describe('minMaxMultiple', () => {
    it('Should return any given number of smaller and greater Numbers in an Array of Numbers', () => {
        let arr = [1, 2, 3, 4];
        expect(minMaxMultiple(arr, 2)).toEqual({
            min: [1, 2],
            max: [3, 4],
        });

        arr = [54, -18, 183, 1, 2, 3, 4];
        expect(minMaxMultiple(arr, 4)).toEqual({
            min: [-18, 1, 2, 3],
            max: [3, 4, 54, 183],
        });

        arr = [3];
        expect(minMaxMultiple(arr, 2)).toEqual({
            min: [3],
            max: [3],
        });
    });
});