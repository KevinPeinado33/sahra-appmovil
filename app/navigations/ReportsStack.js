import { createStackNavigator } from 'react-navigation-stack';
import ReportsScreen from '../screens/Reports';

const ReportsScreenStack = createStackNavigator({
    Settings: {
        screen: ReportsScreen,
        navigationOptions: () => ({
            title: "Reportes"
        })
    }
})

export default ReportsScreenStack;