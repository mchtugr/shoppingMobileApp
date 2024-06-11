import { PermissionStatus } from 'react-native-permissions'

export interface Coordinate {
  latitude: number
  longitude: number
}

export interface Address {
  id: number | string
  isSelected: boolean
  title: string
  address: string
  phone: string
  coordinate: Coordinate
}

export interface AddressState {
  addressList: Array<Address>
  geocoding: string
  locationPermission: {
    pending: boolean
    error: string | undefined
    status: PermissionStatus
  }
}
