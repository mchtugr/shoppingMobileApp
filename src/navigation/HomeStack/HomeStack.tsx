import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import Home from '~/screens/Home/Home'
import { HomeStackParamList, HomeStackRoutes } from '../types'

const Stack = createStackNavigator<HomeStackParamList>()

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={HomeStackRoutes.Home}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HomeStackRoutes.Home} component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStack
