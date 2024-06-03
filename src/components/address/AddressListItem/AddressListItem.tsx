import { Box, Heading, Pressable, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { navigate } from '~/navigation/rootNavigation'
import { HomeStackRoutes } from '~/navigation/types'

import styles from './AddressListItem.styles'

interface AddressListItemProps {
  address: {
    id: number | string
    isSelected: boolean
    title: string
    address: string
    phone: string
    coordinate: {
      latitude: number
      longitude: number
    }
  }
}

const AddressListItem = ({ address }: AddressListItemProps) => {
  const region = {
    ...address.coordinate,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  }
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
        <Box style={styles.mapContainer} flex="1">
          <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={region}
            pitchEnabled={false}
            rotateEnabled={false}
            zoomEnabled={false}
            scrollEnabled={false}
            showsMyLocationButton={false}
            style={styles.map}>
            <Marker coordinate={address.coordinate} />
          </MapView>
        </Box>
      )}
    </Pressable>
  )
}

export default AddressListItem
