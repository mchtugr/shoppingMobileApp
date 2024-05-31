import {
  AddIcon,
  Button,
  Divider,
  Flex,
  IconButton,
  ScrollView,
  Text,
  View,
} from 'native-base'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
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
