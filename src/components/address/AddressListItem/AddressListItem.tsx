import { Box, Heading, Pressable, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Map from '~/components/Map'
import { navigate } from '~/navigation/rootNavigation'
import { HomeStackRoutes } from '~/navigation/types'

import { Address } from '~/types/address'
import styles from './AddressListItem.styles'

interface AddressListItemProps {
  address: Address
}

const AddressListItem = ({ address }: AddressListItemProps) => {
  const onAddressSelect = () => {
    console.log('====================================')
    console.log('On Address Select')
    console.log('====================================')
  }

  const onAddressEdit = () => {
    navigate(HomeStackRoutes.EditAddress)
  }
  return (
    <Pressable mt="2" style={styles.container} onPress={onAddressSelect}>
      <Box p="2" pl="10">
        <Box mt="2.5" left="2" position="absolute">
          {address.isSelected ? (
            <Icon name="record-circle-outline" size={15} />
          ) : (
            <Icon name="checkbox-blank-circle-outline" size={15} />
          )}
        </Box>
        <Box flexDir="row" justifyContent="space-between">
          <Box>
            <Heading size="sm">{address.title}</Heading>
            <Text fontSize="xs">{address.address}</Text>
            <Text mt="1" fontSize="xs">
              {address.phone}
            </Text>
          </Box>
          <TouchableOpacity onPress={onAddressEdit}>
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-end">
              <Text mr="1">Edit</Text>
              <Icon name="pencil-outline" size={15} />
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
      {address.isSelected && (
        <Map coordinate={address.coordinate} hasFixedMarker />
      )}
    </Pressable>
  )
}

export default AddressListItem
