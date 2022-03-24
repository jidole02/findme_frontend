import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createStore } from "redux";
import rootReducer from "./../redux/index";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Modal from "../components/Modal";
import { QueryClient, QueryClientProvider } from "react-query";

declare global {
  interface Window {
    kakao: any;
  }
}

const store = createStore(rootReducer, composeWithDevTools());

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Modal />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
export default MyApp;
