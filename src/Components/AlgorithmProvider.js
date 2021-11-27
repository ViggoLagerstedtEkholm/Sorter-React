import {createContext, useState} from "react";
import {BUBBLE_SORT} from "./Algorithms/Algorithms";

export const AlgorithmContext = createContext(BUBBLE_SORT, undefined);
export const SortingContext = createContext(false);

export function AlgorithmProvider(props){
    const [algorithm, setAlgorithm] = useState(BUBBLE_SORT);
    const [sorting, setSorting] = useState(false);

    return(
        <AlgorithmContext.Provider value={{algorithm, setAlgorithm}}>
            <SortingContext.Provider value={{sorting, setSorting}}>
                {props.children}
            </SortingContext.Provider>
        </AlgorithmContext.Provider>
    )
}

export default AlgorithmProvider;