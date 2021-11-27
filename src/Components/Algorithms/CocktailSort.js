import {Swap} from "./Algorithms";

export function CocktailSort(shuffled){
    const copy = [...shuffled];
    const steps = [];
    Sort(copy, steps);
    return steps;
}

function Sort(copy, steps) {
    let left = 0;
    let right = copy.length - 1;
    let hasSwapped = false;
    let outerLoopIterationCount = 0;

    while (left < right) {
        outerLoopIterationCount++;
        for (let i = left; i < right; i++) {
            if (copy[i] > copy[i + 1]) {
                steps.push([i, copy[i + 1]]);
                steps.push([i + 1, copy[i]]);
                Swap(i, i + 1, copy);
                hasSwapped = true;
            }
        }
        right--;
        for (let i = right; i > left; i--) {
            if (copy[i] < copy[i - 1]) {
                steps.push([i, copy[i - 1]]);
                steps.push([i - 1, copy[i]]);
                Swap(i, i - 1, copy);
                hasSwapped = true;
            }
        }
        left++;
        if (!hasSwapped) {
            return outerLoopIterationCount;
        } else {
            hasSwapped = false;
        }
    }
}