import React, { Component } from 'react';

import { Text } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  componentDidMount() {
    var that = this;
    
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes

    that.setState({
      date:
        ' ' + hours + ':' + min,
    });
  }

  render() {
    return (
        <Text>
          Hora de inicio: 
          {this.state.date}
        </Text>
    );
  }
}