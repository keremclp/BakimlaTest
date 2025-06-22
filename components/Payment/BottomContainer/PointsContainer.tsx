import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import React from 'react';
import { useAppSelector } from '../../../redux/hooks';

const PointsContainer = () => {
    const { bakimlaPoints } = useAppSelector((state) => state.payment);
  return (
    <View style={styles.pointsContainer}>
      <Text style={styles.pointsText}>Bakımla Puan</Text>
      <Text style={styles.pointsAmount}>{bakimlaPoints.toFixed(2)}₺</Text>
      <TouchableOpacity style={styles.useBtn}>
        <Text style={styles.useBtnText}>Kullan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PointsContainer;