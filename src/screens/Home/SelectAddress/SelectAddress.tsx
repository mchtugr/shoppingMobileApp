import { Text, View } from 'native-base'
import React from 'react'
import styles from './SelectAddress.styles'

interface SelectAddressProps {}

const SelectAddress = (props: SelectAddressProps) => {
  return (
    <View style={styles.container}>
      <Text>SelectAddress</Text>
    </View>
  )
}

export default SelectAddress
