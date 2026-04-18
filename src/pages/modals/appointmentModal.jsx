import { Fragment, useState } from "react";
import SearchBox from "../../components/common/searchBox";
// import Button from "../../components/common/button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import MyCalendar from "../../components/common/calendar";

const AppointmentModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  //
  const [value, setValue] = useState(new Date());

  const handleDone = () => {
    if (onClose) {
      onClose();
    }
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const timeSlots = [
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
  ];
  return (
    <Fragment>
      {step === 1 && (
        <form className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-bold">
                Add a patient to this appointment
              </span>
              <span className="text-[13px]">
                You can search for an existing patient or add a new one
              </span>
            </div>
            <SearchBox />
          </div>
          <button
            type="submit"
            className="w-50 py-2 rounded-md mx-auto text-white p-[20px] bg-red-500 transition"
            onClick={nextStep}
          >
            Next
          </button>
        </form>
      )}
      {step === 2 && (
        <form className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-bold">
                Add a doctor to this appointment
              </span>
              <span className="text-[13px]">
                You can search through your doctors
              </span>
            </div>
            <SearchBox />
          </div>
          <div className="flex flex-col items-center gap-5">
            <button
              type="submit"
              className="w-50 py-2 rounded-md mx-auto text-white p-[20px] bg-red-500 transition"
              onClick={nextStep}
            >
              Next
            </button>
            <span className="font-bold" onClick={prevStep}>
              Previous
            </span>
          </div>
        </form>
      )}
      {step === 3 && (
        <div className="flex h-full flex-col justify-around">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-bold">
                Choose a date and time for this appointment
              </span>
              <span className="text-[13px]">
                You can choose an anailable date and time for this appointment
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center m-0 gap-20">
            <MyCalendar />
            {/* 11 */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTime(time)}
                    className={`
          flex-1 min-w-[calc(33.333%-8px)] px-3 py-1.5 text-xs rounded-md border transition-all whitespace-nowrap
          ${
            selectedTime === time
              ? "bg-green-500 text-white border-green-500"
              : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:bg-green-50"
          }
        `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            {/* 222 */}
          </div>
          <button
            type="button"
            className="w-50 py-2 rounded-md mx-auto text-white p-[20px] bg-red-500 transition"
            onClick={handleDone}
          >
            Done
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default AppointmentModal;
