import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Home from '../screens/Home/Home'
import Profile from '../screens/Profile/Profile'
import { routes } from './routes.const.ts'
import { navigationRef } from './rootNavigation.ts'

const BottomTab = createBottomTabNavigator()

function Navigation(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
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
          <BottomTab.Screen name={routes.profile} component={Profile} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigation
