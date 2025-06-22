import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from '../styles';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setActiveOption, setTipAmount } from '../../../redux/slices/paymentSlice';

const TipContainer = () => {
    const { activeOption, tipAmount } = useAppSelector((state) => state.payment);
    const dispatch = useAppDispatch();

  return (
    <View
      style={[
        styles.optionsContainerTip,
        activeOption === 'tip' && styles.activeOptionTip,
      ]}
    >
      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => dispatch(setActiveOption('tip'))}
      >
        <View style={styles.radioCircle}>
          {activeOption === 'tip' && <View style={styles.radioDot} />}
        </View>
        <Text style={styles.radioLabel}>Ek Ücret veya Bahşiş Al</Text>
      </TouchableOpacity>
      {activeOption === 'tip' && (
        <View style={styles.tipContainer}>
          <View style={styles.tipInputContainer}>
            <TextInput
              style={styles.tipInput}
              placeholder="Ek Ücret Tutarı"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={tipAmount}
              onChangeText={text => dispatch(setTipAmount(text))}
            />
            <Text style={styles.currencySymbol}>₺</Text>
          </View>
          <View style={styles.tipInfo}>
            <TouchableOpacity
              style={styles.confirmTipBtn}
              onPress={() => console.log('Ek Ücret Onaylandı:', tipAmount)}
            >
              <Text style={styles.confirmTipText}>Onayla</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default TipContainer;

