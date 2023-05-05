import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastMessage() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      pauseOnHover
      transition={Slide}
      limit={3}
      toastClassName="font"
      theme="colored"
    />
  );
}

export default ToastMessage;
