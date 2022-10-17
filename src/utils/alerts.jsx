import { AxiosError } from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

// toast
export const SuccessAlert = (message) => {
  if (message) {

    toast.success(`${message}!  :You are logged in`, {
      position: toast.POSITION.TOP_RIGHT
    });

  } else {

    toast.success("Successful! You are logged in", {
      position: toast.POSITION.TOP_RIGHT
    });

  }
}

export const ValidationAlert = (message) => {
  toast.error(`Filled are required`, {
    position: toast.POSITION.TOP_RIGHT
  });
}

export const SignUpSuccessAlert = (message) => {
  toast.success(`Signup successful! Otp send to your email`, {
    position: toast.POSITION.TOP_RIGHT
  });
}

export const ExistingUser = (message) => {
  toast.error(`User with this email exits... Login in to access your account`, {
    position: toast.POSITION.TOP_RIGHT
  });
}

export const ErrorAlert = () => {
    toast.error(`You don't have an account! redirecting to Register page`, {
      position: toast.POSITION.TOP_RIGHT
    });

}

export const AlertContainer = () => ( <ToastContainer autoClose={3000}/> )