import { Button, Heading, Text, View } from 'native-base'
import * as React from 'react'
import { useState } from 'react'
import { Platform } from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'

import styles from './CodeVerificationForm.styles'

const CELL_COUNT = 4

const CodeVerificationForm = () => {
  // const { t } = useTranslation()
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  const onChangeText = (text: string) => {
    const currentField = text.substring(text.length - 1)
    if (Number.isNaN(parseInt(currentField))) {
      setValue(value)
    } else {
      setValue(text)
    }
  }

  return (
    <View style={styles.container}>
      <Heading>Verification</Heading>
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
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <Button
        mt="10"
        colorScheme="indigo"
        isDisabled={value.length != CELL_COUNT}
        onPress={() => console.log({ value })}>
        Submit
      </Button>
    </View>
  )
}

export default CodeVerificationForm
