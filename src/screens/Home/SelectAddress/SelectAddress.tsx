import { AddIcon, Button, Flex, ScrollView, Text, View } from 'native-base'
import React from 'react'
import RouteHeader from '~/components/RouteHeader/RouteHeader'
import AddressList from '~/components/address/AddressList'
import { HomeStackRoutes } from '~/navigation/types'

import styles from './SelectAddress.styles'

interface SelectAddressProps {
  navigation: any
}

const SelectAddress = ({ navigation }: SelectAddressProps) => {
  const onNavigateHome = () => {
    navigation.navigate(HomeStackRoutes.Home)
  }

  const onNavigateAddAddress = () => {
    navigation.navigate(HomeStackRoutes.AddAddress, {})
  }

  return (
    <View style={styles.container}>
      <RouteHeader title="Select Delivery Address" onClose={onNavigateHome} />
      <ScrollView mx="2" showsVerticalScrollIndicator={false}>
        <Flex mt="3">
          <Text>
            You can edit or delete your location and address details by clicking
            edit button
          </Text>
          <Button
            leftIcon={<AddIcon />}
            mt="3"
            variant="outline"
            onPress={onNavigateAddAddress}>
            Add New Address
          </Button>
        </Flex>
        <AddressList />
      </ScrollView>
    </View>
  )
}

export default SelectAddress
