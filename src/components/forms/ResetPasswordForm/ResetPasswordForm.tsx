import { useFormik } from 'formik'
import {
  Box,
  Button,
  FormControl,
  Input,
  VStack,
  WarningOutlineIcon,
} from 'native-base'
import * as React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GestureResponderEvent } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Yup from 'yup'

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { t } = useTranslation()
  const RegisterSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, t('validation.min'))
      .max(20, t('validation.max'))
      .required(t('validation.required')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], t('validation.notMatch'))
      .required(t('validation.required')),
  })

  const { handleChange, handleSubmit, isValid, values, errors, touched } =
    useFormik({
      validateOnMount: true,
      initialValues: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: RegisterSchema,
      onSubmit: val => {
        console.log('Handle reset password')
        console.log({ val, errors, touched })
      },
    })
  return (
    <VStack space={3} mt="5">
      <FormControl isInvalid={touched.password && !!errors.password}>
        <Box alignItems="center">
          <Input
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            placeholder={t('resetPassword.password')}
            onChangeText={handleChange('password')}
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
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.password}
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={!!values.confirmPassword && !!errors.confirmPassword}>
        <Box alignItems="center">
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            value={values.confirmPassword}
            placeholder={t('resetPassword.confirmPassword')}
            onChangeText={handleChange('confirmPassword')}
            w="100%"
            height="45"
            py="0"
            isRequired
            InputRightElement={
              <Box w="7" height="100%" justifyContent="center">
                <Icon
                  name={showConfirmPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#000"
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              </Box>
            }
          />
        </Box>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.confirmPassword}
        </FormControl.ErrorMessage>
      </FormControl>

      <Button
        mt="5"
        colorScheme="indigo"
        isDisabled={!isValid}
        onPress={handleSubmit as unknown as (e: GestureResponderEvent) => void}>
        {t('resetPassword.updatePassword')}
      </Button>
    </VStack>
  )
}

export default ResetPasswordForm
