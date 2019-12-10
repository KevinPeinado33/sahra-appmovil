import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home';

const HomeScreenStacks = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: "Home"
        })
    }
});

export default HomeScreenStacks;