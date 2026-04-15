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
  name: z.string().min(1, "Clinic Name Is Empty").min(3, "Error Text 3"),
  email: z.string().min(1, "Email Empty").min(3, "Error Text 3"),
  phoneNumber: z
    .string()
    .min(1, "Mobile Number Is Empty")
    .regex(/^09\d{9}$/, "Invalid Mobile Number"),
});
const StaffForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit(async (data) => await onSubmit(data))}
      className=" flex flex-col  items-center space-y-4 gap-80 p-5"
    >
      <fieldset
        disabled={isSubmitting}
        className="flex justify-center items-center gap-20"
      >
        <div className="flex flex-col gap-8">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label class="block text-sm font-bold text-gray-700">Name</label>
            <input
              {...register("name")}
              type="text"
              className="w-[300px] flex h-auto items-center shadow-sm justify-center text-black p-2 bg-[#f1f1f1] rounded-[5px]"
            />
            {errors?.name && (
              <p className="font-bold text-[12px] text-red-600 ">
                {errors.name.message}
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
              className="w-[300px] flex h-auto items-center shadow-sm justify-center text-black p-2 bg-[#f1f1f1]  rounded-[5px]"
            />
            {errors?.email && (
              <p className="font-bold text-[12px] text-red-600 ">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label class="block text-sm font-bold text-gray-700">
              Phone Number
            </label>
            <input
              {...register("phoneNumber")}
              type="tel"
              className="w-[300px] flex h-auto items-center shadow-sm justify-center text-black p-2 bg-[#f1f1f1] rounded-[5px]"
            />{" "}
            {errors?.phoneNumber && (
              <p className="font-bold text-[12px] text-red-600 ">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          {/* Departement */}
          <div className="flex flex-col gap-2">
            <label class="block text-sm font-bold text-gray-700">
              Departement
            </label>
            <select className="w-[300px] h-[40px] flex items-center shadow-sm justify-center text-black p-2 bg-[#f1f1f1] rounded-[5px]">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
      </fieldset>
      <button
        type="submit"
        class="w-50 py-2 rounded-md  text-white p-[20px] bg-red-500 transition"
      >
        {isSubmitting ? "Sending" : "Done"}
      </button>
    </form>
  );
};

export default StaffForm;
