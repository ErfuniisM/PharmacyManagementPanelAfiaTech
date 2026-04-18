// // Filter.jsx - نسخه نهایی با font-bold text-black برای همه

// import { useState, useRef, useEffect } from "react";
// import { FILTER_OPTIONS } from "../../constants";
// import Select from "react-dropdown-select";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import dayjs from "dayjs";

// // اضافه کردن استایل به head با استفاده از useEffect
// const addGlobalStyles = () => {
//   if (!document.getElementById("filter-styles")) {
//     const style = document.createElement("style");
//     style.id = "filter-styles";
//     style.textContent = `
//       /* استایل برای react-dropdown-select */
//       .filter-select .react-dropdown-select {
//         border: none !important;
//         background: transparent !important;
//         box-shadow: none !important;
//         min-width: 140px !important;
//         padding: 8px 12px !important;
//         font-weight: bold !important;
//         color: black !important;
//       }

//       .filter-select .react-dropdown-select-placeholder {
//         font-weight: bold !important;
//         color: black !important;
//       }

//       .filter-select .react-dropdown-select-input {
//         font-weight: bold !important;
//         color: black !important;
//       }

//       .filter-select .react-dropdown-select-dropdown-handle {
//         color: black !important;
//       }

//       .filter-select .react-dropdown-select-clear {
//         color: black !important;
//       }

//       .filter-select .react-dropdown-select-item {
//         font-weight: bold !important;
//         color: black !important;
//       }

//       .filter-select .react-dropdown-select-item.selected {
//         font-weight: bold !important;
//         color: black !important;
//         background-color: #e5e7eb !important;
//       }
//     `;
//     document.head.appendChild(style);
//   }
// };

// const Filter = ({ items, onFilter, onReset, selectedFilters }) => {
//   const [isDateOpen, setIsDateOpen] = useState(false);
//   const datePickerRef = useRef(null);

//   // اضافه کردن استایل ها
//   useEffect(() => {
//     addGlobalStyles();
//   }, []);

//   // بستن datepicker وقتی خارج از اون کلیک بشه
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         datePickerRef.current &&
//         !datePickerRef.current.contains(event.target)
//       ) {
//         setIsDateOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const getSelectOptions = (item) => {
//     const optionsMap = {
//       [FILTER_OPTIONS.gender]: [
//         { value: "All", label: "All Genders" },
//         { value: "Male", label: "Male" },
//         { value: "Female", label: "Female" },
//       ],
//       [FILTER_OPTIONS.status]: [
//         { value: "All", label: "All Status" },
//         { value: "Completed", label: "Completed" },
//         { value: "Pending", label: "Pending" },
//       ],
//       [FILTER_OPTIONS.status2]: [
//         { value: "All", label: "All Status" },
//         { value: "Active", label: "Active" },
//         { value: "Inactive", label: "Inactive" },
//       ],
//       [FILTER_OPTIONS.spec]: [
//         { value: "All", label: "All Specialties" },
//         { value: "Cardiology", label: "Cardiology" },
//         { value: "Dematology", label: "Dematology" },
//       ],
//       [FILTER_OPTIONS.depart]: [
//         { value: "All", label: "All Departments" },
//         { value: "Cardiology", label: "Cardiology" },
//         { value: "Dematology", label: "Dematology" },
//       ],
//       [FILTER_OPTIONS.ins]: [
//         { value: "All", label: "All Insurance" },
//         { value: "Covered", label: "Covered" },
//         { value: "Not Covered", label: "Not Covered" },
//       ],
//       [FILTER_OPTIONS.branch]: [
//         { value: "All", label: "All Branches" },
//         { value: "Riyadh", label: "Riyadh" },
//         { value: "Jeddah", label: "Jeddah" },
//         { value: "Median", label: "Median" },
//       ],
//     };
//     return optionsMap[item] || [{ value: "All", label: "All" }];
//   };

//   const getValue = (item) => {
//     const valueMap = {
//       [FILTER_OPTIONS.gender]: selectedFilters.gender,
//       [FILTER_OPTIONS.status]: selectedFilters.status,
//       [FILTER_OPTIONS.status2]: selectedFilters.status,
//       [FILTER_OPTIONS.spec]: selectedFilters.spec,
//       [FILTER_OPTIONS.depart]: selectedFilters.depart,
//       [FILTER_OPTIONS.ins]: selectedFilters.ins,
//       [FILTER_OPTIONS.branch]: selectedFilters.branch,
//     };
//     return valueMap[item] || "All";
//   };

//   const getOnChange = (item) => {
//     const changeMap = {
//       [FILTER_OPTIONS.gender]: (val) =>
//         onFilter((prev) => ({ ...prev, gender: val[0]?.value })),
//       [FILTER_OPTIONS.status]: (val) =>
//         onFilter((prev) => ({ ...prev, status: val[0]?.value })),
//       [FILTER_OPTIONS.status2]: (val) =>
//         onFilter((prev) => ({ ...prev, status: val[0]?.value })),
//       [FILTER_OPTIONS.spec]: (val) =>
//         onFilter((prev) => ({ ...prev, spec: val[0]?.value })),
//       [FILTER_OPTIONS.depart]: (val) =>
//         onFilter((prev) => ({ ...prev, depart: val[0]?.value })),
//       [FILTER_OPTIONS.ins]: (val) =>
//         onFilter((prev) => ({ ...prev, ins: val[0]?.value })),
//       [FILTER_OPTIONS.branch]: (val) =>
//         onFilter((prev) => ({ ...prev, branch: val[0]?.value })),
//     };
//     return changeMap[item] || (() => {});
//   };

//   const getDisplayDate = () => {
//     if (!selectedFilters.date) return "Select Date";
//     return selectedFilters.date;
//   };

//   const selectedDate = selectedFilters.date
//     ? new Date(selectedFilters.date)
//     : null;

//   const renderField = (item) => {
//     // فیلتر تاریخ
//     if (item === FILTER_OPTIONS.date) {
//       return (
//         <div className="relative" ref={datePickerRef}>
//           <button
//             onClick={() => setIsDateOpen(!isDateOpen)}
//             className="px-3 py-2 text-sm min-w-[140px] bg-transparent focus:outline-none text-left flex items-center justify-between font-bold text-black"
//           >
//             <span className="font-bold text-black">{getDisplayDate()}</span>
//             <svg
//               className={`w-4 h-4 ml-2 transition-transform font-bold text-black ${isDateOpen ? "rotate-180" : ""}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               style={{ stroke: "black" }}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </button>

//           {isDateOpen && (
//             <div className="absolute z-50 mt-1" style={{ left: 0 }}>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={(date) => {
//                   const formattedDate = date
//                     ? dayjs(date).format("YYYY-MM-DD")
//                     : "";
//                   onFilter((prev) => ({ ...prev, date: formattedDate }));
//                   setIsDateOpen(false);
//                 }}
//                 onClickOutside={() => setIsDateOpen(false)}
//                 open={isDateOpen}
//                 inline
//                 showYearDropdown
//                 showMonthDropdown
//                 dropdownMode="select"
//               />
//             </div>
//           )}
//         </div>
//       );
//     }

//     // فیلتر زمان
//     if (item === FILTER_OPTIONS.time) {
//       return (
//         <div className="relative">
//           <button
//             onClick={() => {}}
//             className="px-3 py-2 text-sm min-w-[140px] bg-transparent focus:outline-none text-left flex items-center justify-between font-bold text-black"
//           >
//             <span className="font-bold text-black">Select Time</span>
//             <svg
//               className="w-4 h-4 ml-2 font-bold text-black"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               style={{ stroke: "black" }}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </button>
//         </div>
//       );
//     }

//     // بقیه فیلترها با react-dropdown-select
//     if (
//       [
//         FILTER_OPTIONS.gender,
//         FILTER_OPTIONS.status,
//         FILTER_OPTIONS.status2,
//         FILTER_OPTIONS.spec,
//         FILTER_OPTIONS.depart,
//         FILTER_OPTIONS.ins,
//         FILTER_OPTIONS.branch,
//       ].includes(item)
//     ) {
//       const options = getSelectOptions(item);
//       const currentValue = getValue(item);
//       const selectedOption = options.find((opt) => opt.value === currentValue);

//       return (
//         <Select
//           options={options}
//           values={selectedOption ? [selectedOption] : []}
//           onChange={getOnChange(item)}
//           placeholder="Select..."
//           className="min-w-[140px] filter-select"
//           searchable={false}
//           clearable={false}
//           style={{
//             border: "none",
//             background: "transparent",
//             boxShadow: "none",
//           }}
//         />
//       );
//     }

//     return null;
//   };

//   return (
//     <div className="flex items-center justify-around shadow-sm text-black bg-white w-full rounded-[10px] p-3">
//       <div className="flex items-center">
//         <span className="font-bold text-black">Filter By</span>
//       </div>
//       <div className="flex items-center gap-3">
//         {items.map((item) => (
//           <div key={item}>{renderField(item)}</div>
//         ))}
//       </div>
//       <div className="flex items-center">
//         <button
//           onClick={onReset}
//           className="font-bold px-3 py-2 text-red-600 rounded-lg text-sm transition cursor-pointer hover:bg-red-50"
//         >
//           Reset Filter
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Filter;

// Filter.jsx - نسخه با dropdown سفارشی برای همه فیلترها

import { useState, useRef, useEffect } from "react";
import { FILTER_OPTIONS } from "../../constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

const Filter = ({ items, onFilter, onReset, selectedFilters }) => {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // برای مدیریت dropdown های مختلف
  const datePickerRef = useRef(null);
  const dropdownRefs = useRef({});

  // بستن dropdown ها وقتی خارج کلیک بشه
  useEffect(() => {
    const handleClickOutside = (event) => {
      // بستن datepicker
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setIsDateOpen(false);
      }
      // بستن سایر dropdown ها
      if (
        openDropdown &&
        !dropdownRefs.current[openDropdown]?.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const getSelectOptions = (item) => {
    const optionsMap = {
      [FILTER_OPTIONS.gender]: [
        { value: "All", label: "All Genders" },
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
      ],
      [FILTER_OPTIONS.status]: [
        { value: "All", label: "All Status" },
        { value: "Completed", label: "Completed" },
        { value: "Pending", label: "Pending" },
      ],
      [FILTER_OPTIONS.status2]: [
        { value: "All", label: "All Status" },
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" },
      ],
      [FILTER_OPTIONS.spec]: [
        { value: "All", label: "All Specialties" },
        { value: "Cardiology", label: "Cardiology" },
        { value: "Dematology", label: "Dematology" },
      ],
      [FILTER_OPTIONS.depart]: [
        { value: "All", label: "All Departments" },
        { value: "Cardiology", label: "Cardiology" },
        { value: "Dematology", label: "Dematology" },
      ],
      [FILTER_OPTIONS.ins]: [
        { value: "All", label: "All Insurance" },
        { value: "Covered", label: "Covered" },
        { value: "Not Covered", label: "Not Covered" },
      ],
      [FILTER_OPTIONS.branch]: [
        { value: "All", label: "All Branches" },
        { value: "Riyadh", label: "Riyadh" },
        { value: "Jeddah", label: "Jeddah" },
        { value: "Median", label: "Median" },
      ],
    };
    return optionsMap[item] || [{ value: "All", label: "All" }];
  };

  const getCurrentValue = (item) => {
    const valueMap = {
      [FILTER_OPTIONS.gender]: selectedFilters.gender,
      [FILTER_OPTIONS.status]: selectedFilters.status,
      [FILTER_OPTIONS.status2]: selectedFilters.status,
      [FILTER_OPTIONS.spec]: selectedFilters.spec,
      [FILTER_OPTIONS.depart]: selectedFilters.depart,
      [FILTER_OPTIONS.ins]: selectedFilters.ins,
      [FILTER_OPTIONS.branch]: selectedFilters.branch,
    };
    return valueMap[item] || "All";
  };

  const getDisplayLabel = (item) => {
    const options = getSelectOptions(item);
    const currentValue = getCurrentValue(item);
    const selected = options.find((opt) => opt.value === currentValue);
    return selected?.label || "Select...";
  };

  const handleSelectChange = (item, value) => {
    const changeMap = {
      [FILTER_OPTIONS.gender]: (val) =>
        onFilter((prev) => ({ ...prev, gender: val })),
      [FILTER_OPTIONS.status]: (val) =>
        onFilter((prev) => ({ ...prev, status: val })),
      [FILTER_OPTIONS.status2]: (val) =>
        onFilter((prev) => ({ ...prev, status: val })),
      [FILTER_OPTIONS.spec]: (val) =>
        onFilter((prev) => ({ ...prev, spec: val })),
      [FILTER_OPTIONS.depart]: (val) =>
        onFilter((prev) => ({ ...prev, depart: val })),
      [FILTER_OPTIONS.ins]: (val) =>
        onFilter((prev) => ({ ...prev, ins: val })),
      [FILTER_OPTIONS.branch]: (val) =>
        onFilter((prev) => ({ ...prev, branch: val })),
    };
    changeMap[item]?.(value);
    setOpenDropdown(null);
  };

  const getDisplayDate = () => {
    if (!selectedFilters.date) return "Select Date";
    return selectedFilters.date;
  };

  const selectedDate = selectedFilters.date
    ? new Date(selectedFilters.date)
    : null;

  const renderField = (item) => {
    // فیلتر تاریخ
    if (item === FILTER_OPTIONS.date) {
      return (
        <div className="relative" ref={datePickerRef}>
          <button
            onClick={() => setIsDateOpen(!isDateOpen)}
            className="px-3 py-2 text-sm min-w-[140px] bg-transparent focus:outline-none text-left flex items-center justify-between font-bold text-black"
          >
            <span className="font-bold text-black">{getDisplayDate()}</span>
            <svg
              className={`w-4 h-4 ml-2 transition-transform ${isDateOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDateOpen && (
            <div className="absolute z-50 mt-1" style={{ left: 0 }}>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  const formattedDate = date
                    ? dayjs(date).format("YYYY-MM-DD")
                    : "";
                  onFilter((prev) => ({ ...prev, date: formattedDate }));
                  setIsDateOpen(false);
                }}
                onClickOutside={() => setIsDateOpen(false)}
                open={isDateOpen}
                inline
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
              />
            </div>
          )}
        </div>
      );
    }

    // فیلتر زمان
    if (item === FILTER_OPTIONS.time) {
      return (
        <div className="relative">
          <button className="px-3 py-2 text-sm min-w-[140px] bg-transparent focus:outline-none text-left flex items-center justify-between font-bold text-black">
            <span className="font-bold text-black">Select Time</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      );
    }

    // سایر فیلترها (dropdown سفارشی)
    if (
      [
        FILTER_OPTIONS.gender,
        FILTER_OPTIONS.status,
        FILTER_OPTIONS.status2,
        FILTER_OPTIONS.spec,
        FILTER_OPTIONS.depart,
        FILTER_OPTIONS.ins,
        FILTER_OPTIONS.branch,
      ].includes(item)
    ) {
      const options = getSelectOptions(item);
      const displayLabel = getDisplayLabel(item);
      const isOpen = openDropdown === item;

      return (
        <div
          className="relative"
          ref={(el) => (dropdownRefs.current[item] = el)}
        >
          <button
            onClick={() => setOpenDropdown(isOpen ? null : item)}
            className="px-3 py-2 text-sm min-w-[140px] bg-transparent focus:outline-none text-left flex items-center justify-between font-bold text-black"
          >
            <span className="font-bold text-black">{displayLabel}</span>
            <svg
              className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute z-50 mt-1 bg-white border border-gray-200 rounded-md shadow-lg min-w-[160px]">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelectChange(item, opt.value)}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                    getCurrentValue(item) === opt.value
                      ? "bg-gray-100 font-bold"
                      : ""
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex items-center justify-around shadow-sm text-black bg-white w-full rounded-[10px] p-3">
      <div className="flex items-center">
        <span className="text-md font-semibold text-gray-700">Filter By</span>
      </div>
      <div className="flex items-center gap-3">
        {items.map((item) => (
          <div key={item}>{renderField(item)}</div>
        ))}
      </div>
      <div className="flex items-center">
        <button
          onClick={onReset}
          className="font-bold px-3 py-2 text-red-600 rounded-lg text-sm transition cursor-pointer hover:bg-red-50"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
