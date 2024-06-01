import { navigate } from '~/navigation/rootNavigation'
import { HomeStackRoutes } from '~/navigation/types'
import { Box, Flex, Pressable, Text, View } from 'native-base'
import * as React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './DeliveryAddressSelect.styles'

const DeliveryAddressSelect = () => {
  const onAddAddressNavigate = () => {
    navigate(HomeStackRoutes.SelectAddress)
  }

  return (
    <View style={styles.container}>
      <Pressable
        rounded="full"
        style={styles.inputContainer}
        flexDirection="row"
        onPress={onAddAddressNavigate}>
        <Box mr="1">
          <Icon name="location-pin" size={20} />
        </Box>
        {false ? (
          <Text>Select delivery address</Text>
        ) : (
          <Flex>
            <Text fontSize="8" color="light.500">
              Delivery Address
            </Text>
            <Text fontSize="12" isTruncated>
              Some address
            </Text>
          </Flex>
        )}

        <Box ml="auto">
          <Icon name="keyboard-arrow-down" size={20} />
        </Box>
      </Pressable>
    </View>
  )
}

export default DeliveryAddressSelect
