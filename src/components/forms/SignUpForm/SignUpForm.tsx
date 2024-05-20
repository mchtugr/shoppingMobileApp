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
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { t } = useTranslation()
  const authState = useSelector((state: any) => state.user.auth)

  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('validation.email'))
      .required(t('validation.required')),
    firstName: Yup.string()
      .min(3, t('validation.min'))
      .max(15, t('validation.max'))
      .matches(/^[A-Za-z ]{3,}$/, t('validation.name'))
      .required(t('validation.required')),
    lastName: Yup.string()
      .min(3, t('validation.min'))
      .max(15, t('validation.max'))
      .matches(/^[A-Za-z ]{3,}$/, t('validation.name'))
      .required(t('validation.required')),
    password: Yup.string()
      .min(6, t('validation.min'))
      .max(20, t('validation.max'))
      .required(t('validation.required')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], t('validation.notMatch'))
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
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: RegisterSchema,
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
          placeholder={t('register.email')}
          height="45"
          onBlur={handleBlur('email')}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.email}
        </FormControl.ErrorMessage>
      </FormControl>

      {/* First Name */}
      <FormControl isInvalid={touched.firstName && !!errors.firstName}>
        <Input
          value={values.firstName}
          onChangeText={handleChange('firstName')}
          placeholder={t('register.firstName')}
          height="45"
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.firstName}
        </FormControl.ErrorMessage>
      </FormControl>

      {/* Last Name */}
      <FormControl isInvalid={touched.lastName && !!errors.lastName}>
        <Input
          value={values.lastName}
          onChangeText={handleChange('lastName')}
          placeholder={t('register.lastName')}
          height="45"
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.lastName}
        </FormControl.ErrorMessage>
      </FormControl>

      {/* Password */}
      <FormControl isInvalid={touched.password && !!errors.password}>
        <Box alignItems="center">
          <Input
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            placeholder={t('register.password')}
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

      {/* Confirm Password */}
      <FormControl
        isInvalid={touched.confirmPassword && !!errors.confirmPassword}>
        <Box alignItems="center">
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            value={values.confirmPassword}
            placeholder={t('register.confirmPassword')}
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
        isLoading={authState.loading}
        isLoadingText={t('register.register')}
        mt="2"
        colorScheme="indigo"
        isDisabled={!isValid}
        onPress={() => handleSubmit()}>
        {t('register.register')}
      </Button>
    </VStack>
  )
}

export default SignUpForm
