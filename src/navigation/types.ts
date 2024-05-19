import { NavigationProp } from '@react-navigation/native'

export enum AuthStackRoutes {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  ForgotPassword = 'ForgotPassword',
  ResetPassword = 'ResetPassword',
}

export enum BottomTabBarRoutes {
  Home = 'Home',
  Orders = 'Orders',
  Profile = 'Profile',
}

export type AuthStackParamList = {
  [AuthStackRoutes.SignIn]: undefined
  [AuthStackRoutes.SignUp]: undefined
  [AuthStackRoutes.ForgotPassword]: { email: string | undefined }
  [AuthStackRoutes.ResetPassword]: undefined
}

export type AuthStackProps = NavigationProp<AuthStackParamList>

export type BottomTabBarParamList = {
  [BottomTabBarRoutes.Home]: undefined
  [BottomTabBarRoutes.Orders]: undefined
  [BottomTabBarRoutes.Profile]: undefined
}

export type BottomTabBarProps = NavigationProp<BottomTabBarParamList>
