import { Box, Flex, Text, View } from 'native-base'
import * as React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './DeliveryAddressSelect.styles'

interface DeliveryAddressSelectProps {}

const DeliveryAddressSelect = (props: DeliveryAddressSelectProps) => {
  return (
    <View style={styles.container}>
      <Flex rounded="full" style={styles.inputContainer} flexDirection="row">
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
      </Flex>
    </View>
  )
}

export default DeliveryAddressSelect
