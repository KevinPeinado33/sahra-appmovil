import React from 'react';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreenStacks from './HomeStacks';
import SettingsScreenStack from './SettingsStacks';
import MyClientScreenStack from './MyClientsStacks';
import ReportsScreenStack from './ReportsStack';

const NavigationStacks = createBottomTabNavigator({
    Home: {
        screen: HomeScreenStacks,
        navigationOptions: () =>({
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type="material-community"
                    name="home"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    Settings: {
        screen: SettingsScreenStack,
        navigationOptions: () =>({
            tabBarLabel: "Settings",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type="material-community"
                    name="settings"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    MyClients: {
        screen: MyClientScreenStack,
        navigationOptions: () => ({
            tabBarLabel: "Mis Clientes",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type="material-community"
                    name="account-group"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    Reports: {
        screen: ReportsScreenStack,
        navigationOptions: () => ({
            tabBarLabel: "Reportes",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type="material-community"
                    name="chart-arc"
                    size={22}
                    color={tintColor}
                />
            )
        })
    }        
},
{
    initialRouteName: "Settings",
    order: ["Home", "MyClients", "Reports","Settings"],
    tabBarOptions: {
        inactiveTintColor: "#9CAEB6",
        activeTintColor: "#03B1FE"
    }
}
);

export default createAppContainer(NavigationStacks);