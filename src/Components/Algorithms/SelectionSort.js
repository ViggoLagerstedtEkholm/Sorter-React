import {Swap} from "./Algorithms";

export const SelectionSort = (shuffled) => {
    const copy = [...shuffled];
    const steps = [];
    Sort(copy, steps);
    console.log(steps);
    return steps;
}

function Sort(copy, steps){
    let n = copy.length;

    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(copy[j] < copy[min]) {
                min = j;
            }
        }
        steps.push([i, copy[min]]);
        steps.push([min, copy[i]]);
        if (min !== i) {
            Swap(i, min, copy);
        }
    }
}