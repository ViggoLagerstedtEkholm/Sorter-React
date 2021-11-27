import {Algorithms} from "./Algorithms/Algorithms";
import {useContext} from "react";
import {AlgorithmContext} from "./AlgorithmProvider";

function DropdownMenu() {
    const {setAlgorithm} = useContext(AlgorithmContext);

    function DropdownItem(props){
        const {algorithm} = props;

        const setAlgo = () =>{
            setAlgorithm(algorithm);
        }

        return(
            <button className="menu-item" onClick={setAlgo}>
                {props.children}
            </button>
        )
    }

    return (
        <div className="dropdown scroll">
            {Algorithms.map(function (algorithm, index) {
                return (<DropdownItem algorithm={algorithm} key={index}>{algorithm}</DropdownItem>)
            })}
        </div>
    );
}

export default DropdownMenu;
