import { Divider, Flex, IconButton } from 'native-base'
import React from 'react'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import IonIcon from 'react-native-vector-icons/Ionicons'

import styles from './RouteHeader.styles'

interface RouteHeaderProps {
  title: string
  onClose: () => void
  onDelete?: () => void
}

const RouteHeader = ({ title, onClose, onDelete }: RouteHeaderProps) => {
  return (
    <>
      <Flex mt="2" alignItems="center" flexDir="row" justifyContent="center">
        <IconButton
          style={styles.closeButton}
          icon={<AntDesignIcon name="close" size={20} />}
          borderRadius="full"
          onPress={onClose}
        />
        {title}
        {!!onDelete && (
          <IconButton
            style={styles.deleteButton}
            icon={<IonIcon name="trash-outline" size={20} />}
            borderRadius="full"
            onPress={onDelete}
          />
        )}
      </Flex>
      <Divider mt="2" />
    </>
  )
}

export default RouteHeader
