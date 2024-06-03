import { View } from 'native-base'
import React from 'react'
import RouteHeader from '~/components/RouteHeader/RouteHeader'
import { HomeStackRoutes } from '~/navigation/types'

import styles from './EditAddress.styles'

interface EditAddressProps {
  navigation: any
}

const EditAddress = ({ navigation }: EditAddressProps) => {
  const onAddressDelete = () => {}
  const onNavigateHome = () => {
    navigation.navigate(HomeStackRoutes.Home)
  }
  return (
    <View style={styles.container}>
      <RouteHeader
        title="Edit Delivery Address"
        onClose={onNavigateHome}
        onDelete={onAddressDelete}
      />
    </View>
  )
}

export default EditAddress
