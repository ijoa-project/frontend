import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session' // session storage 사용
import userReducer from './userSlice'

const persistConfig = {
  key: 'root', // 최상위 레벨에서 데이터를 저장함을 의미
  storage: storageSession,
  whitelist: ['user'], // session storage에 저장할 slice 목록
  // blacklist -> 제외할 slice 목록
}

//루트 리듀서를 combineReducers로 합치고, 이를 persistReducer로 감싸준다.
// userReducer 안의 모든 리듀서들의 상태관리는 이 rootReducer을 통해 이뤄지게 됨.
const rootReducer = combineReducers({
  user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// configureStore를 사용하여 스토어 설정
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// persistStore를 사용하여 스토어를 persistor로 감싸준다.
const persistor = persistStore(store)

export { store, persistor }
