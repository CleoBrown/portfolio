import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
            <div className="NavBar">

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/CV">CV</Link>
                    </li>
                    <li>
                        <Link to="/ContactDetails">Contact Details</Link>

                    </li>




                </ul>
            </div>
            <div> <p className="NavBar-Title">Software Development Portfolio</p></div>



        </>


    );
}

export default NavBar;