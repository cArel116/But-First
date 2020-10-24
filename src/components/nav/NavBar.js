import React from "react"
import { NavLink } from "react-router-dom"
import { Nav, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCloud, faMugHot } from '@fortawesome/free-solid-svg-icons';
import "./NavBar.css"

const tabs = [{
    route: "/coffee",
    icon: faMugHot,
    label: "Coffee"
}, {
    route: "/",
    icon: faHome,
    label: "Home"
}, {
    route: "/weather",
    icon: faCloud,
    label: "Weather"
}]

// export const SettingsNav = (props) => (
//     <>
//         <div className="top-nav">
//             {/* Top Bar*/}
//             <nav className="navbar navbar-expand-md navbar-light sticky-top" role="navigation">
//                 <Nav className="w-100">
//                     <div className=" d-flex flex-row justify-content-around w-100">
//                         {

//                             <NavLink to={"./settings"} className="nav-link-settings" activeClassName="active">
//                                 <div className="row d-flex flex-row justify-content-end">
//                                     <FontAwesomeIcon size="lg" icon={faCog} className="settingsCog" />
//                                 </div>
//                             </NavLink>

//                         }
//                     </div>
//                 </Nav>
//             </nav>
//         </div>
//     </>
// );

export const NavBar = (props) => {
    return (
        <div className="bottom-nav">
            {/* Bottom Tab Navigator*/}
            <nav className="navbar fixed-bottom navbar-light" role="navigation">
                <Nav className="w-100">
                    <div className=" d-flex flex-row justify-content-around w-100">
                        {
                            tabs.map((tab, index) => (
                                <NavItem key={`tab-${index}`}>
                                    <NavLink to={tab.route} className="nav-link" activeClassName="active">
                                        <div className="row d-flex flex-column justify-content-center align-items-center">
                                            <FontAwesomeIcon size="lg" icon={tab.icon} />
                                            <div>{tab.label}</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </div>
                </Nav>
            </nav>
        </div>
    )
};

