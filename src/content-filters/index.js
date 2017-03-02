import React, { Component, PropTypes } from 'react';
import './style.sass';

export class ContentFilters extends Component {
    render() {
        return (
            <div className="content-filters">{ this.props.children }</div>
        );
    }
}