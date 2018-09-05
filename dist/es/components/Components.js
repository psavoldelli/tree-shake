import React, { Component } from 'react';

class Text extends Component {
  render() {
    const display = 'text: ';
    return React.createElement("div", null, display + ' ' + this.props.content);
  }

}

class Title extends Component {
  render() {
    const display = 'hello';
    return React.createElement(Text, {
      content: display
    });
  }

}

class Header extends Component {
  render() {
    const display = 'header';
    return React.createElement("div", null, display);
  }

}

export { Header, Title };