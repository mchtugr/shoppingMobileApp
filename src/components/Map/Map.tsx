import { View } from 'native-base'
import * as React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import styles from './Map.styles'

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  )
}

export default Map
