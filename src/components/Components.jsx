import React, { Component } from 'react';

class Text extends Component {
    render() {
        const display = 'text: ';
        return (
            <div>
                { display + ' '  + this.props.content } 
            </div>
        );
    }
}

class Title extends Component {
    render() {
        const display = 'hello';
        return (
            <Text content={ display } />
        );
    }
}


class Header extends Component {
    render() {
        const display = 'header';
        return (
            <div>
                { display }
            </div>
        );
    }
}

export { Header, Title }