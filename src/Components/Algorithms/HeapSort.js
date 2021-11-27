import {Swap} from "./Algorithms";

export const HeapSort = (shuffled) => {
    const copy = [...shuffled];
    const steps = [];
    Sort(copy, steps);
    return steps;
}

function Sort(copy, steps){
    let n = copy.length;
    for (let i = n / 2 - 1; i >= 0; i--)
    {
        Heap(copy, n, i, steps);
    }
    for (let i = n - 1; i >= 0; i--)
    {
        steps.push([i, copy[0]]);
        steps.push([0, copy[i]]);

        Swap(0, i, copy);
        Heap(copy, i, 0, steps);
    }
}

function Heap(copy, n, i, steps)
{
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && copy[left] > copy[largest])
    {
        largest = left;
    }
    if (right < n && copy[right] > copy[largest])
    {
        largest = right;
    }

    if (largest !== i)
    {
        steps.push([i, copy[largest]]);
        steps.push([largest, copy[i]]);

        Swap(i, largest, copy);
        Heap(copy, n, largest, steps);
    }
}