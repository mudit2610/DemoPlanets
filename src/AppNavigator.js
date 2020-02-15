import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { View } from 'react-native';
import PlanetListScreen from './screens/PlanetsListScreen';
import ListScreen from './screens/ListScreen';


const AppStack = createStackNavigator({
    PlanetList: PlanetListScreen,
    ListScreen: ListScreen,

}, {
        initialRouteName: 'PlanetList',

    });
export default AppNavigator =
    createAppContainer(
        createSwitchNavigator(
            {
                AppStack,

            },
            {
                initialRouteName: 'AppStack',
            }
        )
    );

