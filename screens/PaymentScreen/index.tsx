import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PaymentOptionCard from '../../components/Payment/PaymentOptionCard'; // Adjust the path as needed
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/types';


const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card'>('cash');
  const [activeOption, setActiveOption] = useState<'tip' | 'discount' | null>(null);
  const [tipAmount, setTipAmount] = useState('');
  const [discountRate, setDiscountRate] = useState('%10');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const bakimlaPoints = 52.02;
  const servicePrice = 900;

  const handleConfirm = () => {
    console.log('Ödeme onaylandı:', {
      method: paymentMethod,
      tip: tipAmount,
      discount: discountRate,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Header with Back Button */}
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

        <View style ={styles.paymentMethodContainer}>
          <PaymentOptionCard
          label="Nakit"
          description="Bu seçim ile müşterinizden nakit ödeme alabilirsiniz."
          isCash={true}
          selected={paymentMethod === 'cash'}
          onSelect={() => setPaymentMethod('cash')}
        />

        <PaymentOptionCard
          label="Online Kredi Kartı"
          description="Bu seçim ile müşterinize online ödeme bildirimi göndereceğiz."
          isCash={false}
          selected={paymentMethod === 'card'}
          onSelect={() => setPaymentMethod('card')}
        />

        </View>
      </ScrollView>

      {/* Bottom Container - Fixed at bottom, full width */}
      <View style={styles.bottomContainer}>
        {/* Options Toggle */}
        <View style={styles.optionsContainerTip}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setActiveOption('tip')}
          >
            <View style={styles.radioCircle}>
              {activeOption === 'tip' && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.radioLabel}>Ek Ücret veya Bahşiş Al</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionsContainerDiscount}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setActiveOption('discount')}
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