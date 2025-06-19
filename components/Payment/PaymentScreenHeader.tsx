import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles'; // Adjust the path as needed
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/types';


const PaymentScreenHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const servicePrice = 900;
  
  return (
    <View style={styles.headerContainer}>
      {/* add back icon to header */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>
      {/* Header */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ödeme Al</Text>
        <Text style={styles.amount}>{servicePrice}₺</Text>
      </View>
      {/* add three dot icon to header */}
      <TouchableOpacity>
        <Text style={styles.threeDotIcon}>⋮</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreenHeader;
