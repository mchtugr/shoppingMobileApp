import { Button } from 'native-base'
import * as React from 'react'
import { Text, View } from 'react-native'

import { routes } from '../../../navigation/routes.const'

interface SignInProps {
  navigation: any
}

const SignIn = (props: SignInProps) => {
  return (
    <View>
      <Text>Sign In Page</Text>
      <Button onPress={() => props.navigation.navigate(routes.signUp)}>
        SignUp
      </Button>
    </View>
  )
}

export default SignIn
