import React from "react";
import { NavLink } from "react-router-dom"
import { Nav, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import "../components/nav/NavBar.css"
import "./Home.css"

export const Home = () => (
    <>
        <div className="homePage">
            <div className="top-nav">
                {/* Top Bar*/}
                <nav className="navbar navbar-expand-md navbar-light sticky-top" role="navigation">
                    <Nav className="w-100">
                        <div className=" d-flex flex-row justify-content-around w-100">
                            {

                                <NavLink to={"./settings"} className="nav-link-settings" activeClassName="active">
                                    <div className="row d-flex flex-row justify-content-end">
                                        <FontAwesomeIcon size="lg" icon={faCog} className="settingsCog" />
                                    </div>
                                </NavLink>

                            }
                        </div>
                    </Nav>
                </nav>
            </div>
            <section className="main--home">

                <div className="localTemp--homeDiv">
                    <h2 className="localTemp--home">76°</h2>
                </div>

                <div className="dailyQuote--homeDiv">
                    <h2 className="dailyQuote--home">"This is how God loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."</h2>
                    <h3 className="dailyQuoteSource--home">- John 3:16, ESV</h3>
                </div>

            </section>
        </div>
    </>
)
