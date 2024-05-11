import Home from '../../screens/Home/Home.tsx'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Orders from '../../screens/Orders/Orders.tsx'
import Profile from '../../screens/Profile/Profile.tsx'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { routes } from '../routes.const.ts'

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
