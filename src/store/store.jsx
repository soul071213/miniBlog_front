// Store (저장소)	전역 상태 저장소 (모든 컴포넌트가 공유)
// Action (액션)	상태를 변경하는 요청 (무슨 동작인지 설명하는 객체)
// Reducer (리듀서)	실제로 상태를 변경하는 로직 함수

// 컴포넌트에서 어떤 동작 필요하면 → Action 생성
// dispatch로 Action을 스토어에 보냄
// 스토어에서 Reducer가 Action 보고 상태 업데이트
// 상태 바뀌면 컴포넌트가 자동으로 리렌더


//store.js 는 스토어 설정

import { configureStore } from "@reduxjs/toolkit";
import accessReducer from "./slices/AccessSlice";

const store = configureStore({
    reducer:{
        access:accessReducer,
    },
});

export default store;