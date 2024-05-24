import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Text,
  VStack,
  WarningOutlineIcon,
} from 'native-base'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { GestureResponderEvent } from 'react-native'
import * as Yup from 'yup'
import { AuthStackProps, AuthStackRoutes } from '~/navigation/types'

interface ForgotPasswordFormProps {
  email: string
}

const ForgotPasswordForm = ({ email }: ForgotPasswordFormProps) => {
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
      onSubmit: val => {
        console.log(val)
        navigation.navigate(AuthStackRoutes.CodeVerification, {
          email: values.email,
        })
      },
    })

  return (
    <Center>
      <Box safeArea w="90%" maxW="300">
        <VStack space={3}>
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
        </VStack>
      </Box>
    </Center>
  )
}

export default ForgotPasswordForm
