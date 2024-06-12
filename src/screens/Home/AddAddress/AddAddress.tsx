import { Box, Button, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import Geolocation, { GeoPosition } from 'react-native-geolocation-service'
import Map from '~/components/Map'
import RouteHeader from '~/components/RouteHeader/RouteHeader'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { HomeStackRoutes } from '~/navigation/types'
import { requestLocationPermission } from '~/redux/actions/address'
import { Coordinate } from '~/types/address'

import styles from './AddAddress.styles'

interface AddAddressProps {
  navigation: any
}

const AddAddress = ({ navigation }: AddAddressProps) => {
  const [coordinate, setCoordinate] = useState<Coordinate>({
    latitude: 40.98815406447282,
    longitude: 29.02872167269661,
  })
  const { status } = useAppSelector(state => state.address.locationPermission)
  const dispatch = useAppDispatch()

  const onNavigateHome = (): void => {
    navigation.navigate(HomeStackRoutes.Home)
  }

  const onLocationConfirm = () => {
    navigation.navigate(HomeStackRoutes.SaveAddressDetails)
  }

  useEffect(() => {
    dispatch(requestLocationPermission())
    if (status === 'granted') {
      Geolocation.getCurrentPosition(
        (position: GeoPosition) => {
          const { latitude, longitude } = position.coords
          setCoordinate({
            latitude,
            longitude,
          })
        },
        error => {
          console.log('====================================')
          console.log({ error })
          console.log('====================================')
        },
      )
    }
  }, [status, dispatch])

  return (
    <View style={styles.container}>
      <RouteHeader title="Add New Address" onClose={onNavigateHome} />
      <Map isAnimated coordinate={coordinate} />
      <Box justifyContent="center" alignItems="center" w="100%">
        <Button position="absolute" bottom="10" onPress={onLocationConfirm}>
          Use this location
        </Button>
      </Box>
    </View>
  )
}

export default AddAddress
