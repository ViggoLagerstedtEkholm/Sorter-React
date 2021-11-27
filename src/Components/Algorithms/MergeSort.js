export function MergeSort(arr) {
    const copy = [...arr];
    const len = copy.length;
    const aux = Array(len);
    const animations = [];
    mergeSort(copy, aux, 0, len - 1, animations);
    return animations;
}

function mergeSort(arr, aux, left, right, animations) {
    if (right <= left) return;
    const mid = left + Math.floor((right - left) / 2);
    mergeSort(arr, aux, left, mid, animations);
    mergeSort(arr, aux, mid + 1, right, animations);
    merge(arr, aux, left, mid, right, animations);
}

function merge(arr, aux, left, mid, right, animations) {
    for (let i = left; i <= right; i++) aux[i] = arr[i];
    let i = left;
    let j = mid + 1;
    for (let k = left; k <= right; k++) {
        if (i > mid) {
            animations.push([k, aux[j]]);
            arr[k] = aux[j++];
        } else if (j > right) {
            animations.push([k, aux[i]]);
            arr[k] = aux[i++];
        } else if (aux[j] < aux[i]) {
            animations.push([k, aux[j]]);
            arr[k] = aux[j++];
        } else {
            animations.push([k, aux[i]]);
            arr[k] = aux[i++];
        }
    }
}