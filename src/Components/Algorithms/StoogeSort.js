import {Swap} from "./Algorithms";

export const StoogeSort = (shuffled) => {
    const copy = [...shuffled];
    const steps = [];
    const n = copy.length;
    Sort(copy, 0, n - 1, steps);
    return steps;
}

function Sort(copy, l, h, steps)
{
    if (l >= h)
        return;

    if (copy[l] > copy[h]) {
        steps.push([l, copy[h]]);
        steps.push([h, copy[l]]);
        Swap(l, h, copy);
    }

    if (h - l + 1 > 2) {
        let t = parseInt((h - l + 1) / 3, 10);
        Sort(copy, l, h - t, steps);
        Sort(copy, l + t, h, steps);
        Sort(copy, l, h - t, steps);
    }
}