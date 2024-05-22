import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
  VStack,
  WarningOutlineIcon,
} from 'native-base'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { GestureResponderEvent } from 'react-native'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import { AuthStackProps, AuthStackRoutes } from '~/navigation/types'

interface ForgotPasswordFormProps {
  email: string
  onEmailSubmit: (val: boolean) => void
}

const ForgotPasswordForm = ({
  email,
  onEmailSubmit,
}: ForgotPasswordFormProps) => {
  const authState = useSelector((state: any) => state.user.auth)
  const { t } = useTranslation()
  const navigation = useNavigation<AuthStackProps>()

  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('validation.email'))
      .required(t('validation.required')),
  })

  const { handleBlur, handleChange, handleSubmit, isValid, values, errors } =
    useFormik({
      validateOnMount: true,
      initialValues: {
        email,
      },
      validationSchema: ForgotPasswordSchema,
      onSubmit: () => {
        onEmailSubmit(true)
      },
    })

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290">
        <VStack space={3} mt="5">
          <Heading mb="5" color="coolGray.600" fontWeight="medium" size="xs">
            {t('forgotPassword.verify.introText')}
          </Heading>

          <FormControl>
            <Input
              value={values.email}
              placeholder={t('forgotPassword.verify.email')}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              height="45"
            />

            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              {errors.email}
            </FormControl.ErrorMessage>
          </FormControl>
          <Text fontSize="xs" color="coolGray.600">
            {t('forgotPassword.verify.description')}
          </Text>
          <Button
            mt="2"
            colorScheme="indigo"
            isDisabled={!isValid}
            onPress={
              handleSubmit as unknown as (e: GestureResponderEvent) => void
            }>
            {t('forgotPassword.verify.continue')}
          </Button>
          <Box mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" textAlign="center">
              {t('forgotPassword.verify.rememberPassword')}{' '}
            </Text>
            <Link
              _text={{
                color: !authState ? 'indigo.500' : 'coolGray.600',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              justifyContent="center"
              onPress={() => navigation.navigate(AuthStackRoutes.SignIn)}>
              {t('forgotPassword.verify.signIn')}
            </Link>
          </Box>
        </VStack>
      </Box>
    </Center>
  )
}

export default ForgotPasswordForm
