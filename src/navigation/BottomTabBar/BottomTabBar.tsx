import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Orders from '~/screens/Orders'
import Profile from '~/screens/Profile'
import HomeStack from '../HomeStack/HomeStack'
import { BottomTabBarParamList, BottomTabBarRoutes } from '../types'

const BOTTOM_TAB_BAR_ROUTES: Array<
  React.ComponentProps<typeof BottomTab.Screen>
> = [
  {
    name: BottomTabBarRoutes.HomeStack,
    component: HomeStack,
  },
  {
    name: BottomTabBarRoutes.Orders,
    component: Orders,
  },
  {
    name: BottomTabBarRoutes.Profile,
    component: Profile,
  },
]

const BottomTab = createBottomTabNavigator<BottomTabBarParamList>()

function BottomTabBar(): React.JSX.Element {
  return (
    <BottomTab.Navigator
      initialRouteName={BottomTabBarRoutes.HomeStack}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ color }) => {
          let iconName: string
          switch (route.name) {
            case BottomTabBarRoutes.HomeStack:
              iconName = 'home'
              break
            case BottomTabBarRoutes.Orders:
              iconName = 'receipt'
              break
            case BottomTabBarRoutes.Profile:
              iconName = 'user-alt'
              break
            default:
              iconName = ''
          }
          return <Icon name={iconName} size={20} color={color} />
        },
      })}>
      {BOTTOM_TAB_BAR_ROUTES.map(routeConfig => (
        <BottomTab.Screen key={routeConfig.name} {...routeConfig} />
      ))}
    </BottomTab.Navigator>
  )
}

export default BottomTabBar
