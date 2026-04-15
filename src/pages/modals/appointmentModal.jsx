import { useState } from "react";
import SearchBox from "../../components/common/searchBox";
import Button from "../../components/common/button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentModal = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  //
  const [value, setValue] = useState(new Date());
  return (
    <div className="flex flex-col mt-20">
      {step === 1 && (
        <>
          <div className="flex flex-col ">
            <span className="font-bold">Add a patient to this appointment</span>
            <span className="text-[13px]">
              You can search for an existing patient or add a new one
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-5 gap-5">
              <SearchBox />
              <Button titleButton="&#x2B; Add a Patient" />
            </div>
            <div className="flex justify-center mt-75">
              <Button titleButton="Next" onClick={nextStep} />
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="flex flex-col ">
            <span className="font-bold">Add a doctor to this appointment</span>
            <span className="text-[13px]">
              You can search through your doctors
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-5 gap-5">
              <SearchBox />
            </div>
            <div className="flex flex-col items-center justify-center mt-75 gap-5 cursor-pointer">
              <Button titleButton="Next" onClick={nextStep} />
              <span className="font-bold" onClick={prevStep}>
                Previous
              </span>
            </div>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <div className="flex flex-col ">
            <span className="font-bold">
              Choose a date and time for this appointment
            </span>
            <span className="text-[13px]">
              You can choose an anailable date and time for this appointment
            </span>
            <Calendar
              className="rounded-xl shadow-lg p-4 font-light "
              onChange={setValue}
              value={value}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex mt-5 gap-5">
              <p>Date</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-75  cursor-pointer">
              <span className="font-bold" onClick={prevStep}>
                Previous
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AppointmentModal;
