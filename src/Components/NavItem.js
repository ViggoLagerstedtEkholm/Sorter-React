import {useContext, useState} from "react";
import {SortingContext} from "./AlgorithmProvider";

export function NavItem(props){
    const [open, setOpen] = useState(false);
    const {sort} = props;

    return(
        <li className="nav-item">
            <div className="icon-button"
             onClick={() => {
                    if(props.sort){
                        sort();
                    }
                    setOpen(!open)}
            }>
                {props.icon}
            </div>

            {open && props.children}
        </li>
    )
}

export default NavItem;