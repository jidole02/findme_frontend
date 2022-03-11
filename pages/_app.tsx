import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createStore } from "redux";
import rootReducer from "./../redux/index";
import { Provider } from "react-redux";

declare global {
  interface Window {
    kakao: any;
  }
}

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
