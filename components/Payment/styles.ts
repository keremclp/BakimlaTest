import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 0,
  },

  // HEADER STYLES
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#5D3FD3',
    marginTop: 30,
  },
  // Title and Amount Styles
  titleContainer: {    
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  titleContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  // end of title and amount styles
  backButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  optionsButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },

  amountContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  amount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1D27',
  },

 
  radioGroup: {
    marginTop: 12,
    marginBottom: 8,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  radioLabel: {
    fontSize: 15,
    marginLeft: 10,
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#5D3FD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5D3FD3',
  },
  paymentMethodContainer: {
    marginTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  bottomContainer: {
    position:'relative',
    width: '100%',
    // Remove height and border properties
  },
  optionsContainerTip: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 14,
    height: 80,
    position: 'absolute',
    bottom: 207,
    width: '100%',
  },
  optionsContainerDiscount: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 14,
    height: 80,
    position: 'absolute',
    bottom: 153,
    width: '100%',
  },
  pointsContainer: {
    zIndex: 2,
    backgroundColor: '#6B25FF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 180,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  pointsText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  pointsAmount: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 6,
  },
  useBtn: {
    backgroundColor: '#FFF',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  useBtnText: {
    color: '#5D3FD3',
    fontWeight: '600',
    fontSize: 13,
  },
  footer: {
    zIndex: 3,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    bottom: 0,
  },
  confirmBtn: {
    backgroundColor: '#53F293',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  confirmText: {
    color: '#1C1D27',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#1C1D27',
  },
});