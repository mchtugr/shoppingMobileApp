import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
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
}

const ForgotPasswordForm = ({ email }: ForgotPasswordFormProps) => {
  const authState = useSelector((state: any) => state.user.auth)
  const { t } = useTranslation()
  const navigation = useNavigation<AuthStackProps>()

  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('validation.email'))
      .required(t('validation.required')),
  })

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    values,
    errors,
    touched,
  } = useFormik({
    validateOnMount: true,
    initialValues: {
      email,
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: val => {
      console.log({ val, errors, touched })
    },
  })

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <VStack space={3} mt="5">
          <Heading
            mt="1"
            mb="2"
            color="coolGray.600"
            fontWeight="medium"
            size="xs">
            {t('forgotPassword.introText')}
          </Heading>

          <FormControl>
            <Input
              value={values.email}
              placeholder={t('forgotPassword.email')}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              height="45"
            />

            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              {errors.email}
            </FormControl.ErrorMessage>
          </FormControl>

          <Button
            mt="2"
            colorScheme="indigo"
            isDisabled={!isValid}
            onPress={
              handleSubmit as unknown as (e: GestureResponderEvent) => void
            }>
            Submit
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              {t('forgotPassword.rememberPassword')}{' '}
            </Text>
            <Link
              _text={{
                color: !authState ? 'indigo.500' : 'coolGray.600',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => navigation.navigate(AuthStackRoutes.SignIn)}>
              {t('forgotPassword.signIn')}
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  )
}

export default ForgotPasswordForm
