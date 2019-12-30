import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import HomeActivity from './android/app/src/components/HomeActivity';
import ProfileActivity from './android/app/src/components/ProfileActivity';
import FirstActivity from './android/app/src/components/FirstActivity';
import LoginView from './android/app/src/components/LoginView';
import {createStackNavigator} from 'react-navigation-stack';
import Profilepage from './android/app/src/components/Profilepage';
import PostedJobs from './android/app/src/components/PostedJobs';


const AppNavigator = createStackNavigator(
{
  First: { screen: FirstActivity,
  navigationOptions:{header:null,} },
  Home: { screen: HomeActivity },
  Profile: { screen: ProfileActivity },
  Login: { screen: LoginView,navigationOptions:{header:null,} },
  Profile1: { screen: Profilepage ,
    navigationOptions:{header:null,
    }
  },
  Posted: { screen: PostedJobs,navigationOptions:{header:null,} },

},
{
    initialRouteName: 'First',
}

);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer  />;
  }
}