import * as React from 'react'
import HomeScreen from './screens/home'
import Popular from './screens/popular'
import Recommendations from './screens/recommendations'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

export default function App(){
    return(
        <AppContainer/>
    )
}

const AppTopNavigation = createMaterialTopTabNavigator({
    RecommendedMovies: {
        screen: Recommendations,
        navigationOptions: {
            tabBarLabel: 'Recommended',
            tabBarOptions: {
                tabStyle: {backgroundColor: 'pink'},
                labelStyle: {color: 'orange'},
                indicatorStyle: {backgroundColor: 'red'}
            }
        }
    },
    PopularMovies: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: 'Popular',
            tabBarOptions: {
                tabStyle: {backgroundColor: 'pink'},
                labelStyle: {color: 'orange'},
                indicatorStyle: {backgroundColor: 'red'}
            }
        }
    }
})

const AppStackNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    AppTopNav : {
        screen: AppTopNavigation,
        navigationOptions:{
            headerBackTitle: null,
            headerTintColor: 'green',
            headerTitle: 'Recommended-Movies',
            headerStyle: {backgroundColor: 'yellow'},
            headerTitleStyle: {color: 'black', fontWeight: 'bold', fontSize: 20}
        }
    }
},
{
    initialRouteName: 'Home'
}
)

const AppContainer = createAppContainer(AppStackNavigator)