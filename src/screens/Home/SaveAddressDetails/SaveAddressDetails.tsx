import { Text, View } from 'native-base'
import React from 'react'
import RouteHeader from '~/components/RouteHeader/RouteHeader'
import { HomeStackRoutes } from '~/navigation/types'

import styles from './SaveAddressDetails.styles'

interface SaveAddressDetailsProps {
  navigation: any
}

const SaveAddressDetails = ({ navigation }: SaveAddressDetailsProps) => {
  const onNavigateHome = (): void => {
    navigation.navigate(HomeStackRoutes.Home)
  }
  return (
    <View style={styles.container}>
      <RouteHeader title="Save Address Details" onClose={onNavigateHome} />
      <Text>SaveAddressDetails</Text>
    </View>
  )
}

export default SaveAddressDetails
