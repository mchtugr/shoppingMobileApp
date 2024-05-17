import { Box, HStack, Heading, Link, ScrollView, Text, View } from 'native-base'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import SignUpForm from '~/components/forms/SignUpForm'
import { routes } from '~/navigation/routes.const'
import styles from './SignUp.styles'

interface SignupProps {
  navigation: any
}

const Signup = ({ navigation }: SignupProps) => {
  const { t } = useTranslation()
  const authState = useSelector((state: any) => state.user.auth)
  return (
    <View style={styles.container}>
      <Box justifyContent="center" alignItems="center">
        <ScrollView w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8" margin="auto">
            <Heading size="lg" color="coolGray.800" fontWeight="semibold">
              {t('register.welcome')}
            </Heading>
            <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
              {t('register.introText')}
            </Heading>
            <SignUpForm />
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600">
                {t('register.alreadyRegistered')}{' '}
              </Text>
              <Link
                _text={{
                  color: !authState.loading ? 'indigo.500' : 'coolGray.600',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                onPress={() => navigation.navigate(routes.signIn)}>
                {t('register.signIn')}
              </Link>
            </HStack>
          </Box>
        </ScrollView>
      </Box>
    </View>
  )
}

export default Signup
