import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <ToastContainer />
  </>
);

export default MyApp;
