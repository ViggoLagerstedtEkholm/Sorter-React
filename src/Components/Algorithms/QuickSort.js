import {Swap} from "./Algorithms";

export function QuickSort(shuffled) {
    const copy = [...shuffled];
    const animations = [];
    quickSortHelper(copy, 0, copy.length - 1, animations);
    return animations;
}

function quickSortHelper(arr, left, right, animations) {
    if (right <= left) return;
    const part = partition(arr, left, right, animations);
    quickSortHelper(arr, left, part, animations);
    quickSortHelper(arr, part + 1, right, animations);
}

function partition(arr, left, right, animations) {
    let i = left;
    let j = right + 1;
    const pivot = arr[left];
    while (true) {
        while (arr[++i] <= pivot) {
            if (i === right) break;
        }
        while (arr[--j] >= pivot) {
            if (j === left) break;
        }
        if (j <= i) break;
        animations.push([i, arr[j]]);
        animations.push([j, arr[i]]);
        Swap(i, j, arr);
    }
    animations.push([left, arr[j]]);
    animations.push([j, arr[left]]);
    Swap(left, j, arr);
    return j;
}