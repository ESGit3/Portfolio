import React from "react";
import './nav.css';

export class Nav extends React.Component {
    state = {
        navColor: 'transparent',
        navTextColor: 'white'
    };

    listenScrollEvent = e => {
        if (window.scrollY > 63) {
            this.setState({navColor: 'white'});
            this.setState({navTextColor: 'black'})
        } else {
            this.setState({navColor: 'transparent'});
            this.setState({navTextColor: 'white'})
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <header>
                <nav style={{color: this.state.navTextColor, backgroundColor: this.state.navColor}}>
                    <h3>Portfolio</h3>
                    <ul className="navList">
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        )
    }
}