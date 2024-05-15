import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { routes } from '~/navigation/routes.const'
import ResetPassword from '~/screens/Auth/ResetPassword'
import SignIn from '~/screens/Auth/SignIn'
import Signup from '~/screens/Auth/SignUp'

const Stack = createStackNavigator()

function AuthStack(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={routes.signIn}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.signIn} component={SignIn} />
      <Stack.Screen name={routes.signUp} component={Signup} />
      <Stack.Screen name={routes.resetPassword} component={ResetPassword} />
    </Stack.Navigator>
  )
}

export default AuthStack
