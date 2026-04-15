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
  room: z.string().min(1, "Room Name Is Empty").min(3, "Error Text 3"),
});

const ScheduleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit(async (data) => await onSubmit(data))}
      className="flex flex-col justify-center items-center gap-80 p-5"
    >
      <fieldset className="flex flex-col w-full gap-5 ">
        <div className="flex w-full flex-col gap-2">
          <label class="block text-sm font-bold text-gray-700">Room</label>
          <input
            {...register("room")}
            type="text"
            className=" flex h-auto items-center shadow-sm justify-center text-black p-2 bg-[#f1f1f1] rounded-[5px]"
          />
          {errors?.room && (
            <p className="font-bold text-[12px] text-red-600 ">
              {errors.room.message}
            </p>
          )}
        </div>
        <div className="flex w-full flex-col gap-2">
          <label class="block text-sm font-bold text-gray-700">
            Specialitiy
          </label>
          <select className=" h-[40px] flex items-center shadow-sm justify-center text-black p-2 bg-[#f1f1f1] rounded-[5px]">
            <option>All</option>
            <option>O-1</option>
            <option>O-2</option>
            <option>O-3</option>
          </select>
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

export default ScheduleForm;
