import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './navigation/Navigation'

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </NativeBaseProvider>
  )
}

export default App
