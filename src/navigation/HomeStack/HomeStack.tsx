import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import AddAddress from '~/screens/Home/AddAddress'
import EditAddress from '~/screens/Home/EditAddress'
import Home from '~/screens/Home/Home'
import SelectAddress from '~/screens/Home/SelectAddress'

import { HomeStackParamList, HomeStackRoutes } from '../types'

const Stack = createStackNavigator<HomeStackParamList>()

interface HomeStackProps {
  navigation: any
  route: any
}

const HomeStack = ({ navigation, route }: HomeStackProps) => {
  useEffect(() => {
    const focusedRouteName =
      getFocusedRouteNameFromRoute(route) || HomeStackRoutes.Home

    const tabBarDisplayStyle =
      focusedRouteName === HomeStackRoutes.Home ? 'flex' : 'none'

    navigation.setOptions({ tabBarStyle: { display: tabBarDisplayStyle } })
  }, [navigation, route])

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
        <Stack.Screen
          name={HomeStackRoutes.AddAddress}
          component={AddAddress}
        />
        <Stack.Screen
          name={HomeStackRoutes.EditAddress}
          component={EditAddress}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default HomeStack
