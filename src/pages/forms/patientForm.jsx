import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";

function sleep(ms) {
  return new Promise((resolver) => setTimeout(resolver, ms));
}

const onSubmit = async (data) => {
  await sleep(2000);
  console.log(data);
};

const schema = z.object({
  patientName: z.string().min(1, "Clinic Name Is Empty").min(3, "Error Text 3"),
  email: z.string().min(1, "Email Empty").min(3, "Error Text 3"),
  nationalID: z
    .string()
    .min(8, "National ID Is Short")
    .max(8, "Too Long")
    .refine((val) => val.leng === 0, {
      message: "National Empty",
      if: (val) => val.lengh === 0,
    }),
  age: z.string().min(1, "Age Empty").max(50, "Too Old"),
  phoneNumber: z
    .string()
    .min(1, "Mobile Number Is Empty")
    .regex(/^09\d{9}$/, "Invalid Mobile Number"),
});
const PatientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex h-full flex-col justify-between "
    >
      <div className="flex flex-col gap-4">
        <h4 className="font-bold">Add a patient</h4>
        <fieldset
          disabled={isSubmitting}
          className="flex justify-between gap-8"
        >
          <div className="flex flex-col gap-8 w-full">
            {/* Patient Name */}
            <div className="flex flex-col gap-2">
              <label class="block text-sm font-bold text-gray-700">
                Patient Name
              </label>
              <input
                {...register("patientName")}
                type="text"
                className="w-full flex h-auto items-center shadow-sm justify-center text-black p-2 bg-[#f1f1f1] rounded-[5px]"
              />
              {errors?.patientName && (
                <p className="font-bold text-[12px] text-red-600 ">
                  {errors.patientName.message}
                </p>
              )}
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label class="block text-sm font-bold text-gray-700">
                Email (Optional)
              </label>
              <input
                {...register("email")}
                type="text"
                className="w-full flex h-auto items-center shadow-sm justify-center text-black p-2 bg-[#f1f1f1]  rounded-[5px]"
              />
              {errors?.email && (
                <p className="font-bold text-[12px] text-red-600 ">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Gender */}
            <div className="flex flex-col gap-2">
              <label class="block text-sm font-bold text-gray-700">
                Gender
              </label>
              <select
                {...register("gender")} // Register select element too
                className="w-full h-[40px] flex items-center shadow-sm justify-center text-black p-2 bg-[#f1f1f1] rounded-[5px]"
              >
                <option value="Male">Male</option> {/* Add value attributes */}
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full">
            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label class="block text-sm font-bold text-gray-700">
                Phone Number
              </label>
              <input
                {...register("phoneNumber")}
                type="tel"
                className="w-full flex h-auto items-center shadow-sm justify-center text-black p-2 bg-[#f1f1f1] rounded-[5px]"
              />{" "}
              {errors?.phoneNumber && (
                <p className="font-bold text-[12px] text-red-600 ">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* NationalID */}
            <div className="flex flex-col gap-2">
              <label class="block text-sm font-bold text-gray-700">
                National ID
              </label>
              <input
                {...register("nationalID")}
                type="text"
                className="w-full flex h-auto items-center shadow-sm justify-center text-black p-2 bg-[#f1f1f1]  rounded-[5px]"
              />{" "}
              {errors?.nationalID && (
                <p className="font-bold text-[12px] text-red-600 ">
                  {errors.nationalID.message}
                </p>
              )}
            </div>
            {/* Age */}
            <div className="flex flex-col gap-2">
              <label class="block text-sm font-bold text-gray-700">
                Age (Optional)
              </label>
              <input
                {...register("age")}
                type="text"
                className="w-full flex h-auto items-center shadow-sm justify-center text-black p-2 bg-[#f1f1f1] rounded-[5px]"
              />
              {errors?.age && (
                <p className="font-bold text-[12px] text-red-600 ">
                  {errors.age.message}
                </p>
              )}
            </div>
          </div>
        </fieldset>
      </div>
      <button
        type="submit"
        className="w-50 py-2 rounded-md mx-auto  text-white p-[20px] bg-red-500 transition"
      >
        {isSubmitting ? "Sending" : "Done"}
      </button>
    </form>
  );
};

export default PatientForm;
