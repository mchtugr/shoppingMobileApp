import { Box, Center, Heading, IconButton, View } from 'native-base'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Icon from 'react-native-vector-icons/AntDesign'
import ResetPasswordForm from '~/components/forms/ResetPasswordForm'
import { AuthStackRoutes } from '~/navigation/types'
import styles from './ResetPassword.styles'

interface ResetPasswordProps {
  navigation: any
}

const ResetPassword = ({ navigation }: ResetPasswordProps) => {
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
        onPress={onNavigateSignIn}
      />
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading mb="3" color="coolGray.600" fontWeight="medium" size="xs">
            {t('resetPassword.introText')}
          </Heading>

          <ResetPasswordForm />
        </Box>
      </Center>
    </View>
  )
}

export default ResetPassword
