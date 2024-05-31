import { Box, Heading, Pressable, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './AddressListItem.styles'

interface AddressListItemProps {
  address: {
    id: number | string
    isSelected: boolean
    title: string
    address: string
    phone: string
  }
}

const AddressListItem = ({ address }: AddressListItemProps) => {
  const onAddressSelect = () => {
    console.log('====================================')
    console.log('On Address Select')
    console.log('====================================')
  }

  const onAddressEdit = () => {
    console.log('====================================')
    console.log('On Address Edit')
    console.log('====================================')
  }
  return (
    <Pressable p="3" mt="2" style={styles.container} onPress={onAddressSelect}>
      <Box pl="25">
        <Box mt="0.5" style={styles.checkbox}>
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
    </Pressable>
  )
}

export default AddressListItem
