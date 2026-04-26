// // // // import { useState } from "react";
// // // // import React from "react";
// // // // import Modal from "react-modal";

// // // // Modal.setAppElement("#root");

// // // // const Content = ({ children, title, buttonTitle, modal, modalTitle }) => {
// // // //   const [modalIsOpen, setIsModalOpen] = useState(false);

// // // //   const openModal = () => {
// // // //     setIsModalOpen(true);
// // // //   };
// // // //   const closeModal = () => {
// // // //     setIsModalOpen(false);
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 md:p-5">
// // // //       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
// // // //         <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
// // // //           {title}
// // // //         </h3>
// // // //         {buttonTitle && (
// // // //           <button
// // // //             onClick={openModal}
// // // //             className="flex items-center justify-center text-white px-4 sm:px-5 py-2 sm:py-2.5 bg-red-500 hover:bg-red-600 rounded-[10px] cursor-pointer transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
// // // //           >
// // // //             {buttonTitle}
// // // //           </button>
// // // //         )}
// // // //       </div>

// // // //       {children}
// // // //       <Modal
// // // //         className="absolute outline-none bg-white rounded-2xl shadow-2xl overflow-y-auto"
// // // //         style={{
// // // //           overlay: {
// // // //             backgroundColor: "rgba(0, 0, 0, 0.5)",
// // // //             display: "flex",
// // // //             alignItems: "center",
// // // //             justifyContent: "center",
// // // //             zIndex: 1000,
// // // //           },
// // // //           content: {
// // // //             position: "relative",
// // // //             inset: "auto",
// // // //             width: "90%",
// // // //             maxWidth: "500px",
// // // //             height: "auto",
// // // //             maxHeight: "85vh",
// // // //             padding: "20px",
// // // //             margin: "0 auto",
// // // //             borderRadius: "20px",
// // // //           },
// // // //         }}
// // // //         isOpen={modalIsOpen}
// // // //         onRequestClose={closeModal}
// // // //       >
// // // //         <div className="flex items-center justify-between pb-4 border-b border-gray-200">
// // // //           <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
// // // //             {modalTitle}
// // // //           </p>
// // // //           <button
// // // //             className="font-bold cursor-pointer text-gray-400 hover:text-gray-600 text-2xl sm:text-3xl transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
// // // //             onClick={closeModal}
// // // //           >
// // // //             &times;
// // // //           </button>
// // // //         </div>

// // // //         <div className="pt-4">
// // // //           {typeof modal === "function"
// // // //             ? modal(closeModal)
// // // //             : modal && React.cloneElement(modal, { onClose: closeModal })}
// // // //         </div>
// // // //       </Modal>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Content;

// // // import { useState } from "react";
// // // import React from "react";
// // // import Modal from "react-modal";

// // // Modal.setAppElement("#root");

// // // const Content = ({ children, title, buttonTitle, modal, modalTitle }) => {
// // //   const [modalIsOpen, setIsModalOpen] = useState(false);

// // //   const openModal = () => {
// // //     setIsModalOpen(true);
// // //   };
// // //   const closeModal = () => {
// // //     setIsModalOpen(false);
// // //   };

// // //   return (
// // //     <div className="flex flex-col gap-2 p-4">
// // //       <div className="flex flex-col sm:flex-row justify-between items-center h-16">
// // //         <h3>{title}</h3>
// // //         {buttonTitle && (
// // //           <button
// // //             onClick={openModal}
// // //             className="flex items-center justify-center text-white p-[20px] bg-red-500 w-fit h-1/2 rounded-[10px] cursor-pointer"
// // //           >
// // //             {buttonTitle}
// // //           </button>
// // //         )}
// // //       </div>
// // //       {children}
// // //       <Modal
// // //         className="absolute inset-[40px] rounded-[30px] bg-white shadow-2xl p-[40px] m-auto w-[50%] h-[75%] outline-none"
// // //         isOpen={modalIsOpen}
// // //         onRequestClose={closeModal}
// // //       >
// // //         <div className="flex flex-col justify-space ">
// // //           <div className="flex items-center justify-between">
// // //             <p className="text-2xl font-bold">{modalTitle}</p>
// // //             <button
// // //               className="font-bold cursor-pointer text-gray-500 text-2xl"
// // //               onClick={closeModal}
// // //             >
// // //               &times;
// // //             </button>
// // //           </div>
// // //         </div>
// // //         {typeof modal === "function"
// // //           ? modal(closeModal)
// // //           : modal && React.cloneElement(modal, { onClose: closeModal })}
// // //       </Modal>
// // //     </div>
// // //   );
// // // };

// // // export default Content;

// // import { useState } from "react";
// // import React from "react";
// // import Modal from "react-modal";

// // Modal.setAppElement("#root");

// // const Content = ({ children, title, buttonTitle, modal, modalTitle }) => {
// //   const [modalIsOpen, setIsModalOpen] = useState(false);

// //   const openModal = () => {
// //     setIsModalOpen(true);
// //   };
// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <div className="flex flex-col gap-2 p-4">
// //       <div className="flex flex-col sm:flex-row justify-between items-center h-16">
// //         <h3>{title}</h3>
// //         {buttonTitle && (
// //           <button
// //             onClick={openModal}
// //             className="flex items-center justify-center text-white p-[20px] bg-red-500 w-fit h-1/2 rounded-[10px] cursor-pointer"
// //           >
// //             {buttonTitle}
// //           </button>
// //         )}
// //       </div>
// //       {children}

// //       {/* مودال با استایل‌های ریسپانسیو */}
// //       <Modal
// //         className="absolute outline-none bg-white shadow-2xl overflow-y-auto"
// //         style={{
// //           overlay: {
// //             backgroundColor: "rgba(0, 0, 0, 0.5)",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             zIndex: 1000,
// //           },
// //           content: {
// //             position: "relative",
// //             inset: "auto",
// //             margin: "0 auto",
// //             borderRadius: "20px",
// //           },
// //         }}
// //         isOpen={modalIsOpen}
// //         onRequestClose={closeModal}
// //       >
// //         {/* استایل‌های شرطی برای موبایل با استفاده از کلاس‌های CSS */}
// //         <div
// //           className="lg:rounded-[30px] lg:p-[40px] lg:w-[50%] lg:h-[75%] lg:inset-[40px] lg:relative lg:m-auto
// //                         fixed inset-0 rounded-none p-4 w-full h-full"
// //         >
// //           <div className="flex flex-col h-full">
// //             <div className="flex items-center justify-between pb-4 border-b border-gray-200">
// //               <p className="text-2xl font-bold">{modalTitle}</p>
// //               <button
// //                 className="font-bold cursor-pointer text-gray-500 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
// //                 onClick={closeModal}
// //               >
// //                 &times;
// //               </button>
// //             </div>
// //             <div className="flex-1 overflow-y-auto pt-4">
// //               {typeof modal === "function"
// //                 ? modal(closeModal)
// //                 : modal && React.cloneElement(modal, { onClose: closeModal })}
// //             </div>
// //           </div>
// //         </div>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default Content;

// import { useState } from "react";
// import React from "react";
// import Modal from "react-modal";

// Modal.setAppElement("#root");

// const Content = ({ children, title, buttonTitle, modal, modalTitle }) => {
//   const [modalIsOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="flex flex-col gap-2 p-4">
//       <div className="flex flex-col sm:flex-row justify-between items-center h-16">
//         <h3>{title}</h3>
//         {buttonTitle && (
//           <button
//             onClick={openModal}
//             className="flex items-center justify-center text-white p-[20px] bg-red-500 w-fit h-1/2 rounded-[10px] cursor-pointer"
//           >
//             {buttonTitle}
//           </button>
//         )}
//       </div>
//       {children}
//       <Modal
//         className="absolute inset-[40px] rounded-[30px] bg-white shadow-2xl p-[40px] m-auto w-[50%] h-[75%] outline-none lg:inset-[40px] lg:rounded-[30px] lg:p-[40px] lg:w-[50%] lg:h-[75%] lg:m-auto
//                    max-lg:!inset-0 max-lg:!rounded-none max-lg:!p-4 max-lg:!w-full max-lg:!h-full max-lg:!m-0"
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//       >
//         <div className="flex flex-col h-full">
//           <div className="flex items-center justify-between">
//             <p className="text-2xl font-bold">{modalTitle}</p>
//             <button
//               className="font-bold cursor-pointer text-gray-500 text-2xl"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//           </div>
//           <div className="flex-1 overflow-y-auto mt-4">
//             {typeof modal === "function"
//               ? modal(closeModal)
//               : modal && React.cloneElement(modal, { onClose: closeModal })}
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Content;

import { useState } from "react";
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Content = ({ children, title, buttonTitle, modal, modalTitle }) => {
  const [modalIsOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center h-16">
        <h3>{title}</h3>
        {buttonTitle && (
          <button
            onClick={openModal}
            className="flex items-center justify-center text-white p-[20px] bg-red-500 w-fit h-1/2 rounded-[10px] cursor-pointer"
          >
            {buttonTitle}
          </button>
        )}
      </div>
      {children}
      <Modal
        className="absolute inset-[40px] rounded-[30px] bg-white shadow-2xl p-[40px] m-auto w-[50%] h-[75%] outline-none
                   max-lg:!inset-[20px] max-lg:!rounded-[20px] max-lg:!p-4 max-lg:!w-auto max-lg:!h-auto max-lg:!m-0"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">{modalTitle}</p>
            <button
              className="font-bold cursor-pointer text-gray-500 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
          <div className="flex-1 overflow-y-auto mt-4">
            {typeof modal === "function"
              ? modal(closeModal)
              : modal && React.cloneElement(modal, { onClose: closeModal })}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Content;
