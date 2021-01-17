import React from "react"
import { Nav } from "react-bootstrap"

import { Link } from "react-router-dom"
import AboutPage from "../../containers/pages/about"
import HomePage from "../../containers/pages/home"
import AddMovie from "../add-movie"
import css from "./style.module.css"

export const routes = [
    { to: "/", title: "Home" },
    { to: "/add-movie", title: "Add Movie" },
    { to: "/about-page", title: "About" },
    { to: "/favorites-page", title: "Favorites" },
    { to: "/login-page", title: "Login" },
    { to: "/home2", title: "home2" }]

export default function NavBarApp() {
    return <Nav
        variant="pills" className={css.mainNavBar}>
        <NavItmesList links={routes} />
    </Nav>
}

function NavItmesList(props) {

    const { links } = props
    if (!Array.isArray(links)) return null
    return links.map(link => {
        return <Nav.Item>  <Link className={css.customLink} to={link.to} >{link.title}</Link> </Nav.Item>
    })
}