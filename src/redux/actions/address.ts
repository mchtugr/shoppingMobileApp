import { createAsyncThunk } from '@reduxjs/toolkit'
import { Platform } from 'react-native'
import { Permission, PERMISSIONS, request } from 'react-native-permissions'

export const requestLocationPermission = createAsyncThunk(
  'address/permission',
  async () => {
    let permission: Permission
    switch (Platform.OS) {
      case 'ios':
        permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        break
      case 'android':
        permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        break
      case 'windows':
        permission = PERMISSIONS.WINDOWS.LOCATION
        break
      default:
        throw new Error('Unknown operating system')
    }

    const response = await request(permission, {
      title: '',
      message: '',
      buttonNeutral: 'Ask me later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    })
    return response
  },
)
