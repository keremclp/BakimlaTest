import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import PaymentOptionCard from '../../components/Payment/PaymentOptionCard';
import { styles } from './styles';
import PaymentScreenHeader from '../../components/Payment/PaymentScreenHeader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setPaymentMethod } from '../../redux/slices/paymentSlice';

import TipContainer from '../../components/Payment/BottomContainer/TipContainer';
import DiscountContainer from '../../components/Payment/BottomContainer/DiscountContainer';
import PointsContainer from '../../components/Payment/BottomContainer/PointsContainer';
import BottomContainerFooter from '../../components/Payment/BottomContainer/BottomContainerFooter';

const PaymentScreen = () => {
  console.log('PaymentScreen component is rendering!');
  const dispatch = useAppDispatch();
  const {
    paymentMethod,
    activeOption,
    tipAmount,
    discountRate,
    bakimlaPoints,
    servicePrice,
  } = useAppSelector((state) => state.payment);

  
  console.log('Current Redux State:', {
    paymentMethod,
    activeOption,
    tipAmount,
    discountRate,
    bakimlaPoints,
    servicePrice,
  });
  const handleConfirm = () => {
    console.log('Ödeme onaylandı:', {
      method: paymentMethod,
      tip: tipAmount,
      discount: discountRate,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <PaymentScreenHeader />
        <PaymentOptionCard
          label="Nakit"
          description="Bu seçim ile müşterinizden nakit ödeme alabilirsiniz."
          isCash={true}
          selected={paymentMethod === 'cash'}
          onSelect={() => dispatch(setPaymentMethod('cash'))}
        />

        <PaymentOptionCard
          label="Online Kredi Kartı"
          description="Bu seçim ile müşterinize online ödeme bildirimi göndereceğiz."
          isCash={false}
          selected={paymentMethod === 'card'}
          onSelect={() => dispatch(setPaymentMethod('card'))}
        />

      </ScrollView>

      {/* Bottom Container - Fixed at bottom, full width */}
      <View style={styles.bottomContainer}>
        {/* Options Toggle */}
        <TipContainer />
        <DiscountContainer />

        {/* Bakımla Puan */}
        <PointsContainer />

        {/* Footer Buttons */}
        <BottomContainerFooter />
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;