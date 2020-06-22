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

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var fullYear = new Date().getFullYear(); //Current Year
    var year = fullYear.toString().slice(2, 4);

    that.setState({
      date:
        'Dia: ' + date + '/' + month + '/' + year ,
    });
  }

  render() {
    return (
        <Text>
          {this.state.date}
        </Text>
    );
  }
}