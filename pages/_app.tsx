import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createStore } from "redux";
import rootReducer from "./../redux/index";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Modal from "../components/Modal";

declare global {
  interface Window {
    kakao: any;
  }
}

const store = createStore(rootReducer, composeWithDevTools());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Modal />
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
