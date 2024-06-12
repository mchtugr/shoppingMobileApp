import { FlatList } from 'native-base'
import React from 'react'

import { useAppSelector } from '~/hooks/redux'
import AddressListItem from '../AddressListItem/AddressListItem'

const AddressList = () => {
  const addressList = useAppSelector(state => state.address.addressList)

  return (
    <FlatList
      my="2"
      data={addressList}
      scrollEnabled={false}
      renderItem={({ item }) => <AddressListItem address={item} />}
    />
  )
}

export default AddressList
