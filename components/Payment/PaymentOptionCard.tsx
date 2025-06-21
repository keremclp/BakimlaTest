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
          <CashSvg width={40} height={40} fill={selected ? '#5D3FD3' : '#888'} />
        ) : (
          <CreditCardSvg width={40} height={40} fill={selected ? '#5D3FD3' : '#888'} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity> 
  )
}

export default PaymentOptionCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selected: {
    borderColor: '#5D3FD3',
    borderWidth: 2,
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  selectedLabel: {
    color: '#5D3FD3',
  },
})
