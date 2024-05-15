import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { routes } from '~/navigation/routes.const'
import Home from '~/screens/Home'
import Orders from '~/screens/Orders'
import Profile from '~/screens/Profile'

const BottomTab = createBottomTabNavigator()

function BottomTabBar(): React.JSX.Element {
  return (
    <BottomTab.Navigator
      initialRouteName={routes.home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ color }) => {
          let iconName: string
          switch (route.name) {
            case routes.home:
              iconName = 'home'
              break
            case routes.orders:
              iconName = 'receipt'
              break
            case routes.profile:
              iconName = 'user-alt'
              break
            default:
              iconName = ''
          }
          return <Icon name={iconName} size={20} color={color} />
        },
      })}>
      <BottomTab.Screen name={routes.home} component={Home} />
      <BottomTab.Screen name={routes.orders} component={Orders} />
      <BottomTab.Screen name={routes.profile} component={Profile} />
    </BottomTab.Navigator>
  )
}

export default BottomTabBar
