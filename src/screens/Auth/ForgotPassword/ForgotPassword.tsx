import { View } from 'native-base'
import React from 'react'
import ForgotPasswordForm from '~/components/forms/ForgotPasswordForm'

import styles from './ForgotPassword.styles'

interface ForgotPasswordProps {
  route: any
}

const ForgotPassword = ({ route }: ForgotPasswordProps) => {
  const { email } = route.params
  return (
    <View style={styles.container}>
      <ForgotPasswordForm email={email} />
    </View>
  )
}

export default ForgotPassword
