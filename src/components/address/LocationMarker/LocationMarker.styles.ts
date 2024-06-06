import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    position: 'relative',
    alignItems: 'center',
    height: 1,
  },
  addressText: {
    borderRadius: 100,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 45,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  marker: {
    position: 'absolute',
    bottom: 0,
  },
})
