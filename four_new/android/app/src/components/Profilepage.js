import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  Alert
} from 'react-native';
import createicon from '../images/create_job.png';
import editicon from '../images/edit_job.png';
import posted from '../images/posted_jobs.png';
import active from '../images/active_jobs.png';
import logo from '../images/logo.png';
import job_history from '../images/job_history.png';
import edit_user from '../images/edit_user.png';
import bulb from '../images/bulb.png';
import share from '../images/share.png';
import tutorial from '../images/tutorial_image.png';


export default class Profilepage extends Component {

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  callFun = () =>
  {
    //alert("Image Clicked!!!");
    this.props.navigation.navigate('Posted')           

  }

  PostedFunction = () =>{
  
    var url = 'http://52.89.130.200/HANDSFORHIRE/service/job_lists';
    var data = {            
      'X-APP-KEY' : 'HandzForHire@~',
      user_id : '504',
      type : 'posted',
      device : 'device',
      android : 'android',

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
        console.warn(response);

      });
  }  

  
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 400, height: 100, marginTop:20,backgroundColor: '#00898D'}} >
        <Text style={{textAlign: 'right',marginRight:50,marginTop:10,fontSize:20,color:'#000000',fontWeight:"bold"}}>Anitha</Text>

        </View>
        
          <Text style={styles.title}>NEED A HAND</Text>

            <View style={{flex: 2, flexDirection: 'row',marginLeft:30,marginRight:30}}>
              <View style={styles.fivecolumns}>
                <Image source={createicon} style={styles.image} />        
                <Text style={styles.columntitle}>CREATE JOB</Text>
              </View>
              <View style={styles.fivecolumns}>
                <Image source={editicon} style={styles.image} />        
                <Text style={styles.columntitle}>EDIT JOB</Text>
              </View>
            </View>
            <View style={{flex: 2, flexDirection: 'row',marginTop:0}}>
              <View style={styles.fivecolumns}>
              <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun }>

                <Image source={posted} style={styles.image} />        
                <Text style={styles.columntitle}>POSTED JOBS</Text>

              </TouchableOpacity>
               
              </View>
              <View style={styles.fivecolumns}>
                <Image source={logo} style={styles.image} />        
              </View>
              <View style={styles.fivecolumns}>
                <Image source={active} style={styles.image} />        
                <Text style={styles.columntitle}>ACTIVE JOBS</Text>
              </View>
            </View>
            <View style={{flex: 4, flexDirection: 'row',marginLeft:30,marginRight:30}}>
              <View style={styles.fivecolumns}>
                <Image source={job_history} style={styles.image} />        
                <Text style={styles.columntitle}>JOB HISTORY</Text>
              </View>
              <View style={styles.fivecolumns}>
                <Image source={edit_user} style={styles.image} />        
                <Text style={styles.columntitle}>EDIT USER PROFILE</Text>
              </View>
            </View>
            <Image source={bulb} style={styles.smallimage} />        

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
  fivecolumns: {
    flex: 1,
    paddingTop: 0,
    alignItems: 'center'
  },
  columntitle: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 35,
    color: '#FFFFFF',
    fontWeight: 'bold',
    justifyContent:'center',
    alignItems:'center'
  },

  iconsmall: {
    width: 56,
    height: 32,
    marginTop: 30
  },

  temp: {
    fontSize: 16,
    color: '#666666',
    marginTop: 20
  },
  smallimage: {
    width: 30,
    height: 30,
  },

  image: {
    width: 70,
    height: 70,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
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
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});