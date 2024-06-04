import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  mapContainer: {
    width: Dimensions.get('window').width,
    height: 100,
    borderColor: 'silver',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
