import { t } from 'i18next'
import { Box, Flex, Heading, IconButton, Image, View } from 'native-base'
import * as React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import CodeVerificationForm from '~/components/forms/CodeVerificationForm'
import { AuthStackRoutes } from '~/navigation/types'

import styles from './CodeVerification.styles'

interface CodeVerificationProps {
  route: any
  navigation: any
}

const CodeVerification = ({ navigation, route }: CodeVerificationProps) => {
  const { email } = route.params

  const onNavigateSignIn = () => {
    navigation.navigate(AuthStackRoutes.SignIn)
  }

  return (
    <View style={styles.container}>
      <IconButton
        style={styles.closeButton}
        icon={<Icon name="close" size={20} />}
        borderRadius="full"
        _icon={{
          color: 'orange.500',
        }}
        onPress={onNavigateSignIn}
      />

      <Flex justifyContent="center" alignItems="center">
        <Box p="10" mb="10" rounded="full" style={styles.imageBox}>
          <Image
            style={styles.image}
            source={require('~/assets/images/otp.png')}
            alt={t('forgotPassword.verify.emailVerify')}
          />
        </Box>
        <Heading mt="10" textAlign="center">
          {t('forgotPassword.otp.verification')}
        </Heading>
        <Heading
          mt="3"
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
          textAlign="center">
          {t('forgotPassword.otp.introText', { email })}
        </Heading>
      </Flex>
      <CodeVerificationForm />
    </View>
  )
}

export default CodeVerification
