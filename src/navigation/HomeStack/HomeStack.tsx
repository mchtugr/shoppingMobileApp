import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '~/screens/Home/Home'
import SelectAddress from '~/screens/Home/SelectAddress'
import { HomeStackParamList, HomeStackRoutes } from '../types'

const Stack = createStackNavigator<HomeStackParamList>()

interface HomeStackProps {
  navigation: any
  route: any
}

const HomeStack = ({ navigation, route }: HomeStackProps) => {
  return (
    <Stack.Navigator
      initialRouteName={HomeStackRoutes.Home}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HomeStackRoutes.Home} component={Home} />
      <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
        <Stack.Screen
          name={HomeStackRoutes.SelectAddress}
          component={SelectAddress}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default HomeStack
