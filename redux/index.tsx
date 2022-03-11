import { combineReducers } from "redux";
import PersonReducer from "./person";

const rootReducer = combineReducers({
  PersonReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
