// import Appoinments_list from "../components/common/appoinments_list";
import { useEffect, useState } from "react";
import Toolbox from "../components/common/toolBox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import TableList from "../components/common/tabelList";
import { FILTER_OPTIONS, TABEL_HEADER } from "../constants";
import PatientsModal from "./modals/patientsModal";

const PATIENTS_FILTER_OPTIONS = [
  FILTER_OPTIONS.gender,
  FILTER_OPTIONS.date,
  FILTER_OPTIONS.ins,
];

const PATIENTS_TABEL_HEADER = [
  TABEL_HEADER.name,
  TABEL_HEADER.phone,
  TABEL_HEADER.national,
  TABEL_HEADER.lastVisit,
  TABEL_HEADER.gender,
  TABEL_HEADER.ins,
  TABEL_HEADER.action,
];

const Patients = () => {
  const [term, setTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    gender: "All",
    date: "",
    ins: "All",
  });

  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/patient`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPatients(data);
        setLoading(false);
      });
  }, []);
  const SEARCHED_PATIENTS = patients
    .filter((appt) => {
      const name = appt.name?.toLowerCase() ?? "";
      const t = term.toLowerCase();
      return name.startsWith(t) || appt.national.toString().startsWith(term);
    })
    .filter(
      (p) =>
        selectedFilters.gender === "All" || p.gender === selectedFilters.gender,
    )
    .filter(
      (p) => selectedFilters.ins === "All" || p.ins === selectedFilters.ins,
    );

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <Container>
      <Content
        modal={<PatientsModal />}
        title="Patients"
        buttonTitle="Add a Patients"
      >
        <Toolbox
          term={term}
          onSearch={setTerm}
          onFilter={setSelectedFilters}
          onReset={() =>
            setSelectedFilters({
              gender: "All",
              date: "",
              ins: "All",
            })
          }
          selectedFilters={selectedFilters}
          filters={PATIENTS_FILTER_OPTIONS}
        />
        <TableList header={PATIENTS_TABEL_HEADER} body={SEARCHED_PATIENTS} />
      </Content>
    </Container>
  );
};

export default Patients;
