import { configureStore } from '@reduxjs/toolkit'
import paymentReducer from './slices/paymentSlice'
import { testApi } from './services/test-api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    payment: paymentReducer,
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(testApi.middleware),
})

// Enable RTK Query's automatic refetching and caching
setupListeners(store.dispatch)

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store