import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

const SignOutButton = () => {

    const queryClient = useQueryClient()
    const { showToast } = useAppContext()
    const mutation = useMutation(apiClient.signOut, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken")
            showToast({ message: "Signed out!", type: "SUCCESS" })
        },
        onError: (error: Error) => {
            showToast({ message: error.message, type: "ERROR" })
        }
    });

    const handleClick = () => {
        mutation.mutate()
    }

  return (
    <button 
        onClick={handleClick}
        className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 hover:text-teal-600 shadow transition-transform transform hover:scale-105">
            Sign Out
        </button>
  )
}

export default SignOutButton;