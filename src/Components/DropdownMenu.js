import {BUBBLE_SORT, INSERTION_SORT} from "./Algorithms";
import {useContext} from "react";
import {AlgorithmContext} from "./AlgorithmProvider";

function DropdownMenu() {
    function DropdownItem(props){
        const {setAlgorithm} = useContext(AlgorithmContext);

        return(
            <button className="menu-item" onClick={setAlgorithm(props.children)}>
                {props.children}
            </button>
        )
    }

    return (
        <div className="dropdown scroll">
            <DropdownItem>{BUBBLE_SORT}</DropdownItem>
        </div>
    );
}

export default DropdownMenu;
