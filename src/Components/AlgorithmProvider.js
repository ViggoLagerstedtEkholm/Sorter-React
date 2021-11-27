import {createContext, useState} from "react";
import {BUBBLE_SORT} from "./Algorithms";

export const AlgorithmContext = createContext(BUBBLE_SORT, undefined);

export function AlgorithmProvider(props){
    const [algorithm, setAlgorithm] = useState(BUBBLE_SORT);

    return(
        <AlgorithmContext.Provider value={{algorithm, setAlgorithm}}>
            {props.children}
        </AlgorithmContext.Provider>
    )
}

export default AlgorithmProvider;