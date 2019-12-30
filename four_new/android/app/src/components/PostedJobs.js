import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default class PostedJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Lets initialize results with the same struct we expect to receive from the api
      results: {
        job_lists: []
      }
    };
    //Using ES6 we need to bind methods to access 'this'
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    var url = 'http://52.89.130.200/HANDSFORHIRE/service/job_lists';

    var data = {            
      'X-APP-KEY' : 'HandzForHire@~',
      user_id : '504',
      type : 'posted',
      device : 'device',
      android : 'android',

    };
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      // eslint-disable-next-line no-undef
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
    .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          results: responseData
        });
      })
      .done();
  }

  render() {
    //this.state.results.movies is the array you have to iterate
    contents = this.state.results.job_lists.map((item) => {
      //We need to return the corresponding mapping for each item too.
      return (
          <View key={item.job_name,item.id} style={ styles.container }>
            <Text style={styles.title}>
              {item.job_name+","+item.id}
            </Text>
          </View>
          
        );
     });
    return (
      <View style={styles.container}>
        {contents}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
