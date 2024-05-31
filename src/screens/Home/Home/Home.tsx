import DeliveryAddressSelect from '~/components/address/DeliveryAddressSelect'
import { View } from 'native-base'
import React from 'react'

import styles from './Home.styles'

function Home(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <DeliveryAddressSelect />
    </View>
  )
}

export default Home
