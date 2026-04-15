import { useState } from "react";
import SearchBox from "../../components/common/searchBox";
import Button from "../../components/common/button";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DoctorsModal = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);
  // const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className="flex flex-col mt-20">
      {step === 1 && (
        <>
          <div className="flex flex-col">
            <div className="flex mt-5 gap-5">
              <SearchBox />
            </div>
            <div className="flex justify-center mt-75">
              <Button titleButton="Next" onClick={nextStep} />
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-20">
              <img src="../../../public/avatar.png" alt="" />
              <span className="font-bold">
                Your request has been sent to the doctor. We'll notify you once
                it's confirmed.
              </span>
            </div>
            <div className="flex flex-col items-center justify-center mt-75 gap-5 cursor-pointer">
              <Button titleButton="Done" onClick={nextStep} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DoctorsModal;
