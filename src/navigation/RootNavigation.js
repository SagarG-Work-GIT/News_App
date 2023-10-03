import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen, ListScreen } from '../screens';


const Stack = createNativeStackNavigator();

export default class RootNavigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='List' screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="List" component={ListScreen} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}