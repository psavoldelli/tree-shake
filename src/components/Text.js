import React, { Component } from 'react';
import { reverse } from 'lodash-es';

export class Text extends Component {
    render() {
        const display = 'text: ';
        const props   = reverse(this.props.content);
        
        return (
            <div>
                { display + ' '  + this.props.content } 
            </div>
        );
    }
}