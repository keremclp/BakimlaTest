import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CreditCardSvg from '../../assets/svg/CreditCard.svg';
import CashSvg from '../../assets/svg/Cash.svg';
interface PaymentOptionCardProps {
  label: string;
  description: string;
  isCash: boolean;
  selected: boolean;
  onSelect: () => void;
}

const PaymentOptionCard = ({ label, description, isCash, selected, onSelect }: PaymentOptionCardProps) => {
  return (
    <TouchableOpacity style={[styles.card, selected && styles.selected]} onPress={onSelect}>
      <View style={styles.iconContainer}>
        {isCash ? (
          <>
            <CashSvg width={50} height={50} fill={selected ? '#5D3FD3' : '#888'} />
          </>
        ) : (
          <CreditCardSvg width={50} height={50} fill={selected ? '#5D3FD3' : '#888'} />
        )}
        
        <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.description}>{description}</Text>
        {selected ? (
          <View style={styles.selectedButtonContainer}>
            <Text style={styles.selectedButtonText}>Seçim Yapıldı</Text>
          </View>
        ) : (
          <View style={[styles.selectedButtonContainer, { backgroundColor: '#888' }]}>
            <Text style={styles.selectedButtonText}>Seç</Text>
          </View>
        )}  
      </View>
      
    </TouchableOpacity>
  )
}

export default PaymentOptionCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 12,
    borderRadius: 20,
    opacity: 0.7,
  },
  selected: {
    borderColor: '#5D3FD3',
    borderWidth: 2,
    opacity: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  label: {
    fontSize: 16,
    marginLeft: 12,
  },
  description: {
    fontSize: 10,
    color: '#888',
    width: '65%',
  },
  selectedLabel: {
    color: '#5D3FD3',
    fontWeight: '600',

  },
  selectedButtonContainer: {
    backgroundColor: '#53F293',
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 17,
  },
  selectedButtonText: {
    color: '#1C1D27',
    fontWeight: '600',
    fontSize: 12,
  },
})
