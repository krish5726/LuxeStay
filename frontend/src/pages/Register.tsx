import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-lg mx-auto p-6 shadow-lg rounded-lg bg-white"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Create an Account
      </h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm flex-1">
          First Name
          <input
            className="border border-gray-300 rounded-lg w-full py-2 px-3 mt-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("firstName", { required: "This field is required" })}
          />
          {errors.firstName && (
            <span className="text-red-500 text-xs">
              {errors.firstName.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm flex-1">
          Last Name
          <input
            className="border border-gray-300 rounded-lg w-full py-2 px-3 mt-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("lastName", { required: "This field is required" })}
          />
          {errors.lastName && (
            <span className="text-red-500 text-xs">
              {errors.lastName.message}
            </span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm mt-4">
        Email
        <input
          type="email"
          className="border border-gray-300 rounded-lg w-full py-2 px-3 mt-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm mt-4">
        Password
        <input
          type="password"
          className="border border-gray-300 rounded-lg w-full py-2 px-3 mt-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
      </label>
      <label className="text-gray-700 text-sm mt-4">
        Confirm Password
        <input
          type="password"
          className="border border-gray-300 rounded-lg w-full py-2 px-3 mt-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your passwords do not match";
              }
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">
            {errors.confirmPassword.message}
          </span>
        )}
      </label>
      <button
        type="submit"
        className="w-full mt-6 bg-blue-600 rounded-lg text-white px-4 py-2 font-bold hover:bg-blue-700 transition-all duration-200"
      >
        Create Account
      </button>
    </form>
  );
};

export default Register;
