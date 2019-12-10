import { createStackNavigator } from 'react-navigation-stack';
import MyClientScreen from '../screens/MyClients';

const MyClientScreenStack = createStackNavigator({
    MyClients: {
        screen: MyClientScreen,
        navigationOptions: () => ({
            title:"Mis Clientes"
        })
    }
})

export default MyClientScreenStack;