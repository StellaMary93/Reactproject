import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Alert
} from 'react-native';
import usernameimg from '../images/username.png';
import passwordimg from '../images/password.png';
import logo from '../images/logo.png';
import facebook from '../images/facebook.png';


export default class Profilepage extends Component {

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  
UserLoginFunction = () =>{
  
 if (this.state.username == '' || this.state.password == '') 
 {
   Alert.alert('Please input username and password');
 } 
 else 
 {          
   var url = 'http://52.89.130.200/HANDSFORHIRE/service/login';
   var data = {            
     'X-APP-KEY' : 'HandzForHire@~',
     devicetoken : 'hggfh',
     username: this.state.username,
     password: this.state.password,
   };
   fetch(url, {
     method: 'POST',
     body: JSON.stringify(data),
     // eslint-disable-next-line no-undef
     headers: new Headers({
       'Content-Type': 'application/json',
     }),
   })
     .then(res => res.json())
     .catch(error => console.warn('Error:', error))
     .then(response => {
       if (response.status == 'success') {
         console.warn(response);
         var data = response.data;  
         this.props.navigation.navigate('Profile1')           
       } 
       else {
         Alert.alert(response.message);
       }
     });
 } 
}
 

  render() {
    return (
      <View style={styles.container}>
                <Image source={logo} style={styles.image} />

        <View style={styles.inputContainer}>
                  <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={username => this.setState({username})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={password => this.setState({password})}/>
              </View>

              <Button title="Login" 
                                  onPress={() => this.props.navigation.navigate('Profile1')}
                                 // onPress={this.UserLoginFunction} 
                                  color="#2196F3" />

              <View style={styles.textContainer}>
            <Text>NEW TO HANDZ? SIGN UP?</Text>
        </View>

        
        <View style={styles.forgotdesign}>
            <Text>FORGOT PASSWORD?</Text>
        </View>

        <Image source={facebook} style={styles.faceimage} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4D',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom:20,
  },
  submitButton: {
    backgroundColor: '#F1CE6B',
    padding: 10,
    margin: 15,
    height: 40,
    alignItems:'center',
    width:300
 },
 submitButtonText:{
    color: '#000000'
 },
  buttonContainer: {  
    margin: 20 ,
},  
  faceimage:{
    width:300,
    height:50,
  },
  textContainer: {
    backgroundColor: '#F1CE6B',
    borderRadius:0,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginTop:20,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
},
forgotdesign: {
  backgroundColor: '#00898D',
  borderRadius:0,
  borderBottomWidth: 1,
  width:300,
  height:45,
  marginBottom:20,
  flexDirection: 'row',
  alignItems:'center',
  justifyContent:'center'
},
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:0,
      borderBottomWidth: 1,
      width:300,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:20,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});