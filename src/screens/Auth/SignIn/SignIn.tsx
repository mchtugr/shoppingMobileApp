import { Button } from 'native-base'
import * as React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { routes } from '../../../navigation/routes.const'

interface SignInProps {
  navigation: any
}

const SignIn = (props: SignInProps) => {
  const user = useSelector((state: any) => state.user)
  return (
    <View>
      <Text>Welcome {user.name}</Text>
      <Button onPress={() => props.navigation.navigate(routes.signUp)}>
        SignUp
      </Button>
    </View>
  )
}

export default SignIn
