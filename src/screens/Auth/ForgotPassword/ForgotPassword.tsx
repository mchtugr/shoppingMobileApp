import { Box, Flex, Image, View } from 'native-base'
import React, { useState } from 'react'
import CodeVerificationForm from '~/components/forms/CodeVerificationForm'
import ForgotPasswordForm from '~/components/forms/ForgotPasswordForm'

import styles from './ForgotPassword.styles'

interface ForgotPasswordProps {
  route: any
}

const ForgotPassword = ({ route }: ForgotPasswordProps) => {
  const [showOtp, setShowOtp] = useState(false)
  const { email } = route.params

  const onEmailSubmit = () => {
    setShowOtp(true)
  }

  return (
    <View style={styles.container}>
      {showOtp ? (
        <>
          <Flex justifyContent="center" alignItems="center">
            <Box p="10" rounded="full" style={{ backgroundColor: '#ebebeb' }}>
              <Image
                style={{ width: 50, height: 50 }}
                source={require('~/assets/images/otp.png')}
                alt="email verify"
              />
            </Box>
          </Flex>
          <CodeVerificationForm />
        </>
      ) : (
        <>
          <Flex justifyContent="center" alignItems="center">
            <Box p="10" rounded="full" style={{ backgroundColor: '#ebebeb' }}>
              <Image
                style={{ width: 50, height: 50 }}
                source={require('~/assets/images/email-verify.png')}
                alt="email verify"
              />
            </Box>
          </Flex>
          <ForgotPasswordForm email={email} onEmailSubmit={onEmailSubmit} />
        </>
      )}
    </View>
  )
}

export default ForgotPassword
