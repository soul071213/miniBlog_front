# 핵심 흐름
- 스토어 설정: configureStore
- 슬라이스 생성: createSlice
- Provider로 감싸기: react-redux의 Provider
- 컴포넌트에서 사용
    import { UseSelector,useDispatch } from "react-redux";
    useSelector: 상태 조회
    useDispatch: 액션 발생