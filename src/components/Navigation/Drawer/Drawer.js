import React from 'react';
import { NavLink } from 'react-router-dom';
import './Drawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';

const links = [
    {to: '/', label:'Список', exact: true},
    {to: '/auth', label:'Авторизация', exact: false},
    {to: '/quiz-creator', label:'Создать тест', exact: false},
];

class Drawer extends React.Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    
    render() {
        const classes = ['Drawer'];
        if (!this.props.isOpen) {
            classes.push('close');
        }

        return (
            <React.Fragment>
                {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
                <nav className={classes.join(' ')}>
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Drawer