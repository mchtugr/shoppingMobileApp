import { Box, Center, HStack, Heading, Link, Text, View } from 'native-base'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import SignInForm from '~/components/forms/SignInForm'
import { AuthStackRoutes } from '~/navigation/types'
import styles from './SignIn.styles'
interface SignInProps {
  navigation: any
}

const SignIn = ({ navigation }: SignInProps) => {
  const authState = useSelector((state: any) => state.user.auth)
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800">
            {t('signIn.welcome')}
          </Heading>
          <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
            {t('signIn.introText')}
          </Heading>

          <View>
            <SignInForm
              onNavigateForgotScreen={email =>
                navigation.navigate(AuthStackRoutes.ForgotPassword, { email })
              }
            />
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600">
                {t('signIn.newUser')}
              </Text>
              <Link
                _text={{
                  color: !authState.authLoading ? 'indigo.500' : 'coolGray.600',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                onPress={() =>
                  !authState.authLoading &&
                  navigation.navigate(AuthStackRoutes.SignIn)
                }>
                {' '}
                {t('signIn.register')}
              </Link>
            </HStack>
          </View>
        </Box>
      </Center>
    </View>
  )
}

export default SignIn
