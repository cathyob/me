import React, { Component } from 'react';

export default class Panel extends Component {
    render() {
        return <div>
            <h4>{this.props.title}</h4>
            <ul className="skills">
                {this.props.items.map(item => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>;
    }
}