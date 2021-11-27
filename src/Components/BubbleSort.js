export const BubbleSort = (array) => {
    const original = [...array];
    const steps = [];
    Sort(original, steps);
    return steps;
}

function Sort(original, steps){
    for (let i = 0; i < original.length; i++) {
        for (let j = 0; j < (original.length - i - 1); j++) {
            if (original[j] > original[j + 1]) {
                steps.push([[j, original[j + 1]], true]);
                steps.push([[j + 1, original[j]], true]);
                Swap(j, j + 1, original);
            }
        }
    }
}

function Swap(A, B, original){
    const temp = original[A];
    original[A] = original[B];
    original[B] = temp;
}