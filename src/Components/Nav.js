import NavItem from "./NavItem";
import NavBar from "./NavBar";

import {ReactComponent as Play} from "../Images/play-button-svgrepo-com.svg";
import {ReactComponent as Graph} from "../Images/bar-chart-676.svg";

import DropdownMenu from "./DropdownMenu";
import {SortingContext} from "./AlgorithmProvider";
import {useContext} from "react";

function Nav(props) {
    const {sort} = props;
    const {sorting} = useContext(SortingContext);

    return (
        <NavBar>
            {!sorting ?
                <>
                    <NavItem icon={<Graph/>}>
                        <DropdownMenu/>
                    </NavItem>

                    <NavItem icon={<Play/>} sort={sort}/>
                </> : null
            }
        </NavBar>
    );
}

export default Nav;
