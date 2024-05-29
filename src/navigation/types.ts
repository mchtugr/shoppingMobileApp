import { NavigationProp } from '@react-navigation/native'

export enum AuthStackRoutes {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  ForgotPassword = 'ForgotPassword',
  CodeVerification = 'CodeVerification',
  ResetPassword = 'ResetPassword',
}

export type AuthStackParamList = {
  [AuthStackRoutes.SignIn]: undefined
  [AuthStackRoutes.SignUp]: undefined
  [AuthStackRoutes.ForgotPassword]: { email: string | undefined }
  [AuthStackRoutes.CodeVerification]: { email: string | undefined }
  [AuthStackRoutes.ResetPassword]: undefined
}

export type AuthStackProps = NavigationProp<AuthStackParamList>

export enum HomeStackRoutes {
  Home = 'Home',
  DeliveryAddressSelect = 'DeliveryAddressSelect',
}

export type HomeStackParamList = {
  [HomeStackRoutes.Home]: undefined
  [HomeStackRoutes.DeliveryAddressSelect]: undefined
}

export type HomeStackProps = NavigationProp<HomeStackParamList>

export enum BottomTabBarRoutes {
  HomeStack = 'HomeStack',
  Orders = 'Orders',
  Profile = 'Profile',
}

export type BottomTabBarParamList = {
  [BottomTabBarRoutes.HomeStack]: undefined
  [BottomTabBarRoutes.Orders]: undefined
  [BottomTabBarRoutes.Profile]: undefined
}

export type BottomTabBarProps = NavigationProp<BottomTabBarParamList>
