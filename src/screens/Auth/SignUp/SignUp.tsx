import { Button } from 'native-base'
import * as React from 'react'
import { Text, View } from 'react-native'

import { routes } from '~/navigation/routes.const'

interface SignupProps {
  navigation: any
}

const Signup = (props: SignupProps) => {
  return (
    <View>
      <Text>Signup</Text>
      <Button onPress={() => props.navigation.navigate(routes.resetPassword)}>
        Reset Password
      </Button>
    </View>
  )
}

export default Signup
