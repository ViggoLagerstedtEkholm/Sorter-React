export const ShellSort = (shuffled) => {
    const copy = [...shuffled];
    const steps = [];
    Sort(copy, steps);
    return steps;
}

function Sort(copy, steps) {
    let increment = copy.length / 2;
    while (increment > 0) {
        for (let i = increment; i < copy.length; i++) {
            let j = i;
            const temp = copy[i];

            while (j >= increment && copy[j-increment] > temp) {
                copy[j] = copy[j-increment];
                steps.push([j, copy[j]]);
                j = j - increment;
            }

            steps.push([j, temp]);

            copy[j] = temp;
        }

        if (increment === 2) {
            increment = 1;
        } else {
            increment = parseInt(increment * 5 / 11);
        }
    }
    return copy;
}