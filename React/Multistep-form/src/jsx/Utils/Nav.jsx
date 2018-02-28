import React from "react";

const Nav = (props) => {
    return(
        <nav aria-label="Page navigation example " className="d-block">
            <ul className="pagination justify-content-end">
                <li className={`page-item ` + props.previous } ><button type="submit" className="page-link">Previous</button></li>
                <li className={`page-item ` + props.next }><button type="submit" className="page-link">Next</button></li>
            </ul>
        </nav>
    )
}

export default Nav;