import React, { Component } from 'react';

export default class Icon extends Component {
    render() {
        return <a href={this.props.url} className="Social-Item" target="_blank" rel="noopener noreferrer" aria-label={this.props.ariaLabel}><span className={this.props.classList} style={{backgroundImage: `url(${this.props.background})`}}></span></a>;
    }
}