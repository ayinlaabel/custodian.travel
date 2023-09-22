import { useState } from "react";
import { steps } from "./Steps";
import QuoteComputation from "../quote-computation/QuoteComputation";
import SelectPlan from "../select-plan/SelectPlan";
import CustomerDetails from "../customer-details/CustomerDetails";
import CountriesModal from "../Modal/CountriesModal";

const Onboarding = () => {
  const [OnboardingSteps, setOnboardingSteps] = useState<any[]>(steps);
  const [isActive, setIsActive] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState<string[]>([]);

  const handleIsActive = (active: any) => {
    setIsActive(active);
  };

  const handleModal = () => {
    setIsModal(!isModal);
  };
  const handleNext = (active: any) => {
    setOnboardingSteps((prevArray) => {
      const updated = [...prevArray];
      updated[active].isComplete = true;
      return updated;
    });
    if (steps.length - 1 > active) {
      console.log(active);
      // console.log(steps.length);
      setIsActive(active + 1);
      console.log(OnboardingSteps);
    }
  };

  const handlePrev = (active: any) => {
    if (active > 0) {
      setIsActive(active - 1);
    }
  };

  const handleData = (e: any) => {
    setModalData([...modalData, e.target.value]);
    console.log(e.target.value);
  };

  const handleFinal = (active: any) => {
    alert("final step");
  };

  return (
    <div className="w-screen h-screen px-[10rem] py-[2rem] flex flex-col">
      <div className="bg-[#fff] w-full h-[8rem] mb-[2rem]">
        <div className="flex flex-row items-center h-full">
          {OnboardingSteps.map((step: any, index: any) => (
            <div
              className={`group/item flex flex-row flex-1 items-center px-[10px] cursor-pointer hover:bg-[#444]/5 h-full ${
                isActive === index ? "bg-[#444]/10" : null
              }`}
            >
              <div className={"flex flex-row items-center mr-[10px] px-3"}>
                {step.isComplete ? (
                  <div
                    className={`h-[30px] w-[30px]  rounded-full items-center justify-center flex mr-3 ${
                      isActive === index
                        ? "bg-[#4BB543] text-[#fff]"
                        : "bg-[#4BB543] text-[#fff]"
                    }`}
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                ) : (
                  <div
                    className={`h-[30px] w-[30px]  rounded-full items-center justify-center flex mr-3 ${
                      isActive === index
                        ? "bg-[#A73439] text-[#fff]"
                        : "bg-[#444]/5"
                    }`}
                  >
                    {index + 1}
                  </div>
                )}
                <div
                  className={`w-fit ${
                    isActive === index ? "font-medium" : null
                  }`}
                >
                  {step?.title}
                </div>
              </div>
              <div className="flex-1 h-[2px] bg-[#444]/25"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative bg-[#fff] h-full w-[100vw - 20rem] overflow-hidden">
        <div className="h-full w-[100vw - 20rem] transition-all duration-1000 overflow-x-hidden">
          {isActive === 0 ? (
            <div className={`h-full w-full`}>
              <div className="">
                <QuoteComputation
                  handleModal={handleModal}
                  modalData={modalData}
                />
              </div>
            </div>
          ) : null}
          {isActive === 1 ? (
            <div className={`h-full w-full px-4`}>
              <div>
                <SelectPlan />
              </div>
            </div>
          ) : null}
          {isActive === 2 ? (
            <div className={`h-full w-full px-4`}>
              <div>
                <CustomerDetails />
              </div>
            </div>
          ) : null}
        </div>
        <div className="absolute bottom-0 right-[50px] p-2">
          {isActive > 0 ? (
            <button
              className="bg-[#444]/25 px-[2rem] py-[.8rem] rounded-lg  hover:bg-[#444]/30 mr-5"
              onClick={() => handlePrev(isActive)}
            >
              Back
            </button>
          ) : null}
          {isActive < steps.length - 1 ? (
            <button
              className="bg-[#A73439] px-[2rem] py-[.8rem] rounded-lg text-[#fff] hover:bg-[#A73439]/90"
              onClick={() => handleNext(isActive)}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-[#A73439] px-[2rem] py-[.8rem] rounded-lg text-[#fff] hover:bg-[#A73439]/90"
              onClick={() => handleFinal(isActive)}
            >
              Finish
            </button>
          )}
        </div>
      </div>
      <CountriesModal
        show={isModal}
        handleModal={handleModal}
        handleData={handleData}
      />
    </div>
  );
};

export default Onboarding;
