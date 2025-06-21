import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/types';
import { useAppSelector } from '../../redux/hooks';
import { Iconify } from 'react-native-iconify';

const PaymentScreenHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const servicePrice = useAppSelector((state) => state.payment.servicePrice);
  
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Iconify icon="mdi:arrow-left" size={24} color="#131313" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <View style={styles.titleContent}>
            <Text style={styles.title}>Ödeme Al</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.optionsButton}>
          <Iconify icon="mdi:dots-vertical" size={24} color="#131313" />
        </TouchableOpacity>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>₺{servicePrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default PaymentScreenHeader;