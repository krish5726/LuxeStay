import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './SignIn.css'

export type SignInFormData = {
  email: string;
  password: DOMStringList;
};

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const location = useLocation();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in successful", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from.pathname || "/");
      console.log("user has been signed in");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
      <div className="flex justify-center items-center  bg-gray-100">
        <form
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
          onSubmit={onSubmit}
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Sign In
          </h2>
          <label className="block text-gray-700 text-sm font-medium mb-4">
            Email
            <input
              type="email"
              className="border border-gray-300 rounded-lg w-full py-2 px-3 mt-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: "This field is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </label>
          <label className="block text-gray-700 text-sm font-medium mb-4">
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
          <div className="flex items-center justify-between text-sm mb-4">
            <span>
              Not Registered?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Create an account here
              </Link>
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Login
          </button>
        </form>
      </div>
  );
};

export default SignIn;
