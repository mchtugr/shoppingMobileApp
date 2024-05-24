import { Button, Flex, Text, View } from 'native-base'
import * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Platform } from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'

import styles from './CodeVerificationForm.styles'

const CELL_COUNT = 4
const REMAINING_TIME_IN_SECONDS = 10
const SECONDS_IN_A_MINUTE = 60

const CodeVerificationForm = () => {
  const [value, setValue] = useState('')
  const [seconds, setSeconds] = useState(REMAINING_TIME_IN_SECONDS)
  const { t } = useTranslation()
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })
  let intervalRef = useRef<NodeJS.Timeout>()

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current)

    const intervalId = setInterval(() => {
      setSeconds((prevSec: number): any => {
        if (prevSec === 0) {
          return prevSec
        } else {
          prevSec <= 1 && clearInterval(intervalRef.current)
          return prevSec - 1
        }
      })
    }, 1000)

    intervalRef.current = intervalId

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    startTimer()
  }, [startTimer])

  const formatTime = (sec: number): string => {
    const minute = Math.floor(sec / SECONDS_IN_A_MINUTE)
    const second = sec % SECONDS_IN_A_MINUTE

    return `${minute < 10 ? '0' + minute : minute}:${
      second < 10 ? '0' + second : second
    }`
  }

  const onChangeText = (text: string) => {
    const currentField = text.substring(text.length - 1)
    if (!Number.isNaN(parseInt(currentField, 10))) {
      setValue(text)
    }
  }

  const onOtpVerify = () => {
    console.log('Code will be verified here')
  }

  const onCodeResend = () => {
    console.log('Code resend will be handled here')
    setSeconds(REMAINING_TIME_IN_SECONDS)
    startTimer()
  }

  return (
    <View style={styles.container}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={onChangeText}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={
          Platform.select({
            android: 'sms-otp',
            default: 'one-time-code',
          }) as any
        }
        testID="my-code-input"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <Flex
        flexDirection="row"
        mt="10"
        justifyContent="space-between"
        alignItems="center">
        <Flex flexDirection="row">
          <Text>Time remaining</Text>
          <Text fontWeight="bold"> {formatTime(seconds)}</Text>
        </Flex>

        <Button variant="link" isDisabled={seconds > 0} onPress={onCodeResend}>
          Resend
        </Button>
      </Flex>

      <Button
        mt="7"
        colorScheme="indigo"
        isDisabled={value.length !== CELL_COUNT}
        onPress={onOtpVerify}>
        {t('forgotPassword.otp.verify')}
      </Button>
    </View>
  )
}

export default CodeVerificationForm
