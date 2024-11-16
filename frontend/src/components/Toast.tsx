import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const styles =
  type === "SUCCESS"
    ? "fixed top-4 right-4 z-50 p-4 rounded-lg bg-green-500 text-white max-w-md shadow-xl transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl"
    : "fixed top-4 right-4 z-50 p-4 rounded-lg bg-red-500 text-white max-w-md shadow-xl transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl";


  return (
    <div className={styles}>
      <div className="flex justify-center items-center">
        <span className="text-sm font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;