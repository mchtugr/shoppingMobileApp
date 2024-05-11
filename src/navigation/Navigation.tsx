import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthStack from './AuthStack/AuthStack.tsx'
import BottomTabBar from './BottomTabBar/BottomTabBar.tsx'
import { navigationRef } from './rootNavigation.ts'

function Navigation(): React.JSX.Element {
  const isSignedIn = true
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        {isSignedIn ? <AuthStack /> : <BottomTabBar />}
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigation
