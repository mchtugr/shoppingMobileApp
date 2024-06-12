import { MAPS_API_KEY } from '@env'
import axios from 'axios'
import { Box } from 'native-base'
import * as React from 'react'
import { useState } from 'react'
import {
  Animated,
  AnimatedRegion,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps'
import LocationMarker from '~/components/address/LocationMarker'
import { Coordinate } from '~/types/address'

import styles from './Map.styles'

interface MapProps {
  coordinate: {
    latitude: number
    longitude: number
  }
  isAnimated?: boolean
  hasFixedMarker?: boolean
}

const Map = ({ coordinate, hasFixedMarker, isAnimated }: MapProps) => {
  const [coord, setCoord] = useState<Coordinate>(coordinate)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [address, setAddress] = useState<string>('')
  const region = new AnimatedRegion({
    ...coordinate,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  })

  const getAddressFromCoordinate = async (c: Coordinate): Promise<void> => {
    try {
      setIsLoading(true)
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${c?.latitude},${c?.longitude}&key=${MAPS_API_KEY}`,
      )

      setAddress(
        response.data.results[0].formatted_address
          .split(',')
          .slice(0, 2)
          .join(','),
      )
    } catch (error) {
      console.log('====================================')
      console.log(error)
      console.log('====================================')
    } finally {
      setIsLoading(false)
    }
  }

  const onRegionChange = (): void => {
    setIsLoading(true)
  }

  const onRegionChangeComplete = async (c: Coordinate): Promise<void> => {
    setCoord(c)
    await getAddressFromCoordinate(c)
  }

  return (
    <Box
      style={styles.mapContainer}
      flex="1"
      justifyContent="center"
      alignItems="center">
      <Animated
        provider={PROVIDER_GOOGLE}
        region={region}
        pitchEnabled={!!isAnimated}
        rotateEnabled={!!isAnimated}
        zoomEnabled={!!isAnimated}
        scrollEnabled={!!isAnimated}
        showsMyLocationButton={!!isAnimated}
        showsUserLocation={!!isAnimated}
        onRegionChangeComplete={onRegionChangeComplete}
        onRegionChange={onRegionChange}
        style={styles.map}>
        {hasFixedMarker && <Marker coordinate={coord} />}
      </Animated>
      {!hasFixedMarker && (
        <LocationMarker isLoading={isLoading} address={address} />
      )}
    </Box>
  )
}

export default Map
