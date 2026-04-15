// import Appoinments_list from "../components/common/appoinments_list";
import { useEffect, useState } from "react";
import Toolbox from "../components/common/toolBox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import { FILTER_OPTIONS } from "../constants";
import TableList from "../components/common/tabelList";
import { TABEL_HEADER } from "../constants";
import { STAFF_ITEMS } from "../constants/database";
import StaffModal from "./modals/staffModal";

const STAFF_FILTER_OPTIONS = [
  FILTER_OPTIONS.depart,
  FILTER_OPTIONS.date,
  FILTER_OPTIONS.status2,
];

const STAFF_TABEL_HEADER = [
  TABEL_HEADER.name,
  TABEL_HEADER.phone,
  TABEL_HEADER.depart,
  TABEL_HEADER.joinDate,
  TABEL_HEADER.status,
  TABEL_HEADER.action,
];

const Staff = () => {
  const [term, setTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    depart: "All",
    date: "",
    status: "All",
  });
  const SEARCHED_STAFF = STAFF_ITEMS.filter((appt) => {
    const name = appt.name?.toLowerCase() ?? "";
    const t = term.toLowerCase();
    return name.startsWith(t);
  })
    .filter(
      (p) =>
        selectedFilters.depart === "All" || p.depart === selectedFilters.depart,
    )
    .filter(
      (p) =>
        selectedFilters.status === "All" || p.status === selectedFilters.status,
    );
  return (
    <Container>
      <Content
        modal={<StaffModal />}
        title="Staff"
        buttonTitle="Add a Staff Member"
      >
        <Toolbox
          term={term}
          onSearch={setTerm}
          onFilter={setSelectedFilters}
          selectedFilters={selectedFilters}
          filters={STAFF_FILTER_OPTIONS}
        />
        <TableList header={STAFF_TABEL_HEADER} body={SEARCHED_STAFF} />
      </Content>
    </Container>
  );
};

export default Staff;
