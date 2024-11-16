import { useForm } from "react-hook-form";
import {
  PaymentIntentResponse,
  UserType,
} from "../../../../backend/src/shared/types";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { useSearchContext } from "../../contexts/SearchContext";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import * as apiClient from "../../api-client";
import { useAppContext } from "../../contexts/AppContext";
import './BookingForm.css'

type Props = {
  currentUser: UserType;
  paymentIntent: PaymentIntentResponse;
};

export type BookingFormData = {
  firstName: string;
  lastName: string;
  email: string;
  adultCount: number;
  childCount: number;
  checkIn: string;
  checkOut: string;
  hotelId: string;
  paymentIntentId: string;
  totalCost: number;
};

const BookingForm = ({ currentUser, paymentIntent }: Props) => {
  const stripe = useStripe();
  const elements = useElements();

  const search = useSearchContext();
  const { hotelId } = useParams();

  const { showToast } = useAppContext();

  const { mutate: bookRoom, isLoading } = useMutation(
    apiClient.createRoomBooking,
    {
      onSuccess: () => {
        showToast({ message: "Booking Saved!", type: "SUCCESS" });
      },
      onError: () => {
        showToast({ message: "Error saving booking", type: "ERROR" });
      },
    }
  );

  const { handleSubmit, register } = useForm<BookingFormData>({
    defaultValues: {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      adultCount: search.adultCount,
      childCount: search.childCount,
      checkIn: search.checkIn.toISOString(),
      checkOut: search.checkOut.toISOString(),
      hotelId: hotelId,
      totalCost: paymentIntent.totalCost,
      paymentIntentId: paymentIntent.paymentIntentId,
    },
  });

  const onSubmit = async (formData: BookingFormData) => {
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
      },
    });

    if (result.paymentIntent?.status === "succeeded") {
      bookRoom({ ...formData, paymentIntentId: result.paymentIntent.id });
    }
  };

  return (
    <form
  onSubmit={handleSubmit(onSubmit)}
  className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg border border-gray-300 p-8 max-w-6xl mx-auto"
>
  {/* Left Section */}
  <div className="space-y-6">
    {/* Form Title */}
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Confirm Your Details</h1>

    {/* Read-only Fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <label className="text-gray-600 text-sm font-semibold">
        First Name
        <input
          className="mt-2 border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 bg-gray-100 font-medium focus:outline-none"
          type="text"
          readOnly
          disabled
          {...register("firstName")}
        />
      </label>
      <label className="text-gray-600 text-sm font-semibold">
        Last Name
        <input
          className="mt-2 border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 bg-gray-100 font-medium focus:outline-none"
          type="text"
          readOnly
          disabled
          {...register("lastName")}
        />
      </label>
      <label className="md:col-span-2 text-gray-600 text-sm font-semibold">
        Email
        <input
          className="mt-2 border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 bg-gray-100 font-medium focus:outline-none"
          type="text"
          readOnly
          disabled
          {...register("email")}
        />
      </label>
    </div>
  </div>

  {/* Right Section */}
  <div className="space-y-8">
    {/* Price Summary */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Your Price Summary</h2>
      <div className="bg-blue-100 p-5 rounded-lg shadow-sm">
        <div className="text-lg font-bold text-gray-900">
          Total Cost: ${paymentIntent.totalCost.toFixed(2)}
        </div>
        <div className="text-sm text-gray-600">Includes taxes and charges</div>
      </div>
    </div>

    {/* Payment Details */}
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-gray-800">Payment Details</h3>
      <CardElement
        id="payment-element"
        className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Submit Button */}
    <div className="flex justify-end">
      <button
        disabled={isLoading}
        type="submit"
        className={`py-3 px-6 font-bold rounded-lg text-white transition-all duration-200 ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 shadow-md"
        }`}
      >
        {isLoading ? "Saving..." : "Confirm Booking"}
      </button>
    </div>
  </div>
</form>

  );
};

export default BookingForm;