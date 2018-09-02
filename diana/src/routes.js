import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Login from './pages/login';
import InitialScreen from './pages/initialScreen';
import Home from './pages/home';
import Categories from './pages/categories';
import Cart from './pages/cart';
import Account from './pages/account';


const createNavigator = (isLogged = false) =>
  createStackNavigator({
    InitialScreen: {
      screen: InitialScreen,
      navigationOptions: {
        header: null
      }
    },

    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    
    MainTab: {
      screen: createBottomTabNavigator({
        Home: {
          screen: Home,
        },

        Categories: {
          screen: Categories,
        },

        Cart: {
          screen: Cart,
        },

        Account: {
          screen: Account,
        }
      })
    }
  },
    {
      initialRouteName: isLogged ? 'MainTab' : 'InitialScreen'
    });

export default createNavigator;