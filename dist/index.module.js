import React, { Component } from 'react';
import { reverse } from 'lodash-es';

class Header extends Component {
  render() {
    const display = 'header';
    return React.createElement("div", null, display);
  }

}

class Text extends Component {
  render() {
    const display = 'text: ';
    const props = reverse(this.props.content);
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

export { Header, Title };
