import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  // 초기 상태
  initialState: {
    isLogin: false,
    userInfo: null,
  },
  reducers: {
    // 로그인일 때
    login: (state, action) => {
      state.isLogin = true
      state.userInfo = action.payload
    },
    // 로그아웃일 때
    logout: (state) => {
      state.isLogin = false
      state.userInfo = null
    },
    // 포지션 추가
    addPosition: (state, action) => {
      if (state.userInfo) {
        state.userInfo.position = action.payload
      }
    },
  },
})

export const { login, logout, addPosition } = userSlice.actions

export default userSlice.reducer
