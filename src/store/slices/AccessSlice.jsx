 // 상태, 리듀서, 액션 다 여기서 관리
 import { createSlice } from "@reduxjs/toolkit";

 // 초기 상태
 const initialState = { token: '' };
 
 // slice 생성
 const accessSlice = createSlice({
     name: 'access',
     initialState,
     reducers: {
         // token 값을 action.payload에서 받아서 저장
         setToken: (state, action) => {
             state.token = action.payload;
         },
     },
 });
 
 // 액션과 리듀서 내보내기
 export const { setToken } = accessSlice.actions;
 export default accessSlice.reducer;
 
 
//  핵심 흐름
//  스토어 설정: configureStore
//  슬라이스 생성: createSlice
//  Provider로 감싸기: react-redux의 Provider
//  컴포넌트에서 사용
//  import { UseSelector,useDispatch } from "react-redux";
// useSelector: 상태 조회
// useDispatch: 액션 발생