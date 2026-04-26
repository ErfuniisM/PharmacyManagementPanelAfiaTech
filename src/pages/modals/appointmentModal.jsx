// // // import { Fragment, useState } from "react";
// // // import SearchBox from "../../components/common/searchBox";
// // // import Calendar from "react-calendar";
// // // import "react-calendar/dist/Calendar.css";
// // // import MyCalendar from "../../components/common/calendar";

// // // const AppointmentModal = ({ onClose }) => {
// // //   const [step, setStep] = useState(1);
// // //   const nextStep = () => setStep((prev) => prev + 1);
// // //   const prevStep = () => setStep((prev) => prev - 1);

// // //   const [value, setValue] = useState(new Date());
// // //   const [selectedDate, setSelectedDate] = useState(null);
// // //   const [selectedTime, setSelectedTime] = useState(null);

// // //   const timeSlots = [
// // //     "8:00 AM",
// // //     "8:30 AM",
// // //     "9:00 AM",
// // //     "9:30 AM",
// // //     "10:00 AM",
// // //     "10:30 AM",
// // //   ];

// // //   const handleDone = () => {
// // //     if (onClose) {
// // //       onClose();
// // //     }
// // //   };

// // //   return (
// // //     <Fragment>
// // //       {step === 1 && (
// // //         <form className="flex flex-col h-full justify-between gap-6">
// // //           <div className="flex flex-col gap-4 sm:gap-5">
// // //             <div className="flex flex-col gap-2">
// // //               <span className="font-bold text-base sm:text-lg text-gray-800">
// // //                 Add a patient to this appointment
// // //               </span>
// // //               <span className="text-xs sm:text-sm text-gray-500">
// // //                 You can search for an existing patient or add a new one
// // //               </span>
// // //             </div>
// // //             <SearchBox />
// // //           </div>

// // //           <div className="flex justify-center mt-4">
// // //             <button
// // //               type="submit"
// // //               className="w-full sm:w-auto min-w-[120px] sm:min-w-[150px] py-2.5 sm:py-3 px-4 rounded-md text-white bg-red-500 hover:bg-red-600 transition-all duration-200 font-medium text-sm sm:text-base"
// // //               onClick={nextStep}
// // //             >
// // //               Next
// // //             </button>
// // //           </div>
// // //         </form>
// // //       )}

// // //       {step === 2 && (
// // //         <form className="flex flex-col h-full justify-between gap-6">
// // //           <div className="flex flex-col gap-4 sm:gap-5">
// // //             <div className="flex flex-col gap-2">
// // //               <span className="font-bold text-base sm:text-lg text-gray-800">
// // //                 Add a doctor to this appointment
// // //               </span>
// // //               <span className="text-xs sm:text-sm text-gray-500">
// // //                 You can search through your doctors
// // //               </span>
// // //             </div>
// // //             <SearchBox />
// // //           </div>

// // //           <div className="flex flex-col items-center gap-4">
// // //             <button
// // //               type="submit"
// // //               className="w-full sm:w-auto min-w-[120px] sm:min-w-[150px] py-2.5 sm:py-3 px-4 rounded-md text-white bg-red-500 hover:bg-red-600 transition-all duration-200 font-medium text-sm sm:text-base"
// // //               onClick={nextStep}
// // //             >
// // //               Next
// // //             </button>
// // //             <button
// // //               type="button"
// // //               onClick={prevStep}
// // //               className="font-bold text-sm sm:text-base text-gray-500 hover:text-gray-700 transition-colors duration-200 py-2 px-4"
// // //             >
// // //               ← Previous
// // //             </button>
// // //           </div>
// // //         </form>
// // //       )}

// // //       {step === 3 && (
// // //         <div className="flex flex-col h-full justify-between gap-5 sm:gap-6">
// // //           <div className="flex flex-col gap-2">
// // //             <span className="font-bold text-base sm:text-lg text-gray-800">
// // //               Choose a date and time for this appointment
// // //             </span>
// // //             <span className="text-xs sm:text-sm text-gray-500">
// // //               You can choose an available date and time for this appointment
// // //             </span>
// // //           </div>

// // //           <div className="flex flex-col lg:flex-row items-start gap-5 sm:gap-6 lg:gap-8 xl:gap-10">
// // //             <div className="w-full lg:w-auto flex justify-center">
// // //               <div className="transform scale-90 sm:scale-100 origin-top">
// // //                 <MyCalendar />
// // //               </div>
// // //             </div>

// // //             <div className="flex-1 w-full">
// // //               <div className="flex flex-col gap-3">
// // //                 <span className="text-sm font-semibold text-gray-700">
// // //                   Available Time Slots
// // //                 </span>
// // //                 <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
// // //                   {timeSlots.map((time, index) => (
// // //                     <button
// // //                       key={index}
// // //                       onClick={() => setSelectedTime(time)}
// // //                       className={`
// // //                         px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg border transition-all duration-200
// // //                         ${
// // //                           selectedTime === time
// // //                             ? "bg-green-500 text-white border-green-500 shadow-md"
// // //                             : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:bg-green-50"
// // //                         }
// // //                       `}
// // //                     >
// // //                       {time}
// // //                     </button>
// // //                   ))}
// // //                 </div>

// // //                 {selectedTime && (
// // //                   <div className="mt-3 p-2 sm:p-3 bg-green-50 rounded-lg border border-green-200">
// // //                     <span className="text-xs sm:text-sm text-green-700">
// // //                       ✓ Selected time: <strong>{selectedTime}</strong>
// // //                     </span>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="flex justify-center mt-4 pt-2 border-t border-gray-100">
// // //             <button
// // //               type="button"
// // //               // className="w-full sm:w-auto min-w-[120px] sm:min-w-[150px] py-2.5 sm:py-3 px-4 rounded-md text-white bg-green-500 hover:bg-green-600 transition-all duration-200 font-medium text-sm sm:text-base"
// // //               className="w-full py-2 rounded-md mx-auto text-white p-[20px] bg-red-500 transition"
// // //               onClick={handleDone}
// // //             >
// // //               Done
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </Fragment>
// // //   );
// // // };

// // // export default AppointmentModal;

// // import { Fragment, useState } from "react";
// // import SearchBox from "../../components/common/searchBox";
// // import Calendar from "react-calendar";
// // import "react-calendar/dist/Calendar.css";
// // import MyCalendar from "../../components/common/calendar";

// // const AppointmentModal = ({ onClose }) => {
// //   const [step, setStep] = useState(1);
// //   const nextStep = () => setStep((prev) => prev + 1);
// //   const prevStep = () => setStep((prev) => prev - 1);

// //   const [value, setValue] = useState(new Date());
// //   const [selectedDate, setSelectedDate] = useState(null);
// //   const [selectedTime, setSelectedTime] = useState(null);

// //   // دسکتاپ: ۶ تا ساعت
// //   const desktopTimeSlots = [
// //     "8:00 AM",
// //     "8:30 AM",
// //     "9:00 AM",
// //     "9:30 AM",
// //     "10:00 AM",
// //     "10:30 AM",
// //   ];

// //   // موبایل: ۲۰ تا ساعت
// //   const mobileTimeSlots = [
// //     "8:00 AM",
// //     "8:30 AM",
// //     "9:00 AM",
// //     "9:30 AM",
// //     "10:00 AM",
// //     "10:30 AM",
// //     "11:00 AM",
// //     "11:30 AM",
// //     "12:00 PM",
// //     "12:30 PM",
// //     "1:00 PM",
// //     "1:30 PM",
// //     "2:00 PM",
// //     "2:30 PM",
// //     "3:00 PM",
// //     "3:30 PM",
// //     "4:00 PM",
// //     "4:30 PM",
// //     "5:00 PM",
// //     "5:30 PM",
// //   ];

// //   const handleDone = () => {
// //     if (onClose) {
// //       onClose();
// //     }
// //   };

// //   return (
// //     <Fragment>
// //       {/* ==================== STEP 1 ==================== */}
// //       {step === 1 && (
// //         <>
// //           {/* دسکتاپ - کد خودت */}
// //           <form className="hidden lg:flex h-full flex-col justify-between">
// //             <div className="flex flex-col gap-4">
// //               <div className="flex flex-col">
// //                 <span className="font-bold">
// //                   Add a patient to this appointment
// //                 </span>
// //                 <span className="text-[13px]">
// //                   You can search for an existing patient or add a new one
// //                 </span>
// //               </div>
// //               <SearchBox />
// //             </div>
// //             <button
// //               type="submit"
// //               className="w-50 py-2 rounded-md mx-auto text-white p-[20px] bg-red-500 transition"
// //               onClick={nextStep}
// //             >
// //               Next
// //             </button>
// //           </form>

// //           {/* موبایل - کد ریسپانسیو */}
// //           <form className="flex lg:hidden flex-col h-full justify-between gap-6">
// //             <div className="flex flex-col gap-4 sm:gap-5">
// //               <div className="flex flex-col gap-2">
// //                 <span className="font-bold text-base sm:text-lg text-gray-800">
// //                   Add a patient to this appointment
// //                 </span>
// //                 <span className="text-xs sm:text-sm text-gray-500">
// //                   You can search for an existing patient or add a new one
// //                 </span>
// //               </div>
// //               <SearchBox />
// //             </div>
// //             <div className="flex justify-center mt-4">
// //               <button
// //                 type="button"
// //                 className="w-full sm:w-auto min-w-[120px] sm:min-w-[150px] py-2.5 sm:py-3 px-4 rounded-md text-white bg-red-500 hover:bg-red-600 transition-all duration-200 font-medium text-sm sm:text-base"
// //                 onClick={nextStep}
// //               >
// //                 Next
// //               </button>
// //             </div>
// //           </form>
// //         </>
// //       )}

// //       {/* ==================== STEP 2 ==================== */}
// //       {step === 2 && (
// //         <>
// //           {/* دسکتاپ - کد خودت */}
// //           <form className="hidden lg:flex h-full flex-col justify-between">
// //             <div className="flex flex-col gap-4">
// //               <div className="flex flex-col">
// //                 <span className="font-bold">
// //                   Add a doctor to this appointment
// //                 </span>
// //                 <span className="text-[13px]">
// //                   You can search through your doctors
// //                 </span>
// //               </div>
// //               <SearchBox />
// //             </div>
// //             <div className="flex flex-col items-center gap-5">
// //               <button
// //                 type="submit"
// //                 className="w-50 py-2 rounded-md mx-auto text-white p-[20px] bg-red-500 transition"
// //                 onClick={nextStep}
// //               >
// //                 Next
// //               </button>
// //               <span className="font-bold" onClick={prevStep}>
// //                 Previous
// //               </span>
// //             </div>
// //           </form>

// //           {/* موبایل - کد ریسپانسیو */}
// //           <form className="flex lg:hidden flex-col h-full justify-between gap-6">
// //             <div className="flex flex-col gap-4 sm:gap-5">
// //               <div className="flex flex-col gap-2">
// //                 <span className="font-bold text-base sm:text-lg text-gray-800">
// //                   Add a doctor to this appointment
// //                 </span>
// //                 <span className="text-xs sm:text-sm text-gray-500">
// //                   You can search through your doctors
// //                 </span>
// //               </div>
// //               <SearchBox />
// //             </div>
// //             <div className="flex flex-col items-center gap-4">
// //               <button
// //                 type="button"
// //                 className="w-full sm:w-auto min-w-[120px] sm:min-w-[150px] py-2.5 sm:py-3 px-4 rounded-md text-white bg-red-500 hover:bg-red-600 transition-all duration-200 font-medium text-sm sm:text-base"
// //                 onClick={nextStep}
// //               >
// //                 Next
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={prevStep}
// //                 className="font-bold text-sm sm:text-base text-gray-500 hover:text-gray-700 transition-colors duration-200 py-2 px-4"
// //               >
// //                 ← Previous
// //               </button>
// //             </div>
// //           </form>
// //         </>
// //       )}

// //       {/* ==================== STEP 3 ==================== */}
// //       {step === 3 && (
// //         <>
// //           {/* دسکتاپ - کد خودت (بدون هیچ تغییری) */}
// //           <div className="hidden lg:flex h-full flex-col justify-around">
// //             <div className="flex flex-col gap-4">
// //               <div className="flex flex-col">
// //                 <span className="font-bold">
// //                   Choose a date and time for this appointment
// //                 </span>
// //                 <span className="text-[13px]">
// //                   You can choose an available date and time for this appointment
// //                 </span>
// //               </div>
// //             </div>
// //             <div className="flex flex-row items-center m-0 gap-20">
// //               <MyCalendar />
// //               <div className="flex-1">
// //                 <div className="flex flex-wrap gap-2">
// //                   {desktopTimeSlots.map((time, index) => (
// //                     <button
// //                       key={index}
// //                       onClick={() => setSelectedTime(time)}
// //                       className={`
// //                         flex-1 min-w-[calc(33.333%-8px)] px-3 py-1.5 text-xs rounded-md border transition-all whitespace-nowrap
// //                         ${
// //                           selectedTime === time
// //                             ? "bg-green-500 text-white border-green-500"
// //                             : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:bg-green-50"
// //                         }
// //                       `}
// //                     >
// //                       {time}
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //             <button
// //               type="button"
// //               className="w-50 py-2 rounded-md mx-auto text-white p-[20px] bg-red-500 transition"
// //               onClick={handleDone}
// //             >
// //               Done
// //             </button>
// //           </div>

// //           {/* موبایل - کد ریسپانسیو */}
// //           <div className="flex lg:hidden flex-col h-full justify-between gap-5 sm:gap-6">
// //             <div className="flex flex-col gap-2">
// //               <span className="font-bold text-base sm:text-lg text-gray-800">
// //                 Choose a date and time for this appointment
// //               </span>
// //               <span className="text-xs sm:text-sm text-gray-500">
// //                 You can choose an available date and time for this appointment
// //               </span>
// //             </div>

// //             <div className="flex flex-col lg:flex-row items-start gap-5 sm:gap-6 lg:gap-8 xl:gap-10">
// //               <div className="w-full lg:w-auto flex justify-center">
// //                 <div className="transform scale-90 sm:scale-100 origin-top">
// //                   <MyCalendar />
// //                 </div>
// //               </div>

// //               <div className="flex-1 w-full">
// //                 <div className="flex flex-col gap-3">
// //                   <span className="text-sm font-semibold text-gray-700">
// //                     Available Time Slots
// //                   </span>
// //                   <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
// //                     {mobileTimeSlots.map((time, index) => (
// //                       <button
// //                         key={index}
// //                         onClick={() => setSelectedTime(time)}
// //                         className={`
// //                           px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg border transition-all duration-200
// //                           ${
// //                             selectedTime === time
// //                               ? "bg-green-500 text-white border-green-500 shadow-md"
// //                               : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:bg-green-50"
// //                           }
// //                         `}
// //                       >
// //                         {time}
// //                       </button>
// //                     ))}
// //                   </div>
// //                   {selectedTime && (
// //                     <div className="mt-3 p-2 sm:p-3 bg-green-50 rounded-lg border border-green-200">
// //                       <span className="text-xs sm:text-sm text-green-700">
// //                         ✓ Selected time: <strong>{selectedTime}</strong>
// //                       </span>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="flex justify-center mt-4 pt-2 border-t border-gray-100">
// //               <button
// //                 type="button"
// //                 className="w-full sm:w-auto min-w-[120px] sm:min-w-[150px] py-2.5 sm:py-3 px-4 rounded-md text-white bg-green-500 hover:bg-green-600 transition-all duration-200 font-medium text-sm sm:text-base"
// //                 onClick={handleDone}
// //               >
// //                 Done
// //               </button>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </Fragment>
// //   );
// // };

// // export default AppointmentModal;

// import { Fragment, useState } from "react";
// import SearchBox from "../../components/common/searchBox";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import MyCalendar from "../../components/common/calendar";

// const AppointmentModal = ({ onClose }) => {
//   const [step, setStep] = useState(1);
//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   const [value, setValue] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);

//   // دسکتاپ: ۶ تا ساعت (همون کد خودت)
//   const desktopTimeSlots = [
//     "8:00 AM",
//     "8:30 AM",
//     "9:00 AM",
//     "9:30 AM",
//     "10:00 AM",
//     "10:30 AM",
//   ];

//   // موبایل: ۲۰ تا ساعت
//   const mobileTimeSlots = [
//     "8:00 AM",
//     "8:30 AM",
//     "9:00 AM",
//     "9:30 AM",
//     "10:00 AM",
//     "10:30 AM",
//     "11:00 AM",
//     "11:30 AM",
//     "12:00 PM",
//     "12:30 PM",
//     "1:00 PM",
//     "1:30 PM",
//     "2:00 PM",
//     "2:30 PM",
//     "3:00 PM",
//     "3:30 PM",
//     "4:00 PM",
//     "4:30 PM",
//     "5:00 PM",
//     "5:30 PM",
//   ];

//   const handleDone = () => {
//     if (onClose) {
//       onClose();
//     }
//   };

//   return (
//     <Fragment>
//       {/* ==================== STEP 1 ==================== */}
//       {step === 1 && (
//         <>
//           {/* دسکتاپ - کد خودت */}
//           <form className="hidden lg:flex h-full flex-col justify-between">
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-col">
//                 <span className="font-bold">
//                   Add a patient to this appointment
//                 </span>
//                 <span className="text-[13px]">
//                   You can search for an existing patient or add a new one
//                 </span>
//               </div>
//               <SearchBox />
//             </div>
//             <button
//               type="submit"
//               className="w-50 py-2 rounded-md mx-auto text-white p-[20px] bg-red-500 transition"
//               onClick={nextStep}
//             >
//               Next
//             </button>
//           </form>

//           {/* موبایل - کد ریسپانسیو */}
//           <form className="flex lg:hidden flex-col h-full justify-between gap-6">
//             <div className="flex flex-col gap-4 sm:gap-5">
//               <div className="flex flex-col gap-2">
//                 <span className="font-bold text-base sm:text-lg text-gray-800">
//                   Add a patient to this appointment
//                 </span>
//                 <span className="text-xs sm:text-sm text-gray-500">
//                   You can search for an existing patient or add a new one
//                 </span>
//               </div>
//               <SearchBox />
//             </div>
//             <div className="flex justify-center mt-4">
//               <button
//                 type="button"
//                 className="w-full sm:w-auto min-w-[120px] sm:min-w-[150px] py-2.5 sm:py-3 px-4 rounded-md text-white bg-red-500 hover:bg-red-600 transition-all duration-200 font-medium text-sm sm:text-base"
//                 onClick={nextStep}
//               >
//                 Next
//               </button>
//             </div>
//           </form>
//         </>
//       )}

//       {/* ==================== STEP 2 ==================== */}
//       {step === 2 && (
//         <>
//           {/* دسکتاپ - کد خودت */}
//           <form className="hidden lg:flex h-full flex-col justify-between">
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-col">
//                 <span className="font-bold">
//                   Add a doctor to this appointment
//                 </span>
//                 <span className="text-[13px]">
//                   You can search through your doctors
//                 </span>
//               </div>
//               <SearchBox />
//             </div>
//             <div className="flex flex-col items-center gap-5">
//               <button
//                 type="submit"
//                 className="w-50 py-2 rounded-md mx-auto text-white p-[20px] bg-red-500 transition"
//                 onClick={nextStep}
//               >
//                 Next
//               </button>
//               <span className="font-bold" onClick={prevStep}>
//                 Previous
//               </span>
//             </div>
//           </form>

//           {/* موبایل - کد ریسپانسیو */}
//           <form className="flex lg:hidden flex-col h-full justify-between gap-6">
//             <div className="flex flex-col gap-4 sm:gap-5">
//               <div className="flex flex-col gap-2">
//                 <span className="font-bold text-base sm:text-lg text-gray-800">
//                   Add a doctor to this appointment
//                 </span>
//                 <span className="text-xs sm:text-sm text-gray-500">
//                   You can search through your doctors
//                 </span>
//               </div>
//               <SearchBox />
//             </div>
//             <div className="flex flex-col items-center gap-4">
//               <button
//                 type="button"
//                 className="w-full sm:w-auto min-w-[120px] sm:min-w-[150px] py-2.5 sm:py-3 px-4 rounded-md text-white bg-red-500 hover:bg-red-600 transition-all duration-200 font-medium text-sm sm:text-base"
//                 onClick={nextStep}
//               >
//                 Next
//               </button>
//               <button
//                 type="button"
//                 onClick={prevStep}
//                 className="font-bold text-sm sm:text-base text-gray-500 hover:text-gray-700 transition-colors duration-200 py-2 px-4"
//               >
//                 ← Previous
//               </button>
//             </div>
//           </form>
//         </>
//       )}

//       {/* ==================== STEP 3 ==================== */}
//       {step === 3 && (
//         <>
//           {/* دسکتاپ - کد خودت (بدون هیچ تغییری) */}
//           <div className="hidden lg:flex h-full flex-col justify-around">
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-col">
//                 <span className="font-bold">
//                   Choose a date and time for this appointment
//                 </span>
//                 <span className="text-[13px]">
//                   You can choose an available date and time for this appointment
//                 </span>
//               </div>
//             </div>
//             <div className="flex flex-row items-center m-0 gap-20">
//               <MyCalendar />
//               <div className="flex-1">
//                 <div className="flex flex-wrap gap-2">
//                   {desktopTimeSlots.map((time, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedTime(time)}
//                       className={`
//                         flex-1 min-w-[calc(33.333%-8px)] px-3 py-1.5 text-xs rounded-md border transition-all whitespace-nowrap
//                         ${
//                           selectedTime === time
//                             ? "bg-green-500 text-white border-green-500"
//                             : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:bg-green-50"
//                         }
//                       `}
//                     >
//                       {time}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <button
//               type="button"
//               className="w-50 py-2 rounded-md mx-auto text-white p-[20px] bg-red-500 transition"
//               onClick={handleDone}
//             >
//               Done
//             </button>
//           </div>

//           {/* موبایل - کد ریسپانسیو */}
//           <div className="flex lg:hidden flex-col h-full justify-between gap-5 sm:gap-6">
//             <div className="flex flex-col gap-2">
//               <span className="font-bold text-base sm:text-lg text-gray-800">
//                 Choose a date and time for this appointment
//               </span>
//               <span className="text-xs sm:text-sm text-gray-500">
//                 You can choose an available date and time for this appointment
//               </span>
//             </div>

//             <div className="flex flex-col lg:flex-row items-start gap-5 sm:gap-6">
//               <div className="w-full lg:w-auto flex justify-center">
//                 <MyCalendar />
//               </div>

//               <div className="flex-1 w-full">
//                 <div className="flex flex-col gap-3">
//                   <span className="text-sm font-semibold text-gray-700">
//                     Available Time Slots
//                   </span>
//                   <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
//                     {mobileTimeSlots.map((time, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setSelectedTime(time)}
//                         className={`
//                           px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg border transition-all duration-200
//                           ${
//                             selectedTime === time
//                               ? "bg-green-500 text-white border-green-500 shadow-md"
//                               : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:bg-green-50"
//                           }
//                         `}
//                       >
//                         {time}
//                       </button>
//                     ))}
//                   </div>
//                   {selectedTime && (
//                     <div className="mt-3 p-2 sm:p-3 bg-green-50 rounded-lg border border-green-200">
//                       <span className="text-xs sm:text-sm text-green-700">
//                         ✓ Selected time: <strong>{selectedTime}</strong>
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-center mt-4 pt-2 border-t border-gray-100">
//               <button
//                 type="button"
//                 className="w-full sm:w-auto min-w-[120px] sm:min-w-[150px] py-2.5 sm:py-3 px-4 rounded-md text-white bg-green-500 hover:bg-green-600 transition-all duration-200 font-medium text-sm sm:text-base"
//                 onClick={handleDone}
//               >
//                 Done
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </Fragment>
//   );
// };

// export default AppointmentModal;

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
        <>
          {/* دسکتاپ - کد خودت (بدون تغییر) */}
          <div className="hidden lg:flex h-full flex-col justify-around">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="font-bold">
                  Choose a date and time for this appointment
                </span>
                <span className="text-[13px]">
                  You can choose an available date and time for this appointment
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center m-0 gap-20">
              <MyCalendar />
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
            </div>
            <button
              type="button"
              className="w-50 py-2 rounded-md mx-auto text-white p-[20px] bg-red-500 transition"
              onClick={handleDone}
            >
              Done
            </button>
          </div>

          {/* موبایل - نسخه عمودی و ریسپانسیو */}
          <div className="flex lg:hidden h-full flex-col justify-between gap-5">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-base">
                Choose a date and time for this appointment
              </span>
              <span className="text-[13px] text-gray-500">
                You can choose an available date and time for this appointment
              </span>
            </div>

            <div className="flex flex-col items-center gap-6">
              <MyCalendar />
              <div className="w-full">
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        flex-1 min-w-[calc(33.333%-8px)] px-3 py-1.5 text-xs rounded-md border transition-all
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
            </div>

            <button
              type="button"
              className="w-50 py-2 rounded-md mx-auto text-white p-[20px] bg-red-500 transition"
              onClick={handleDone}
            >
              Done
            </button>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default AppointmentModal;
