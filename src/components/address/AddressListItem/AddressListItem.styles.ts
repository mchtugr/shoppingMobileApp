import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    display: 'flex',
    borderWidth: 1,
    borderColor: 'silver',
    marginTop: 10,
    borderRadius: 3,
  },
  checkbox: {
    position: 'absolute',
  },
  mapContainer: {
    width: Dimensions.get('window').width,
    height: 100,
    borderColor: 'silver',

    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
