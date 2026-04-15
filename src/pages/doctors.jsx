// import Appoinments_list from "../components/common/appoinments_list";
import { useEffect, useState } from "react";
import Toolbox from "../components/common/toolBox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import { FILTER_OPTIONS } from "../constants";
import TableList from "../components/common/tabelList";
import { TABEL_HEADER } from "../constants";
import { DOCTORS_ITEMS } from "../constants/database";
import DoctorsModal from "./modals/doctorsModal";

const DOCTORS_FILTER_OPTIONS = [
  FILTER_OPTIONS.spec,
  FILTER_OPTIONS.date,
  FILTER_OPTIONS.status2,
];

const DOCTORS_TABEL_HEADER = [
  TABEL_HEADER.name,
  TABEL_HEADER.phone,
  TABEL_HEADER.spec,
  TABEL_HEADER.joinDate,
  TABEL_HEADER.status,
  TABEL_HEADER.action,
];

const Doctors = () => {
  const [term, setTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    spec: "All",
    date: "",
    status: "All",
  });

  const SEARCHED_DOCTORS = DOCTORS_ITEMS.filter((appt) => {
    const name = appt.name?.toLowerCase() ?? "";
    const t = term.toLowerCase();
    return name.startsWith(t);
  })
    .filter(
      (p) => selectedFilters.spec === "All" || p.spec === selectedFilters.spec,
    )
    .filter(
      (p) =>
        selectedFilters.status === "All" || p.status === selectedFilters.status,
    )
    .filter((p) => !selectedFilters.date || p.date === selectedFilters.date);

  return (
    <Container>
      <Content
        modal={<DoctorsModal />}
        title="Doctor"
        buttonTitle="Add a Doctor"
        modalTitle="Request a Doctor"
      >
        <Toolbox
          term={term}
          onSearch={setTerm}
          onFilter={setSelectedFilters}
          selectedFilters={selectedFilters}
          filters={DOCTORS_FILTER_OPTIONS}
        />
        <TableList header={DOCTORS_TABEL_HEADER} body={SEARCHED_DOCTORS} />
      </Content>
    </Container>
  );
};

export default Doctors;
