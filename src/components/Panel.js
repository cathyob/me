import React, { Component } from 'react';

export default class Panel extends Component {
    render() {
        return <section>{this.props.children}</section>;
    }
}