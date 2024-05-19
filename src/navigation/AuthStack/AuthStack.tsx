import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ForgotPassword from '~/screens/Auth/ForgotPassword'
import ResetPassword from '~/screens/Auth/ResetPassword'
import SignIn from '~/screens/Auth/SignIn'
import Signup from '~/screens/Auth/SignUp'

import { AuthStackParamList, AuthStackRoutes } from '../types'

const AUTH_ROUTES: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: AuthStackRoutes.SignIn,
    component: SignIn,
  },
  {
    name: AuthStackRoutes.SignUp,
    component: Signup,
  },
  {
    name: AuthStackRoutes.ForgotPassword,
    component: ForgotPassword,
  },
  {
    name: AuthStackRoutes.ResetPassword,
    component: ResetPassword,
  },
]

const Stack = createStackNavigator<AuthStackParamList>()

function AuthStack(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={AuthStackRoutes.SignIn}
      screenOptions={{
        headerShown: false,
      }}>
      {AUTH_ROUTES.map(routeConfig => (
        <Stack.Screen key={routeConfig.name} {...routeConfig} />
      ))}
    </Stack.Navigator>
  )
}

export default AuthStack
