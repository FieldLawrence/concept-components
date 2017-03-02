import React, { Component, PropTypes } from 'react';
import './style.sass';

export class FeedWeights extends Component {
    render() {
        return (
            <div className="feed-weights">{ this.props.children }</div>
        );
    }
}