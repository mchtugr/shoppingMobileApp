import { Box, Flex, Heading, IconButton, Image, View } from 'native-base'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/AntDesign'
import ForgotPasswordForm from '~/components/forms/ForgotPasswordForm'
import { AuthStackRoutes } from '~/navigation/types'

import styles from './ForgotPassword.styles'

interface ForgotPasswordProps {
  route: any
  navigation: any
}

const ForgotPassword = ({ route, navigation }: ForgotPasswordProps) => {
  const { email } = route.params
  const { t } = useTranslation()

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
        onPress={onNavigateSignIn}></IconButton>

      <Flex justifyContent="center" alignItems="center">
        <Box p="10" mb="10" rounded="full" style={styles.imageBox}>
          <Image
            style={styles.image}
            source={require('~/assets/images/email-verify.png')}
            alt={t('forgotPassword.verify.emailVerify')}
          />
        </Box>
        <Heading
          mb="5"
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
          textAlign="center">
          {t('forgotPassword.verify.introText')}
        </Heading>
      </Flex>
      <ForgotPasswordForm email={email} />
    </View>
  )
}

export default ForgotPassword
