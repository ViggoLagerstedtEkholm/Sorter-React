import NavItem from "./NavItem";
import NavBar from "./NavBar";

import {ReactComponent as Play} from "../Images/play-button-svgrepo-com.svg";
import {ReactComponent as Graph} from "../Images/bar-chart-676.svg";
import DropdownMenu from "./DropdownMenu";

function Nav(props) {
    const {sort} = props;

    return (
        <NavBar>
            <NavItem icon={<Graph/>}>
                <DropdownMenu/>
            </NavItem>

            <NavItem icon={<Play/>} sort={sort}/>
        </NavBar>
    );
}

export default Nav;
