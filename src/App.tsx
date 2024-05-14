import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import Navigation from './navigation/Navigation'
import store from './redux/store'

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  )
}

export default App
