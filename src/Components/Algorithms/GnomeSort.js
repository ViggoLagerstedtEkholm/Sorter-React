const {Swap} = require("./Algorithms");

export function GnomeSort(shuffled){
    const copy = [...shuffled];
    const steps = [];
    Sort(copy, steps);
    return steps;
}

function Sort(copy, steps)
{
    function moveBack(i)
    {
        for( ; i > 0 && copy[i-1] > copy[i]; i--)
        {
            steps.push([i, copy[i - 1]]);
            steps.push([i - 1, copy[i]]);
            Swap(i, i - 1, copy);
        }
    }

    for (let i = 1; i < copy.length; i++)
    {
        if (copy[i-1] > copy[i]) moveBack(i);
    }
}