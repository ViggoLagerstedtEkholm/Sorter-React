import {Layer, Rect, Stage} from 'react-konva';
import {useEffect, useState} from "react";
import {BubbleSort} from "./BubbleSort";

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;
const MAX_VAL = 100;
const MIN_VAL = 10;
const SLEEP = 100;
const AMOUNT = 100;

function Sorter() {
    const [array, setArray] = useState(Array.from({length: AMOUNT}, () => Math.floor(Math.random() * random())));
    const [colors, setColorArray] = useState(Array.from({length: AMOUNT}, () => 100));

    useEffect(() => {
        VisualizeBubbleSort();
    }, [])

    function random(){
        return Math.floor(Math.random() * (MAX_VAL - MIN_VAL + 1)) + MIN_VAL;
    }

    function VisualizeBubbleSort(){
        const steps = BubbleSort(array);
        visualize(steps);
    }

    function visualize(steps){
        steps.forEach(([change, swapped], index) => {
            setTimeout(() =>{
                setArray((prevArr) => {
                    const [index, newValue] = change;
                    const newArr = [...prevArr];
                    newArr[index] = newValue;
                    return newArr;
                });

                setColorArray((prevArr) => {
                    const [index] = change;
                    const newArr = [...prevArr];

                    newArr[index] = {red: 25, green: 67, blue:56};

                    for (let i = 0; i < newArr.length; i++) {
                        if(index !== i){
                            const prevColor = prevArr[i];
                            if(prevColor){
                                if(prevColor.green > 0){
                                    newArr[i] = {red: prevColor.red, green: prevColor.green--, blue:prevColor.blue};
                                }else{
                                    newArr[i] = {red: 0, green: 0, blue: 0};
                                }
                            }
                        }
                    }

                    return newArr;
                });
            }, SLEEP)
        })
    }

    function draw(){
        return array.map(function (data, index ) {
            const AMOUNT_OF_PILLARS = array.length;
            const CURRENT_VAL = data;

            const BAR_HEIGHT_PERCENT = WINDOW_HEIGHT / WINDOW_WIDTH;
            const percentOfMax = CURRENT_VAL / Math.max(...array);
            const heightPercentOfPanel = percentOfMax * BAR_HEIGHT_PERCENT;
            const BAR_HEIGHT = heightPercentOfPanel * WINDOW_HEIGHT;

            const BAR_WIDTH = WINDOW_WIDTH / AMOUNT_OF_PILLARS;

            const xCoordinate = index + (BAR_WIDTH - 1) * index;
            const yCoordinate = WINDOW_HEIGHT - BAR_HEIGHT;

            return (
                <Rect
                    x={xCoordinate}
                    y={yCoordinate}
                    width={BAR_WIDTH}
                    height={BAR_HEIGHT}
                    fill={"rgb(" + colors[index].red + ", " + colors[index].green + ", " + colors[index].blue + " )"}
                    key={index}
                />
            );
        });
    }

    return(
        <div className="main">
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {draw()}
                </Layer>
            </Stage>
        </div>
    )
}

export default Sorter;
