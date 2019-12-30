import React, { Component } from 'react';

import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Platform, TouchableOpacity} from 'react-native';

export default class PostedJobs extends Component {

constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}

GetItem (student_name) {
 
Alert.alert(student_name);

}


componentDidMount() {
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
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, function() {
        // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

ListViewItemSeparator = () => {
  return (
    <View
      style={{

        height: .5,
        width: "100%",
        backgroundColor: "#000",

      }}
    />
  );
}


render() {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (

    <View style={styles.MainContainer}>

      <ListView

        dataSource={this.state.dataSource}

        renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) =>

       <View style={{flex:1, flexDirection: 'column'}} >

         <TouchableOpacity onPress={this.GetItem.bind(this, rowData.student_name)} >
       
         <Text style={styles.textViewContainer} >{'id = ' + rowData.id}</Text>

         <Text style={styles.textViewContainer} >{'Name = ' + rowData.student_name}</Text>

         <Text style={styles.textViewContainer} >{'Phone Number = ' + rowData.student_phone_number}</Text>

         <Text style={styles.textViewContainer} >{'Subject = ' + rowData.student_subject}</Text>

         </TouchableOpacity>

       </View>

        }
      />

    </View>
  );
}
}

const styles = StyleSheet.create({

MainContainer :{

// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,
backgroundColor: '#00BCD4',
padding: 5,

},

textViewContainer: {

 textAlignVertical:'center', 
 padding:10,
 fontSize: 20,
 color: '#fff',

}

});