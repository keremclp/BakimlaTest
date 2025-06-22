import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles';
import { Iconify } from 'react-native-iconify';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setActiveOption } from '../../../redux/slices/paymentSlice';


const DiscountContainer = () => {
    const dispatch = useAppDispatch();
    const { activeOption, discountRate } = useAppSelector((state) => state.payment);

  return (
    <View
      style={[
        styles.optionsContainerDiscount,
        activeOption === 'discount' && styles.activeOptionDiscount,
      ]}
    >
      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => dispatch(setActiveOption('discount'))}
      >
        <View style={styles.radioCircle}>
          {activeOption === 'discount' && <View style={styles.radioDot} />}
        </View>
        <Text style={styles.radioLabel}>Kişiye Özel İndirim Oranı</Text>
      </TouchableOpacity>
      {activeOption === 'discount' && (
        <View style={styles.tipContainer}>
          <View style={styles.tipInputContainer}>
            <TouchableOpacity style={styles.dropdownContainer}>
              <TextInput
                style={styles.tipInputDropdown}
                placeholder="İndirim Oranı Seçin"
                placeholderTextColor="#888"
                value={discountRate ? `${discountRate}` : ''}
                editable={false}
              />
              <Iconify icon="mdi:chevron-down" size={20} color="#888" />
            </TouchableOpacity>
          </View>
          <View style={styles.tipInfo}>
            <TouchableOpacity
              style={styles.confirmTipBtn}
            >
              <Text style={styles.confirmTipText}>Onayla</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default DiscountContainer;

