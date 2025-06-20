import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/types';
import { useAppSelector } from '../../redux/hooks';

const PaymentScreenHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const servicePrice = useAppSelector((state) => state.payment.servicePrice);
  
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