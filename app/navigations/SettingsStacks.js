import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../screens/settings/Settings';
import LoginScreen  from '../screens/settings/Login';
import RegisterScreen from '../screens/settings/Register';

const SettingsScreenStack = createStackNavigator({
    Settings: {
        screen: SettingsScreen,
        navigationOptions: () => ({
            title:"Configuraciones"
        })
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            title: "Iniciar Sesión"
        })
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: () => ({
            title: "Registro De Usuario"
        })
    }
})

export default SettingsScreenStack;