import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View, Image } from 'react-native'; 
import logo from '../images/logo.png';

  
class FirstActivity extends React.Component {  
    onPressButton() {  
        Alert.alert('You clicked the button!')  
    }  
  
    render() {  
        return (  
            <View style={styles.container}>  
            <View style={styles.imagecontainer}>
                 <Image source={logo} style={styles.image} />
             </View>

                <View style={styles.buttonContainer}>  
                    <Button  
                    onPress={() => this.props.navigation.navigate('Login')}
                    title="Need a Hand"  
                        color="#F1CE6B"  
                    />  
                </View>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Lend a Hand"  
                        color="#00898D"  
                    />  
                </View>  
                <View style={styles.multiButtonContainer}>  
                </View>  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#4D4D4D',
        justifyContent: 'center',  
    },  
    imagecontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4D4D4D',
        marginBottom:20,
      },
    image: {
        width: 80,
        height: 80,
      },
    buttonContainer: {  
    
        margin: 20 ,
    },  
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',
        justifyContent: 'space-between' ,
    }  
})  

export default FirstActivity;
  
