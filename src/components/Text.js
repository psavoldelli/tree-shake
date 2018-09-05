import React, { Component } from 'react';

export class Text extends Component {
    render() {
        const display = 'text: ';
        return (
            <div>
                { display + ' '  + this.props.content } 
            </div>
        );
    }
}