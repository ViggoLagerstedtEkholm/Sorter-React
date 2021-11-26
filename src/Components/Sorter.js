import {useEffect, useState} from "react";
import {BubbleSort} from "./BubbleSort";
import Nav from "./Nav";

const MAX_VAL = 100;
const MIN_VAL = 10;
const RUN_AFTER_SLEEP = 1;
const AMOUNT = 100;
const SHUFFLE_SLEEP = 10;
const RUN_SLEEP = 5;

function Sorter() {
    const [array, setArray] = useState(Array.from({length: AMOUNT}, () => 50));
    const [colors, setColorArray] = useState(Array.from({length: AMOUNT}, () => 100));

    useEffect(() => {
        console.log(array);
    }, [array]);

    function random(){
        return Math.floor(Math.random() * (MAX_VAL - MIN_VAL + 1)) + MIN_VAL;
    }

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function sort() {
        const shuffled = Array.from({length: AMOUNT}, () => Math.floor(Math.random() * random()));
        await shuffle(shuffled);
        const animation = BubbleSort(shuffled);
        await visualize(animation);
        await runWhenSorted();
    }

    async function shuffle(shuffled){
        return new Promise(async (resolve) => {
            for (let index = 0; index < shuffled.length; index++) {
                const randomVal = shuffled[index];
                update(index, randomVal);
                setColor(index);
                await timeout(SHUFFLE_SLEEP);
            }
            resolve();
        });
    }

    async function visualize(steps){
        return new Promise(async (resolve) => {
            for (let i = 0; i < steps.length; i++) {
                const change = steps[i][0];

                const [index, newValue] = change;
                update(index, newValue);

                const [currentSortingIndex] = change;
                setColor(currentSortingIndex);
                await timeout(SHUFFLE_SLEEP);
            }
            resolve();
        });
    }

    function runWhenSorted(){
        return new Promise((resolve)=>{
            for (let index = 0; index < array.length; index++) {
                setTimeout(() =>{
                    setColor(index);
                    resolve();
                }, index * RUN_AFTER_SLEEP)
            };
        });
    }

    function update(index, newValue){
        setArray((prevArr) => {
            const newArr = [...prevArr];
            newArr[index] = newValue;
            return newArr;
        });
    }

    function setColor(index){
        setColorArray((prevArr) => {
            const newArr = [...prevArr];
            newArr[index] = 100;
            for (let i = 0; i < newArr.length; i++) {
                if(newArr[i] > 60){
                    newArr[i] -= 1;
                }
            }
            return newArr;
        });
    }

    return(
        <div>
            <Nav sort={sort}/>
            <div className="visualizer-container">
                <div className="array-container">
                    {array.map((barHeight, index) => (
                        <div
                            className="array-bar"
                            style={{
                                height: `${barHeight / 1.10}vmin`,
                                width: `${100 / array.length}vw`,
                                backgroundColor: `${"rgb(" + colors[index] + ", " + colors[index] + ", " + colors[index] + " )"}`
                            }}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Sorter;
