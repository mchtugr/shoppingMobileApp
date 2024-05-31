import { FlatList } from 'native-base'
import React from 'react'

import AddressListItem from '../AddressListItem/AddressListItem'

const mockAddressData = [
  {
    id: 1,
    isSelected: true,
    title: 'Home',
    address: 'Ataturk Mah, Kadikoy, Istanbul',
    phone: '555*****37',
  },
  {
    id: 2,
    isSelected: false,
    title: 'Work',
    address: 'Inonu Mah, Kartal, Istanbul',
    phone: '554*****45',
  },
  {
    id: 3,
    isSelected: false,
    title: 'Friend',
    address: 'Bahcelievler Mah, Maltepe, Istanbul',
    phone: '553*****69',
  },
  {
    id: 4,
    isSelected: false,
    title: 'Home',
    address: 'Ataturk Mah, Kadikoy, Istanbul',
    phone: '555*****37',
  },
  {
    id: 5,
    isSelected: false,
    title: 'Work',
    address: 'Inonu Mah, Kartal, Istanbul',
    phone: '554*****45',
  },
  {
    id: 6,
    isSelected: false,
    title: 'Friend',
    address: 'Bahcelievler Mah, Maltepe, Istanbul',
    phone: '553*****69',
  },
  {
    id: 7,
    isSelected: false,
    title: 'Home',
    address: 'Ataturk Mah, Kadikoy, Istanbul',
    phone: '555*****37',
  },
  {
    id: 8,
    isSelected: false,
    title: 'Work',
    address: 'Inonu Mah, Kartal, Istanbul',
    phone: '554*****45',
  },
  {
    id: 9,
    isSelected: false,
    title: 'Friend',
    address: 'Bahcelievler Mah, Maltepe, Istanbul',
    phone: '553*****69',
  },
]

const AddressList = () => {
  return (
    <FlatList
      my="2"
      data={mockAddressData}
      scrollEnabled={false}
      renderItem={({ item }) => <AddressListItem address={item} />}
    />
  )
}

export default AddressList
