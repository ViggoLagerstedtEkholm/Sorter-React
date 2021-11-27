function NavBar(props) {
    return (
        <div className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </div>
    );
}

export default NavBar;
