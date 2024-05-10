import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

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
          screenOptions={() => ({
            headerShown: false,
            tabBarHideOnKeyboard: true,
          })}>
          <BottomTab.Screen name={routes.home} component={Home} />
          <BottomTab.Screen name={routes.profile} component={Profile} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigation
