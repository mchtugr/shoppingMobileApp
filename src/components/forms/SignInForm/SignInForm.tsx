import { useFormik } from 'formik'
import { Box, Button, FormControl, Input, Link, VStack } from 'native-base'
import * as React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GestureResponderEvent } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'

interface SignInFormProps {
  onNavigateResetScreen: () => {}
}

const SignInForm = ({ onNavigateResetScreen }: SignInFormProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const authState = useSelector((state: any) => state.user.auth)
  const { t } = useTranslation()

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('validation.email'))
      .required(t('validation.required')),
    password: Yup.string()
      .min(6, t('validation.min'))
      .max(20, t('validation.max'))
      .required(t('validation.required')),
  })

  const { handleChange, handleSubmit, isValid, values, errors, touched } =
    useFormik({
      validateOnMount: true,
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: LoginSchema,
      onSubmit: val => {
        console.log({ val, errors, touched })
      },
    })
  return (
    <VStack space={3} mt="5">
      {/* E-mail */}
      <FormControl isInvalid={touched.email && !!errors.email}>
        <Input
          value={values.email}
          onChangeText={handleChange('email')}
          placeholder={t('signIn.email')}
          type="text"
          height="45"
        />
        <FormControl.ErrorMessage>*{errors.email}</FormControl.ErrorMessage>
      </FormControl>

      {/* Password */}
      <FormControl isInvalid={touched.password && !!errors.password}>
        <Box alignItems="center">
          <Input
            value={values.password}
            placeholder={t('signIn.password')}
            onChangeText={handleChange('password')}
            type={showPassword ? 'text' : 'password'}
            w="100%"
            height="45"
            py="0"
            isRequired
            InputRightElement={
              <Box w="7" height="100%" justifyContent="center">
                <Icon
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#000"
                  onPress={() => setShowPassword(!showPassword)}
                />
              </Box>
            }
          />
        </Box>
        <FormControl.ErrorMessage>*{errors.password}</FormControl.ErrorMessage>
      </FormControl>
      <Link
        _text={{
          fontSize: 'xs',
          fontWeight: '500',
          color: !authState.loading ? 'indigo.500' : 'coolGray.600',
        }}
        alignSelf="flex-end"
        onPress={onNavigateResetScreen}>
        {t('signIn.forgotPassword')}
      </Link>

      <Button
        isLoading={authState.loading}
        isLoadingText={t('signIn.signIn')}
        mt="2"
        colorScheme="indigo"
        onPress={handleSubmit as unknown as (e: GestureResponderEvent) => void}
        isDisabled={!isValid}>
        {t('signIn.signIn')}
      </Button>
    </VStack>
  )
}

export default SignInForm
