import Logo from "./Logo/logo";
import './header.scss';
import MenuToggle from "./Menu/MenuToggle";
import Overlay from "../Overlay/Overlay";
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
class Header extends Component {
    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        });
    }

    render () {
        return(
            <header className="header">
                <div className="header_wrapper">

                    <NavLink to='/' exact activeClassName="active" className="logo-block logo_block_header">
                        <Logo />
                    </NavLink>

                    <MenuToggle
                        onToggle={this.toggleMenuHandler}
                        isOpen={this.state.menu}
                    />
                    <Overlay
                        onToggle={this.toggleMenuHandler}
                        isOpen={this.state.menu}
                    />
                </div>
            </header>
        );
    }
}

export default Header;