import { toast } from "react-toastify";

const useToastify = () => {
  const showToastify = text => {
    toast.success(text, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  return {
    showToastify
  };
};

export default useToastify;
