import { createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShow'

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
});

export default createAppContainer(navigator);