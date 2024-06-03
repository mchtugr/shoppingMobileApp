import { View } from 'native-base'
import React from 'react'
import RouteHeader from '~/components/RouteHeader/RouteHeader'
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
      <RouteHeader title="Add New Address" onClose={onNavigateHome} />
    </View>
  )
}

export default AddAddress
