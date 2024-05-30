import {
  AddIcon,
  Button,
  Divider,
  Flex,
  IconButton,
  Text,
  View,
} from 'native-base'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { HomeStackRoutes } from '~/navigation/types'

import styles from './SelectAddress.styles'

interface SelectAddressProps {
  navigation: any
}

const SelectAddress = ({ navigation }: SelectAddressProps) => {
  const onNavigateHome = () => {
    navigation.navigate(HomeStackRoutes.Home)
  }

  const onNavigateAddAddress = () => {}

  return (
    <View style={styles.container}>
      <Flex mt="2" alignItems="center" flexDir="row" justifyContent="center">
        <IconButton
          style={styles.closeButton}
          icon={<Icon name="close" size={20} />}
          borderRadius="full"
          onPress={onNavigateHome}
        />
        Select Delivery Address
      </Flex>
      <Divider mt="2" />
      <Flex px="2" mt="3">
        <Text textAlign="center">
          You can edit or delete your location and address details by clicking
          edit button
        </Text>
        <Button
          leftIcon={<AddIcon />}
          mt="5"
          variant="outline"
          onPress={onNavigateAddAddress}>
          Add New Address
        </Button>
      </Flex>
    </View>
  )
}

export default SelectAddress
