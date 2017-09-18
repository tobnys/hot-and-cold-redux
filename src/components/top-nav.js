import React from 'react';
import {connect} from "react-redux";

import {newGame, toggleInfoModal} from "../actions/index"

import './top-nav.css';

export class TopNav extends React.Component {
    toggleNewGame(e){
        e.preventDefault();
        this.props.dispatch(newGame());
    };

    toggleInfoModal(e){
        e.preventDefault();
        this.props.dispatch(toggleInfoModal());
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.toggleInfoModal(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.toggleNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);