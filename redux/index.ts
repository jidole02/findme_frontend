import { combineReducers } from "redux";
import PersonReducer from "./person";
import ModalReducer from "./modal";

const rootReducer = combineReducers({
  ModalReducer,
  PersonReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
// rootReducer 반환값 유추로 rootState 내보내기
