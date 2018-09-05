import React, { Component } from 'react';
import { Text } from './Text';

export class Title extends Component {
    render() {
        const display = 'hello';
        return (
            <Text content={ display } />
        );
    }
}
