import React from 'react'
import { Box, NativeBaseProvider } from 'native-base'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <SafeAreaView>
          <Box>Shopping App</Box>
        </SafeAreaView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  )
}

export default App
