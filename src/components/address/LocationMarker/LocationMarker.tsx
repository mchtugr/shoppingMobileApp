import { Box, Spinner, Text } from 'native-base'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './LocationMarker.styles'

interface LocationMarkerProps {
  address: string
  isLoading: boolean
}

const LocationMarker = ({ address, isLoading }: LocationMarkerProps) => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      w="100%"
      style={styles.container}>
      {address && (
        <>
          {isLoading ? (
            <Box style={styles.addressText}>
              <Spinner accessibilityLabel="Location loading" />
            </Box>
          ) : (
            <Text style={styles.addressText}>{address}</Text>
          )}
        </>
      )}
      <Icon
        name="location-sharp"
        size={40}
        color="#0891b2"
        style={styles.marker}
      />
    </Box>
  )
}

export default LocationMarker
