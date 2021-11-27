import {Swap} from "./Algorithms";

export const InsertionSort = (shuffled) => {
    const copy = [...shuffled];
    const steps = [];
    Sort(copy, steps);
    return steps;
}

function Sort(copy, steps){
    let n = copy.length;
    for (let i = 1; i < n; i++) {
        let key = copy[i];
        let j = i-1;
        while ((j > -1) && (key < copy[j])) {
            steps.push([j + 1, copy[j]]);
            Swap(j + 1, j, copy);
            j--;
        }
        copy[j+1] = key;
        steps.push([j + 1, key]);
    }
}