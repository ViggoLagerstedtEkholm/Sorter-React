import {Swap} from "./Algorithms";

export const BubbleSort = (shuffled) => {
    const copy = [...shuffled];
    const steps = [];
    Sort(copy, steps);
    return steps;
}

function Sort(copy, steps){
    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < (copy.length - i - 1); j++) {
            if (copy[j] > copy[j + 1]) {
                steps.push([j, copy[j + 1]]);
                steps.push([j + 1, copy[j]]);
                Swap(j, j + 1, copy);
            }
        }
    }
}