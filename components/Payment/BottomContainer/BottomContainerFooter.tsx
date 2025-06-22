import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../styles'
import React from 'react'

const BottomContainerFooter = () => {
  return (
    <View style={styles.footer}>
          <TouchableOpacity style={styles.confirmBtn}>
            <Text style={styles.confirmText}>Onayla</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.cancelText}>Vazgeç</Text>
          </TouchableOpacity>
        </View>
  )
}

export default BottomContainerFooter