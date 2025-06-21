import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PaymentOptionCard from '../../components/Payment/PaymentOptionCard';
import { styles } from '../../components/Payment/styles';
import PaymentScreenHeader from '../../components/Payment/PaymentScreenHeader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Iconify } from 'react-native-iconify';
import {
  setPaymentMethod,
  setActiveOption,
  setTipAmount,
  setDiscountRate,
} from '../../redux/slices/paymentSlice';

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
        <View style={styles.optionsContainerTip}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => dispatch(setActiveOption('tip'))}
          >
            <Iconify
              icon="mdi:check-circle"
              size={24}
              color={activeOption === 'tip' ? '#5D3FD3' : '#BDBDBD'}
            />
            <View style={styles.radioCircle}>
              {activeOption === 'tip' && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.radioLabel}>Ek Ücret veya Bahşiş Al</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionsContainerDiscount}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => dispatch(setActiveOption('discount'))}
          >
            <View style={styles.radioCircle}>
              {activeOption === 'discount' && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.radioLabel}>Kişiye Özel İndirim Oranı</Text>
          </TouchableOpacity>
        </View>

        {/* Bakımla Puan */}
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>Bakımla Puan</Text>
          <Text style={styles.pointsAmount}>{bakimlaPoints.toFixed(2)}₺</Text>
          <TouchableOpacity style={styles.useBtn}>
            <Text style={styles.useBtnText}>Kullan</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
            <Text style={styles.confirmText}>Onayla</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.cancelText}>Vazgeç</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;