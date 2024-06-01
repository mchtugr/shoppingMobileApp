import { Text, View } from 'native-base'
import React from 'react'
import { HomeStackRoutes } from '~/navigation/types'

import styles from './AddAddress.styles'

interface AddAddressProps {
  navigation: any
}

const AddAddress = ({ navigation }: AddAddressProps) => {
  const onNavigateHome = () => {
    navigation.navigate(HomeStackRoutes.Home)
  }
  return (
    <View style={styles.container}>
      <Text>Add address</Text>
    </View>
  )
}

export default AddAddress
