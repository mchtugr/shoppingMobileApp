import { Box } from 'native-base'
import * as React from 'react'
import {
  Animated,
  AnimatedRegion,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps'

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
  const region = new AnimatedRegion({
    ...coordinate,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  })

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
        style={styles.map}>
        {hasFixedMarker && <Marker coordinate={coordinate} />}
      </Animated>
    </Box>
  )
}

export default Map
