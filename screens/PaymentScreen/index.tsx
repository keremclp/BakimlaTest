import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Payment Screen</Text>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
})