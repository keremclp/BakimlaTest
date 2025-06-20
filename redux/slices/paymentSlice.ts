// filepath: c:\Users\kerem_can\Desktop\BakimlaTest\redux\slices\paymentSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface PaymentState {
  paymentMethod: 'cash' | 'card'
  activeOption: 'tip' | 'discount' | null
  tipAmount: string
  discountRate: string
  bakimlaPoints: number
  servicePrice: number
}

const initialState: PaymentState = {
  paymentMethod: 'cash',
  activeOption: null,
  tipAmount: '',
  discountRate: '%10',
  bakimlaPoints: 52.02,
  servicePrice: 900,
}

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentMethod: (state, action: PayloadAction<'cash' | 'card'>) => {
      state.paymentMethod = action.payload
    },
    setActiveOption: (state, action: PayloadAction<'tip' | 'discount' | null>) => {
      state.activeOption = action.payload
    },
    setTipAmount: (state, action: PayloadAction<string>) => {
      state.tipAmount = action.payload
    },
    setDiscountRate: (state, action: PayloadAction<string>) => {
      state.discountRate = action.payload
    },
    setBakimlaPoints: (state, action: PayloadAction<number>) => {
      state.bakimlaPoints = action.payload
    },
    setServicePrice: (state, action: PayloadAction<number>) => {
      state.servicePrice = action.payload
    },
    resetPayment: () => initialState,
  },
})

export const {
  setPaymentMethod,
  setActiveOption,
  setTipAmount,
  setDiscountRate,
  setBakimlaPoints,
  setServicePrice,
  resetPayment,
} = paymentSlice.actions

export default paymentSlice.reducer