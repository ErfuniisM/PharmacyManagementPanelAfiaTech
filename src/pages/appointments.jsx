import { useEffect, useState } from "react";
// dayjs
import dayjs from "dayjs";
// customParseFormat
import customParseFormat from "dayjs/plugin/customParseFormat";
import TabelList from "../components/common/tabelList";
import Toolbox from "../components/common/toolBox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import { FILTER_OPTIONS, TABEL_HEADER } from "../constants";
import AppointmentModal from "./modals/appointmentModal";

// Custom Date Formater
dayjs.extend(customParseFormat);

//  Date Format Converter
const convertToISODate = (dateString) => {
  if (!dateString) return "";
  const parsed = dayjs(dateString, "ddd, D MMM YYYY");
  return parsed.isValid() ? parsed.format("YYYY-MM-DD") : "";
};

const APPOINTNET_FILTER_OPTIONS = [
  FILTER_OPTIONS.date,
  FILTER_OPTIONS.time,
  FILTER_OPTIONS.status,
];
const APPOINTNET_TABEL_HEADER = [
  TABEL_HEADER.national,
  TABEL_HEADER.patient,
  TABEL_HEADER.doctor,
  TABEL_HEADER.date,
  TABEL_HEADER.time,
  TABEL_HEADER.status,
  TABEL_HEADER.action,
];

const Appointments = () => {
  const [term, setTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    date: "",
    time: "",
    status: "All",
  });
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/appointments`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setAppointments(data);
        setLoading(false);
      });
  }, []);

  const SEARCHED_APPOINTMENTS = appointments
    .filter((appt) => {
      const patient = appt.patient?.toLowerCase() ?? "";
      const t = term.toLowerCase();
      return patient.startsWith(t) || appt.national.toString().startsWith(term);
    })
    .filter(
      (p) =>
        selectedFilters.status === "All" || p.status === selectedFilters.status,
    )
    .filter((p) => {
      if (!selectedFilters.date) return true;
      const visitDate = convertToISODate(p.date); // ✅ درست: استفاده از p.date
      return visitDate === selectedFilters.date;
    });

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <Container>
      <Content
        modal={<AppointmentModal />}
        title="Appointments"
        buttonTitle="Add an Appointment"
        modalTitle="Appointment Modal"
      >
        <Toolbox
          term={term}
          onSearch={setTerm}
          onFilter={setSelectedFilters}
          onReset={() =>
            setSelectedFilters({
              date: "",
              time: "",
              status: "All",
            })
          }
          selectedFilters={selectedFilters}
          filters={APPOINTNET_FILTER_OPTIONS}
        />
        <TabelList
          header={APPOINTNET_TABEL_HEADER}
          body={SEARCHED_APPOINTMENTS}
        />
      </Content>
    </Container>
  );
};

export default Appointments;
