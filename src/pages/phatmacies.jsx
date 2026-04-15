// import Appoinments_list from "../components/common/appoinments_list";
import { useEffect, useState } from "react";
import Toolbox from "../components/common/toolBox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import TableList from "../components/common/tabelList";
import { FILTER_OPTIONS, TABEL_HEADER } from "../constants";
import { PHARMACIES_ITEMS } from "../constants/database";
import PhatmaciesModal from "./modals/phatmaciesModal";

const PHARMACIES_FILTER_OPTIONS = [FILTER_OPTIONS.branch, FILTER_OPTIONS.wh];

const PHARMACIES_TABEL_HEADER = [
  TABEL_HEADER.pharmacy,
  TABEL_HEADER.phone,
  TABEL_HEADER.branch,
  TABEL_HEADER.wh,
  TABEL_HEADER.action,
];

const Phatmacies = () => {
  const [term, setTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    branch: "All",
    wh: "",
  });
  const SEARCHED_PHARMACIES = PHARMACIES_ITEMS.filter((appt) => {
    const pharmacy = appt.pharmacyName?.toLowerCase() ?? "";
    const branch = appt.branch?.toLowerCase() ?? "";
    const t = term.toLowerCase();
    return pharmacy.startsWith(t) || branch.startsWith(t);
  }).filter(
    (p) =>
      selectedFilters.branch === "All" || p.branch === selectedFilters.branch,
  );
  return (
    <Container>
      <Content
        modal={<PhatmaciesModal />}
        title="Phatmacies"
        buttonTitle="Add a Pharmacies"
      >
        <Toolbox
          term={term}
          onSearch={setTerm}
          onFilter={setSelectedFilters}
          selectedFilters={selectedFilters}
          filters={PHARMACIES_FILTER_OPTIONS}
        />
        <TableList
          header={PHARMACIES_TABEL_HEADER}
          body={SEARCHED_PHARMACIES}
        />
      </Content>
    </Container>
  );
};

export default Phatmacies;
