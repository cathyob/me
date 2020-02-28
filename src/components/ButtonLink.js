import React, { Component } from 'react';

export default class ButtonLink extends Component {
    processClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.text)
        } 
    }

    render() {
        return <a className={["Button", !!this.props.classList ? this.props.classList : ''].join(' ')} href={this.props.href} target={this.props.target} onClick={this.processClick}>{this.props.text}</a>;
    }
}