import { View } from 'native-base'
import React from 'react'
import ForgotPasswordForm from '~/components/forms/ForgotPasswordForm'

import CodeVerificationForm from '~/components/forms/CodeVerificationForm'
import styles from './ForgotPassword.styles'

interface ForgotPasswordProps {
  route: any
}

const ForgotPassword = ({ route }: ForgotPasswordProps) => {
  const { email } = route.params
  return (
    <View style={styles.container}>
      {false ? <ForgotPasswordForm email={email} /> : <CodeVerificationForm />}
    </View>
  )
}

export default ForgotPassword
