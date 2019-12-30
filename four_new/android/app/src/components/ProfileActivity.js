import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import ListView from 'deprecated-react-native-listview';
import {createStackNavigator} from 'react-navigation-stack';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class RenderList extends Component
{
    static navigationOptions =
    {
        title: "List Items"
    };

    constructor()
    {
        super();
        this.state = { dataSource: ds.cloneWithRows([]), loading: true };
    }

    componentDidMount()
    {
        fetch('http://52.89.130.200/HANDSFORHIRE/service/job_lists')
        .then((response) => response.json())
        .then((responseJson) =>
        {
            this.setState({ dataSource: ds.cloneWithRows( responseJson ) }, () => { this.setState({ loading: false }) });
        })
        .catch((error) =>
        {
            console.error(error);
        });
    }

    clickedItemText( clickedItem )
    {
        this.props.navigation.navigate('Item', { item: clickedItem });
    }

    render()
    {
        return(
            <View style = { styles.container1 }>
            {
                (this.state.loading)
                ?
                    (<ActivityIndicator size = "large"/>)
                :

                    (<ListView style = {{ alignSelf: 'stretch' }}
                        dataSource = { this.state.dataSource }
                        renderRow = {( rowData ) =>
                            <TouchableOpacity style = { styles.item } activeOpacity = { 0.4 } onPress = { this.clickedItemText.bind( this, rowData ) }>
                                <Text style = { styles.text }>{ rowData.name}</Text>
                            </TouchableOpacity>
                        }
                        renderSeparator = {() =>
                            <View style = { styles.separator }/>
                        }
                        enableEmptySections = { true }/>)
            }
            </View>
        );
    }
}

class ClickedItem extends Component
{
    static navigationOptions = 
    {
        title: "Selected Item"
    };

    render()
    {
        return(
            <View style = { styles.container2 }>
                <Text style = { styles.text }>You Selected: { this.props.navigation.state.params.item.name.toUpperCase() }</Text>
            </View>
        );
    }
}

export default App = createStackNavigator(
{
    List: { screen: RenderList },
    Item: { screen: ClickedItem }
});


const styles = StyleSheet.create(
{
    container1:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container2:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },

    item:
    {
        padding: 15
    },

    text:
    {
        fontSize: 18
    },

    separator:
    {
        height: 2,
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});